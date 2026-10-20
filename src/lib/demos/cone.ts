/**
 * The cone of uncertainty (McConnell, Construx): how far off an estimate made
 * by a skilled estimator can be at each point of a project. The factors are
 * read off Construx's figure; the cone is the best case — a project that does
 * not make decisions does not narrow it, whatever the calendar says.
 *
 * An estimate of 900,000 at "initial concept" really says "somewhere between
 * 225,000 and 3,600,000"; the same number after the requirements are complete
 * says "between 600,000 and 1,350,000".
 */

export interface ConeStage {
  id: string;
  label: string;
  low: number;
  high: number;
}

export const CONE_STAGES: readonly ConeStage[] = [
  { id: "fikir", label: "İlk fikir", low: 0.25, high: 4 },
  { id: "tanim", label: "Onaylı ürün tanımı", low: 0.5, high: 2 },
  { id: "gereksinim", label: "Gereksinimler tamam", low: 0.67, high: 1.5 },
  { id: "arayuz", label: "Arayüz tasarımı tamam", low: 0.8, high: 1.25 },
  { id: "bitti", label: "İş bitti", low: 1, high: 1 },
];

export interface ConeRange {
  low: number;
  high: number;
  /** high ÷ low: 16 at the first stage, 1 when the work is done. */
  spread: number;
}

export function coneRange(estimate: number, stage: ConeStage): ConeRange {
  if (!(estimate > 0)) return { low: 0, high: 0, spread: 0 };
  return {
    low: Math.round(estimate * stage.low),
    high: Math.round(estimate * stage.high),
    spread: Math.round((stage.high / stage.low) * 10) / 10,
  };
}
