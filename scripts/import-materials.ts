/**
 * Imports the reference material into content collections (ADR-002).
 *
 * The material folder is the source of truth and is never written to. Every
 * section (## X.Y) becomes one topic page; the text is copied verbatim so the
 * site never silently diverges from the source.
 *
 * Usage:
 *   npm run import              rewrite generated content
 *   npm run import -- --only=15 rewrite a single chapter
 *   npm run import:check        fail if generated content drifted from source
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = path.resolve(import.meta.dirname, "..");
const MATERIALS = path.join(ROOT, "ProductDesignerMaterials");
const OUT_TOPICS = path.join(ROOT, "src/content/topics");
const OUT_CATEGORIES = path.join(ROOT, "src/content/categories");
const OUT_QUIZZES = path.join(ROOT, "src/content/quizzes");
const OUT_DATA = path.join(ROOT, "src/data/generated");

/** Which material file(s) feed which category, and which sections belong there. */
interface SourceRule {
  category: string;
  files: string[];
  /** Optional filter for chapters split across two categories (chapter 9). */
  includes?: (sectionNumber: string) => boolean;
}

const RULES: SourceRule[] = [
  { category: "web-temelleri", files: ["01-web-nasil-calisir.md"] },
  { category: "urun-gelistirme", files: ["02-urun-gelistirme-yasam-dongusu.md"] },
  { category: "calisma-bicimi", files: ["03-calisma-bicimi-agile-scrum-kanban.md"] },
  { category: "ux-ui-ilkeleri", files: ["04-ui-ux-surec-ve-ilkeler.md"] },
  { category: "tasarim-sistemi", files: ["05-tasarim-sistemi-ve-gorsel-dil.md"] },
  { category: "erisilebilirlik", files: ["06-erisilebilirlik-a11y.md"] },
  { category: "arayuz-anatomisi", files: ["07a-site-anatomisi.md", "07b-site-anatomisi.md"] },
  { category: "front-end", files: ["08-frontend-temelleri.md"] },
  // Chapter 9 is split: the framework map and the selection framework on one side,
  // the tool-by-tool library map on the other.
  {
    category: "frameworkler",
    files: ["09-framework-ve-kutuphane-haritasi.md"],
    includes: (n) => ["9.1", "9.2", "9.3", "9.12", "9.13"].includes(n),
  },
  {
    category: "kutuphaneler",
    files: ["09-framework-ve-kutuphane-haritasi.md"],
    includes: (n) => ["9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "9.10", "9.11"].includes(n),
  },
  { category: "back-end-api", files: ["10-backend-ve-api.md"] },
  { category: "veritabani", files: ["11-veritabani-ve-veri-modeli.md"] },
  { category: "auth", files: ["12-auth-kimlik-dogrulama-ve-yetkilendirme.md"] },
  { category: "guvenlik-ve-hukuk", files: ["13-guvenlik-ve-hukuki-yukumluluk.md"] },
  { category: "sistem-mimarisi", files: ["14-sistem-mimarisi.md"] },
  { category: "git-ve-github", files: ["15-git-ve-github.md"] },
  { category: "devops-ve-yayin", files: ["16-devops-yayin-ve-gozlemlenebilirlik.md"] },
  { category: "test-ve-kalite", files: ["17-test-kalite-ve-kod-sagligi.md"] },
  { category: "sirket-sozlugu", files: ["18-sirket-ortami-sozlugu.md"] },
  { category: "yapay-zeka-ile-calisma", files: ["19-yapay-zeka-ile-profesyonel-calisma.md"] },
];

// ----------------------------------------------------------------- utilities

const TURKISH_MAP: Record<string, string> = {
  ı: "i", İ: "i", ğ: "g", Ğ: "g", ş: "s", Ş: "s",
  ç: "c", Ç: "c", ö: "o", Ö: "o", ü: "u", Ü: "u", â: "a", î: "i", û: "u",
};

export function slugify(input: string): string {
  return (
    input
      // Lowercase first: in Turkish "I" becomes "ı", "İ" becomes "i" + combining dot.
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "") // drop combining marks left by "İ"
      .replace(/[ıİğĞşŞçÇöÖüÜâîû]/g, (ch) => TURKISH_MAP[ch] ?? ch)
      .replace(/['''`"“”]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70)
  );
}

/** Strips the "Biten bölüm / Sıradaki bölüm" footer and trailing rules. */
function stripFooter(body: string): string {
  return body
    .replace(/\n+\*\*Biten (bölüm|dosya):\*\*[\s\S]*$/u, "\n")
    .replace(/\n+---\s*$/u, "\n")
    .trimEnd();
}

interface Section {
  number: string;
  title: string;
  body: string;
  isQuiz: boolean;
}

interface ParsedChapter {
  intro: string;
  sections: Section[];
}

/** Splits one material file into its intro text and `## X.Y` sections. */
function parseChapter(raw: string): ParsedChapter {
  const lines = raw.split(/\r?\n/);
  const headingIndexes: number[] = [];
  let inFence = false;

  lines.forEach((line, index) => {
    if (line.startsWith("```")) inFence = !inFence;
    if (!inFence && /^##\s+/.test(line)) headingIndexes.push(index);
  });

  const introEnd = headingIndexes[0] ?? lines.length;
  const intro = stripFooter(
    lines
      .slice(0, introEnd)
      .join("\n")
      .replace(/^#\s+.*$/m, "") // chapter H1 lives in the category record
      .replace(/\n+---\s*$/u, "")
      .trim(),
  );

  const sections: Section[] = [];
  headingIndexes.forEach((start, i) => {
    const end = headingIndexes[i + 1] ?? lines.length;
    const headingLine = lines[start]!.replace(/^##\s+/, "").trim();
    const match = headingLine.match(/^(\d+\.\d+)\s+(.*)$/);
    const number = match ? match[1]! : "";
    const title = match ? match[2]!.trim() : headingLine;
    const body = stripFooter(lines.slice(start + 1, end).join("\n").trim());
    sections.push({ number, title, body, isQuiz: /kendini test et/i.test(title) });
  });

  return { intro, sections };
}

interface QuizItem {
  n: number;
  question: string;
  answer: string;
}

/** Turns a "Kendini test et" section into question/answer pairs. */
function parseQuiz(body: string): QuizItem[] {
  const [questionPart = "", answerPart = ""] = body.split(/^###\s+Cevaplar\s*$/m);
  const collect = (text: string) => {
    const map = new Map<number, string>();
    const parts = text.split(/^\*\*(\d+)\.\*\*\s*/m);
    for (let i = 1; i < parts.length; i += 2) {
      const n = Number(parts[i]);
      const content = (parts[i + 1] ?? "")
        .replace(/\n+---[\s\S]*$/u, "")
        .trim();
      if (Number.isFinite(n) && content) map.set(n, content);
    }
    return map;
  };

  const questions = collect(questionPart);
  const answers = collect(answerPart);
  return [...questions.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([n, question]) => ({ n, question, answer: answers.get(n) ?? "" }));
}

function countCards(body: string): number {
  return (body.match(/^###\s+/gm) ?? []).length;
}

/**
 * Every term card's heading plus its definition, for the in-card previews.
 *
 * Built here rather than from the content collection because the rehype plugin
 * that marks up the terms runs *inside* that collection's own render step —
 * asking it for the collection would be circular.
 */
function extractTerms(body: string, category: string, slug: string): TermRecord[] {
  const terms: TermRecord[] = [];

  for (const block of body.split(/^### /m).slice(1)) {
    const newline = block.indexOf("\n");
    const title = (newline === -1 ? block : block.slice(0, newline)).trim();
    const definition = /^-\s+\*\*Tanım:\*\*\s*(.+)$/m.exec(block)?.[1];
    if (!title || !definition) continue;

    terms.push({
      term: title,
      definition: definition
        .replace(/\*\*/g, "")
        .replace(/`/g, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim(),
      category,
      slug,
    });
  }

  return terms;
}

function detectFlags(body: string): string[] {
  const flags: string[] = [];
  if (body.includes("[DEĞİŞKEN BİLGİ]")) flags.push("degisken");
  if (body.includes("[EMİN DEĞİLİM]")) flags.push("emin-degil");
  return flags;
}

function yamlString(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

// -------------------------------------------------------------------- import

interface TermRecord {
  term: string;
  definition: string;
  category: string;
  slug: string;
}

interface TopicRecord {
  category: string;
  slug: string;
  number: string;
  title: string;
  order: number;
  cards: number;
}

interface WriteTask {
  file: string;
  content: string;
}

async function buildTasks(only: string | null): Promise<{ tasks: WriteTask[]; topics: TopicRecord[]; terms: TermRecord[] }> {
  const tasks: WriteTask[] = [];
  const topics: TopicRecord[] = [];
  const terms: TermRecord[] = [];

  for (const rule of RULES) {
    if (only && !rule.files.some((f) => f.startsWith(only.padStart(2, "0")))) continue;

    const parsed: ParsedChapter[] = [];
    for (const file of rule.files) {
      const raw = await readFile(path.join(MATERIALS, file), "utf8");
      parsed.push(parseChapter(raw));
    }

    const sections = parsed
      .flatMap((p, fileIndex) => p.sections.map((s) => ({ ...s, file: rule.files[fileIndex]! })))
      .filter((s) => (rule.includes ? rule.includes(s.number) || s.isQuiz : true));

    let order = 0;
    for (const section of sections) {
      if (section.isQuiz) {
        const items = parseQuiz(section.body);
        if (items.length > 0) {
          tasks.push({
            file: path.join(OUT_QUIZZES, `${rule.category}.json`),
            content: `${JSON.stringify({ category: rule.category, source: section.file, items }, null, 2)}\n`,
          });
        }
        continue;
      }

      order += 1;
      const slug = slugify(section.title);
      const cards = countCards(section.body);
      const flags = detectFlags(section.body);
      const frontmatter = [
        "---",
        `title: ${yamlString(section.title)}`,
        `sectionNumber: ${yamlString(section.number)}`,
        `category: ${yamlString(rule.category)}`,
        `order: ${order}`,
        `cardCount: ${cards}`,
        `sourceFile: ${yamlString(section.file)}`,
        `origin: "material"`,
        flags.length ? `flags: [${flags.map(yamlString).join(", ")}]` : "flags: []",
        "---",
        "",
      ].join("\n");

      tasks.push({
        file: path.join(OUT_TOPICS, rule.category, `${String(order).padStart(2, "0")}-${slug}.md`),
        content: `${frontmatter}${section.body}\n`,
      });

      topics.push({ category: rule.category, slug, number: section.number, title: section.title, order, cards });
      terms.push(...extractTerms(section.body, rule.category, slug));
    }

    // Category intro: the chapter text that sits above the first section.
    const intro = parsed.map((p) => p.intro).filter(Boolean).join("\n\n");
    tasks.push({
      file: path.join(OUT_CATEGORIES, `${rule.category}.md`),
      content: `---\ncategory: ${yamlString(rule.category)}\nsourceFiles: [${rule.files.map(yamlString).join(", ")}]\n---\n\n${intro}\n`,
    });
  }

  return { tasks, topics, terms };
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const onlyArg = args.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1]! : null;

  const { tasks, topics, terms } = await buildTasks(only);

  if (check) {
    let drifted = 0;
    for (const task of tasks) {
      const current = existsSync(task.file) ? await readFile(task.file, "utf8") : null;
      if (current !== task.content) {
        drifted += 1;
        console.error(`drift: ${path.relative(ROOT, task.file)}`);
      }
    }
    if (drifted > 0) {
      console.error(`\n${drifted} dosya kaynakla ayrışmış. "npm run import" çalıştır.`);
      process.exit(1);
    }
    console.log(`Tüm üretilmiş içerik kaynakla uyumlu (${tasks.length} dosya).`);
    return;
  }

  /*
   * Full rewrite so removed sections never linger as stale pages — but only for
   * the categories this importer owns. Categories written for the site by hand
   * (Programlama Dilleri, Veri Yapıları, Algoritmalar) live in the same
   * collection and would otherwise be deleted on every import.
   */
  if (!only) {
    for (const rule of RULES) {
      await rm(path.join(OUT_TOPICS, rule.category), { recursive: true, force: true });
    }
    for (const dir of [OUT_CATEGORIES, OUT_QUIZZES]) {
      await rm(dir, { recursive: true, force: true });
    }
  }

  for (const task of tasks) {
    await mkdir(path.dirname(task.file), { recursive: true });
    await writeFile(task.file, task.content, "utf8");
  }

  // Cross-reference map: "15.3" -> /git-ve-github/dallanma-ve-birlestirme/
  const sectionMap: Record<string, { category: string; slug: string; title: string }> = {};
  for (const t of topics) {
    if (t.number) sectionMap[t.number] = { category: t.category, slug: t.slug, title: t.title };
  }

  /*
   * Term index for the in-card previews, keyed by the lower-cased term.
   *
   * Short terms are excluded: a three-letter string matches inside ordinary
   * Turkish words and would litter the page with false previews. Where the same
   * term is defined in two chapters the first wins — the alternative is showing
   * a preview that may be the wrong sense of the word, which is worse than
   * showing none.
   */
  const termIndex: Record<string, { term: string; definition: string; href: string }> = {};
  for (const t of terms) {
    const key = t.term.toLocaleLowerCase("tr");
    if (key.length < 4 || key in termIndex) continue;
    termIndex[key] = {
      term: t.term,
      definition: t.definition.length > 200 ? `${t.definition.slice(0, 200)}…` : t.definition,
      href: `/${t.category}/${t.slug}/`,
    };
  }

  /*
   * Lesson lookup (ADR-015): everything the card index above leaves out. Lessons
   * are hand-written prose, so a mention is deliberate and the "short terms
   * litter the page" argument does not hold — URL, DNS, DOM, SPA are exactly the
   * words a lesson explains. Acronyms (under four letters) are flagged so the
   * plugin can require the exact casing: "dom" inside "domates" is not the DOM.
   * Both lower-casings are keyed because Turkish folds "I" to "ı", which would
   * make English "index" miss "Index".
   */
  const termLookup: Record<string, { term: string; definition: string; href: string; acronym: boolean }> = {};
  for (const t of terms) {
    const entry = {
      term: t.term,
      definition: t.definition.length > 200 ? `${t.definition.slice(0, 200)}…` : t.definition,
      href: `/${t.category}/${t.slug}/`,
      acronym: t.term.length < 4,
    };
    for (const key of new Set([t.term.toLocaleLowerCase("tr"), t.term.toLowerCase()])) {
      if (!(key in termLookup)) termLookup[key] = entry;
    }
  }

  await mkdir(OUT_DATA, { recursive: true });

  const lookupFile = path.join(OUT_DATA, "term-lookup.json");
  const previousLookup = existsSync(lookupFile) ? JSON.parse(await readFile(lookupFile, "utf8")) : {};
  await writeFile(
    lookupFile,
    `${JSON.stringify(only ? { ...previousLookup, ...termLookup } : termLookup, null, 2)}
`,
    "utf8",
  );

  // A partial import still has to keep the map usable, otherwise cross references
  // silently stop resolving for every other chapter.
  const termFile = path.join(OUT_DATA, "term-index.json");
  const previousTerms = existsSync(termFile) ? JSON.parse(await readFile(termFile, "utf8")) : {};
  const mergedTerms = only ? { ...previousTerms, ...termIndex } : termIndex;
  await writeFile(termFile, `${JSON.stringify(mergedTerms, null, 2)}\n`, "utf8");

  const mapFile = path.join(OUT_DATA, "section-map.json");
  const previous: Record<string, { category: string; slug: string; title: string }> =
    only && existsSync(mapFile) ? JSON.parse(await readFile(mapFile, "utf8")) : {};
  const merged = { ...previous, ...sectionMap };
  const sorted = Object.fromEntries(
    Object.entries(merged).sort(([a], [b]) =>
      a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }),
    ),
  );

  await writeFile(mapFile, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");
  await writeFile(
    path.join(OUT_DATA, "stats.json"),
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString().slice(0, 10),
        topics: Object.keys(sorted).length,
        cards: topics.reduce((sum, t) => sum + t.cards, 0),
        categories: new Set(Object.values(sorted).map((t) => t.category)).size,
        partial: Boolean(only),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(
    `${tasks.length} dosya yazıldı · ${topics.length} konu · ${topics.reduce((s, t) => s + t.cards, 0)} kart` +
      (only ? ` (yalnız bölüm ${only})` : ""),
  );
}

await main();
