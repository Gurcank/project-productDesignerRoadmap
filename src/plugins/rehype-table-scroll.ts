/**
 * Wraps every generated table in a scroll container.
 *
 * The material leans on tables (38 of them across 33 topics: status codes, WCAG
 * criteria, hosting comparisons). A table is the one block allowed to be wider
 * than the reading column, so it gets its own horizontal scroll instead of
 * pushing the page sideways — and the wrapper is what .table-scroll styles hang
 * off, so without it the tables render unstyled too.
 */
import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

export function rehypeTableScroll() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "table" || !parent || index === undefined) return;
      if (parent.type === "element" && (parent as Element).tagName === "div") {
        const className = (parent as Element).properties?.className;
        if (Array.isArray(className) && className.includes("table-scroll")) return;
      }

      const wrapper: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["table-scroll"],
          // A scroll container that only a mouse can pan is unusable by
          // keyboard, so it has to be focusable and named (WCAG 2.1.1).
          tabindex: 0,
          role: "group",
          "aria-label": "Tablo — yatay kaydırılabilir",
        },
        children: [node],
      };
      parent.children[index] = wrapper;
      // Skip the wrapper we just inserted; its child is the table we handled.
      return index + 1;
    });
  };
}
