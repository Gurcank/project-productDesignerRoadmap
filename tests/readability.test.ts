/**
 * The readability gate is only as good as its counting. These pin the parts
 * that are easy to get subtly wrong in Turkish.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { atesman, band, sentences, syllables, words } from "../src/lib/readability";

test("a Turkish syllable is a vowel", () => {
  assert.equal(syllables("öğrenme"), 3);
  assert.equal(syllables("İstanbul"), 3);
  assert.equal(syllables("ışık"), 2);
  assert.equal(syllables("kr"), 1, "never zero");
});

test("words keep apostrophe suffixes and numbers", () => {
  assert.deepEqual(words("PM'in 3 sorusu var."), ["PM'in", "3", "sorusu", "var"]);
});

test("sentences split on end marks before a capital, not on abbreviations or thousands", () => {
  assert.deepEqual(sentences("Bu bir cümle. Şu da bir cümle!"), ["Bu bir cümle.", "Şu da bir cümle!"]);
  assert.equal(sentences("Örn. bir backlog, vb. şeyler var. Sonra ikinci cümle.").length, 2);
  assert.equal(sentences("Günde 4.200 sipariş gelir. İkinci cümle.").length, 2);
  assert.equal(sentences("Başlık gibi bir satır\n\nArdından bir cümle.").length, 2);
});

test("Ateşman matches a hand calculation", () => {
  // 2 sentences, 8 words, 18 syllables (ke-di ma-sa-da u-yur a-ma · kö-pek bah-çe-de oy-nar şim-di):
  // 198.825 − 40.175·2.25 − 2.61·4 = 98.0
  const report = atesman("Kedi masada uyur ama. Köpek bahçede oynar şimdi.");
  assert.equal(report.words, 8);
  assert.equal(report.sentences, 2);
  assert.equal(report.score, Math.round((198.825 - 40.175 * (18 / 8) - 2.61 * 4) * 10) / 10);
});

test("bands follow Ateşman's ranges", () => {
  assert.equal(band(72), "kolay");
  assert.equal(band(55), "orta güçlükte");
  assert.equal(band(40), "zor");
});
