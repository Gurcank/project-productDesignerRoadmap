/**
 * Marks glossary terms inside term-card text so they can show their definition
 * on hover (or tap).
 *
 * Runs after rehype-term-cards, and only inside `.term-card__value` — the
 * definition text itself. Marking prose outside the cards would turn ordinary
 * paragraphs into a field of dotted underlines.
 *
 * The definition travels in a data attribute rather than a page-wide JSON blob:
 * a page carries only the terms it actually mentions, which keeps the cost
 * proportional to the page instead of to the 752-term index.
 */
import { readFileSync } from "node:fs";
import type { Element, ElementContent, Root, RootContent, Text } from "hast";
import { visit } from "unist-util-visit";
import termIndex from "../data/generated/term-index.json";
import termLookup from "../data/generated/term-lookup.json";
import termAliases from "../data/term-aliases.json";

interface TermEntry {
  term: string;
  definition: string;
  href: string;
  /** Short terms (URL, DNS) only match with their exact casing. */
  acronym?: boolean;
}

const TERMS: Record<string, TermEntry> = termIndex;

/** Never mark a term inside these — they are already links or literal code. */
const SKIP_TAGS = new Set(["a", "code", "pre", "kbd", "dt", "h1", "h2", "h3", "h4", "summary", "figcaption"]);

/**
 * Longest first, so "design system" wins over "system" at the same position.
 * Turkish word boundaries: \b is unreliable around ı/ğ/ş, so the guard checks
 * the surrounding character against a letter class instead.
 */
const SORTED = Object.keys(TERMS).sort((a, b) => b.length - a.length);
const LETTER = /[\p{L}\p{N}]/u;

/**
 * What a lesson may link: the full lookup (short terms included), minus words
 * that are also ordinary language, plus the Turkish surface forms in
 * term-aliases.json. Lessons are hand-written, so unlike a card they can name
 * "URL" or "DNS" and mean the term.
 */
const IGNORED = new Set(termAliases.ignore);
const LESSON_TERMS: Record<string, TermEntry> = {};
for (const [key, entry] of Object.entries(termLookup as Record<string, TermEntry>)) {
  if (!IGNORED.has(key)) LESSON_TERMS[key] = entry;
}
for (const [alias, target] of Object.entries(termAliases.aliases)) {
  const entry = (termLookup as Record<string, TermEntry>)[target];
  if (!entry) throw new Error(`term-aliases.json: "${alias}" points at "${target}", which is not in term-lookup.json`);
  LESSON_TERMS[alias.toLocaleLowerCase("tr")] = { ...entry, acronym: false };
}
const LESSON_SORTED = Object.keys(LESSON_TERMS).sort((a, b) => b.length - a.length);

function findMatch(
  haystack: string,
  from: number,
  terms: Record<string, TermEntry> = TERMS,
  sorted: string[] = SORTED,
): { start: number; end: number; key: string } | null {
  const lower = haystack.toLocaleLowerCase("tr");

  let best: { start: number; end: number; key: string } | null = null;
  for (const key of sorted) {
    const index = lower.indexOf(key, from);
    if (index === -1) continue;

    const before = index > 0 ? haystack[index - 1]! : " ";
    const after = index + key.length < haystack.length ? haystack[index + key.length]! : " ";
    if (LETTER.test(before) || LETTER.test(after)) continue;
    // "dom" inside running text is a word, "DOM" is the term.
    const hit = terms[key];
    if (hit?.acronym && haystack.slice(index, index + key.length) !== hit.term) continue;

    if (!best || index < best.start || (index === best.start && key.length > best.end - best.start)) {
      best = { start: index, end: index + key.length, key };
    }
  }
  return best;
}

/**
 * Wraps the first mention of each indexed term inside `root` in a hover target.
 * Shared by both modes: a term card (once per card) and a lesson (once per
 * lesson, anywhere in the prose).
 */
function markTerms(
  root: Element | Root,
  used: Set<string>,
  extraSkip: (el: Element) => boolean = () => false,
  terms: Record<string, TermEntry> = TERMS,
  sorted: string[] = SORTED,
) {
  visit(root, "text", (node: Text, index, parent) => {
    if (!parent || index === undefined) return;
    if (parent.type === "element" && (SKIP_TAGS.has((parent as Element).tagName) || extraSkip(parent as Element))) return;

    const replacement: RootContent[] = [];
    let cursor = 0;

    for (;;) {
      const match = findMatch(node.value, cursor, terms, sorted);
      if (!match) break;

      const entry = terms[match.key]!;
      // Keyed by the entry, not the surface form: "istemci" and "client" are one term.
      const dedupe = entry.term.toLocaleLowerCase("tr");
      if (used.has(dedupe)) {
        // Skip past it and keep looking for a different term.
        replacement.push({ type: "text", value: node.value.slice(cursor, match.end) });
        cursor = match.end;
        continue;
      }
      used.add(dedupe);

      if (match.start > cursor) {
        replacement.push({ type: "text", value: node.value.slice(cursor, match.start) });
      }
      replacement.push({
        type: "element",
        tagName: "span",
        properties: {
          className: ["term-ref"],
          tabindex: 0,
          role: "button",
          "aria-label": `${entry.term} — tanımı göster`,
          "data-term": entry.term,
          "data-definition": entry.definition,
          "data-href": entry.href,
        },
        children: [{ type: "text", value: node.value.slice(match.start, match.end) }],
      });
      cursor = match.end;
    }

    if (replacement.length === 0) return;
    replacement.push({ type: "text", value: node.value.slice(cursor) });
    parent.children.splice(index, 1, ...(replacement as ElementContent[]));
    return index + replacement.length;
  });
}

/** Lessons are hand-written MDX under src/lessons (ADR-015). */
const isLesson = (path: string | undefined) => !!path && /[\/]src[\/]lessons[\/]/.test(path);

/** Lesson chrome that is not prose: figure captions, the self-check, the term list itself. */
const LESSON_SKIP_CLASSES = ["diagram__caption", "lesson-terms", "lesson-outcomes"];

/**
 * A lesson can widen or narrow the shared term set from its own frontmatter:
 * `includeTerms` brings back ordinary words the global list ignores (a lesson on
 * page anatomy does mean "card" and "table"), `skipTerms` drops a word whose
 * shared meaning is a different one here ("header" is the HTTP header in 1.3 and
 * the page header in 7.1). Read from the source text: it is the one thing every
 * MDX pipeline hands the plugin the same way.
 */
function termsFor(path: string | undefined, source: unknown): { terms: Record<string, TermEntry>; sorted: string[] } {
  // The value the pipeline hands over may already have its frontmatter stripped; the file on disk always has it.
  let text = typeof source === "string" ? source : "";
  if (path && !/^---/.test(text)) {
    try {
      text = readFileSync(path, "utf8");
    } catch {
      /* no frontmatter to read: fall back to the shared list */
    }
  }
  text = text.split(String.fromCharCode(13)).join("");
  const read = (name: string): string[] => {
    const match = new RegExp("^" + name + ":\\s*(\\[.*\\])\\s*$", "m").exec(text);
    if (!match) return [];
    try {
      return (JSON.parse(match[1]!) as string[]).map((value) => value.toLocaleLowerCase("tr"));
    } catch {
      return [];
    }
  };

  const include = read("includeTerms");
  const skip = read("skipTerms");
  if (include.length === 0 && skip.length === 0) return { terms: LESSON_TERMS, sorted: LESSON_SORTED };

  const terms = { ...LESSON_TERMS };
  for (const key of include) {
    // A lookup key, or one of the opt-in surface forms ("table" → "table / data grid").
    const target = (termAliases as { optIn?: Record<string, string> }).optIn?.[key] ?? key;
    const entry = (termLookup as Record<string, TermEntry>)[target];
    if (entry) terms[key] = { ...entry, acronym: false };
  }
  for (const key of skip) delete terms[key];
  return { terms, sorted: Object.keys(terms).sort((a, b) => b.length - a.length) };
}

export function rehypeTermRefs() {
  return (tree: Root, file?: { path?: string; value?: unknown }) => {
    if (isLesson(file?.path)) {
      const { terms, sorted } = termsFor(file?.path, file?.value);
      // One definition per term for the whole lesson: a field of dotted underlines is not a lesson.
      const used = new Set<string>();
      markTerms(
        tree,
        used,
        (el) => {
          const cls = el.properties?.className;
          return Array.isArray(cls) && cls.some((c) => LESSON_SKIP_CLASSES.includes(String(c)));
        },
        terms,
        sorted,
      );
      return;
    }

    visit(tree, "element", (card: Element) => {
      const className = card.properties?.className;
      if (!Array.isArray(className) || !className.includes("term-card")) return;

      // A card never previews its own term; that is the page you are on.
      const heading = card.children.find((child): child is Element => child.type === "element" && child.tagName === "h3");
      const ownTerm = heading ? textOf(heading).trim().toLocaleLowerCase("tr") : "";

      // Once per term per card: a definition repeated four times is noise.
      const used = new Set<string>([ownTerm]);

      visit(card, "element", (value: Element) => {
        const valueClass = value.properties?.className;
        if (!Array.isArray(valueClass) || !valueClass.includes("term-card__value")) return;
        markTerms(value, used);
      });
    });
  };
}

function textOf(node: ElementContent | Element): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(textOf).join("");
  return "";
}
