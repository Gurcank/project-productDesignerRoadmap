/**
 * Performance budget gate (SPEC §6, Faz 6).
 *
 * Measures what a visitor actually downloads for one page, gzipped, and exits
 * non-zero when it goes over. A budget nobody enforces is a wish, so this runs
 * in CI and breaks the build.
 *
 * Usage: npm run budget   (after npm run build)
 */
import { gzipSync } from "node:zlib";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");

/** SPEC §6: ≤60 KB JS on first load. The rest are guards against drift. */
const BUDGETS = {
  jsPerPage: 60 * 1024,
  cssPerPage: 60 * 1024,
  htmlPerPage: 250 * 1024,
};

const gzipped = (file: string) => gzipSync(readFileSync(file)).length;
const kb = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error("dist/ yok. Önce `npm run build` çalıştır.");
  process.exit(1);
}

const pages = walk(DIST).filter((file) => file.endsWith(".html"));
if (pages.length === 0) {
  console.error("dist/ içinde HTML yok.");
  process.exit(1);
}

interface PageWeight {
  page: string;
  html: number;
  js: number;
  css: number;
}

// Referenced assets are shared between pages, so each is measured once and
// attributed to every page that pulls it in — that is what the visitor pays.
const assetCache = new Map<string, number>();
const weightOf = (asset: string) => {
  if (!assetCache.has(asset)) assetCache.set(asset, gzipped(asset));
  return assetCache.get(asset)!;
};

/**
 * A module's cost includes everything it imports. Astro emits shared chunks
 * (the progress store pulls in Zod, 24.8 KB gzip) that no <script src> and no
 * modulepreload link ever names — counting only the HTML's own references
 * reported 6.6 KB for a page that actually ships four times that. A budget that
 * measures the wrong number is worse than none: it certifies the drift.
 */
const IMPORT_PATTERN = /(?:^|[\s;{}])(?:import|export)[\s\S]{0,200}?from\s*["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)|import\s*["']([^"']+)["']/g;

function moduleGraph(entry: string, seen = new Set<string>()): Set<string> {
  if (seen.has(entry) || !existsSync(entry)) return seen;
  seen.add(entry);

  const source = readFileSync(entry, "utf8");
  for (const match of source.matchAll(IMPORT_PATTERN)) {
    const specifier = match[1] ?? match[2] ?? match[3];
    if (!specifier) continue;
    // Only local chunks; a bare specifier would not have survived bundling.
    const resolved = specifier.startsWith("/")
      ? path.join(DIST, specifier)
      : path.resolve(path.dirname(entry), specifier);
    moduleGraph(resolved, seen);
  }
  return seen;
}

const weights: PageWeight[] = [];

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  let js = 0;
  let css = 0;

  // Inline scripts and styles ship with the HTML; count them where they land.
  for (const match of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    js += gzipSync(Buffer.from(match[1]!, "utf8")).length;
  }
  for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    css += gzipSync(Buffer.from(match[1]!, "utf8")).length;
  }

  // Each entry module is charged with its whole import graph, counted once.
  const jsModules = new Set<string>();
  for (const match of html.matchAll(/(?:src|href)="(\/[^"]+\.(?:js|css))"/g)) {
    const asset = path.join(DIST, match[1]!);
    if (!existsSync(asset)) continue;
    if (asset.endsWith(".css")) css += weightOf(asset);
    else for (const module of moduleGraph(asset)) jsModules.add(module);
  }
  for (const module of jsModules) js += weightOf(module);

  weights.push({
    page: path.relative(DIST, page).replaceAll("\\", "/"),
    html: gzipped(page),
    js,
    css,
  });
}

const worst = <K extends keyof Omit<PageWeight, "page">>(key: K) =>
  weights.reduce((max, current) => (current[key] > max[key] ? current : max));

const checks = [
  { name: "JS / sayfa", key: "js" as const, budget: BUDGETS.jsPerPage },
  { name: "CSS / sayfa", key: "css" as const, budget: BUDGETS.cssPerPage },
  { name: "HTML / sayfa", key: "html" as const, budget: BUDGETS.htmlPerPage },
];

console.log(`${weights.length} sayfa ölçüldü (gzip):\n`);

let failed = 0;
for (const check of checks) {
  const peak = worst(check.key);
  const size = peak[check.key];
  const over = size > check.budget;
  if (over) failed += 1;
  console.log(
    `  ${over ? "AŞILDI" : "tamam "}  ${check.name.padEnd(13)} en yüksek ${kb(size).padStart(9)} / ${kb(check.budget)}  ← ${peak.page}`,
  );
}

const totalAssets = [...assetCache.values()].reduce((sum, size) => sum + size, 0);
console.log(`\n  Paylaşılan varlıklar toplamı: ${kb(totalAssets)} · dist: ${kb(walk(DIST).reduce((s, f) => s + statSync(f).size, 0))} (sıkıştırılmamış)`);

if (failed > 0) {
  console.error(`\n${failed} bütçe aşıldı.`);
  process.exit(1);
}

console.log("\nBütçe içinde.");
