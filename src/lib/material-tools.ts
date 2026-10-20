/**
 * Parsers for the three chapters that are tools, not topics (plan §3.4):
 * chapter 21 (the checklists), chapter 20 (the project flow map) and appendix A
 * (the study calendar). The importer runs them and writes JSON under
 * src/data/generated/tools/; `import:check` compares that output like any other
 * generated file, so the pages can never drift from the material.
 *
 * The text is kept verbatim. Only structure is recognised — paragraphs, lists,
 * tables, sub-headings and checkbox items — and inline markup is left for
 * renderInlineMarkdown, which also links "(7.9)"-style references.
 *
 * Checklist item ids are a storage contract like topic slugs: ticks are saved
 * under them. They are derived from the section number and the item text, and
 * frozen by `validate --update-frozen` (src/data/frozen-checklist-ids.json).
 */
import { slugify } from "./slugify";

export type Block =
  | { kind: "heading"; text: string }
  | { kind: "para"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

const isTableLine = (line: string) => /^\|.*\|\s*$/.test(line.trim());
const splitRow = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

/** Turns a markdown fragment into blocks. Horizontal rules are dropped. */
export function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    const trimmed = line.trim();
    if (trimmed === "" || /^-{3,}$/.test(trimmed)) {
      i += 1;
      continue;
    }
    const heading = trimmed.match(/^#{3,4}\s+(.*)$/);
    if (heading) {
      blocks.push({ kind: "heading", text: heading[1]!.trim() });
      i += 1;
      continue;
    }
    if (isTableLine(trimmed)) {
      const rows: string[][] = [];
      while (i < lines.length && isTableLine(lines[i]!)) {
        const cells = splitRow(lines[i]!);
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i += 1;
      }
      blocks.push({ kind: "table", head: rows[0] ?? [], rows: rows.slice(1) });
      continue;
    }
    const bullet = /^[-*]\s+(?:\[ \]\s+)?(.*)$/;
    const numbered = /^\d+\.\s+(.*)$/;
    if (bullet.test(trimmed) || numbered.test(trimmed)) {
      const ordered = numbered.test(trimmed);
      const pattern = ordered ? numbered : bullet;
      const items: string[] = [];
      while (i < lines.length && pattern.test(lines[i]!.trim())) {
        items.push(lines[i]!.trim().match(pattern)![1]!.trim());
        i += 1;
      }
      blocks.push({ kind: "list", ordered, items });
      continue;
    }
    if (trimmed.startsWith(">")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i]!.trim().startsWith(">")) {
        parts.push(lines[i]!.trim().replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push({ kind: "quote", text: parts.join(" ").trim() });
      continue;
    }
    const parts: string[] = [];
    while (i < lines.length) {
      const next = lines[i]!.trim();
      if (next === "" || isTableLine(next) || /^#{3,4}\s/.test(next) || bullet.test(next) || numbered.test(next) || next.startsWith(">")) break;
      parts.push(next);
      i += 1;
    }
    blocks.push({ kind: "para", text: parts.join(" ") });
  }
  return blocks;
}

interface RawSection {
  number: string;
  title: string;
  body: string;
}

/** `## X.Y Title` sections plus the text above the first one. */
function sections(raw: string): { intro: string; sections: RawSection[] } {
  const body = raw
    .replace(/^#\s+.*$/m, "")
    .replace(/\n+\*\*Biten (bölüm|dosya):\*\*[\s\S]*$/u, "\n");
  const parts = body.split(/^##\s+/m);
  const intro = parts.shift()!.trim();
  return {
    intro,
    sections: parts.map((part) => {
      const [head = "", ...rest] = part.split(/\r?\n/);
      const match = head.trim().match(/^(\d+\.\d+)\s+(.*)$/);
      return {
        number: match ? match[1]! : "",
        title: (match ? match[2]! : head).trim(),
        body: rest.join("\n").trim(),
      };
    }),
  };
}

// ---------------------------------------------------------------- chapter 21

export interface ChecklistItem {
  id: string;
  text: string;
  blocker: boolean;
}

export interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

export interface Checklist {
  number: string;
  slug: string;
  title: string;
  /** Text between the heading and the first group, e.g. the WCAG target. */
  intro: Block[];
  groups: ChecklistGroup[];
}

export interface ChecklistData {
  intro: Block[];
  lists: Checklist[];
  quick: { title: string; intro: Block[]; items: ChecklistItem[] };
}

const BLOCKER = /^🔴\s*/u;

function makeIds(prefix: string) {
  const seen = new Map<string, number>();
  return (text: string) => {
    const base = `${prefix}/${slugify(text.replace(BLOCKER, "")).slice(0, 56).replace(/-+$/, "")}`;
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

function item(text: string, id: (t: string) => string): ChecklistItem {
  return { id: id(text), text: text.replace(BLOCKER, "").trim(), blocker: BLOCKER.test(text) };
}

export function parseChecklists(raw: string): ChecklistData {
  const { intro, sections: all } = sections(raw);
  const lists: Checklist[] = [];
  let quick: ChecklistData["quick"] = { title: "", intro: [], items: [] };

  for (const section of all) {
    if (!section.number) {
      // "Hızlı sürüm — küçük projeler için": a numbered list, one per line.
      const id = makeIds("21.hizli");
      const blocks = parseBlocks(section.body);
      const list = blocks.find((b) => b.kind === "list");
      quick = {
        title: section.title,
        intro: blocks.filter((b) => b.kind === "para"),
        items: list && list.kind === "list" ? list.items.map((t) => item(t, id)) : [],
      };
      continue;
    }
    const id = makeIds(section.number);
    const groups: ChecklistGroup[] = [];
    const lead: string[] = [];
    let current: ChecklistGroup | null = null;
    for (const line of section.body.split(/\r?\n/)) {
      const t = line.trim();
      const group = t.match(/^###\s+(.*)$/);
      const box = t.match(/^-\s+\[ \]\s+(.*)$/);
      if (group) {
        current = { title: group[1]!.trim(), items: [] };
        groups.push(current);
      } else if (box) {
        if (!current) {
          current = { title: "", items: [] };
          groups.push(current);
        }
        current.items.push(item(box[1]!, id));
      } else if (!current) {
        lead.push(line);
      }
    }
    lists.push({
      number: section.number,
      slug: slugify(section.title.replace(/kontrol listesi$/i, "")),
      title: section.title,
      intro: parseBlocks(lead.join("\n")),
      groups,
    });
  }
  return { intro: parseBlocks(intro), lists, quick };
}

/** Every tickable id, in page order: what the frozen list guards. */
export function checklistIds(data: ChecklistData): string[] {
  return [...data.lists.flatMap((l) => l.groups.flatMap((g) => g.items.map((i) => i.id))), ...data.quick.items.map((i) => i.id)];
}

// ---------------------------------------------------------------- chapter 20

export interface FlowPhase {
  number: string;
  /** "Faz 0" */
  phase: string;
  /** "Fikir ve problem tanımı" */
  title: string;
  blocks: Block[];
  /** The "Kim ne yapar" table, when the phase has one. */
  roles: { role: string; does: string }[];
}

export interface FlowMapData {
  intro: Block[];
  phases: FlowPhase[];
  /** The closing section: summary table, three scales, the three skipped phases. */
  summary: { number: string; title: string; blocks: Block[] };
}

export function parseFlowMap(raw: string): FlowMapData {
  const { intro, sections: all } = sections(raw);
  const phases: FlowPhase[] = [];
  let summary: FlowMapData["summary"] = { number: "", title: "", blocks: [] };
  for (const section of all) {
    const match = section.title.match(/^(Faz\s+\d+)\s+—\s+(.*)$/);
    const blocks = parseBlocks(section.body);
    if (!match) {
      summary = { number: section.number, title: section.title, blocks };
      continue;
    }
    const table = blocks.find((b) => b.kind === "table" && b.head[0] === "Rol");
    phases.push({
      number: section.number,
      phase: match[1]!,
      title: match[2]!.trim(),
      blocks,
      roles: table && table.kind === "table" ? table.rows.map(([role = "", does = ""]) => ({ role, does })) : [],
    });
  }
  return { intro: parseBlocks(intro), phases, summary };
}

// ---------------------------------------------------------------- appendix A

export interface StudyPlanData {
  title: string;
  blocks: Block[];
}

/** Appendix A only: the file also holds appendix B, which is not a calendar. */
export function parseStudyPlan(raw: string): StudyPlanData {
  const [appendixA = ""] = raw.split(/^#\s+Ek B\b/m);
  const title = appendixA.match(/^#\s+(.*)$/m)?.[1]?.trim() ?? "";
  const body = appendixA.replace(/^#\s+.*$/m, "").replace(/^##\s+/gm, "### ");
  return { title, blocks: parseBlocks(body) };
}
