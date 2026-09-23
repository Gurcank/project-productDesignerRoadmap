/**
 * Progress store (ADR-005, SPEC §4).
 *
 * Local-first: the single source of truth is one localStorage key. Everything
 * reads and writes through `ProgressStore`, so a remote adapter can be added
 * later without touching any component.
 *
 * Anything coming out of localStorage is untrusted input and is validated at
 * runtime — TypeScript types are erased by then.
 */
import { atom } from "nanostores";
import { z } from "zod";

export const STORAGE_KEY = "pdr.progress.v1";

const TopicStateSchema = z.object({
  done: z.boolean(),
  at: z.string(),
});

const ProgressSchema = z.object({
  version: z.literal(1),
  updatedAt: z.string(),
  topics: z.record(z.string(), TopicStateSchema),
  checklists: z.record(z.string(), z.boolean()),
  last: z.object({ topic: z.string(), at: z.string() }).nullable(),
});

export type Progress = z.infer<typeof ProgressSchema>;

export const EMPTY_PROGRESS: Progress = {
  version: 1,
  updatedAt: new Date(0).toISOString(),
  topics: {},
  checklists: {},
  last: null,
};

/** Topic id is `<category>/<topic>` — the same shape as the URL path. */
export type TopicId = string;

export const $progress = atom<Progress>(EMPTY_PROGRESS);
/** Set when stored data was unreadable, so the UI can say so instead of failing silently. */
export const $storageError = atom<string | null>(null);

function now(): string {
  return new Date().toISOString();
}

function read(): Progress {
  if (typeof localStorage === "undefined") return EMPTY_PROGRESS;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return EMPTY_PROGRESS;

  try {
    const parsed = ProgressSchema.safeParse(JSON.parse(raw));
    if (parsed.success) return parsed.data;
    $storageError.set("Kayıtlı ilerleme okunamadı, sıfırlandı.");
    return EMPTY_PROGRESS;
  } catch {
    $storageError.set("Kayıtlı ilerleme bozuk, sıfırlandı.");
    return EMPTY_PROGRESS;
  }
}

function write(next: Progress): void {
  $progress.set(next);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private mode or a full quota: keep the session usable, tell the user once.
    $storageError.set("İlerleme kaydedilemedi (tarayıcı depolamayı engelliyor).");
  }
}

let initialised = false;

/** Call once per page; safe to call repeatedly. */
export function initProgress(): void {
  if (initialised || typeof window === "undefined") return;
  initialised = true;
  $progress.set(read());

  // Keep two open tabs in sync.
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) $progress.set(read());
  });
}

export function isDone(id: TopicId): boolean {
  return $progress.get().topics[id]?.done === true;
}

export function setDone(id: TopicId, done: boolean): void {
  const current = $progress.get();
  const topics = { ...current.topics };
  if (done) {
    topics[id] = { done: true, at: now() };
  } else {
    delete topics[id];
  }
  write({ ...current, topics, updatedAt: now() });
}

export function toggleDone(id: TopicId): boolean {
  const next = !isDone(id);
  setDone(id, next);
  return next;
}

export function markVisited(id: TopicId): void {
  const current = $progress.get();
  if (current.last?.topic === id) return;
  write({ ...current, last: { topic: id, at: now() }, updatedAt: now() });
}

export function setChecklistItem(id: string, checked: boolean): void {
  const current = $progress.get();
  const checklists = { ...current.checklists };
  if (checked) checklists[id] = true;
  else delete checklists[id];
  write({ ...current, checklists, updatedAt: now() });
}

export interface CategorySummary {
  done: number;
  total: number;
  percent: number;
}

export function summarise(topicIds: TopicId[], progress: Progress = $progress.get()): CategorySummary {
  const done = topicIds.filter((id) => progress.topics[id]?.done).length;
  const total = topicIds.length;
  return { done, total, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
}

export function exportJson(): string {
  return JSON.stringify($progress.get(), null, 2);
}

/** Returns an error message, or null when the import succeeded. */
export function importJson(text: string): string | null {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return "Dosya geçerli bir JSON değil.";
  }
  const parsed = ProgressSchema.safeParse(data);
  if (!parsed.success) return "Dosya bu sitenin ilerleme biçimine uymuyor.";
  write({ ...parsed.data, updatedAt: now() });
  return null;
}

export function reset(): void {
  write({ ...EMPTY_PROGRESS, updatedAt: now() });
}
