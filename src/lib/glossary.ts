/**
 * Builds the term index from the imported topics (SPEC §3, "Sözlük").
 *
 * Anchors come from Astro's own `render()` headings rather than from slugifying
 * the term ourselves: the markdown processor decides the id, so re-deriving it
 * here would be a guess that breaks silently the first time it disagrees.
 *
 * Build-time only.
 */
import { render } from "astro:content";
import { getPublishedCategories, topicSlug } from "~/lib/content";

export interface GlossaryEntry {
  /** The card heading, e.g. "Pull request". */
  term: string;
  english: string | null;
  definition: string | null;
  categorySlug: string;
  categoryTitle: string;
  topicTitle: string;
  sectionNumber: string;
  href: string;
  /** Letter the entry files under, already upper-cased for Turkish. */
  letter: string;
}

const FIELD_PATTERN = /^-\s+\*\*([^*]+?):\*\*\s*(.+)$/;

/** Strips the inline markdown the material uses inside field values. */
function plain(value: string): string {
  return value
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Splits a topic body into its "### " blocks, keeping the heading text. */
function cardBlocks(body: string): { title: string; fields: Map<string, string> }[] {
  return body
    .split(/^### /m)
    .slice(1)
    .map((block) => {
      const newline = block.indexOf("\n");
      const title = (newline === -1 ? block : block.slice(0, newline)).trim();
      const fields = new Map<string, string>();

      for (const line of block.split("\n")) {
        const match = FIELD_PATTERN.exec(line.trim());
        if (!match) continue;
        fields.set(plain(match[1]!).toLocaleLowerCase("tr"), plain(match[2]!));
      }

      return { title, fields };
    });
}

/**
 * Turkish sorts "ı" before "i" and has letters Latin collation misplaces, so the
 * bucket letter is taken after a Turkish upper-casing rather than charAt(0).
 */
export const TURKISH_LETTERS = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");

function bucketLetter(term: string): string {
  const first = term.trim().charAt(0).toLocaleUpperCase("tr");
  return TURKISH_LETTERS.includes(first) ? first : "#";
}

export async function getGlossary(): Promise<GlossaryEntry[]> {
  const published = await getPublishedCategories();
  const entries: GlossaryEntry[] = [];

  for (const { category, topics } of published) {
    for (const topic of topics) {
      const { headings } = await render(topic);
      const anchors = headings.filter((heading) => heading.depth === 3);
      const blocks = cardBlocks(topic.body ?? "");
      const slug = topicSlug(topic);

      blocks.forEach((block, index) => {
        // A card without a definition is a prose section, not a glossary term.
        const definition = block.fields.get("tanım") ?? null;
        if (!definition) return;

        const anchor = anchors[index];

        entries.push({
          term: block.title,
          english: block.fields.get("terim (i̇ngilizce)") ?? block.fields.get("terim (ingilizce)") ?? null,
          definition,
          categorySlug: category.slug,
          categoryTitle: category.title,
          topicTitle: topic.data.title,
          sectionNumber: topic.data.sectionNumber ?? "",
          href: `/${category.slug}/${slug}/${anchor ? `#${anchor.slug}` : ""}`,
          letter: bucketLetter(block.title),
        });
      });
    }
  }

  entries.sort(
    (a, b) => a.term.localeCompare(b.term, "tr") || a.categoryTitle.localeCompare(b.categoryTitle, "tr"),
  );

  return entries;
}

/** Terms that appear in more than one category need their context shown. */
export function homonymTerms(entries: GlossaryEntry[]): Set<string> {
  const seen = new Map<string, number>();
  for (const entry of entries) {
    const key = entry.term.toLocaleLowerCase("tr");
    seen.set(key, (seen.get(key) ?? 0) + 1);
  }
  return new Set([...seen].filter(([, count]) => count > 1).map(([term]) => term));
}
