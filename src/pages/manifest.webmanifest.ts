/**
 * The web app manifest, built from the content so its numbers never go stale
 * (the static file said "214 adım" long after there were 234).
 */
import type { APIRoute } from "astro";
import { getPublishedCategories } from "~/lib/content";
import { ROLE_IDS } from "~/data/role-ids";

export const GET: APIRoute = async () => {
  const published = await getPublishedCategories();
  const lessons = published.reduce((sum, entry) => sum + entry.topics.length, 0);
  const manifest = {
    name: "SeeYourNextStep",
    short_name: "NextStep",
    description: `Ürün ekibindeki roller için öğrenme haritası — ${ROLE_IDS.length} rol yolu, ${published.length} kategori, ${lessons} ders.`,
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "tr",
    dir: "ltr",
    background_color: "#080e23",
    theme_color: "#080e23",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
};
