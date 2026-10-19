import { test } from "node:test";
import assert from "node:assert/strict";
import { forecastWeeks, seeded } from "../src/lib/demos/monte-carlo";

// docs/icerik/vaka.md: the order team's last ten weeks.
const HISTORY = [4, 6, 3, 5, 7, 4, 5, 6, 2, 5];

test("the generator is reproducible", () => {
  const a = seeded(7);
  const b = seeded(7);
  assert.deepEqual([a(), a(), a()], [b(), b(), b()]);
});

test("a constant history gives a single, exact answer", () => {
  const f = forecastWeeks([5, 5, 5], 20)!;
  assert.equal(f.percentile(50), 4);
  assert.equal(f.percentile(95), 4);
  assert.deepEqual([...f.histogram], [[4, 5000]]);
});

test("percentiles grow with confidence and bracket the average-based guess", () => {
  const f = forecastWeeks(HISTORY, 30)!;
  const p50 = f.percentile(50);
  const p85 = f.percentile(85);
  const p95 = f.percentile(95);
  assert.ok(p50 <= p85 && p85 <= p95);
  // Average throughput is 4.7 a week: 30 items ≈ 6.4 weeks by the average.
  assert.ok(p50 >= 6 && p50 <= 7, `p50 = ${p50}`);
  assert.ok(p85 >= 7 && p85 <= 8, `p85 = ${p85}`);
  const total = [...f.histogram.values()].reduce((a, b) => a + b, 0);
  assert.equal(total, f.runs);
});

test("unusable input returns null instead of looping", () => {
  assert.equal(forecastWeeks([], 10), null);
  assert.equal(forecastWeeks([0, 0], 10), null);
  assert.equal(forecastWeeks(HISTORY, 0), null);
});
