/**
 * Role routes, "Sıradaki adımın" and the backup format — the three things a
 * role switch must never get wrong: what the map shows, where the button
 * points, and whether a reader's progress survives.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { ROUTE_ORDER } from "../src/data/categories";
import { ROLE_IDS, ROLE_STATES, isRoleState } from "../src/data/role-ids";
import { ROLES, type RoleDefinition } from "../src/data/roles";
import { compileExplorePath, compileRolePath, nextInPath, type TopicsByCategory } from "../src/lib/role-path";
import { decodeRoute, encodeRolePayload, type SeqStep } from "../src/lib/role-payload";
import { nextStep, routeProgress } from "../src/lib/next-step";
import { parseProgress } from "../src/lib/progress";

const ROOT = path.resolve(import.meta.dirname, "..");
const frozen = JSON.parse(readFileSync(path.join(ROOT, "src/data/frozen-topic-ids.json"), "utf8")) as { ids: string[] };
const order = ROUTE_ORDER.map((category) => category.slug);

// Step order inside a category does not matter for these checks.
const realTopics: TopicsByCategory = (() => {
  const map = new Map<string, string[]>();
  for (const id of frozen.ids) {
    const [category, slug] = id.split("/") as [string, string];
    map.set(category, [...(map.get(category) ?? []), slug]);
  }
  return map;
})();

const tiny: TopicsByCategory = new Map([
  ["a", ["a1", "a2"]],
  ["b", ["b1"]],
]);
const role = (path: RoleDefinition["path"]): RoleDefinition => ({ id: "product-manager", summary: "", focus: "", path });

test("every role has exactly one route and every route compiles", () => {
  assert.deepEqual(ROLES.map((r) => r.id).sort(), [...ROLE_IDS].sort());
  for (const definition of ROLES) {
    const route = compileRolePath(definition, realTopics, order);
    assert.ok(route.steps.length > 0, definition.id);
    assert.equal(new Set(route.steps.map((step) => step.id)).size, route.steps.length, `${definition.id}: tekrar eden adım`);
  }
});

test("a route keeps pending stops but gives them no steps", () => {
  const route = compileRolePath(role([{ category: "b", tier: "temel" }, { category: "c", tier: "onerilen" }]), tiny, ["a", "b", "c"]);
  assert.deepEqual(route.stops.map((stop) => [stop.category, stop.position, stop.published]), [
    ["b", 1, true],
    ["c", 2, false],
  ]);
  assert.deepEqual(route.steps.map((step) => step.id), ["b/b1"]);
  assert.deepEqual(route.offPath, ["a"]);
});

test("topic overrides change a tier or drop the step", () => {
  const route = compileRolePath(role([{ category: "a", tier: "temel", topics: { a1: "istege-bagli", a2: "atla" } }]), tiny, ["a", "b"]);
  assert.deepEqual(route.steps, [{ id: "a/a1", category: "a", tier: "istege-bagli" }]);
});

test("unknown categories, duplicate stops and unknown steps throw", () => {
  assert.throws(() => compileRolePath(role([{ category: "x", tier: "temel" }]), tiny, ["a", "b"]));
  assert.throws(() => compileRolePath(role([{ category: "a", tier: "temel" }, { category: "a", tier: "temel" }]), tiny, ["a", "b"]));
  assert.throws(() => compileRolePath(role([{ category: "a", tier: "temel", topics: { nope: "temel" } }]), tiny, ["a", "b"]));
});

test("Keşif visits every category in route order", () => {
  const route = compileExplorePath(order, realTopics);
  assert.equal(route.stops.length, order.length);
  assert.equal(route.steps.length, frozen.ids.length);
  assert.equal(nextInPath(route, route.steps[0]!.id)?.id, route.steps[1]!.id);
  assert.equal(nextInPath(route, route.steps.at(-1)!.id), null);
});

test("the payload round-trips every route", () => {
  const routes = [...ROLES.map((r) => compileRolePath(r, realTopics, order)), compileExplorePath(order, realTopics)];
  const payload = encodeRolePayload(routes);
  for (const route of routes) {
    const decoded = decodeRoute(payload, route.state);
    assert.deepEqual(decoded.map((step) => step.id), route.steps.map((step) => step.id));
    assert.deepEqual(
      decoded.map((step) => step.tier),
      route.steps.map((step) => ({ temel: "t", onerilen: "o", "istege-bagli": "i" })[step.tier]),
    );
  }
  assert.equal(payload.ids.length, frozen.ids.length, "her id bir kez listelenir");
});

// ------------------------------------------------------------- next step
const seq: SeqStep[] = [
  { id: "c/1", tier: "t" },
  { id: "c/2", tier: "o" },
  { id: "c/3", tier: "i" },
  { id: "c/4", tier: "t" },
];
const doneSet = (...ids: string[]) => (id: string) => ids.includes(id);

test("first visit starts at the first core step", () => {
  assert.deepEqual(nextStep(seq, doneSet()), { id: "c/1", kind: "basla" });
});

test("an unfinished last lesson on the route is resumed", () => {
  assert.deepEqual(nextStep(seq, doneSet("c/1"), "c/3"), { id: "c/3", kind: "devam" });
});

test("after a finished lesson the scan moves forward, skipping optional steps", () => {
  assert.deepEqual(nextStep(seq, doneSet("c/1", "c/2"), "c/2"), { id: "c/4", kind: "sirada" });
});

test("the scan wraps to core steps skipped earlier", () => {
  assert.deepEqual(nextStep(seq, doneSet("c/2", "c/4"), "c/4"), { id: "c/1", kind: "sirada" });
});

test("a last lesson off the route is ignored", () => {
  assert.deepEqual(nextStep(seq, doneSet("c/1"), "other/x"), { id: "c/2", kind: "sirada" });
});

test("optional steps come only after every core step", () => {
  assert.deepEqual(nextStep(seq, doneSet("c/1", "c/2", "c/4")), { id: "c/3", kind: "istege" });
  assert.deepEqual(nextStep(seq, doneSet("c/1", "c/2", "c/3", "c/4")), { kind: "bitti" });
  assert.deepEqual(nextStep([], doneSet()), { kind: "bitti" });
});

test("route progress counts core and optional apart", () => {
  assert.deepEqual(routeProgress(seq, doneSet("c/1", "c/3")), { coreDone: 1, coreTotal: 3, optionalDone: 1, optionalTotal: 1 });
});

// ---------------------------------------------------------------- backup
const v1 = {
  version: 1,
  updatedAt: "2026-10-01T10:00:00.000Z",
  topics: { "git-ve-github/temel-kavramlar": { done: true, at: "2026-10-01T10:00:00.000Z" } },
  checklists: {},
  last: { topic: "git-ve-github/temel-kavramlar", at: "2026-10-01T10:00:00.000Z" },
};

test("an old backup (no prefs) still restores", () => {
  assert.deepEqual(parseProgress(v1), v1);
});

test("a new backup restores on the v1 schema, prefs stripped and progress untouched", () => {
  const parsed = parseProgress({ ...v1, prefs: { role: "product-manager" } });
  assert.deepEqual(parsed, v1);
});

test("role ids are recognised and nothing else is", () => {
  for (const state of ROLE_STATES) assert.ok(isRoleState(state));
  for (const bad of ["", "pm", "Product-Manager", null, 3, undefined]) assert.equal(isRoleState(bad), false);
});
