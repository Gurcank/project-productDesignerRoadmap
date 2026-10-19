import { test } from "node:test";
import assert from "node:assert/strict";
import { evm, verdict } from "../src/lib/demos/evm";
import { CONE_STAGES, coneRange } from "../src/lib/demos/cone";

test("EVM gives the case book's week-7 numbers", () => {
  // docs/icerik/vaka.md: BAC 2.4M, PV 1.2M, EV 1.02M, AC 1.15M.
  const r = evm({ bac: 2_400_000, pv: 1_200_000, ev: 1_020_000, ac: 1_150_000 });
  assert.equal(r.sv, -180_000);
  assert.equal(r.cv, -130_000);
  assert.equal(r.spi, 0.85);
  assert.equal(r.cpi, 0.89);
  assert.equal(r.eac, 2_705_882);
  assert.equal(r.overrun, 305_882);
});

test("EVM refuses to divide by zero", () => {
  const r = evm({ bac: 100, pv: 0, ev: 0, ac: 0 });
  assert.equal(r.spi, null);
  assert.equal(r.cpi, null);
  assert.equal(r.eac, null);
  assert.equal(verdict(null, "takvim"), "Hesaplamak için değer gir.");
  assert.equal(verdict(0.85, "takvim"), "Takvimin gerisinde.");
  assert.equal(verdict(1.1, "bütçe"), "Bütçenin altında.");
  assert.equal(verdict(1, "bütçe"), "Bütçede planlandığı yerde.");
});

test("the cone is 16x wide at the start and closed at the end", () => {
  const first = coneRange(900_000, CONE_STAGES[0]!);
  assert.deepEqual(first, { low: 225_000, high: 3_600_000, spread: 16 });
  const req = coneRange(900_000, CONE_STAGES.find((s) => s.id === "gereksinim")!);
  assert.deepEqual([req.low, req.high], [603_000, 1_350_000]);
  assert.equal(coneRange(900_000, CONE_STAGES.at(-1)!).spread, 1);
  assert.equal(coneRange(0, CONE_STAGES[0]!).spread, 0);
});
