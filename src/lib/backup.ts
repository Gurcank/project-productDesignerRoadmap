/**
 * The backup file: progress v1 plus the reader's preferences.
 *
 * The role lives in its own key (role-ids.ts), not in the progress record, so
 * a backup adds it as `prefs` beside the v1 fields. That keeps both directions
 * working without a version bump: the progress schema strips unknown keys, so
 * an older build reads a new backup (and drops `prefs`), and this build reads
 * an old backup (there is simply no role to restore).
 */
import { exportJson, importJson } from "~/lib/progress";
import { isRoleState } from "~/data/role-ids";
import { $role, setRole } from "~/lib/role";

export function exportBackup(): string {
  const role = $role.get();
  if (!role) return exportJson();
  return JSON.stringify({ ...JSON.parse(exportJson()), prefs: { role } }, null, 2);
}

/** Returns an error message, or null when the import succeeded. */
export function importBackup(text: string): string | null {
  const error = importJson(text);
  if (error) return error;
  const role = (JSON.parse(text) as { prefs?: { role?: unknown } }).prefs?.role;
  if (isRoleState(role)) setRole(role);
  return null;
}
