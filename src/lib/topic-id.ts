/**
 * How a step's file name becomes its slug, and slug + category its id.
 *
 * The id is the progress key and the URL path (SPEC §4), so this rule is a
 * storage contract. It lives here, free of Astro imports, so the pages
 * (content.ts) and the Node scripts (validate, tests) run the same copy — a
 * rule duplicated between the site and its validator drifts silently, as
 * SECTION_REF_PATTERN once did.
 */

/** "05-pull-request.md" or "content/topics/git/05-pull-request" → "pull-request". */
export function slugFromTopicName(name: string): string {
  const base = name.split("/").pop() ?? name;
  return base.replace(/\.md$/, "").replace(/^\d+-/, "");
}

/** "git-ve-github/pull-request": the URL path and the progress key. */
export function makeTopicId(category: string, slug: string): string {
  return `${category}/${slug}`;
}
