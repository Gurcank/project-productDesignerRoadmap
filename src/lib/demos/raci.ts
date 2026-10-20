/**
 * The checks behind the RACI demo. A row is one task; each cell is the letter a
 * role holds for it. The one rule every source agrees on is a single
 * accountable person per task; a task nobody does is the other common gap.
 */
export type RaciCode = "R" | "A" | "C" | "I" | "";

export type RaciIssueKind = "no-a" | "many-a" | "no-r";

export interface RaciIssue {
  row: number;
  kind: RaciIssueKind;
}

export function checkRaci(grid: RaciCode[][]): RaciIssue[] {
  const issues: RaciIssue[] = [];
  grid.forEach((cells, row) => {
    const count = (code: RaciCode) => cells.filter((c) => c === code).length;
    const a = count("A");
    if (a === 0) issues.push({ row, kind: "no-a" });
    if (a > 1) issues.push({ row, kind: "many-a" });
    if (count("R") === 0) issues.push({ row, kind: "no-r" });
  });
  return issues;
}

const MESSAGES: Record<RaciIssueKind, string> = {
  "no-a": "hesap veren (A) yok; iş sahipsiz",
  "many-a": "birden çok A var; hesap verebilirlik bölünmüş",
  "no-r": "işi yapan (R) yok",
};

/** One sentence per issue, in the order the rows appear. */
export function describeIssues(issues: RaciIssue[], tasks: string[]): string[] {
  return issues.map((i) => `${tasks[i.row]}: ${MESSAGES[i.kind]}.`);
}
