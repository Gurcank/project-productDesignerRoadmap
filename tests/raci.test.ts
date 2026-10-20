import { test } from "node:test";
import assert from "node:assert/strict";
import { checkRaci, describeIssues } from "../src/lib/demos/raci";

test("a clean row has no issues", () => {
  assert.deepEqual(checkRaci([["R", "A", "C", "I"]]), []);
});

test("missing and doubled accountability are both caught", () => {
  assert.deepEqual(checkRaci([["R", "C", "", "I"]]), [{ row: 0, kind: "no-a" }]);
  assert.deepEqual(checkRaci([["R", "A", "A", ""]]), [{ row: 0, kind: "many-a" }]);
});

test("a task nobody does is caught, and issues keep row order", () => {
  const issues = checkRaci([
    ["R", "A", "", ""],
    ["", "A", "C", "I"],
    ["C", "C", "I", ""],
  ]);
  assert.deepEqual(issues, [
    { row: 1, kind: "no-r" },
    { row: 2, kind: "no-a" },
    { row: 2, kind: "no-r" },
  ]);
  assert.equal(describeIssues(issues, ["X", "Y", "Z"])[0], "Y: işi yapan (R) yok.");
});
