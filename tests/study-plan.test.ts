import { test } from "node:test";
import assert from "node:assert/strict";
import { planWeeks } from "../src/lib/study-plan";

const steps = (...minutes: number[]) => minutes.map((m, i) => ({ id: `s${i}`, minutes: m }));

test("lessons fill a week up to the budget and never split", () => {
  const weeks = planWeeks(steps(40, 40, 30, 10), 100);
  assert.deepEqual(
    weeks.map((w) => [w.week, w.minutes, w.steps.map((s) => s.id)]),
    [
      [1, 80, ["s0", "s1"]],
      [2, 40, ["s2", "s3"]],
    ],
  );
});

test("a lesson longer than a week gets a week of its own", () => {
  const weeks = planWeeks(steps(20, 130, 10), 100);
  assert.deepEqual(weeks.map((w) => w.steps.length), [1, 1, 1]);
});

test("an empty route has no weeks, and a non-positive budget is refused", () => {
  assert.deepEqual(planWeeks([], 100), []);
  assert.throws(() => planWeeks(steps(10), 0));
});
