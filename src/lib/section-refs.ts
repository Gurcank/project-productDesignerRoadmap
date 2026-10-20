/**
 * Resolves the material's section references to site URLs.
 *
 * Two renderers need this: the markdown pipeline (rehype-cross-refs, working on
 * hast nodes) and the quiz renderer (inline-markdown, working on strings). The
 * matching rule lives here so the two can never drift apart.
 *
 * The map is imported, not read from disk: this module is bundled into two very
 * different contexts (the Astro config in plain Node, and the prerender bundle),
 * and a path resolved at runtime was wrong in the second one — the references
 * silently stayed plain text. An import has no path to get wrong, and a missing
 * map breaks the build instead of quietly shipping a site without links.
 *
 * Imports stay relative: astro.config.ts pulls this in, and the "~" alias is not
 * guaranteed to resolve there.
 */
import { CATEGORIES } from "../data/categories";
import generatedSectionMap from "../data/generated/section-map.json";

export interface SectionTarget {
  category: string;
  slug: string;
  title: string;
}

function loadChapterMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const category of CATEGORIES) {
    if (category.chapter !== null && !map[category.chapter]) map[category.chapter] = category.slug;
  }
  return map;
}

const sectionMap: Record<string, SectionTarget> = generatedSectionMap;
const chapterMap = loadChapterMap();

/**
 * "15.2", but never a fragment of a longer number. Both guards are needed and
 * each caught a real case:
 *   - lookahead  `(?!\.\d)` stops "2.5" matching inside "SC 2.5.8"
 *   - lookbehind `(?<![\d.])` stops "4.4" matching the tail of "SC 1.4.4",
 *     which shipped 32 bogus links into WCAG criteria and SemVer ranges.
 * A comma-separated list like "(5.9, 6.8)" still resolves to two references.
 *
 * The chapter branch carries the same lookahead so "(Bölüm 12.11)" falls through
 * to the section branch and links the section, instead of linking "Bölüm 12" and
 * leaving ".11" dangling outside the anchor.
 *
 * At most two digits after the dot: the material's deepest section is 12.11, and
 * a three-digit group means a Turkish thousands separator ("2.400 kişi").
 */
export const SECTION_REF_PATTERN = /(?<![\d.])(\d+\.\d{1,2})(?!\.\d)\b|\bBölüm\s+(\d+)\b(?!\.\d)/g;

/** Only parenthesised text is scanned, so "4.5:1" in a sentence stays plain. */
export const PARENTHESISED_PATTERN = /\(([^()]{1,80})\)/g;

/**
 * Chapters 20 and 21 are tools, not topics: one page each under /araclar/, with
 * an anchor per section ("21.2" → #s-21-2). The anchors are written by the
 * pages from the same rule, see toolSectionAnchor.
 */
const TOOL_CHAPTERS: Record<string, string> = {
  "20": "/araclar/akis-haritasi/",
  "21": "/araclar/kontrol-listeleri/",
};
/** The last section of each tool chapter, so "21.12" stays unresolved instead of linking a missing anchor. */
const TOOL_LAST_SECTION: Record<string, number> = { "20": 12, "21": 9 };

export function toolSectionAnchor(section: string): string {
  return `s-${section.replace(".", "-")}`;
}

export function resolveSectionHref(section?: string, chapter?: string): string | null {
  if (section) {
    const target = sectionMap[section];
    if (target) return `/${target.category}/${target.slug}/`;
    const [chapterPart = "", sectionPart = ""] = section.split(".");
    const tool = TOOL_CHAPTERS[chapterPart];
    const inRange = Number(sectionPart) >= 1 && Number(sectionPart) <= (TOOL_LAST_SECTION[chapterPart] ?? 0);
    return tool && inRange ? `${tool}#${toolSectionAnchor(section)}` : null;
  }
  if (chapter) {
    const slug = chapterMap[chapter];
    if (slug) return `/${slug}/`;
    return TOOL_CHAPTERS[chapter] ?? null;
  }
  return null;
}

export function sectionMapSize(): number {
  return Object.keys(sectionMap).length;
}
