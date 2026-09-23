/**
 * Makes the material's cross references clickable: "(15.2)" becomes a link to
 * that topic, "(Bölüm 11)" to that category.
 *
 * Only parenthesised references are touched, and only when the number exists in
 * the generated section map. That keeps values like "4.5:1" (contrast ratio) and
 * "SC 2.5.8" (WCAG criterion) as plain text. The matching rule itself lives in
 * ~/lib/section-refs so the quiz renderer applies exactly the same one.
 */
import type { Element, Root, RootContent, Text } from "hast";
import { visit } from "unist-util-visit";
import { PARENTHESISED_PATTERN, SECTION_REF_PATTERN, resolveSectionHref } from "../lib/section-refs";

const SKIP_TAGS = new Set(["a", "code", "pre", "kbd"]);

export function rehypeCrossRefs() {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      if (parent.type === "element" && SKIP_TAGS.has((parent as Element).tagName)) return;

      const value = node.value;
      if (!value.includes("(")) return;

      const parenthesised = new RegExp(PARENTHESISED_PATTERN.source, "g");
      const replacement: RootContent[] = [];
      let cursor = 0;
      let changed = false;
      let match: RegExpExecArray | null;

      while ((match = parenthesised.exec(value)) !== null) {
        const inner = match[1]!;
        const innerNodes: RootContent[] = [];
        let innerCursor = 0;
        let innerChanged = false;

        const refs = new RegExp(SECTION_REF_PATTERN.source, "g");
        let refMatch: RegExpExecArray | null;
        while ((refMatch = refs.exec(inner)) !== null) {
          const [raw, section, chapter] = refMatch;
          const href = resolveSectionHref(section, chapter);
          if (!href) continue;

          if (refMatch.index > innerCursor) {
            innerNodes.push({ type: "text", value: inner.slice(innerCursor, refMatch.index) });
          }
          innerNodes.push({
            type: "element",
            tagName: "a",
            properties: { href, className: ["xref"] },
            children: [{ type: "text", value: raw }],
          });
          innerCursor = refMatch.index + raw.length;
          innerChanged = true;
        }

        if (!innerChanged) continue;

        innerNodes.push({ type: "text", value: inner.slice(innerCursor) });
        replacement.push({ type: "text", value: `${value.slice(cursor, match.index)}(` });
        replacement.push(...innerNodes);
        replacement.push({ type: "text", value: ")" });
        cursor = match.index + match[0].length;
        changed = true;
      }

      if (!changed) return;
      replacement.push({ type: "text", value: value.slice(cursor) });
      parent.children.splice(index, 1, ...(replacement as never[]));
      return index + replacement.length;
    });
  };
}
