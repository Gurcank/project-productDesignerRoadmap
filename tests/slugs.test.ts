/**
 * Slugs are the progress keys (SPEC §4), so the rules that make them are tested
 * against the live content, not only against hand-picked strings: if a change
 * to slugify would rename even one published step, this fails before a reader
 * loses anything.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { slugify } from "../src/lib/slugify";
import { makeTopicId, slugFromTopicName } from "../src/lib/topic-id";
import { TOPIC_ROOTS } from "../src/data/topic-roots";

const ROOT = path.resolve(import.meta.dirname, "..");

test("slugify lowercases Turkish before folding letters", () => {
  // Reversed order turned "Issue" into "ssue": "İ"→"I" ran first and the dot
  // was stripped as a separate mark (CLAUDE.md, "Türkçe slugify sırası").
  assert.equal(slugify("Issue ve proje yönetimi"), "issue-ve-proje-yonetimi");
  assert.equal(slugify("İçerik"), "icerik");
  assert.equal(slugify("Şirket Ortamı Sözlüğü"), "sirket-ortami-sozlugu");
  assert.equal(slugify("Çalışma biçimi: Agile, Scrum, Kanban"), "calisma-bicimi-agile-scrum-kanban");
  assert.equal(slugify("İstemci–sunucu modeli"), "istemci-sunucu-modeli");
});

test("slugify trims separators and caps the length at 70", () => {
  assert.equal(slugify("  --Merhaba, dünya!--  "), "merhaba-dunya");
  assert.equal(slugify("a".repeat(90)).length, 70);
});

test("every generated step is still named by slugify(title)", () => {
  const root = path.join(ROOT, "src", TOPIC_ROOTS[0].dir);
  let checked = 0;
  for (const category of readdirSync(root)) {
    for (const fileName of readdirSync(path.join(root, category))) {
      const raw = readFileSync(path.join(root, category, fileName), "utf8");
      const title = JSON.parse(raw.match(/^title: (".*")$/m)![1]!) as string;
      assert.equal(slugify(title), slugFromTopicName(fileName), `${category}/${fileName}`);
      checked += 1;
    }
  }
  assert.ok(checked > 200, `only ${checked} generated steps found`);
});

test("step slugs drop the order prefix and the extension", () => {
  assert.equal(slugFromTopicName("05-pull-request.md"), "pull-request");
  assert.equal(slugFromTopicName("content/topics/git-ve-github/05-pull-request"), "pull-request");
  assert.equal(slugFromTopicName("authored/topics/algoritmalar/01-algoritma-nedir"), "algoritma-nedir");
  // Only the leading order number goes; digits inside the slug stay.
  assert.equal(slugFromTopicName("03-http-2-ve-3.md"), "http-2-ve-3");
  assert.equal(makeTopicId("git-ve-github", "pull-request"), "git-ve-github/pull-request");
});

test("every frozen id is unique", () => {
  const frozen = JSON.parse(readFileSync(path.join(ROOT, "src/data/frozen-topic-ids.json"), "utf8")) as { ids: string[] };
  assert.equal(new Set(frozen.ids).size, frozen.ids.length);
});
