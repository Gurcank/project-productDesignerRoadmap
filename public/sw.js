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
const VERSION = "pdr-v2";
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
        .catch(() => caches.match(request)),
    );
    return;
  }

  // Hashed assets never change under the same URL, so the cached copy is always
  // correct and the network is only a fallback.
  if (isHashedAsset(url)) {
    event.respondWith(
      caches.match(request).then(
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
      caches.match(request).then((hit) => {
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
