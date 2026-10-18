/**
 * The chosen role, in the browser.
 *
 * The head script in BaseLayout applies it before first paint
 * (`html[data-role]`); this store starts from that attribute and is the only
 * thing that changes it afterwards. No zod and no roles.ts here — this ships on
 * every page that shows a role.
 */
import { atom } from "nanostores";
import { ROLE_AUTO_KEY, ROLE_KEY, isRoleState, type RoleState } from "~/data/role-ids";

const root = () => document.documentElement;

function applied(): RoleState | null {
  if (typeof document === "undefined") return null;
  const value = root().dataset.role;
  return isRoleState(value) ? value : null;
}

/** null = not chosen yet: the map shows Keşif and the picker stays open. */
export const $role = atom<RoleState | null>(applied());

export function setRole(state: RoleState): void {
  root().dataset.role = state;
  delete root().dataset.roleAuto;
  try {
    localStorage.setItem(ROLE_KEY, state);
    localStorage.removeItem(ROLE_AUTO_KEY);
  } catch {
    // Private mode: the role still applies for this visit.
  }
  $role.set(state);
}

/** "Tamam" on the note that says the role was chosen for you. */
export function confirmAutoRole(): void {
  delete root().dataset.roleAuto;
  try {
    localStorage.removeItem(ROLE_AUTO_KEY);
  } catch {
    // Nothing to keep.
  }
}

let initialised = false;

export function initRole(): void {
  if (initialised || typeof window === "undefined") return;
  initialised = true;

  // `?rol=` has done its job in the head script; a reload or a copied URL
  // should not keep overriding a later choice.
  const url = new URL(window.location.href);
  if (url.searchParams.has("rol")) {
    url.searchParams.delete("rol");
    history.replaceState(history.state, "", url);
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== ROLE_KEY || !isRoleState(event.newValue)) return;
    root().dataset.role = event.newValue;
    $role.set(event.newValue);
  });
}
