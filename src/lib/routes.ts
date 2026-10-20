/**
 * Every route compiled against this build's steps: the seven roles, then Keşif.
 * Pages call this; the compiler itself is the pure role-path.ts.
 */
import { ROUTE_ORDER } from "~/data/categories";
import { ROLES, type Tier } from "~/data/roles";
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

export interface StepTier {
  state: RoleState;
  tier: Tier;
}

/** Topic id → every route that takes it, with the tier it has there. */
export async function getStepTiers(): Promise<Map<string, StepTier[]>> {
  const map = new Map<string, StepTier[]>();
  for (const route of await getRoutes()) {
    if (route.state === "all") continue;
    for (const step of route.steps) map.set(step.id, [...(map.get(step.id) ?? []), { state: route.state, tier: step.tier }]);
  }
  return map;
}

/** Group role states that share a value, so one span serves all of them. */
export function groupStates<T>(items: { state: RoleState; value: T }[], key: (value: T) => string) {
  const groups = new Map<string, { value: T; states: RoleState[] }>();
  for (const item of items) {
    const k = key(item.value);
    const group = groups.get(k) ?? { value: item.value, states: [] };
    group.states.push(item.state);
    groups.set(k, group);
  }
  return [...groups.values()];
}
