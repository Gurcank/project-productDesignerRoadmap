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
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
// The site's own resolver, not a copy of its rules: a validator that reimplements
// the thing it checks can pass while the site is broken, and did — a Map keyed by
// the numeric chapter missed every "(Bölüm 6)" the site links correctly.
import { PARENTHESISED_PATTERN, SECTION_REF_PATTERN, resolveSectionHref } from "../src/lib/section-refs";
import sectionMap from "../src/data/generated/section-map.json";
import { DIAGRAM_SECTIONS } from "../src/components/diagrams/sections";
import { TOPIC_ROOTS } from "../src/data/topic-roots";
import { makeTopicId, slugFromTopicName } from "../src/lib/topic-id";
import { AREAS, CATEGORIES, RESERVED_ROOTS, ROUTE_ORDER } from "../src/data/categories";
import { PLANET_BY_SLUG } from "../src/data/planets";
import { ROLE_IDS, ROLE_LABEL } from "../src/data/role-ids";
import { ROLES } from "../src/data/roles";
import { compileRolePath, type RolePath } from "../src/lib/role-path";
import { checklistIds, type ChecklistData } from "../src/lib/material-tools";

const ROOT = path.resolve(import.meta.dirname, "..");
const FROZEN_FILE = path.join(ROOT, "src/data/frozen-topic-ids.json");
const UPDATE_FROZEN = process.argv.includes("--update-frozen");

/*
 * Chapters the material references but the site has not published yet. They are
 * not broken links — the text is there, the page is not. Faz 3/4 adds the
 * "Araçlar" section (20, 21, 22, Ek A/B) and the reading guide (0); when a
 * chapter lands here, delete it from this list and the gate starts enforcing it.
 */
const UNPUBLISHED_CHAPTERS = new Set(["0", "22"]);

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

/** Every step id, with the files that claim it — two files, one URL, is a bug. */
const topicFiles = new Map<string, string[]>();
/** Category → its step file names, for compiling the role paths. */
const stepFiles = new Map<string, string[]>();

for (const topicRoot of TOPIC_ROOTS) {
  const rootDir = path.join(ROOT, "src", topicRoot.dir);
  if (!existsSync(rootDir)) continue;
  for (const category of readdirSync(rootDir)) {
    for (const fileName of readdirSync(path.join(rootDir, category))) {
      const relative = `src/${topicRoot.dir}/${category}/${fileName}`;
      const raw = readFileSync(path.join(rootDir, category, fileName), "utf8");
      topicCount += 1;

      const id = makeTopicId(category, slugFromTopicName(fileName));
      topicFiles.set(id, [...(topicFiles.get(id) ?? []), relative]);
      stepFiles.set(category, [...(stepFiles.get(category) ?? []), fileName]);

      // Each folder holds exactly one kind of step (ADR-019): the "Materyal dışı"
      // badge reads `origin`, so a written page left in the generated folder would
      // ship without it — or be deleted by the next import.
      const origin = raw.match(/^origin: "(.+)"$/m)?.[1] ?? "material";
      if (origin !== topicRoot.origin) {
        problems.push({ file: relative, message: `origin "${origin}", bu klasörde "${topicRoot.origin}" olmalı` });
      }

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
}

for (const [id, files] of topicFiles) {
  if (files.length > 1) problems.push({ file: files.join(" + "), message: `aynı adım kimliği iki dosyada: ${id}` });
}

/*
 * Frozen ids (CLAUDE.md rule 3). Progress is stored under the step id, so an id
 * that disappears — a renamed file, a re-slugged title — silently drops a
 * reader's progress on that step. The snapshot is append-only: a new step is
 * frozen explicitly with `--update-frozen`, the moment it is published.
 */
const frozen: { note: string; ids: string[] } = existsSync(FROZEN_FILE)
  ? JSON.parse(readFileSync(FROZEN_FILE, "utf8"))
  : { note: "", ids: [] };
const frozenIds = new Set(frozen.ids);
for (const id of frozen.ids) {
  if (!topicFiles.has(id)) {
    problems.push({ file: "src/data/frozen-topic-ids.json", message: `donmuş kimlik kayıp: ${id} — bu adımın ilerlemesi kaybolur` });
  }
}
const unfrozen = [...topicFiles.keys()].filter((id) => !frozenIds.has(id)).sort();
if (UPDATE_FROZEN && unfrozen.length > 0) {
  frozen.ids.push(...unfrozen);
  writeFileSync(FROZEN_FILE, `${JSON.stringify(frozen, null, 2)}\n`, "utf8");
  console.log(`${unfrozen.length} yeni kimlik donduruldu.`);
} else {
  for (const id of unfrozen) {
    problems.push({ file: "src/data/frozen-topic-ids.json", message: `dondurulmamış yeni kimlik: ${id} — "npm run validate -- --update-frozen"` });
  }
}

/*
 * Checklist item ids carry ticks the same way step ids carry progress (plan
 * §4.7), so they get the same append-only snapshot. An id changes only if the
 * material's item text changes — and then the reader's tick would be lost.
 */
const CHECKLIST_FROZEN_FILE = path.join(ROOT, "src/data/frozen-checklist-ids.json");
const checklistData: ChecklistData = JSON.parse(readFileSync(path.join(ROOT, "src/data/generated/tools/checklists.json"), "utf8"));
const currentChecklistIds = checklistIds(checklistData);
const duplicateChecklistIds = currentChecklistIds.filter((id, i) => currentChecklistIds.indexOf(id) !== i);
for (const id of duplicateChecklistIds) {
  problems.push({ file: "src/data/generated/tools/checklists.json", message: `aynı kontrol listesi kimliği iki kez: ${id}` });
}
const frozenChecklist: { note: string; ids: string[] } = existsSync(CHECKLIST_FROZEN_FILE)
  ? JSON.parse(readFileSync(CHECKLIST_FROZEN_FILE, "utf8"))
  : { note: "Kontrol listesi maddelerinin kimlikleri. Tikler bu kimliklerle saklanır; liste yalnız büyür.", ids: [] };
const liveChecklist = new Set(currentChecklistIds);
for (const id of frozenChecklist.ids) {
  if (!liveChecklist.has(id)) {
    problems.push({ file: "src/data/frozen-checklist-ids.json", message: `donmuş madde kimliği kayıp: ${id} — bu maddenin tiki kaybolur` });
  }
}
const frozenChecklistSet = new Set(frozenChecklist.ids);
const unfrozenChecklist = currentChecklistIds.filter((id) => !frozenChecklistSet.has(id));
if (UPDATE_FROZEN && unfrozenChecklist.length > 0) {
  frozenChecklist.ids.push(...unfrozenChecklist);
  writeFileSync(CHECKLIST_FROZEN_FILE, `${JSON.stringify(frozenChecklist, null, 2)}\n`, "utf8");
  console.log(`${unfrozenChecklist.length} kontrol listesi maddesi donduruldu.`);
} else if (unfrozenChecklist.length > 0) {
  problems.push({
    file: "src/data/frozen-checklist-ids.json",
    message: `${unfrozenChecklist.length} dondurulmamış kontrol listesi maddesi — "npm run validate -- --update-frozen"`,
  });
}

/*
 * URL roots. A category lives at /<slug>/, the same level as the site's own
 * pages; a clash would make one of them unreachable without any build error.
 */
const reserved = new Set(RESERVED_ROOTS);
for (const category of CATEGORIES) {
  if (reserved.has(category.slug)) {
    problems.push({ file: "src/data/categories.ts", message: `"${category.slug}" rezerve bir kök, kategori slug'ı olamaz` });
  }
}
for (const entry of readdirSync(path.join(ROOT, "src/pages"), { withFileTypes: true })) {
  const root = entry.isDirectory() ? entry.name : entry.name.replace(/\.(astro|ts|js|md|mdx)$/, "");
  if (root === "index" || root.startsWith("[")) continue;
  if (!reserved.has(root)) {
    problems.push({ file: `src/pages/${entry.name}`, message: `"${root}" kökü RESERVED_ROOTS listesinde yok` });
  }
}

/*
 * Map visuals. Both lookups fail silently at runtime — an unknown slug falls
 * back to the Moon, an unknown area builds `var(--c-area-x)` with nothing behind
 * it — so the gate is here.
 */
const tokens = readFileSync(path.join(ROOT, "src/styles/tokens.css"), "utf8");
const planetStyles = readFileSync(path.join(ROOT, "src/styles/planets.css"), "utf8");
const categorySlugs = new Set(CATEGORIES.map((category) => category.slug));
const bodies = new Map<string, string>();
for (const category of CATEGORIES) {
  const planet = PLANET_BY_SLUG[category.slug];
  if (!planet) {
    problems.push({ file: "src/data/planets.ts", message: `"${category.slug}" kategorisinin gezegeni yok` });
    continue;
  }
  const owner = bodies.get(planet.body);
  if (owner) problems.push({ file: "src/data/planets.ts", message: `"${planet.body}" iki kategoride: ${owner}, ${category.slug}` });
  bodies.set(planet.body, category.slug);
  if (!tokens.includes(`[data-body="${planet.body}"]`)) {
    problems.push({ file: "src/styles/tokens.css", message: `[data-body="${planet.body}"] paleti yok` });
  }
  if (!planetStyles.includes(`[data-pattern="${planet.pattern}"]`)) {
    problems.push({ file: "src/styles/planets.css", message: `[data-pattern="${planet.pattern}"] deseni yok` });
  }
}
for (const slug of Object.keys(PLANET_BY_SLUG)) {
  if (!categorySlugs.has(slug)) problems.push({ file: "src/data/planets.ts", message: `"${slug}" diye bir kategori yok` });
}

// Area hues must stay far enough apart to tell belts apart (no hue is the only
// cue — the belt title is — but two near-identical tints read as one area).
const MIN_HUE_GAP = 25;
const hues: { id: string; hue: number }[] = [];
for (const area of AREAS) {
  const hue = tokens.match(new RegExp(`--hue-${area.id}:\\s*(\\d+(?:\\.\\d+)?)`))?.[1];
  if (!hue) problems.push({ file: "src/styles/tokens.css", message: `--hue-${area.id} yok` });
  else hues.push({ id: area.id, hue: Number(hue) });
  if (!new RegExp(`--c-area-${area.id}:`).test(tokens)) {
    problems.push({ file: "src/styles/tokens.css", message: `--c-area-${area.id} yok` });
  }
}
for (let i = 0; i < hues.length; i += 1) {
  for (let j = i + 1; j < hues.length; j += 1) {
    const raw = Math.abs(hues[i]!.hue - hues[j]!.hue) % 360;
    const gap = Math.min(raw, 360 - raw);
    if (gap < MIN_HUE_GAP) {
      problems.push({ file: "src/styles/tokens.css", message: `--hue-${hues[i]!.id} ile --hue-${hues[j]!.id} arası ${gap}° (en az ${MIN_HUE_GAP}°)` });
    }
  }
}

// A diagram bound to a section that no longer exists would just stop rendering.
for (const section of DIAGRAM_SECTIONS) {
  if (!(section in sectionMap)) {
    problems.push({ file: "src/components/diagrams", message: `${section} bölümü yok — diyagram hiçbir sayfaya düşmez` });
  }
}

/*
 * Role paths (src/data/roles.ts). The compiler throws on an unknown category or
 * step; here every role is compiled so the gate names the role and the slug
 * instead of a page failing to build.
 */
const topicsByCategory = new Map(
  [...stepFiles].map(([category, files]) => [category, [...files].sort().map(slugFromTopicName)]),
);
const routeOrder = ROUTE_ORDER.map((category) => category.slug);
const compiled: RolePath[] = [];
for (const role of ROLES) {
  try {
    compiled.push(compileRolePath(role, topicsByCategory, routeOrder));
  } catch (error) {
    problems.push({ file: "src/data/roles.ts", message: (error as Error).message });
  }
}
for (const id of ROLE_IDS) {
  if (!ROLES.some((role) => role.id === id)) problems.push({ file: "src/data/roles.ts", message: `"${id}" rolünün yolu yok` });
}
for (const route of compiled) {
  if (!route.stops.some((stop) => stop.tier === "temel")) {
    problems.push({ file: "src/data/roles.ts", message: `${route.state}: yolda hiç temel durak yok` });
  }
}

// The designer route is what every existing reader was walking; a role switch
// must not quietly reorder it. New categories may slot in anywhere.
const LEGACY_DESIGNER_ROUTE = [
  "web-temelleri", "urun-gelistirme", "calisma-bicimi", "sirket-sozlugu", "ux-ui-ilkeleri", "tasarim-sistemi",
  "erisilebilirlik", "arayuz-anatomisi", "front-end", "programlama-dilleri", "frameworkler", "kutuphaneler",
  "back-end-api", "veritabani", "veri-yapilari", "algoritmalar", "auth", "guvenlik-ve-hukuk", "sistem-mimarisi",
  "git-ve-github", "devops-ve-yayin", "test-ve-kalite", "yapay-zeka-ile-calisma",
];
const designer = compiled.find((route) => route.state === "product-designer");
if (designer) {
  const legacy = new Set(LEGACY_DESIGNER_ROUTE);
  const kept = designer.stops.map((stop) => stop.category).filter((slug) => legacy.has(slug));
  if (kept.join() !== LEGACY_DESIGNER_ROUTE.join()) {
    problems.push({ file: "src/data/roles.ts", message: "product-designer yolu eski 23 kategorinin sırasını bozuyor" });
  }
}

// Every role has its page, and a page only points at roles that exist.
for (const id of ROLE_IDS) {
  const file = path.join(ROOT, "src/roles", `${id}.mdx`);
  if (!existsSync(file)) {
    problems.push({ file: `src/roles/${id}.mdx`, message: "rol sayfası yok" });
    continue;
  }
  const raw = readFileSync(file, "utf8");
  for (const match of raw.matchAll(/^\s+- role: "([^"]+)"/gm)) {
    if (!(ROLE_IDS as readonly string[]).includes(match[1]!)) {
      problems.push({ file: `src/roles/${id}.mdx`, message: `bilinmeyen komşu rol "${match[1]}"` });
    }
  }
}

/*
 * Illustrations (plan §3.3): theme classes only, so a drawing can never bring
 * its own colours into the night sky; a viewBox so it scales; no script or
 * outside reference, since it is inlined into the page; and small.
 */
const ILLUSTRATIONS = path.join(ROOT, "src/assets/illustrations");
const MAX_ILLUSTRATION = 12 * 1024;
if (existsSync(ILLUSTRATIONS)) {
  for (const name of readdirSync(ILLUSTRATIONS).filter((file) => file.endsWith(".svg"))) {
    const file = `src/assets/illustrations/${name}`;
    const svg = readFileSync(path.join(ILLUSTRATIONS, name), "utf8");
    if (/#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(|oklch\(/i.test(svg)) problems.push({ file, message: "ham renk var; yalnız il-* sınıfları" });
    if (/\s(fill|stroke)="(?!none")/.test(svg)) problems.push({ file, message: "fill/stroke özniteliği var; rengi il-* sınıfı verir" });
    if (!/viewBox="/.test(svg)) problems.push({ file, message: "viewBox yok" });
    if (/<script|href=|xlink:/i.test(svg)) problems.push({ file, message: "betik ya da dış referans var" });
    if (Buffer.byteLength(svg) > MAX_ILLUSTRATION) problems.push({ file, message: `${Buffer.byteLength(svg)} bayt (en çok ${MAX_ILLUSTRATION})` });
  }
}

// Not an error: a category no route takes seriously is still reachable, but it
// is worth a second look.
const orphaned = routeOrder.filter(
  (slug) => !compiled.some((route) => route.stops.some((stop) => stop.category === slug && stop.tier !== "istege-bagli")),
);

/*
 * Lessons (ADR-015): each must replace a step that exists — a typo in the file
 * name would silently leave the term-card view in place — and must name a
 * primary source. The schema already demands one; this reports the file.
 */
const LESSONS = path.join(ROOT, "src/lessons");
let lessonCount = 0;
if (existsSync(LESSONS)) {
  for (const category of readdirSync(LESSONS)) {
    for (const fileName of readdirSync(path.join(LESSONS, category))) {
      if (!fileName.endsWith(".mdx")) continue;
      const relative = `${category}/${fileName}`;
      const slug = fileName.replace(/\.mdx$/, "");
      if (slug === "_index") continue;
      lessonCount += 1;

      if (!topicFiles.has(makeTopicId(category, slug))) {
        problems.push({ file: `src/lessons/${relative}`, message: "bu ders hiçbir adıma karşılık gelmiyor" });
      }

      const raw = readFileSync(path.join(LESSONS, category, fileName), "utf8");
      if (!/^sources:\s*$/m.test(raw) || !/^\s+- label:/m.test(raw)) {
        problems.push({ file: `src/lessons/${relative}`, message: "kaynak yok — materyal dışı bilgi kaynaksız yayınlanmaz" });
      }
      // The old view had cards; a lesson that still ships one has not been converted.
      if (/^### .+\n\n- \*\*Terim/m.test(raw)) {
        problems.push({ file: `src/lessons/${relative}`, message: "ders içinde terim kartı kalmış" });
      }
    }
  }
}

console.log(
  `${topicCount} konu · ${headingCount} başlık · ${termCardCount} terim kartı · ` +
    `${referenceCount} çapraz referans · ${DIAGRAM_SECTIONS.length} diyagram · ${lessonCount} ders`,
);

console.log("\nRol yolları (temel / önerilen / isteğe bağlı ders · durak, hazırlanan):");
for (const route of compiled) {
  const count = (tier: string) => route.steps.filter((step) => step.tier === tier).length;
  const pending = route.stops.filter((stop) => !stop.published).length;
  console.log(
    `  ${ROLE_LABEL[route.state].name.padEnd(17)} ${String(count("temel")).padStart(3)} / ${String(count("onerilen")).padStart(3)} / ` +
      `${String(count("istege-bagli")).padStart(3)} · ${route.stops.length} durak, ${pending} hazırlanıyor`,
  );
}
if (orphaned.length > 0) console.log(`  Hiçbir yolda en az önerilen olmayan kategori: ${orphaned.join(", ")}`);

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
