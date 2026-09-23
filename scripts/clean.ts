/**
 * Clears build output and Astro's content-layer cache.
 *
 * Why this exists: rendered markdown is cached in `node_modules/.astro/data-store.json`
 * keyed by the file's content digest — not by the plugin code. So editing a
 * rehype plugin leaves every already-rendered page untouched and the change
 * looks like it did nothing. Run this after touching anything under src/plugins.
 */
import { rmSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const TARGETS = ["dist", ".astro", "node_modules/.astro"];

for (const target of TARGETS) {
  rmSync(path.join(ROOT, target), { recursive: true, force: true });
  console.log(`temizlendi: ${target}`);
}
