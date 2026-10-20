/**
 * Shared helpers for the diagram primitives.
 *
 * SVG text does not wrap, and measuring it needs a browser. Labels are wrapped
 * at build time against an average glyph width for Atkinson Hyperlegible Next
 * (≈0.56 em). It is an estimate, so every box keeps a margin; a label that
 * cannot fit in the lines allowed breaks the build and names itself, rather
 * than shipping text that runs out of its box.
 */

export const CHAR = { label: 7.4, sub: 6.3 } as const;

export type Tone = "plain" | "accent" | "progress";

export const boxClass = (tone: Tone = "plain") =>
  tone === "accent" ? "dg-box dg-box--accent" : tone === "progress" ? "dg-box dg-box--progress" : "dg-box";

/** Word-wraps `text` into lines no wider than `width` px; throws past `maxLines`. */
export function wrap(text: string, width: number, kind: keyof typeof CHAR = "label", maxLines = 2): string[] {
  const perLine = Math.max(4, Math.floor(width / CHAR[kind]));
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const next = line ? `${line} ${word}` : word;
    if (next.length <= perLine) line = next;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines || lines.some((l) => l.length > perLine)) {
    throw new Error(`Diyagram etiketi sığmıyor (${width}px, ${maxLines} satır): "${text}"`);
  }
  return lines;
}

/** Fits the largest number of characters for a label in `width` px. */
export const fits = (text: string, width: number, kind: keyof typeof CHAR = "label") => text.length * CHAR[kind] <= width;
