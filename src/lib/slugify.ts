/**
 * Turkish-aware slugs for topic file names, and so for URLs and progress keys.
 *
 * Lives in its own module so the importer and the tests share one copy: the
 * order of the steps below is a trap that has already bitten once (CLAUDE.md,
 * "Türkçe slugify sırası"), and only a test keeps it from coming back.
 */
const TURKISH_MAP: Record<string, string> = {
  ı: "i", İ: "i", ğ: "g", Ğ: "g", ş: "s", Ş: "s",
  ç: "c", Ç: "c", ö: "o", Ö: "o", ü: "u", Ü: "u", â: "a", î: "i", û: "u",
};

export function slugify(input: string): string {
  return (
    input
      // Lowercase first: in Turkish "I" becomes "ı", "İ" becomes "i" + combining dot.
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "") // drop combining marks left by "İ"
      .replace(/[ıİğĞşŞçÇöÖüÜâîû]/g, (ch) => TURKISH_MAP[ch] ?? ch)
      .replace(/['''`"“”]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70)
  );
}
