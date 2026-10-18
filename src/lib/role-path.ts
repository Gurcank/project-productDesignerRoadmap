/**
 * Compiles a role's path (src/data/roles.ts) against the steps that exist.
 *
 * Pure and free of Astro imports, so the pages, `npm run validate` and the tests
 * run the same copy. Imports stay relative for the same reason section-refs'
 * do: Node scripts load this without the Vite alias.
 *
 * A category on a path with no steps yet is kept as a stop (the map draws it as
 * a pending planet with its route number) but contributes no steps, so
 * "Sıradaki adımın" never points at a page that does not exist.
 */
import type { RoleState } from "../data/role-ids";
import type { RoleDefinition, Tier } from "../data/roles";

export interface RoleStep {
  /** `category/slug` — the URL path and the progress key. */
  id: string;
  category: string;
  tier: Tier;
}

export interface RoleStop {
  category: string;
  tier: Tier;
  /** 1-based number along this route, pending stops included. */
  position: number;
  /** False while the category has no steps. */
  published: boolean;
  steps: RoleStep[];
}

export interface RolePath {
  state: RoleState;
  stops: RoleStop[];
  steps: RoleStep[];
  /** Categories this route does not visit. */
  offPath: string[];
}

/** Category slug → its step slugs, in reading order. */
export type TopicsByCategory = ReadonlyMap<string, readonly string[]>;

export function compileRolePath(
  role: RoleDefinition,
  topicsByCategory: TopicsByCategory,
  allCategories: readonly string[],
): RolePath {
  const known = new Set(allCategories);
  const seen = new Set<string>();
  const stops: RoleStop[] = [];

  for (const entry of role.path) {
    if (!known.has(entry.category)) throw new Error(`${role.id}: bilinmeyen kategori "${entry.category}"`);
    if (seen.has(entry.category)) throw new Error(`${role.id}: "${entry.category}" yolda iki kez`);
    seen.add(entry.category);

    const slugs = topicsByCategory.get(entry.category) ?? [];
    const overrides = entry.topics ?? {};
    if (slugs.length > 0) {
      const present = new Set(slugs);
      for (const slug of Object.keys(overrides)) {
        if (!present.has(slug)) throw new Error(`${role.id}: "${entry.category}" içinde "${slug}" adımı yok`);
      }
    }

    const steps: RoleStep[] = [];
    for (const slug of slugs) {
      const tier = overrides[slug] ?? entry.tier;
      if (tier === "atla") continue;
      steps.push({ id: `${entry.category}/${slug}`, category: entry.category, tier });
    }

    stops.push({ category: entry.category, tier: entry.tier, position: stops.length + 1, published: slugs.length > 0, steps });
  }

  return {
    state: role.id,
    stops,
    steps: stops.flatMap((stop) => stop.steps),
    offPath: allCategories.filter((slug) => !seen.has(slug)),
  };
}

/** Keşif modu: every category in route order, no tiers to show (all count as core). */
export function compileExplorePath(order: readonly string[], topicsByCategory: TopicsByCategory): RolePath {
  const stops: RoleStop[] = order.map((category, index) => {
    const slugs = topicsByCategory.get(category) ?? [];
    return {
      category,
      tier: "temel",
      position: index + 1,
      published: slugs.length > 0,
      steps: slugs.map((slug) => ({ id: `${category}/${slug}`, category, tier: "temel" as const })),
    };
  });
  return { state: "all", stops, steps: stops.flatMap((stop) => stop.steps), offPath: [] };
}

/** The step after `topicId` on this route, ignoring progress; null at the end or off-route. */
export function nextInPath(path: RolePath, topicId: string): RoleStep | null {
  const index = path.steps.findIndex((step) => step.id === topicId);
  return index >= 0 ? (path.steps[index + 1] ?? null) : null;
}
