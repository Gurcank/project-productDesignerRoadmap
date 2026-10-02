/**
 * Client side of "Çevrimdışı için indir" (ADR-012).
 *
 * The build writes /offline-manifest.json; this reads it, hands the URL list to
 * the service worker, and remembers — in localStorage, separately from reading
 * progress — which build of which scope was downloaded, so the UI can say
 * "yeni sürüm var" instead of lying about being up to date.
 */

export interface OfflineManifest {
  build: string;
  generatedAt: string;
  shared: { url: string; bytes: number }[];
  categories: Record<string, { url: string; bytes: number }[]>;
}

export type Scope = "all" | string;

interface Stored {
  [scope: string]: { build: string; at: string };
}

const KEY = "pdr.offline.v1";

export function readStored(): Stored {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStored(scope: Scope, build: string) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...readStored(), [scope]: { build, at: new Date().toISOString() } }));
  } catch {
    // Private mode: the download still worked, we just cannot remember it.
  }
}

let manifestPromise: Promise<OfflineManifest | null> | null = null;

export function loadManifest(): Promise<OfflineManifest | null> {
  manifestPromise ??= fetch("/offline-manifest.json", { cache: "no-store" })
    .then((response) => (response.ok ? (response.json() as Promise<OfflineManifest>) : null))
    .catch(() => null);
  return manifestPromise;
}

export function plan(manifest: OfflineManifest, scope: Scope): { urls: string[]; bytes: number } {
  const lists =
    scope === "all" ? Object.values(manifest.categories) : manifest.categories[scope] ? [manifest.categories[scope]!] : [];
  const files = [...manifest.shared, ...lists.flat()];
  return { urls: files.map((file) => file.url), bytes: files.reduce((sum, file) => sum + file.bytes, 0) };
}

export function formatSize(bytes: number): string {
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(0)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export interface Progress {
  done: number;
  total: number;
  failed: number;
}

/** Resolves when the worker reports it is finished. */
export async function download(
  manifest: OfflineManifest,
  scope: Scope,
  onProgress: (progress: Progress) => void,
): Promise<Progress> {
  const registration = await navigator.serviceWorker.ready;
  const worker = registration.active;
  if (!worker) throw new Error("service worker yok");

  // Ask the browser not to evict what the reader chose to keep. Best effort.
  navigator.storage?.persist?.().catch(() => {});

  const { urls } = plan(manifest, scope);

  return new Promise((resolve) => {
    const listener = (event: MessageEvent) => {
      const data = event.data as { type?: string } & Progress;
      if (data?.type === "progress") onProgress(data);
      if (data?.type === "done") {
        navigator.serviceWorker.removeEventListener("message", listener);
        if (data.failed === 0) writeStored(scope, manifest.build);
        onProgress(data);
        resolve(data);
      }
    };
    navigator.serviceWorker.addEventListener("message", listener);
    worker.postMessage({ type: "download", urls });
  });
}

export function isSupported(): boolean {
  return "serviceWorker" in navigator && "caches" in window;
}
