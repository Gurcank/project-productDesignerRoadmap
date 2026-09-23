/**
 * Which material sections carry a diagram.
 *
 * Kept apart from index.ts because `npm run validate` runs under tsx, which
 * cannot load .astro components — but it still has to check that every section
 * a diagram is bound to actually exists.
 */
export const DIAGRAM_SECTIONS = [
  "1.3",
  "1.4",
  "3.7",
  "4.2",
  "5.2",
  "8.10",
  "14.2",
  "15.3",
  "16.2",
  "17.1",
] as const;

export type DiagramSection = (typeof DIAGRAM_SECTIONS)[number];
