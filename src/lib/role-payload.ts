/**
 * The compact form of every route that the home page ships to the browser.
 *
 * The map and the mission card need each route's order and tiers at topic
 * level, but not the prose in roles.ts. Ids are listed once; each route is a
 * list of indexes into them plus one tier letter per step — the whole payload
 * for 8 routes is a few KB, counted by `npm run budget` as data, not JS.
 *
 * Decoding is the only part that runs in the browser; it imports nothing.
 */
import type { RoleState } from "../data/role-ids";
import type { RolePath } from "./role-path";

export type TierCode = "t" | "o" | "i";

export interface SeqStep {
  id: string;
  tier: TierCode;
}

export interface RolePayload {
  v: 1;
  ids: string[];
  roles: Partial<Record<RoleState, { seq: number[]; tiers: string }>>;
}

const CODE: Record<string, TierCode> = { temel: "t", onerilen: "o", "istege-bagli": "i" };

export function encodeRolePayload(paths: readonly RolePath[]): RolePayload {
  const ids: string[] = [];
  const index = new Map<string, number>();
  const roles: RolePayload["roles"] = {};

  for (const path of paths) {
    const seq: number[] = [];
    let tiers = "";
    for (const step of path.steps) {
      let at = index.get(step.id);
      if (at === undefined) {
        at = ids.push(step.id) - 1;
        index.set(step.id, at);
      }
      seq.push(at);
      tiers += CODE[step.tier];
    }
    roles[path.state] = { seq, tiers };
  }

  return { v: 1, ids, roles };
}

export function decodeRoute(payload: RolePayload, state: RoleState): SeqStep[] {
  const route = payload.roles[state];
  if (!route) return [];
  return route.seq.map((at, i) => ({ id: payload.ids[at]!, tier: (route.tiers[i] ?? "t") as TierCode }));
}
