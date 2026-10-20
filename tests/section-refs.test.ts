/**
 * The cross-reference rule is shared by the markdown pipeline, the quiz renderer
 * and the validator; these are the cases that each broke once in production.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { SECTION_REF_PATTERN, resolveSectionHref } from "../src/lib/section-refs";

const refsIn = (text: string) =>
  [...text.matchAll(new RegExp(SECTION_REF_PATTERN.source, "g"))].map((match) => match[1] ?? `Bölüm ${match[2]}`);

test("a section number resolves to its step", () => {
  assert.equal(resolveSectionHref("1.1"), "/web-temelleri/istemci-sunucu-modeli/");
  assert.equal(resolveSectionHref("99.9"), null);
});

test("a chapter reference resolves to its category", () => {
  assert.equal(resolveSectionHref(undefined, "15"), "/git-ve-github/");
});

test("numbers inside longer numbers are not references", () => {
  assert.deepEqual(refsIn("SC 2.5.8"), []);
  assert.deepEqual(refsIn("SC 1.4.4"), []);
  assert.deepEqual(refsIn("2.400 kişi"), []);
});

test("lists and chapter-plus-section forms split correctly", () => {
  assert.deepEqual(refsIn("5.9, 6.8"), ["5.9", "6.8"]);
  assert.deepEqual(refsIn("Bölüm 12.11"), ["12.11"]);
  assert.deepEqual(refsIn("Bölüm 11"), ["Bölüm 11"]);
});
