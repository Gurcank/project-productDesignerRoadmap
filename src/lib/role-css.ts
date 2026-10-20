/**
 * The stylesheet that makes role-specific markup work without JavaScript or a
 * flash (plan §4.2). Emitted once, inline, in BaseLayout's head.
 *
 * Every role-dependent fragment is rendered statically and tagged with the
 * states it belongs to: `data-for-role="product-manager product-owner"`. The
 * head script sets `html[data-role]` before first paint; these rules hide
 * every fragment that does not list the current state. With no role chosen —
 * or no JavaScript at all — the state is `none`.
 *
 * `data-off="…"` marks a planet as off the route for the listed states. The
 * rule only sets custom properties; GalaxyMap decides what they do.
 */
import { ROLE_STATES } from "~/data/role-ids";

/** What an off-route planet looks like, as properties GalaxyMap reads. */
const OFF_ROUTE = "--off-scale:.72;--off-filter:grayscale(.85) brightness(.72);--off-orbit:1px dashed var(--c-route-line)";

export function roleCss(): string {
  const rules: string[] = [
    `html:not([data-role]) [data-for-role]:not([data-for-role~="none"]){display:none!important}`,
  ];
  for (const state of ROLE_STATES) {
    rules.push(`html[data-role="${state}"] [data-for-role]:not([data-for-role~="${state}"]){display:none!important}`);
    rules.push(`html[data-role="${state}"] [data-off~="${state}"]{${OFF_ROUTE}}`);
    // Lenses: your own lens in the open, every other one in "Diğer roller".
    rules.push(
      `html[data-role="${state}"] .lenses__primary .lens:not([data-lens="${state}"]),` +
        `html[data-role="${state}"] .lenses__others .lens[data-lens="${state}"]{display:none!important}`,
    );
  }
  // No role chosen: nothing is "yours", so every lens waits in the group.
  rules.push(`html:not([data-role]) .lenses__primary .lens{display:none!important}`);
  return rules.join("\n");
}
