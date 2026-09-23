/**
 * Minimal inline markdown for quiz text.
 *
 * Quiz questions and answers in the material only ever use bold, inline code and
 * (rarely) links — checked across all 19 chapters: no lists, no tables, no
 * multi-paragraph answers. Anything richer than this belongs in a topic page,
 * and the content validator flags it rather than this renderer guessing.
 */

import { PARENTHESISED_PATTERN, SECTION_REF_PATTERN, resolveSectionHref } from "~/lib/section-refs";

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);
}

/**
 * Links "(15.2)" the same way the markdown pipeline does. Runs before the
 * emphasis passes: the anchor it inserts carries no `*` or `[`, so the later
 * replacements cannot reach inside it.
 */
function linkSectionRefs(text: string): string {
  const parenthesised = new RegExp(PARENTHESISED_PATTERN.source, "g");

  return text.replace(parenthesised, (whole, inner: string) => {
    const refs = new RegExp(SECTION_REF_PATTERN.source, "g");
    let changed = false;

    const linked = inner.replace(refs, (raw: string, section?: string, chapter?: string) => {
      const href = resolveSectionHref(section, chapter);
      if (!href) return raw;
      changed = true;
      return `<a href="${href}" class="xref">${raw}</a>`;
    });

    return changed ? `(${linked})` : whole;
  });
}

export function renderInlineMarkdown(input: string): string {
  // Escape first: everything after this point is markup we generate ourselves.
  const escaped = escapeHtml(input);

  return escaped
    .split(/(`[^`]+`)/g)
    .map((part) => {
      if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
        return `<code>${part.slice(1, -1)}</code>`;
      }
      return linkSectionRefs(part)
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="noreferrer">$1</a>')
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|[\s(])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    })
    .join("");
}
