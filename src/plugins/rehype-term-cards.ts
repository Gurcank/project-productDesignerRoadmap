/**
 * Turns the material's term-card convention into a real component.
 *
 * Source shape (repeated ~900 times):
 *   ### Pull request
 *   - **Terim (İngilizce):** Pull request — PR
 *   - **Tanım:** ...
 *
 * Output: <article class="term-card"> with a <dl> of labelled fields, so the
 * card can be designed as one unit instead of styling loose list items.
 * Anything that does not match the convention is left untouched — the content
 * validator reports those instead of the plugin guessing.
 */
import type { Element, ElementContent, Root, RootContent } from "hast";

const FIELD_KEYS: Record<string, string> = {
  "terim (i̇ngilizce)": "terim",
  "terim (ingilizce)": "terim",
  türkçesi: "turkce",
  "türkçesi / karşılığı": "turkce",
  tanım: "tanim",
  "ne işe yarar / neden var": "ne-ise-yarar",
  "ne işe yarar / neden var (tasarım tarafı)": "ne-ise-yarar",
  "nerede karşına çıkar": "nerede",
  "örnek kullanım": "ornek",
  karıştırılanlar: "karistirilanlar",
  "i̇lgili terimler": "ilgili",
  "ilgili terimler": "ilgili",
  kaynak: "kaynak",
  kaynaklar: "kaynak",
  not: "not",
  "ne zaman kullanılmaz": "ne-zaman-kullanilmaz",
};

/**
 * The material drops its own annotations into the field list as bare bullets,
 * e.g. `- \`[DEĞİŞKEN BİLGİ]\` Ücretlendirme değişir…`. They carry real meaning,
 * so they become a field of their own instead of disqualifying the card —
 * 27 of the 803 cards in the source depend on this.
 */
const FLAG_LABEL: Record<string, string> = {
  "[değişken bilgi]": "Değişken bilgi",
  "[emin değilim]": "Emin değilim",
};

const isElement = (node: RootContent | ElementContent | undefined, tag?: string): node is Element =>
  !!node && node.type === "element" && (!tag || node.tagName === tag);

const isBlank = (node: RootContent | ElementContent): boolean =>
  node.type === "text" && node.value.trim() === "";

function textOf(node: ElementContent | Element): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(textOf).join("");
  return "";
}

function fieldKey(label: string): string {
  const normalized = label.toLocaleLowerCase("tr").replace(/\s+/g, " ").trim();
  return FIELD_KEYS[normalized] ?? "diger";
}

/** Splits one `- **Label:** value` item into its label and value nodes. */
function parseField(item: Element): { label: string; key: string; value: ElementContent[] } | null {
  const children = item.children.filter((c) => !isBlank(c));
  const first = children[0];

  // The label can be wrapped in <p> when the list is loose.
  const host = isElement(first, "p") ? first : item;
  const hostChildren = host.children.filter((c) => !isBlank(c));
  const strong = hostChildren[0];

  if (isElement(strong, "code")) {
    const flag = FLAG_LABEL[textOf(strong).trim().toLocaleLowerCase("tr")];
    if (!flag) return null;
    const value = hostChildren.slice(1);
    const firstValue = value[0];
    if (firstValue?.type === "text") firstValue.value = firstValue.value.replace(/^\s+/, "");
    return { label: flag, key: "uyari", value };
  }

  if (!isElement(strong, "strong")) return null;

  const rawLabel = textOf(strong).trim();
  if (!rawLabel.endsWith(":")) return null;
  const label = rawLabel.slice(0, -1).trim();

  const rest: ElementContent[] = [...hostChildren.slice(1)];
  if (host !== item) rest.push(...children.slice(1));

  // Drop the single leading space left after the bold label.
  const firstRest = rest[0];
  if (firstRest?.type === "text") {
    firstRest.value = firstRest.value.replace(/^\s+/, "");
    if (firstRest.value === "") rest.shift();
  }

  return { label, key: fieldKey(label), value: rest };
}

function buildCard(heading: Element, block: RootContent[]): Element | null {
  const list = block.find((n) => isElement(n, "ul")) as Element | undefined;
  if (!list) return null;

  const items = list.children.filter((c): c is Element => isElement(c, "li"));
  const fields = items.map(parseField);
  const parsed = fields.filter((f): f is NonNullable<typeof f> => f !== null);

  // A card has at least a definition and one more labelled field; below that we
  // are probably looking at a plain bullet list.
  if (parsed.length < 3 || parsed.length !== fields.length) return null;
  if (!parsed.some((f) => f.key === "tanim")) return null;

  const rest = block.filter((n) => n !== list && !isBlank(n));

  /*
   * Fields dropped from the rendered card. Both still count toward the card's
   * validity above, so nothing about what qualifies as a card changes — this is
   * purely what gets shown.
   *
   * - "Türkçesi": half of them say "Yaygın Türkçe karşılığı yok", and the
   *   English term is the one actually spoken in a team.
   * - "Ne işe yarar": the longest field on most cards; with it gone a card is a
   *   definition plus where it shows up, which is what a card is for.
   * - "Örnek kullanım": a quoted meeting sentence that restates the definition
   *   in dialogue; it adds length, not information.
   */
  const HIDDEN_FIELDS = new Set(["turkce", "ne-ise-yarar", "ornek"]);
  const shown = parsed.filter((field) => !HIDDEN_FIELDS.has(field.key));

  const dl: Element = {
    type: "element",
    tagName: "dl",
    properties: { className: ["term-card__fields"] },
    children: shown.map((field) => ({
      type: "element" as const,
      tagName: "div",
      properties: { className: ["term-card__field"], "data-field": field.key },
      children: [
        {
          type: "element" as const,
          tagName: "dt",
          properties: { className: ["term-card__label"] },
          children: [{ type: "text" as const, value: field.label }],
        },
        {
          type: "element" as const,
          tagName: "dd",
          properties: { className: ["term-card__value"] },
          children: field.value,
        },
      ],
    })),
  };

  return {
    type: "element",
    tagName: "article",
    properties: { className: ["term-card"] },
    children: [heading, dl, ...(rest as ElementContent[])],
  };
}

export function rehypeTermCards() {
  return (tree: Root) => {
    const out: RootContent[] = [];
    const children = tree.children;
    let index = 0;

    while (index < children.length) {
      const node = children[index]!;
      if (!isElement(node, "h3")) {
        out.push(node);
        index += 1;
        continue;
      }

      let end = index + 1;
      const block: RootContent[] = [];
      while (end < children.length) {
        const next = children[end]!;
        if (isElement(next, "h1") || isElement(next, "h2") || isElement(next, "h3") || isElement(next, "hr")) break;
        block.push(next);
        end += 1;
      }

      const card = buildCard(node, block);
      if (card) {
        out.push(card);
      } else {
        out.push(node, ...block);
      }
      index = end;
    }

    tree.children = out;
  };
}
