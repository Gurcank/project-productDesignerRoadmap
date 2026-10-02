/**
 * Writes dist/offline-manifest.json (ADR-012, "Çevrimdışı için indir").
 *
 * Runs after Pagefind, because the search index is part of what a reader needs
 * offline and its chunk names only exist once it has run. Scanning dist rather
 * than listing routes means nothing can be forgotten: whatever the build
 * emitted is what gets offered.
 *
 * Shape: `shared` is everything a page needs to render and search (hashed
 * bundles, fonts, the search index, the non-category pages); each category adds
 * its own pages. Sizes are uncompressed bytes, so the number shown to the
 * reader is an upper bound on what is transferred.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");

// Category slugs come from the one source of truth, parsed rather than imported:
// categories.ts is not runnable here without the Astro virtual modules.
const categorySource = readFileSync(path.join(ROOT, "src/data/categories.ts"), "utf8");
const CATEGORY_SLUGS = new Set([...categorySource.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]!));

interface Entry {
  url: string;
  bytes: number;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const SKIP = new Set(["sw.js", "robots.txt", "offline-manifest.json"]);
const SKIP_SUFFIX = [".map", ".xml"];

const shared: Entry[] = [];
const categories: Record<string, Entry[]> = {};
const hash = createHash("sha1");

for (const file of walk(DIST).sort()) {
  const relative = path.relative(DIST, file).split(path.sep).join("/");
  if (SKIP.has(relative) || SKIP_SUFFIX.some((suffix) => relative.endsWith(suffix))) continue;

  const bytes = statSync(file).size;
  const isPage = relative.endsWith("/index.html") || relative === "index.html";
  const url = isPage ? `/${relative.replace(/index\.html$/, "")}` : `/${relative}`;
  if (url === "/404.html") continue;

  hash.update(`${url}:${bytes}\n`);

  const top = relative.split("/")[0]!;
  if (isPage && CATEGORY_SLUGS.has(top)) {
    (categories[top] ??= []).push({ url, bytes });
  } else {
    shared.push({ url, bytes });
  }
}

const manifest = {
  // Changes whenever any file's name or size changes, so the UI can say "new version".
  build: hash.digest("hex").slice(0, 12),
  generatedAt: new Date().toISOString(),
  shared,
  categories,
};

writeFileSync(path.join(DIST, "offline-manifest.json"), JSON.stringify(manifest));

const total = (list: Entry[]) => list.reduce((sum, item) => sum + item.bytes, 0);
const mb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const pages = Object.values(categories).reduce((sum, list) => sum + list.length, 0);
console.log(
  `offline-manifest: ${shared.length} ortak dosya (${mb(total(shared))}) · ${Object.keys(categories).length} kategori, ${pages} sayfa (${mb(
    Object.values(categories).reduce((sum, list) => sum + total(list), 0),
  )})`,
);
