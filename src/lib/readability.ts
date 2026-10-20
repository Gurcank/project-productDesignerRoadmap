/**
 * Turkish readability, measured rather than guessed (lesson standard v2).
 *
 * Ateşman (1997), "Türkçede okunabilirliğin ölçülmesi", Dil Dergisi 58:
 *   198.825 − 40.175 × (syllables / word) − 2.610 × (words / sentence)
 * 90–100 çok kolay · 70–89 kolay · 50–69 orta güçlükte · 30–49 zor · 1–29 çok zor.
 *
 * A Turkish syllable has exactly one vowel, so counting vowels counts
 * syllables. English loanwords ("backlog", "sprint") are counted the same way;
 * the error is small and the thresholds were tuned on real lessons with it.
 */

const VOWELS = /[aeıioöuüâîûAEIİOÖUÜÂÎÛ]/g;
const WORD = /[\p{L}\p{N}]+(?:['’][\p{L}]+)?/gu;

/** Abbreviations whose dot does not end a sentence. */
const ABBREVIATIONS = ["vb.", "vs.", "örn.", "Örn.", "Dr.", "Prof.", "yy.", "bkz.", "Bkz.", "no.", "sf."];

export function words(text: string): string[] {
  return text.match(WORD) ?? [];
}

export function syllables(word: string): number {
  return Math.max(1, (word.match(VOWELS) ?? []).length);
}

/** Splits prose into sentences: . ! ? … followed by space and a capital, or the end. */
export function sentences(text: string): string[] {
  let guarded = text;
  ABBREVIATIONS.forEach((abbr, i) => {
    guarded = guarded.split(abbr).join(abbr.replace(".", `\u0000${i}`));
  });
  // A blank line ends a sentence too: a heading-like line or a formula has no full stop.
  return guarded
    .split(/\n\s*\n/)
    .flatMap((block) => block.split(/(?<=[.!?…])["”’)]*\s+(?=["“(]?[A-ZÇĞİÖŞÜ0-9])/u))
    .map((part) => part.replace(/\u0000\d+/g, "."))
    .map((part) => part.trim())
    .filter((part) => words(part).length > 0);
}

export interface ReadabilityReport {
  score: number;
  words: number;
  sentences: number;
  meanSentence: number;
  /** Sentences, with their word counts, that are longer than `long` words. */
  longest: { text: string; words: number }[];
}

export function atesman(text: string, long = 25): ReadabilityReport {
  const list = sentences(text);
  const allWords = list.flatMap(words);
  const syllableCount = allWords.reduce((sum, word) => sum + syllables(word), 0);
  const w = allWords.length || 1;
  const s = list.length || 1;
  const score = 198.825 - 40.175 * (syllableCount / w) - 2.61 * (w / s);
  return {
    score: Math.round(score * 10) / 10,
    words: allWords.length,
    sentences: list.length,
    meanSentence: Math.round((w / s) * 10) / 10,
    longest: list
      .map((sentence) => ({ text: sentence, words: words(sentence).length }))
      .filter((item) => item.words > long)
      .sort((a, b) => b.words - a.words),
  };
}

export function band(score: number): string {
  if (score >= 90) return "çok kolay";
  if (score >= 70) return "kolay";
  if (score >= 50) return "orta güçlükte";
  if (score >= 30) return "zor";
  return "çok zor";
}
