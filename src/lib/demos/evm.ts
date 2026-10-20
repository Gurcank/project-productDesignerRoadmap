/**
 * Earned value management, the four numbers a status report needs (Watt,
 * Project Management, ch. 12).
 *
 *   PV  planned value — budget of the work that should be done by now
 *   EV  earned value  — budget of the work that is actually done
 *   AC  actual cost   — what was really spent on it
 *
 *   SV = EV − PV   (negative: behind schedule)    SPI = EV ÷ PV (< 1: behind)
 *   CV = EV − AC   (negative: over budget)        CPI = EV ÷ AC (< 1: over budget)
 *
 * The estimate at completion assumes today's cost efficiency continues:
 * EAC = AC + (BAC − EV) ÷ CPI, which is the same as BAC ÷ CPI.
 */

export interface EvmInput {
  bac: number;
  pv: number;
  ev: number;
  ac: number;
}

export interface EvmResult {
  sv: number;
  cv: number;
  spi: number | null;
  cpi: number | null;
  eac: number | null;
  /** EAC − BAC: how much more (positive) the project is heading to cost. */
  overrun: number | null;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

export function evm({ bac, pv, ev, ac }: EvmInput): EvmResult {
  const spi = pv > 0 ? round2(ev / pv) : null;
  const cpiExact = ac > 0 ? ev / ac : null;
  const eac = cpiExact && cpiExact > 0 ? Math.round(ac + (bac - ev) / cpiExact) : null;
  return {
    sv: ev - pv,
    cv: ev - ac,
    spi,
    cpi: cpiExact === null ? null : round2(cpiExact),
    eac,
    overrun: eac === null ? null : eac - bac,
  };
}

/** One sentence per index, in the words a sponsor uses. */
export function verdict(index: number | null, kind: "takvim" | "bütçe"): string {
  if (index === null) return "Hesaplamak için değer gir.";
  if (Math.abs(index - 1) < 0.005) return kind === "takvim" ? "Takvimde planlandığı yerde." : "Bütçede planlandığı yerde.";
  if (kind === "takvim") return index < 1 ? "Takvimin gerisinde." : "Takvimin önünde.";
  return index < 1 ? "Bütçeyi aşıyor." : "Bütçenin altında.";
}
