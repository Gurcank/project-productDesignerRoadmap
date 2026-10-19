/**
 * How many people an A/B test needs, decided before it starts (Evan Miller,
 * "How Not To Run an A/B Test" and his Sample Size Calculator).
 *
 * For a conversion rate p and the smallest absolute lift δ worth detecting
 * (so the variant is p₂ = p + δ), each variation needs
 *
 *   n = ( z₁₋α/₂ · √(2p(1−p)) + z₁₋β · √(p(1−p) + p₂(1−p₂)) )² ÷ δ²
 *
 * which reproduces Miller's calculator: baseline 20%, δ 5 points, α 5%,
 * power 80% → 1,030 per variation. His rule of thumb, n ≈ 16σ²/δ², is the
 * same idea with the two z values rounded.
 */

export interface AbInput {
  /** Baseline conversion, 0–1. */
  baseline: number;
  /** Smallest absolute lift worth detecting, 0–1 (0.03 = three points). */
  mde: number;
  /** Two-sided significance level, e.g. 0.05. */
  alpha: number;
  /** Statistical power, e.g. 0.8. */
  power: number;
  /** People reaching the tested step per day, across both variations. */
  dailyTraffic?: number;
}

export interface AbResult {
  /** Per variation; null when the inputs cannot describe a test. */
  perVariation: number | null;
  total: number | null;
  /** Calendar days to reach the total at the given traffic. */
  days: number | null;
}

/** Inverse of the standard normal CDF (Acklam's rational approximation, |error| < 1.2e-9). */
export function normalQuantile(p: number): number {
  if (p <= 0 || p >= 1) return Number.NaN;
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const low = 0.02425;
  if (p < low) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0]! * q + c[1]!) * q + c[2]!) * q + c[3]!) * q + c[4]!) * q + c[5]!) / ((((d[0]! * q + d[1]!) * q + d[2]!) * q + d[3]!) * q + 1);
  }
  if (p > 1 - low) return -normalQuantile(1 - p);
  const q = p - 0.5;
  const r = q * q;
  return ((((((a[0]! * r + a[1]!) * r + a[2]!) * r + a[3]!) * r + a[4]!) * r + a[5]!) * q) /
    (((((b[0]! * r + b[1]!) * r + b[2]!) * r + b[3]!) * r + b[4]!) * r + 1);
}

export function sampleSize({ baseline: p, mde, alpha, power, dailyTraffic }: AbInput): AbResult {
  const p2 = p + mde;
  const valid = p > 0 && p < 1 && mde > 0 && p2 < 1 && alpha > 0 && alpha < 1 && power > 0 && power < 1;
  if (!valid) return { perVariation: null, total: null, days: null };
  const zAlpha = normalQuantile(1 - alpha / 2);
  const zBeta = normalQuantile(power);
  const n = (zAlpha * Math.sqrt(2 * p * (1 - p)) + zBeta * Math.sqrt(p * (1 - p) + p2 * (1 - p2))) ** 2 / mde ** 2;
  // Rounded the way Miller's calculator shows it (1,030.3 → 1,030).
  const perVariation = Math.round(n);
  const total = perVariation * 2;
  const days = dailyTraffic && dailyTraffic > 0 ? Math.ceil(total / dailyTraffic) : null;
  return { perVariation, total, days };
}
