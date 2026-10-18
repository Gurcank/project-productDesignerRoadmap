/**
 * Every route compiled against this build's steps: the seven roles, then Keşif.
 * Pages call this; the compiler itself is the pure role-path.ts.
 */
import { ROUTE_ORDER } from "~/data/categories";
import { ROLES } from "~/data/roles";
import type { RoleState } from "~/data/role-ids";
import { getPublishedCategories, topicSlug } from "~/lib/content";
import { compileExplorePath, compileRolePath, type RolePath } from "~/lib/role-path";

let cached: Promise<RolePath[]> | null = null;

export function getRoutes(): Promise<RolePath[]> {
  cached ??= (async () => {
    const published = await getPublishedCategories();
    const topicsByCategory = new Map(published.map(({ category, topics }) => [category.slug, topics.map(topicSlug)]));
    const order = ROUTE_ORDER.map((category) => category.slug);
    return [...ROLES.map((role) => compileRolePath(role, topicsByCategory, order)), compileExplorePath(order, topicsByCategory)];
  })();
  return cached;
}

export async function getRoute(state: RoleState): Promise<RolePath> {
  const route = (await getRoutes()).find((path) => path.state === state);
  if (!route) throw new Error(`Bilinmeyen yol: ${state}`);
  return route;
}
