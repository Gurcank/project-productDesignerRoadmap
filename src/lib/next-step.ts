/**
 * "Sıradaki adımın" — the one lesson the home page offers, per route.
 *
 * Pure (no store, no storage) so the rules are tested in Node and the browser
 * bundle stays small. The order of preference:
 *
 * 1. The lesson you last opened, if it is on this route and not done ("devam").
 * 2. Otherwise the next undone core step (temel or önerilen), scanning forward
 *    from where you were and then wrapping — locality first, skipped steps later.
 * 3. Only when every core step is done, the next optional one.
 * 4. Nothing left: the route is finished.
 */
import type { SeqStep } from "./role-payload";

export type NextKind = "basla" | "devam" | "sirada" | "istege" | "bitti";

export interface NextStep {
  id?: string;
  kind: NextKind;
}

export function nextStep(
  seq: readonly SeqStep[],
  isDone: (id: string) => boolean,
  last?: string | null,
): NextStep {
  if (seq.length === 0) return { kind: "bitti" };

  const at = last ? seq.findIndex((step) => step.id === last) : -1;
  if (at >= 0 && !isDone(seq[at]!.id)) return { id: seq[at]!.id, kind: "devam" };

  const scan = (accept: (step: SeqStep) => boolean): SeqStep | undefined => {
    const start = Math.max(at, 0);
    for (let k = 0; k < seq.length; k++) {
      const step = seq[(start + k) % seq.length]!;
      if (accept(step) && !isDone(step.id)) return step;
    }
    return undefined;
  };

  const core = scan((step) => step.tier !== "i");
  if (core) return { id: core.id, kind: seq.some((step) => isDone(step.id)) ? "sirada" : "basla" };

  const optional = scan((step) => step.tier === "i");
  return optional ? { id: optional.id, kind: "istege" } : { kind: "bitti" };
}

export interface RouteProgress {
  coreDone: number;
  coreTotal: number;
  optionalDone: number;
  optionalTotal: number;
}

/** Core = temel + önerilen: the percentage a role is measured by. */
export function routeProgress(seq: readonly SeqStep[], isDone: (id: string) => boolean): RouteProgress {
  const result: RouteProgress = { coreDone: 0, coreTotal: 0, optionalDone: 0, optionalTotal: 0 };
  for (const step of seq) {
    const done = isDone(step.id);
    if (step.tier === "i") {
      result.optionalTotal += 1;
      if (done) result.optionalDone += 1;
    } else {
      result.coreTotal += 1;
      if (done) result.coreDone += 1;
    }
  }
  return result;
}
