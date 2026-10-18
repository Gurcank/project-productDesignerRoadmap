/**
 * Role ids and labels — the only role module a browser script may import.
 *
 * Kept tiny on purpose: it ships to every page (the role picker, the map, the
 * head script's id list). The paths and the prose live in roles.ts, which is
 * build-time only.
 *
 * Ids are a storage contract like slugs (SPEC §4): `pdr.role.v1` holds one, and
 * shared links carry one in `?rol=`. Never rename a shipped id.
 */
export const ROLE_IDS = [
  "product-designer",
  "product-manager",
  "product-owner",
  "project-manager",
  "scrum-master",
  "business-analyst",
  "ux-researcher",
] as const;

export type RoleId = (typeof ROLE_IDS)[number];

/** "all" is Keşif modu: every category, no tiers. */
export type RoleState = RoleId | "all";

export const ROLE_STATES: readonly RoleState[] = [...ROLE_IDS, "all"];

/** Preference key, separate from progress so a role switch never touches it. */
export const ROLE_KEY = "pdr.role.v1";

/** Set while the role was chosen for the reader (existing progress → PD), not by them. */
export const ROLE_AUTO_KEY = "pdr.role.auto";

export const ROLE_LABEL: Record<RoleState, { name: string; tr: string }> = {
  "product-designer": { name: "Product Designer", tr: "Ürün Tasarımcısı" },
  "product-manager": { name: "Product Manager", tr: "Ürün Yöneticisi" },
  "product-owner": { name: "Product Owner", tr: "Ürün Sahibi" },
  "project-manager": { name: "Project Manager", tr: "Proje Yöneticisi" },
  "scrum-master": { name: "Scrum Master", tr: "Çevik koç" },
  "business-analyst": { name: "Business Analyst", tr: "İş Analisti" },
  "ux-researcher": { name: "UX Researcher", tr: "Kullanıcı Araştırmacısı" },
  all: { name: "Keşif modu", tr: "Tüm harita, rol yok" },
};

export function isRoleState(value: unknown): value is RoleState {
  return typeof value === "string" && (ROLE_STATES as readonly string[]).includes(value);
}
