/**
 * The folders under src/ that hold step files, and the one origin each may
 * carry (ADR-019). Read by the content collection and by `npm run validate`, so
 * the build and its gate always look in the same places.
 *
 * - content/topics: generated from the material by `npm run import`; the
 *   importer owns the whole folder and deletes anything it did not write.
 * - authored/topics: steps written for the site; the importer never touches it.
 */
export const TOPIC_ROOTS = [
  { dir: "content/topics", origin: "material" },
  { dir: "authored/topics", origin: "new" },
] as const;
