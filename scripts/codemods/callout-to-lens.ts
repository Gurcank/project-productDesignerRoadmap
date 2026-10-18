/**
 * One-off codemod (Faz 2): `<Callout kind="tasarimci">` → the Product Designer
 * lens inside `<Lenses>`.
 *
 * Mechanical on purpose — the box's text must come out identical, which the
 * Faz 2 report proves by comparing the built pages before and after. Safe to
 * re-run: a lesson that already has a <Lens> is left alone.
 *
 * Usage:
 *   npx tsx scripts/codemods/callout-to-lens.ts          report only
 *   npx tsx scripts/codemods/callout-to-lens.ts --write  rewrite the files
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dirname, "../..");
const LESSONS = path.join(ROOT, "src/lessons");
const WRITE = process.argv.includes("--write");

const OPEN = /^<Callout kind="tasarimci"(?: title="([^"]*)")?>\s*$/;
const ANY_OPEN = /^<Callout\b/;
const CLOSE = /^<\/Callout>\s*$/;

let files = 0;
let replaced = 0;
const skipped: string[] = [];

for (const category of readdirSync(LESSONS)) {
  for (const name of readdirSync(path.join(LESSONS, category))) {
    if (!name.endsWith(".mdx")) continue;
    const file = path.join(LESSONS, category, name);
    const raw = readFileSync(file, "utf8");
    const nl = raw.includes("\r\n") ? "\r\n" : "\n";
    if (raw.includes("<Lens")) {
      skipped.push(`${category}/${name}`);
      continue;
    }

    const lines = raw.split(nl);
    let inFence = false;
    let depth = 0;
    let inDesigner = false;
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]!;
      if (line.startsWith("```")) inFence = !inFence;
      if (inFence) continue;

      const open = OPEN.exec(line);
      if (open && depth === 0) {
        const title = open[1] === undefined ? "" : ` title="${open[1]}"`;
        lines[i] = `<Lenses>${nl}<Lens role="product-designer"${title}>`;
        inDesigner = true;
        depth = 1;
        count += 1;
        continue;
      }
      if (ANY_OPEN.test(line)) depth += 1;
      if (CLOSE.test(line) && depth > 0) {
        depth -= 1;
        if (depth === 0 && inDesigner) {
          lines[i] = `</Lens>${nl}</Lenses>`;
          inDesigner = false;
        }
      }
    }
    if (depth !== 0) throw new Error(`${category}/${name}: <Callout> kapanmıyor`);
    if (count === 0) continue;

    let text = lines.join(nl);
    const imports = [...text.matchAll(/^import .+;\s*$/gm)];
    const last = imports.at(-1);
    if (!last) throw new Error(`${category}/${name}: import satırı yok`);
    const at = last.index! + last[0].replace(/\s+$/, "").length;
    text =
      text.slice(0, at) +
      `${nl}import Lens from "~/components/lesson/Lens.astro";${nl}import Lenses from "~/components/lesson/Lenses.astro";` +
      text.slice(at);
    if (!/<Callout\b/.test(text)) text = text.replace(/^import Callout from "~\/components\/lesson\/Callout\.astro";\r?\n/m, "");

    files += 1;
    replaced += count;
    if (WRITE) writeFileSync(file, text, "utf8");
  }
}

console.log(`${replaced} kutu, ${files} dosya ${WRITE ? "dönüştürüldü" : "dönüşecek (--write ile uygula)"}.`);
if (skipped.length) console.log(`Zaten mercekli, atlandı: ${skipped.length}`);
