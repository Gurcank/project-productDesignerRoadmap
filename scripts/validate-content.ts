/**
 * Content gate for the material pipeline (ADR-002, Faz 1 exit criterion).
 *
 * `import:check` proves the generated files still match the source. This proves
 * the generated files are *usable*: counts add up, every term card carries a
 * definition, and every cross reference resolves to a page that exists.
 *
 * Exits non-zero on failure so CI can gate on it.
 *
 * Usage: npm run validate
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
// The site's own resolver, not a copy of its rules: a validator that reimplements
// the thing it checks can pass while the site is broken, and did — a Map keyed by
// the numeric chapter missed every "(Bölüm 6)" the site links correctly.
import { PARENTHESISED_PATTERN, SECTION_REF_PATTERN, resolveSectionHref } from "../src/lib/section-refs";
import sectionMap from "../src/data/generated/section-map.json";
import { DIAGRAM_SECTIONS } from "../src/components/diagrams/sections";

const ROOT = path.resolve(import.meta.dirname, "..");
const TOPICS = path.join(ROOT, "src/content/topics");

/*
 * Chapters the material references but the site has not published yet. They are
 * not broken links — the text is there, the page is not. Faz 3/4 adds the
 * "Araçlar" section (20, 21, 22, Ek A/B) and the reading guide (0); when a
 * chapter lands here, delete it from this list and the gate starts enforcing it.
 */
const UNPUBLISHED_CHAPTERS = new Set(["0", "20", "21", "22"]);

interface Problem {
  file: string;
  message: string;
}

const problems: Problem[] = [];
const deferred: Problem[] = [];

let topicCount = 0;
let headingCount = 0;
let termCardCount = 0;
let referenceCount = 0;

for (const category of readdirSync(TOPICS)) {
  for (const fileName of readdirSync(path.join(TOPICS, category))) {
    const relative = `${category}/${fileName}`;
    const raw = readFileSync(path.join(TOPICS, category, fileName), "utf8");
    topicCount += 1;

    // --- frontmatter counts match the body -----------------------------------
    const declared = Number(raw.match(/^cardCount: (\d+)$/m)?.[1] ?? -1);
    const headings = raw.match(/^### .+$/gm) ?? [];
    headingCount += headings.length;
    if (declared !== headings.length) {
      problems.push({ file: relative, message: `cardCount ${declared}, gerçek başlık ${headings.length}` });
    }

    const declaredCategory = raw.match(/^category: "(.+)"$/m)?.[1];
    if (declaredCategory !== category) {
      problems.push({ file: relative, message: `category alanı "${declaredCategory}", klasör "${category}"` });
    }

    // --- every term card carries a definition --------------------------------
    // A "### " block whose bullet list uses the labelled convention must have
    // Tanım; without it the card renders as a loose list and reads as a bug.
    const blocks = raw.split(/^### /m).slice(1);
    for (const block of blocks) {
      const title = block.slice(0, block.indexOf("\n")).trim();
      const labelled = block.match(/^- \*\*[^*]+:\*\*/gm) ?? [];
      if (labelled.length < 3) continue; // prose section, not a card
      termCardCount += 1;
      if (!/^- \*\*Tanım:\*\*/m.test(block)) {
        problems.push({ file: relative, message: `"${title}" kartında Tanım alanı yok` });
      }
    }

    // --- cross references resolve --------------------------------------------
    const body = raw.replace(/^---[\s\S]*?^---/m, "");
    const outerPattern = new RegExp(PARENTHESISED_PATTERN.source, "g");
    for (const outer of body.matchAll(outerPattern)) {
      const refPattern = new RegExp(SECTION_REF_PATTERN.source, "g");
      for (const ref of outer[1]!.matchAll(refPattern)) {
        const [rawRef, section, chapter] = ref;
        referenceCount += 1;
        if (resolveSectionHref(section, chapter)) continue;

        const targetChapter = section ? section.split(".")[0]! : chapter!;
        const problem = { file: relative, message: `çözülmeyen referans (${rawRef})` };
        if (UNPUBLISHED_CHAPTERS.has(targetChapter)) deferred.push(problem);
        else problems.push(problem);
      }
    }
  }
}

// A diagram bound to a section that no longer exists would just stop rendering.
for (const section of DIAGRAM_SECTIONS) {
  if (!(section in sectionMap)) {
    problems.push({ file: "src/components/diagrams", message: `${section} bölümü yok — diyagram hiçbir sayfaya düşmez` });
  }
}

console.log(
  `${topicCount} konu · ${headingCount} başlık · ${termCardCount} terim kartı · ` +
    `${referenceCount} çapraz referans · ${DIAGRAM_SECTIONS.length} diyagram`,
);

if (deferred.length > 0) {
  const byRef = new Map<string, number>();
  for (const item of deferred) byRef.set(item.message, (byRef.get(item.message) ?? 0) + 1);
  console.log(`\nYayınlanmamış bölüme işaret eden ${deferred.length} referans (hata değil, bekleyen sayfa):`);
  for (const [message, count] of [...byRef].sort()) {
    console.log(`  ${message.replace("çözülmeyen referans ", "")} × ${count}`);
  }
}

if (problems.length > 0) {
  console.error(`\n${problems.length} sorun:`);
  for (const problem of problems.slice(0, 40)) console.error(`  ${problem.file}: ${problem.message}`);
  if (problems.length > 40) console.error(`  … ve ${problems.length - 40} tane daha`);
  process.exit(1);
}

console.log("\nDoğrulama temiz.");
