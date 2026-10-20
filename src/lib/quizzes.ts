/**
 * One quiz per category: the written one when it exists, else the imported one.
 * Every page that links to a quiz asks here, so a link never points at a quiz
 * that is not built (three pages used to repeat their own check).
 */
import { getCollection } from "astro:content";

export interface QuizItem {
  n: number;
  question: string;
  answer: string;
  roles?: string[];
}

export interface Quiz {
  category: string;
  items: QuizItem[];
  sources: { label: string; url: string }[];
  authored: boolean;
}

let cached: Promise<Map<string, Quiz>> | null = null;

export function getQuizzes(): Promise<Map<string, Quiz>> {
  cached ??= (async () => {
    const map = new Map<string, Quiz>();
    for (const entry of await getCollection("quizzes")) {
      map.set(entry.data.category, { category: entry.data.category, items: entry.data.items, sources: [], authored: false });
    }
    for (const entry of await getCollection("authoredQuizzes")) {
      const { category, overrides, items, sources } = entry.data;
      if (map.has(category) && !overrides) {
        throw new Error(`src/authored/quizzes/${entry.id}: "${category}" için içe aktarılmış bir quiz var; yerine geçecekse overrides: true yaz`);
      }
      if (!map.has(category) && overrides) {
        throw new Error(`src/authored/quizzes/${entry.id}: overrides: true ama "${category}" için içe aktarılmış quiz yok`);
      }
      map.set(category, { category, items: items.map((item, i) => ({ ...item, n: i + 1 })), sources, authored: true });
    }
    return map;
  })();
  return cached;
}

export async function hasQuiz(category: string): Promise<boolean> {
  return (await getQuizzes()).has(category);
}
