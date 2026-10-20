/**
 * Glossary terms written for the site (plan §4.5): src/authored/terms/<kategori>.json.
 *
 * The imported term cards cover the material's chapters only; new categories
 * (Proje Yönetimi, İş Analizi …) bring their own terms here. Read with plain
 * fs and checked by hand rather than through a content collection, because the
 * markdown plugin that marks terms in lessons runs in the Astro config, before
 * collections exist — the same reason the importer writes term-lookup.json.
 *
 * Changing a term needs a dev-server restart and `npm run build:fresh`: the
 * plugin reads this once when the config loads (ADR-011).
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export interface AuthoredTerm {
  term: string;
  english?: string;
  /** One or two sentences, at most 200 characters (it is a tooltip). */
  definition: string;
  category: string;
  /** Step slug inside the category: where the term is taught. */
  topic: string;
  /** Other surface forms that should show the same tooltip ("proje tüzüğü" → "project charter"). */
  aliases?: string[];
  /** Short all-caps terms match only with exact casing (WBS, RACI). */
  acronym?: boolean;
  /**
   * False keeps an everyday word ("proje") out of the in-text tooltips: it is
   * listed in the glossary, but the first "proje" in every lesson on the site
   * should not become a link.
   */
  inline?: boolean;
}

const DIR = path.join(process.cwd(), "src/authored/terms");

function check(term: unknown, file: string): AuthoredTerm {
  const t = term as Partial<AuthoredTerm>;
  const where = `${file}: "${t.term ?? "?"}"`;
  if (typeof t.term !== "string" || !t.term.trim()) throw new Error(`${where} terim adı yok`);
  if (typeof t.definition !== "string" || !t.definition.trim()) throw new Error(`${where} tanım yok`);
  if (t.definition.length > 200) throw new Error(`${where} tanım ${t.definition.length} karakter (en çok 200)`);
  if (typeof t.topic !== "string") throw new Error(`${where} topic yok`);
  return { ...t, category: path.basename(file, ".json") } as AuthoredTerm;
}

export function loadAuthoredTerms(): AuthoredTerm[] {
  if (!existsSync(DIR)) return [];
  return readdirSync(DIR)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .flatMap((name) => {
      const list = JSON.parse(readFileSync(path.join(DIR, name), "utf8")) as unknown[];
      if (!Array.isArray(list)) throw new Error(`src/authored/terms/${name}: bir dizi olmalı`);
      return list.map((term) => check(term, name));
    });
}
