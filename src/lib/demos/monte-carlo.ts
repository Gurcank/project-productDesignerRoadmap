/**
 * Monte Carlo "when will it be done?" forecast from throughput history
 * (ProKanban, Kanban Playbook 4.3). Each run draws a random past week's
 * throughput, subtracts it from the remaining items, and counts the weeks
 * until nothing is left. Thousands of runs give a distribution; the answer is
 * a percentile ("85% of runs finished in 7 weeks or fewer"), not a date.
 *
 * The random source is a seeded generator so the server-rendered numbers and
 * the tests are reproducible; the page re-runs with the same seed when the
 * inputs change.
 */

/** Mulberry32: a small, well-known seeded PRNG. Returns floats in [0, 1). */
export function seeded(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Forecast {
  /** weeks → how many runs finished in exactly that many weeks */
  histogram: Map<number, number>;
  runs: number;
  /** Smallest number of weeks within which p% of runs finished. */
  percentile: (p: number) => number;
}

/** A run that never finishes (all-zero history) is capped so the page cannot hang. */
const MAX_WEEKS = 260;

export function forecastWeeks(throughput: number[], remaining: number, runs = 5000, seed = 42): Forecast | null {
  const history = throughput.filter((n) => Number.isFinite(n) && n >= 0);
  if (!history.length || !history.some((n) => n > 0) || !(remaining > 0)) return null;
  const random = seeded(seed);
  const results: number[] = [];
  for (let r = 0; r < runs; r++) {
    let left = remaining;
    let weeks = 0;
    while (left > 0 && weeks < MAX_WEEKS) {
      left -= history[Math.floor(random() * history.length)]!;
      weeks++;
    }
    results.push(weeks);
  }
  results.sort((a, b) => a - b);
  const histogram = new Map<number, number>();
  for (const w of results) histogram.set(w, (histogram.get(w) ?? 0) + 1);
  return {
    histogram,
    runs,
    percentile: (p) => results[Math.min(results.length - 1, Math.ceil((p / 100) * results.length) - 1)]!,
  };
}
