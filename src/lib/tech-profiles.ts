/**
 * Collects the chapter 9 tool cards named in src/data/tech-profiles.ts from the
 * imported topics, for the profile pages. Build-time only.
 *
 * The card text is kept as the material wrote it (inline markdown and all) with
 * one exception: "**Seviye 3** terim: adını bilmen yeterli." refers to the
 * material's three-level scheme, which this site does not use, so that sentence
 * is dropped. A card named in the data file but missing from the material is an
 * error, so a renamed card cannot quietly drop its page.
 */
import { getPublishedCategories, topicSlug } from "~/lib/content";
import { TECH_PROFILES, type ProfileSpec } from "~/data/tech-profiles";

export interface ProfileField {
  label: string;
  /** Inline markdown, verbatim. */
  value: string;
  /** Indented sub-bullets under the field, verbatim. */
  items: string[];
  /** The material's own `[DEĞİŞKEN BİLGİ]` / `[EMİN DEĞİLİM]` bullet. */
  flag: boolean;
}

export interface TechProfile extends ProfileSpec {
  english: string | null;
  definition: string;
  fields: ProfileField[];
  section: string;
  sectionTitle: string;
  category: string;
  lessonHref: string;
}

const FIELD = /^-\s+\*\*([^*]+?):\*\*\s*(.*)$/;
const FLAG = /^-\s+`\[(DEĞİŞKEN BİLGİ|EMİN DEĞİLİM)\]`\s*(.*)$/;
const SUB = /^\s{2,}-\s+(.*)$/;
const LEVEL_NOTE = /\s*\*\*Seviye \d\*\* terim: adını bilmen yeterli\./g;

/** Fields shown in the header or not at all. */
const HIDDEN = new Set(["terim (i̇ngilizce)", "terim (ingilizce)", "türkçesi", "tanım"]);

function parseCard(block: string): { title: string; fields: ProfileField[]; raw: Map<string, string> } {
  const lines = block.split(/\r?\n/);
  const title = lines[0]!.trim();
  const fields: ProfileField[] = [];
  const raw = new Map<string, string>();

  for (const line of lines.slice(1)) {
    const sub = SUB.exec(line);
    if (sub && fields.length) {
      fields.at(-1)!.items.push(sub[1]!.trim());
      continue;
    }
    const flag = FLAG.exec(line.trim());
    if (flag) {
      fields.push({ label: flag[1] === "DEĞİŞKEN BİLGİ" ? "Değişken bilgi" : "Emin değilim", value: flag[2]!.trim(), items: [], flag: true });
      continue;
    }
    const field = FIELD.exec(line.trim());
    if (!field) continue;
    const label = field[1]!.trim();
    const value = field[2]!.replace(LEVEL_NOTE, "").trim();
    raw.set(label.toLocaleLowerCase("tr"), value);
    if (!HIDDEN.has(label.toLocaleLowerCase("tr"))) fields.push({ label, value, items: [], flag: false });
  }
  return { title, fields, raw };
}

let cached: Promise<TechProfile[]> | null = null;

export function getTechProfiles(): Promise<TechProfile[]> {
  cached ??= (async () => {
    const published = await getPublishedCategories();
    const cards = new Map<string, Omit<TechProfile, keyof ProfileSpec>>();

    for (const { category, topics } of published) {
      if (category.slug !== "frameworkler" && category.slug !== "kutuphaneler") continue;
      for (const topic of topics) {
        for (const block of (topic.body ?? "").split(/^### /m).slice(1)) {
          const card = parseCard(block);
          const definition = card.raw.get("tanım");
          if (!definition) continue;
          cards.set(card.title, {
            english: card.raw.get("terim (i̇ngilizce)") ?? card.raw.get("terim (ingilizce)") ?? null,
            definition,
            fields: card.fields,
            section: topic.data.sectionNumber ?? "",
            sectionTitle: topic.data.title,
            category: category.slug,
            lessonHref: `/${category.slug}/${topicSlug(topic)}/`,
          });
        }
      }
    }

    return TECH_PROFILES.map((spec) => {
      const card = cards.get(spec.card);
      if (!card) throw new Error(`Teknoloji profili: "${spec.card}" kartı Bölüm 9'da bulunamadı.`);
      return { ...spec, ...card };
    });
  })();
  return cached;
}
