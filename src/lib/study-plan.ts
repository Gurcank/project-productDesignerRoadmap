/**
 * Splits a role's route into study weeks for the Araçlar calendar.
 *
 * Appendix A's ritual is 15–20 minutes a day; the calendar assumes five such
 * days, so 100 minutes a week by default. Lessons are never split: a lesson that
 * would overflow the week starts the next one, and a lesson longer than a whole
 * week gets a week of its own.
 */
export interface PlanStep {
  id: string;
  minutes: number;
}

export interface PlanWeek<T extends PlanStep> {
  week: number;
  minutes: number;
  steps: T[];
}

export const WEEKLY_MINUTES = 100;

export function planWeeks<T extends PlanStep>(steps: readonly T[], budget = WEEKLY_MINUTES): PlanWeek<T>[] {
  if (budget <= 0) throw new Error("planWeeks: haftalık süre pozitif olmalı");
  const weeks: PlanWeek<T>[] = [];
  let current: PlanWeek<T> | null = null;
  for (const step of steps) {
    if (!current || (current.steps.length > 0 && current.minutes + step.minutes > budget)) {
      current = { week: weeks.length + 1, minutes: 0, steps: [] };
      weeks.push(current);
    }
    current.steps.push(step);
    current.minutes += step.minutes;
  }
  return weeks;
}
