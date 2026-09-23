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
import type { Element, ElementContent, Root, RootContent, Text } from "hast";
import { visit } from "unist-util-visit";
import termIndex from "../data/generated/term-index.json";

interface TermEntry {
  term: string;
  definition: string;
  href: string;
}

const TERMS: Record<string, TermEntry> = termIndex;

/** Never mark a term inside these — they are already links or literal code. */
const SKIP_TAGS = new Set(["a", "code", "pre", "kbd", "dt", "h1", "h2", "h3"]);

/**
 * Longest first, so "design system" wins over "system" at the same position.
 * Turkish word boundaries: \b is unreliable around ı/ğ/ş, so the guard checks
 * the surrounding character against a letter class instead.
 */
const SORTED = Object.keys(TERMS).sort((a, b) => b.length - a.length);
const LETTER = /[\p{L}\p{N}]/u;

function findMatch(haystack: string, from: number): { start: number; end: number; key: string } | null {
  const lower = haystack.toLocaleLowerCase("tr");

  let best: { start: number; end: number; key: string } | null = null;
  for (const key of SORTED) {
    const index = lower.indexOf(key, from);
    if (index === -1) continue;

    const before = index > 0 ? haystack[index - 1]! : " ";
    const after = index + key.length < haystack.length ? haystack[index + key.length]! : " ";
    if (LETTER.test(before) || LETTER.test(after)) continue;

    if (!best || index < best.start || (index === best.start && key.length > best.end - best.start)) {
      best = { start: index, end: index + key.length, key };
    }
  }
  return best;
}

export function rehypeTermRefs() {
  return (tree: Root) => {
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

        visit(value, "text", (node: Text, index, parent) => {
          if (!parent || index === undefined) return;
          if (parent.type === "element" && SKIP_TAGS.has((parent as Element).tagName)) return;

          const replacement: RootContent[] = [];
          let cursor = 0;

          for (;;) {
            const match = findMatch(node.value, cursor);
            if (!match) break;

            const entry = TERMS[match.key]!;
            if (used.has(match.key)) {
              // Skip past it and keep looking for a different term.
              replacement.push({ type: "text", value: node.value.slice(cursor, match.end) });
              cursor = match.end;
              continue;
            }
            used.add(match.key);

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
      });
    });
  };
}

function textOf(node: ElementContent | Element): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(textOf).join("");
  return "";
}
