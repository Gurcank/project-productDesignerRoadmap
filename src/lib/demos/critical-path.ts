/**
 * Critical path method (CPM) on an activity-on-node network.
 *
 * Forward pass: earliest start = latest earliest finish of the predecessors.
 * Backward pass: latest finish = earliest latest start of the successors.
 * Slack (float) = latest start − earliest start; the activities with zero
 * slack form the critical path — a day lost on any of them is a day lost on
 * the project. Finish-to-start dependencies only, which is what the lesson
 * teaches first.
 */

export interface Activity {
  id: string;
  label: string;
  duration: number;
  after?: string[];
}

export interface Scheduled extends Activity {
  es: number;
  ef: number;
  ls: number;
  lf: number;
  slack: number;
  critical: boolean;
  /** Longest chain of predecessors: the column the diagram draws it in. */
  depth: number;
}

export function criticalPath(activities: Activity[]): { items: Scheduled[]; duration: number } {
  const byId = new Map(activities.map((a) => [a.id, a]));
  for (const a of activities) {
    for (const p of a.after ?? []) if (!byId.has(p)) throw new Error(`"${a.id}" bilinmeyen bir işe bağlı: "${p}"`);
  }

  // Topological order (Kahn); a leftover node means a dependency loop.
  const indegree = new Map(activities.map((a) => [a.id, (a.after ?? []).length]));
  const successors = new Map<string, string[]>(activities.map((a) => [a.id, []]));
  for (const a of activities) for (const p of a.after ?? []) successors.get(p)!.push(a.id);
  const queue = activities.filter((a) => indegree.get(a.id) === 0).map((a) => a.id);
  const order: string[] = [];
  while (queue.length) {
    const id = queue.shift()!;
    order.push(id);
    for (const s of successors.get(id)!) {
      indegree.set(s, indegree.get(s)! - 1);
      if (indegree.get(s) === 0) queue.push(s);
    }
  }
  if (order.length !== activities.length) throw new Error("Bağımlılıklarda döngü var: bir iş dolaylı olarak kendine bağlı.");

  const es = new Map<string, number>();
  const ef = new Map<string, number>();
  const depth = new Map<string, number>();
  for (const id of order) {
    const a = byId.get(id)!;
    const start = Math.max(0, ...(a.after ?? []).map((p) => ef.get(p)!));
    es.set(id, start);
    ef.set(id, start + a.duration);
    depth.set(id, Math.max(-1, ...(a.after ?? []).map((p) => depth.get(p)!)) + 1);
  }
  const duration = Math.max(0, ...ef.values());

  const lf = new Map<string, number>();
  const ls = new Map<string, number>();
  for (const id of [...order].reverse()) {
    const next = successors.get(id)!;
    const finish = next.length ? Math.min(...next.map((s) => ls.get(s)!)) : duration;
    lf.set(id, finish);
    ls.set(id, finish - byId.get(id)!.duration);
  }

  const items = activities.map((a) => {
    const slack = ls.get(a.id)! - es.get(a.id)!;
    return { ...a, es: es.get(a.id)!, ef: ef.get(a.id)!, ls: ls.get(a.id)!, lf: lf.get(a.id)!, slack, critical: slack === 0, depth: depth.get(a.id)! };
  });
  return { items, duration };
}
