import { getCollection, type CollectionEntry } from "astro:content";
import { CATEGORIES, CATEGORY_BY_SLUG, type Category } from "~/data/categories";

export type TopicEntry = CollectionEntry<"topics">;

/** File name carries the order ("05-pull-request..."); the URL should not. */
export function topicSlug(entry: TopicEntry): string {
  const base = entry.id.split("/").pop() ?? entry.id;
  return base.replace(/^\d+-/, "");
}

/** Progress key and URL path are the same string, so ids stay readable. */
export function topicId(entry: TopicEntry): string {
  return `${entry.data.category}/${topicSlug(entry)}`;
}

export function topicHref(entry: TopicEntry): string {
  return `/${topicId(entry)}/`;
}

export async function getTopics(categorySlug: string): Promise<TopicEntry[]> {
  const topics = await getCollection("topics", ({ data }) => data.category === categorySlug);
  return topics.sort((a, b) => a.data.order - b.data.order);
}

/** Categories that actually have imported content — the rest are not routed yet. */
export async function getPublishedCategories(): Promise<{ category: Category; topics: TopicEntry[] }[]> {
  const all = await getCollection("topics");
  const byCategory = new Map<string, TopicEntry[]>();

  for (const entry of all) {
    const list = byCategory.get(entry.data.category) ?? [];
    list.push(entry);
    byCategory.set(entry.data.category, list);
  }

  return CATEGORIES.filter((category) => byCategory.has(category.slug))
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      category,
      topics: (byCategory.get(category.slug) ?? []).sort((a, b) => a.data.order - b.data.order),
    }));
}

export function requireCategory(slug: string): Category {
  const category = CATEGORY_BY_SLUG.get(slug);
  if (!category) throw new Error(`Bilinmeyen kategori: ${slug}`);
  return category;
}

/** Rough reading time; the material's own pace is 3-5 cards a day. */
export function estimateMinutes(cardCount: number): number {
  return Math.max(2, Math.round(cardCount * 1.5));
}

/**
 * Reading time for a topic. Imported pages are priced by term card, because
 * that is the unit the material is studied in. Pages written for this site have
 * no cards, so they fall back to word count at ~180 words a minute — without
 * this they all reported the 2-minute floor.
 */
export function topicMinutes(entry: TopicEntry): number {
  if (entry.data.cardCount > 0) return estimateMinutes(entry.data.cardCount);
  const words = (entry.body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 180));
}

/** "~2 saat" reads fine; "~0 saat" does not. */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `~${minutes} dk`;
  return `~${Math.round(minutes / 60)} saat`;
}
