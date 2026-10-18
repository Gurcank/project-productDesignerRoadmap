/**
 * Everything a template page and its downloads need, derived once.
 *
 * A "belge" template has ornek.md and bos.md next to its page; a "tablo"
 * template has its rows in frontmatter, and its Markdown and CSV are generated
 * here, so the page, the copyable text and the spreadsheet can never disagree.
 */
import { getCollection, type CollectionEntry } from "astro:content";
import { toCsv, toMarkdownTable } from "~/lib/csv";

export interface TemplateFile {
  /** Download name: "raci-bos.csv". */
  name: string;
  label: string;
  type: string;
  body: string;
}

export interface TemplateInfo {
  entry: CollectionEntry<"templates">;
  slug: string;
  example?: CollectionEntry<"templateDocs">;
  blankText: string;
  files: TemplateFile[];
}

let cached: Promise<TemplateInfo[]> | null = null;

export function getTemplates(): Promise<TemplateInfo[]> {
  cached ??= (async () => {
    const docs = new Map((await getCollection("templateDocs")).map((doc) => [doc.id, doc]));
    const list = await getCollection("templates");
    return list
      .sort((a, b) => a.data.title.localeCompare(b.data.title, "tr"))
      .map((entry) => {
        const slug = entry.id;
        const { table, kind, title } = entry.data;
        if (kind === "tablo") {
          if (!table) throw new Error(`src/tools/sablonlar/${slug}: tablo şablonunda table alanı yok`);
          const blankRows = Array.from({ length: table.blankRows }, () => table.columns.map(() => ""));
          const blankText = `# ${title}\n\n${toMarkdownTable(table.columns, blankRows)}`;
          return {
            entry,
            slug,
            blankText,
            files: [
              { name: `${slug}-bos.csv`, label: "Boş tablo (CSV, Excel)", type: "text/csv; charset=utf-8", body: toCsv(table.columns, blankRows) },
              { name: `${slug}-ornek.csv`, label: "Örnek tablo (CSV, Excel)", type: "text/csv; charset=utf-8", body: toCsv(table.columns, table.example) },
              { name: `${slug}-bos.md`, label: "Boş tablo (Markdown)", type: "text/markdown; charset=utf-8", body: blankText },
            ],
          };
        }
        const example = docs.get(`${slug}/ornek`);
        const blank = docs.get(`${slug}/bos`);
        if (!example || !blank) throw new Error(`src/tools/sablonlar/${slug}: ornek.md ve bos.md gerekli`);
        return {
          entry,
          slug,
          example,
          blankText: blank.body ?? "",
          files: [
            { name: `${slug}-bos.md`, label: "Boş şablon (Markdown)", type: "text/markdown; charset=utf-8", body: blank.body ?? "" },
            { name: `${slug}-ornek.md`, label: "Doldurulmuş örnek (Markdown)", type: "text/markdown; charset=utf-8", body: example.body ?? "" },
          ],
        };
      });
  })();
  return cached;
}
