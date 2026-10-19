import { test } from "node:test";
import assert from "node:assert/strict";
import { normalQuantile, sampleSize } from "../src/lib/demos/ab-sample";

test("the normal quantile matches the familiar z values", () => {
  assert.ok(Math.abs(normalQuantile(0.975) - 1.959964) < 1e-5);
  assert.ok(Math.abs(normalQuantile(0.8) - 0.841621) < 1e-5);
  assert.ok(Math.abs(normalQuantile(0.01) + 2.326348) < 1e-5);
});

test("sample size reproduces Evan Miller's calculator default", () => {
  // Baseline 20%, minimum detectable effect 5 points absolute, α 5%, power 80% → 1,030 per variation.
  assert.equal(sampleSize({ baseline: 0.2, mde: 0.05, alpha: 0.05, power: 0.8 }).perVariation, 1030);
});

test("the case book's payment test needs about 2,950 per variation", () => {
  const r = sampleSize({ baseline: 0.78, mde: 0.03, alpha: 0.05, power: 0.8, dailyTraffic: 2300 });
  assert.ok(r.perVariation! >= 2900 && r.perVariation! <= 3000, String(r.perVariation));
  assert.equal(r.total, r.perVariation! * 2);
  assert.equal(r.days, Math.ceil(r.total! / 2300));
});

test("a smaller effect needs a bigger sample, and nonsense inputs give nothing", () => {
  const big = sampleSize({ baseline: 0.2, mde: 0.05, alpha: 0.05, power: 0.8 }).perVariation!;
  const small = sampleSize({ baseline: 0.2, mde: 0.02, alpha: 0.05, power: 0.8 }).perVariation!;
  assert.ok(small > big * 5);
  assert.equal(sampleSize({ baseline: 0.99, mde: 0.05, alpha: 0.05, power: 0.8 }).perVariation, null);
  assert.equal(sampleSize({ baseline: 0.2, mde: 0, alpha: 0.05, power: 0.8 }).perVariation, null);
});
