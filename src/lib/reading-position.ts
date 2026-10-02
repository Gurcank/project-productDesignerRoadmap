/**
 * Where you stopped reading each step, as a fraction of the page.
 *
 * Kept apart from the progress model on purpose: progress is what you finished
 * and is backed up and exported; a scroll position is a convenience that goes
 * stale the moment a lesson is edited, so it never touches the export, the
 * Zod schema or `updatedAt`. A fraction rather than pixels, because the same
 * page is a different height on a phone and on a desktop.
 */
const KEY = "pdr.scroll.v1";
const LIMIT = 60;

type Positions = Record<string, { y: number; at: number }>;

function read(): Positions {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function getPosition(id: string): number {
  const y = read()[id]?.y;
  return typeof y === "number" && y >= 0 && y <= 1 ? y : 0;
}

export function savePosition(id: string, fraction: number): void {
  try {
    const all = read();
    all[id] = { y: Math.min(1, Math.max(0, fraction)), at: Date.now() };

    // Newest first; the rest is dropped so the key cannot grow without bound.
    const kept = Object.entries(all)
      .sort(([, a], [, b]) => b.at - a.at)
      .slice(0, LIMIT);
    localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(kept)));
  } catch {
    // Private mode or full storage: losing a scroll position costs nothing.
  }
}
