import { test } from "node:test";
import assert from "node:assert/strict";
import { criticalPath } from "../src/lib/demos/critical-path";

// A textbook network: A(3) → B(2) → D(4); A → C(5) → D. Path A–C–D = 12 is critical; B has 3 days of slack.
const network = [
  { id: "A", label: "Kapsam", duration: 3 },
  { id: "B", label: "Tasarım", duration: 2, after: ["A"] },
  { id: "C", label: "Entegrasyon", duration: 5, after: ["A"] },
  { id: "D", label: "Test", duration: 4, after: ["B", "C"] },
];

test("forward and backward pass give the textbook numbers", () => {
  const { items, duration } = criticalPath(network);
  const by = Object.fromEntries(items.map((i) => [i.id, i]));
  assert.equal(duration, 12);
  assert.deepEqual([by.B!.es, by.B!.ef, by.B!.ls, by.B!.lf, by.B!.slack], [3, 5, 6, 8, 3]);
  assert.deepEqual([by.D!.es, by.D!.ef], [8, 12]);
  assert.deepEqual(items.filter((i) => i.critical).map((i) => i.id), ["A", "C", "D"]);
  assert.deepEqual(items.map((i) => i.depth), [0, 1, 1, 2]);
});

test("a loop and an unknown predecessor are refused", () => {
  assert.throws(() => criticalPath([{ id: "A", label: "", duration: 1, after: ["B"] }, { id: "B", label: "", duration: 1, after: ["A"] }]), /döngü/);
  assert.throws(() => criticalPath([{ id: "A", label: "", duration: 1, after: ["Z"] }]), /bilinmeyen/);
});
