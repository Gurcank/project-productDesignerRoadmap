import { test } from "node:test";
import assert from "node:assert/strict";
import { rank, riceScore } from "../src/lib/demos/rice";

test("RICE multiplies reach, impact and confidence and divides by effort", () => {
  // Intercom's worked shape: 1,000 people × 2 × 80% ÷ 2 person-months = 800.
  assert.equal(riceScore({ reach: 1000, impact: 2, confidence: 0.8, effort: 2 }), 800);
  assert.equal(riceScore({ reach: 500, impact: 0.25, confidence: 1, effort: 0 }), 0, "no effort is not infinite value");
});

test("ranking orders by score and keeps ties stable", () => {
  const items = [
    { reach: 100, impact: 1, confidence: 1, effort: 1 },
    { reach: 400, impact: 1, confidence: 1, effort: 1 },
    { reach: 100, impact: 1, confidence: 1, effort: 1 },
  ];
  assert.deepEqual(rank(items), [1, 0, 2]);
});
