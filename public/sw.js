/**
 * Offline reading (ADR-012).
 *
 * Strategy is stale-while-revalidate for pages and cache-first for static
 * assets. The site is a reference you read on a commute: a page you have opened
 * once must open again with no network, and a page you have not seen must fail
 * honestly rather than hang.
 *
 * The version string is what invalidates the cache — bump it when the shape of
 * what is cached changes, not on every deploy: a new build produces new hashed
 * asset URLs anyway, and old ones are swept below.
 */
const VERSION = "pdr-v5";
const PAGES = `${VERSION}-pages`;
const ASSETS = `${VERSION}-assets`;

// Enough to render something useful the very first time the network is gone.
const PRECACHE = ["/", "/offline/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

/*
 * Only cache-first what is safe to keep forever: a file whose name changes when
 * its content changes. Astro's /_astro/ bundles and Pagefind's index chunks
 * (tr_34d6b0d.pf_index) are hashed; pagefind-entry.json is not.
 *
 * Caching that entry file cost a real bug: it is the manifest listing which
 * index chunks exist, so a stale copy pointed at chunk names from an older
 * build. Pagefind then read a mismatched index and returned nonsense — "Social"
 * matching "sona". Anything unhashed goes to the network first.
 */
const isHashedAsset = (url) =>
  url.pathname.startsWith("/_astro/") ||
  /\.(?:pf_fragment|pf_index|pf_meta|woff2?|svg|png|jpg|webp)$/.test(url.pathname);

const isSearchRuntime = (url) => url.pathname.startsWith("/pagefind/");

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  /*
   * The search manifest and runtime: always ask the network, fall back to cache
   * so search still works on a plane. A fresh index must win whenever one is
   * reachable, because a half-stale index is worse than no search.
   */
  if (isSearchRuntime(url) && !isHashedAsset(url)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(ASSETS).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request, { ignoreVary: true, ignoreSearch: true })),
    );
    return;
  }

  // Hashed assets never change under the same URL, so the cached copy is always
  // correct and the network is only a fallback.
  if (isHashedAsset(url)) {
    event.respondWith(
      /*
       * ignoreVary: the static host answers "Vary: Origin". A file fetched by the
       * bulk download carries no Origin header, but a module script or a font asks
       * with one, so without this flag a downloaded file is a cache miss and the
       * page loads with no script and no fonts — only offline, only for files the
       * reader never opened by hand. ignoreSearch: Pagefind asks for its index files
       * with a cache-busting query string; the file itself is the same.
       */
      caches.match(request, { ignoreVary: true, ignoreSearch: true }).then(
        (hit) =>
          hit ??
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(ASSETS).then((cache) => cache.put(request, copy));
            }
            return response;
          }),
      ),
    );
    return;
  }

  // Pages: show the cached copy immediately, refresh it in the background.
  if (request.mode === "navigate") {
    event.respondWith(
      // ignoreSearch: "/ara/?q=dns" is the cached "/ara/" page; the query is read client-side.
      caches.match(request, { ignoreSearch: true }).then((hit) => {
        const network = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(PAGES).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => hit ?? caches.match("/offline/"));

        return hit ?? network;
      }),
    );
  }
});

/*
 * "Çevrimdışı için indir" (ADR-012). The page sends the list of URLs from
 * /offline-manifest.json; the worker fetches them and reports progress back.
 *
 * Pages go to the page cache, everything else to the asset cache — the same
 * split the fetch handler uses, so a downloaded file is found by the same
 * lookup that would have found it had it been opened by hand. Files that are
 * already cached and hashed are skipped: their name is their content.
 */
const CONCURRENCY = 6;

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== "download" || !Array.isArray(data.urls)) return;
  const client = event.source;
  event.waitUntil(downloadAll(data.urls, client));
});

async function downloadAll(urls, client) {
  const pages = await caches.open(PAGES);
  const assets = await caches.open(ASSETS);
  const total = urls.length;
  let done = 0;
  let failed = 0;
  let next = 0;

  const report = (type) => client && client.postMessage({ type, done, total, failed });

  async function one(url) {
    const isPage = url.endsWith("/");
    const target = isPage ? pages : assets;
    try {
      if (!isPage && isHashedAsset(new URL(url, self.location.origin)) && (await target.match(url))) return;
      const response = await fetch(url, { cache: "reload" });
      if (!response.ok) throw new Error(String(response.status));
      await target.put(url, response);
    } catch (error) {
      failed += 1;
    }
  }

  async function worker() {
    while (next < urls.length) {
      const url = urls[next++];
      await one(url);
      done += 1;
      if (done % 5 === 0 || done === total) report("progress");
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  report("done");
}
