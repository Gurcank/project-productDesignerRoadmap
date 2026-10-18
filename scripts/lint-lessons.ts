/**
 * Lesson standard v2 gate (docs/icerik/ders-standardi.md).
 *
 * Every lesson is measured; only lessons that declare `standard: 2` can fail.
 * The rest get their readability score in the summary, so the rewrite has a
 * number to beat, and the count "v2: N/M" is the rewrite's progress.
 *
 * Parsing is line-based on purpose: lessons follow one regular shape, and a
 * full MDX parser would add dependencies to answer questions a line scan
 * answers exactly (where the headings are, which components are used, what
 * prose is left once tags and tables are removed).
 *
 * Usage: npm run lint:lessons            all lessons
 *        npm run lint:lessons -- <path>  one lesson, full report
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { atesman, band, sentences, words } from "../src/lib/readability";
import { ROUTE_ORDER } from "../src/data/categories";
import { ROLE_IDS, ROLE_LABEL } from "../src/data/role-ids";
import { ROLES } from "../src/data/roles";
import { TOPIC_ROOTS } from "../src/data/topic-roots";
import { slugFromTopicName } from "../src/lib/topic-id";
import { compileRolePath } from "../src/lib/role-path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LESSONS = path.join(ROOT, "src/lessons");
const ONLY = process.argv.slice(2).find((arg) => arg.endsWith(".mdx"));

/** Lesson components that are structure, not a visual (everything else in these folders is). */
const NOT_VISUAL = new Set(["Callout", "Compare", "Pane", "Summary", "SelfCheck", "Outside", "Lens", "Lenses", "Case", "Deeper", "Tool"]);
const VISUAL_DIRS = ["~/components/lesson/", "~/components/diagrams/", "~/components/demos/", "~/components/Illustration"];

// ----------------------------------------------------- which roles need a lens
const topicsByCategory = new Map<string, string[]>();
for (const root of TOPIC_ROOTS) {
  const dir = path.join(ROOT, "src", root.dir);
  if (!existsSync(dir)) continue;
  for (const category of readdirSync(dir)) {
    const slugs = readdirSync(path.join(dir, category)).sort().map(slugFromTopicName);
    topicsByCategory.set(category, [...(topicsByCategory.get(category) ?? []), ...slugs]);
  }
}
const order = ROUTE_ORDER.map((category) => category.slug);
/** topic id → roles for which it is temel or önerilen. */
const lensRoles = new Map<string, string[]>();
for (const role of ROLES) {
  for (const step of compileRolePath(role, topicsByCategory, order).steps) {
    if (step.tier === "istege-bagli") continue;
    lensRoles.set(step.id, [...(lensRoles.get(step.id) ?? []), role.id]);
  }
}

// ---------------------------------------------------------------- parsing
interface Lesson {
  id: string;
  file: string;
  frontmatter: string;
  body: string;
}

function readLesson(file: string): Lesson {
  const raw = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
  const relative = path.relative(LESSONS, file).split(path.sep).join("/");
  return { id: relative.replace(/\.mdx$/, ""), file: relative, frontmatter: match?.[1] ?? "", body: match?.[2] ?? raw };
}

const field = (fm: string, name: string) => new RegExp(`^${name}:\\s*(.*)$`, "m").exec(fm)?.[1]?.trim();
const listLength = (fm: string, name: string) => {
  const block = new RegExp(`^${name}:\\s*\\n((?:\\s+- .*\\n?)+)`, "m").exec(fm)?.[1] ?? "";
  return block.split("\n").filter((line) => /^\s+- /.test(line)).length;
};

/** Text between an opening tag line and its closing tag line (first occurrence or all). */
function blocks(body: string, tag: string): string[] {
  const out: string[] = [];
  const pattern = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "g");
  for (const match of body.matchAll(pattern)) out.push(match[1]!);
  return out;
}

/** Prose a reader reads: no imports, tags, tables, code, headings, URLs. */
function prose(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    // A self-closing component whose props span lines (StepFlow steps={[…]}) is data, not prose.
    .replace(/<[A-Z]\w*(?:\s[\s\S]*?)?\/>/g, "")
    .split("\n")
    .filter((line) => !/^\s*(import |export |<\/?[A-Za-z]|\||#{1,6}\s|>\s*$)/.test(line))
    .map((line) =>
      line
        .replace(/^\s*>\s?/, "")
        // A list item is a sentence of its own, even when it ends in a comma.
        .replace(/^\s*(?:[-*]|\d+\.)\s+(.*)$/, (_, item: string) => {
          const text = item.trim().replace(/[,;]$/, "");
          // Its own block, too: list items often start in lower case, which the
          // sentence splitter would not treat as a new sentence.
          return `${/[.!?…:]$/.test(text) ? text : `${text}.`}
`;
        })
        .replace(/<[^>]+>/g, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/`[^`]*`/g, "")
        .replace(/[*_]{1,2}/g, ""),
    )
    .join("\n");
}

function paragraphs(text: string): string[] {
  return text.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, " ").trim()).filter(Boolean);
}

// ---------------------------------------------------------------- checks
interface Result {
  lesson: Lesson;
  v2: boolean;
  score: number;
  meanSentence: number;
  errors: string[];
  warnings: string[];
}

function lint(lesson: Lesson): Result {
  const { frontmatter: fm, body } = lesson;
  const v2 = field(fm, "standard") === "2";
  const errors: string[] = [];
  const warnings: string[] = [];
  const fail = (message: string) => (v2 ? errors : warnings).push(message);

  // Lenses are scored apart: they are the role's notes, and they should not
  // lift or sink the score of the lesson itself.
  const lensBodies = blocks(body, "Lens");
  const mainBody = body.replace(/<Lenses>[\s\S]*?<\/Lenses>/g, "");
  const text = prose(mainBody);
  const report = atesman(text);

  // --- frontmatter
  const summary = field(fm, "summary")?.replace(/^"|"$/g, "") ?? "";
  if (!summary) fail("summary yok");
  else if (summary.length > 220) fail(`summary ${summary.length} karakter (en çok 220)`);
  const outcomes = listLength(fm, "outcomes");
  if (outcomes < 2 || outcomes > 5) fail(`outcomes ${outcomes} madde (2–5)`);
  // Study pace, not skim pace: ~130 words a minute over everything on the page
  // a reader works through (prose, tables, captions, diagram labels).
  const minutes = Number(field(fm, "minutes") ?? 0);
  const studied = body.replace(/^import .*$/gm, "").replace(/<[^>]+>/g, " ");
  const expected = words(studied).length / 130;
  if (minutes && (minutes < expected * 0.5 || minutes > expected * 1.5)) {
    fail(`minutes ${minutes}, metin ~${Math.max(1, Math.round(expected))} dk`);
  }
  for (const name of ["includeTerms", "skipTerms"]) {
    const value = field(fm, name);
    if (value !== undefined && !/^\[.*\]$/.test(value)) errors.push(`${name} tek satır JSON dizi olmalı (eklenti başka biçimi okumaz)`);
  }

  // --- structure
  const lines = mainBody.split("\n");
  const firstH2 = lines.findIndex((line) => line.startsWith("## "));
  const hookWords = words(prose(lines.slice(0, firstH2 < 0 ? lines.length : firstH2).join("\n"))).length;
  if (hookWords === 0) fail("ilk ## başlığından önce kanca yok");
  else if (hookWords > 120) fail(`kanca ${hookWords} kelime (en çok 120)`);

  const headings = lines.filter((line) => line.startsWith("## ")).map((line) => line.slice(3).trim());
  const concept = headings.filter((heading) => heading !== "Kendini yokla");
  if (concept.length < 2) fail(`kavram bölümü ${concept.length} (en az 2)`);

  if (!headings.includes("Kendini yokla")) fail("## Kendini yokla yok");
  const checks = (body.match(/<SelfCheck\b/g) ?? []).length;
  if (checks < 3) fail(`${checks} kendini yokla sorusu (en az 3)`);

  const summaries = blocks(body, "Summary");
  if (summaries.length === 0) fail("<Summary> yok");
  else {
    const bullets = summaries[0]!.split("\n").filter((line) => /^\s*- /.test(line)).length;
    if (bullets < 3 || bullets > 6) fail(`özet ${bullets} madde (3–6)`);
  }

  // --- a visual
  const imported = [...body.matchAll(/^import (\w+) from "([^"]+)";/gm)]
    .filter(([, name, from]) => !NOT_VISUAL.has(name!) && VISUAL_DIRS.some((dir) => from!.startsWith(dir)))
    .map(([, name]) => name!);
  const used = imported.filter((name) => new RegExp(`<${name}\\b`).test(body));
  if (used.length === 0) fail("görsel yok (diyagram, demo, şekil ya da illüstrasyon)");

  // --- lenses
  const needed = lensRoles.get(lesson.id) ?? [];
  const present = [...body.matchAll(/<Lens role="([^"]+)"/g)].map((match) => match[1]!);
  for (const role of present) {
    if (!(ROLE_IDS as readonly string[]).includes(role)) errors.push(`bilinmeyen rol merceği "${role}"`);
  }
  const missing = needed.filter((role) => !present.includes(role));
  if (missing.length) fail(`mercek eksik: ${missing.map((role) => ROLE_LABEL[role as keyof typeof ROLE_LABEL].name).join(", ")}`);
  lensBodies.forEach((lens, i) => {
    const count = words(prose(lens)).length;
    if (count > 120) fail(`${present[i] ?? "?"} merceği ${count} kelime (en çok 120)`);
  });
  if (/tasarımcı olarak/i.test(text)) warnings.push('"tasarımcı olarak" ana metinde; role özgü cümle merceğe gider');

  // --- readability and length
  if (report.score < 35) fail(`okunabilirlik ${report.score} (${band(report.score)}; en az 35)`);
  else if (report.score < 50) warnings.push(`okunabilirlik ${report.score} (${band(report.score)}; hedef 50+)`);
  const tooLong = report.longest.filter((item) => item.words > 35);
  for (const item of tooLong.slice(0, 3)) fail(`${item.words} kelimelik cümle: "${item.text.slice(0, 70)}…"`);
  for (const item of report.longest.filter((x) => x.words <= 35).slice(0, 3)) {
    warnings.push(`${item.words} kelimelik cümle: "${item.text.slice(0, 70)}…"`);
  }
  const over20 = sentences(text).filter((sentence) => words(sentence).length > 20).length;
  if (report.sentences > 0 && over20 / report.sentences > 0.25) {
    fail(`cümlelerin %${Math.round((over20 / report.sentences) * 100)}'i 20 kelimeden uzun (en çok %25)`);
  }
  for (const paragraph of paragraphs(text)) {
    const count = words(paragraph).length;
    if (count > 120) fail(`${count} kelimelik paragraf: "${paragraph.slice(0, 60)}…"`);
  }

  return { lesson, v2, score: report.score, meanSentence: report.meanSentence, errors, warnings };
}

// ---------------------------------------------------------------- run
const files: string[] = [];
for (const category of readdirSync(LESSONS)) {
  for (const name of readdirSync(path.join(LESSONS, category))) {
    if (name.endsWith(".mdx") && name !== "_index.mdx") files.push(path.join(LESSONS, category, name));
  }
}
const selected = ONLY ? files.filter((file) => file.endsWith(ONLY.split(/[\\/]/).pop()!) && file.includes(ONLY.split(/[\\/]/).slice(-2, -1)[0] ?? "")) : files;
const results = selected.map((file) => lint(readLesson(file)));

const v2 = results.filter((result) => result.v2);
for (const result of ONLY ? results : v2) {
  console.log(`\n${result.lesson.file}  ·  Ateşman ${result.score} (${band(result.score)}) · ort. cümle ${result.meanSentence} kelime`);
  for (const error of result.errors) console.log(`  HATA   ${error}`);
  for (const warning of result.warnings) console.log(`  uyarı  ${warning}`);
}

const mean = (list: Result[]) => (list.length ? Math.round((list.reduce((s, r) => s + r.score, 0) / list.length) * 10) / 10 : 0);
const failing = v2.filter((result) => result.errors.length > 0);
console.log(
  `\nv2: ${v2.length}/${results.length} ders · ortalama Ateşman: v2 ${mean(v2)}, diğerleri ${mean(results.filter((r) => !r.v2))}` +
    ` · v1 derslerde ${results.filter((r) => !r.v2).reduce((s, r) => s + r.warnings.length, 0)} uyarı`,
);
const errorsOutside = results.filter((result) => !result.v2 && result.errors.length > 0);
if (errorsOutside.length) {
  for (const result of errorsOutside) console.error(`HATA ${result.lesson.file}: ${result.errors.join("; ")}`);
}
if (failing.length > 0 || errorsOutside.length > 0) {
  console.error(`\n${failing.length + errorsOutside.length} derste hata var.`);
  process.exit(1);
}
console.log("Ders standardı temiz.");
