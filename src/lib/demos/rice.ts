/**
 * RICE (Intercom): Reach × Impact × Confidence ÷ Effort.
 *
 * Reach is people per period, impact uses Intercom's fixed scale (3 = massive,
 * 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal), confidence is a share
 * (100 / 80 / 50 %), effort is person-months. The score is a ranking aid, not
 * a decision: it makes the assumptions visible so they can be argued about.
 */

export const IMPACT_SCALE = [
  { value: 3, label: "3 · çok büyük" },
  { value: 2, label: "2 · büyük" },
  { value: 1, label: "1 · orta" },
  { value: 0.5, label: "0,5 · küçük" },
  { value: 0.25, label: "0,25 · çok küçük" },
] as const;

export const CONFIDENCE_SCALE = [
  { value: 1, label: "%100 · yüksek" },
  { value: 0.8, label: "%80 · orta" },
  { value: 0.5, label: "%50 · düşük" },
] as const;

export interface RiceInput {
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
}

export function riceScore({ reach, impact, confidence, effort }: RiceInput): number {
  if (!(effort > 0) || !(reach >= 0)) return 0;
  return Math.round((reach * impact * confidence) / effort);
}

/** Indexes of `items` from the highest score to the lowest; ties keep their order. */
export function rank(items: RiceInput[]): number[] {
  return items
    .map((item, index) => ({ index, score: riceScore(item) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((entry) => entry.index);
}
