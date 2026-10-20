import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { checklistIds, parseBlocks, parseChecklists, parseFlowMap } from "../src/lib/material-tools";

test("blocks: tables drop the separator row, lists keep their kind", () => {
  const blocks = parseBlocks("Giriş **kalın**.\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n1. bir\n2. iki\n\n- [ ] kutu");
  assert.deepEqual(blocks, [
    { kind: "para", text: "Giriş **kalın**." },
    { kind: "table", head: ["A", "B"], rows: [["1", "2"]] },
    { kind: "list", ordered: true, items: ["bir", "iki"] },
    { kind: "list", ordered: false, items: ["kutu"] },
  ]);
});

test("checklist ids come from the section and the text, without the blocker mark", () => {
  const data = parseChecklists("# Başlık\n\nGiriş.\n\n## 21.1 Teknik kontrol listesi\n\n### Grup\n- [ ] 🔴 Site açılıyor (2.6)\n- [ ] Site açılıyor (2.6)\n");
  const items = data.lists[0]!.groups[0]!.items;
  assert.equal(items[0]!.blocker, true);
  assert.equal(items[0]!.text, "Site açılıyor (2.6)");
  // Same text twice: the second gets a suffix instead of colliding.
  assert.deepEqual(checklistIds(data), ["21.1/site-aciliyor-2-6", "21.1/site-aciliyor-2-6-2"]);
});

test("the real chapter 21 parses to the published ids", () => {
  const raw = readFileSync(new URL("../ProductDesignerMaterials/21-kontrol-listesi.md", import.meta.url), "utf8");
  const frozen: { ids: string[] } = JSON.parse(readFileSync(new URL("../src/data/frozen-checklist-ids.json", import.meta.url), "utf8"));
  const ids = new Set(checklistIds(parseChecklists(raw)));
  for (const id of frozen.ids) assert.ok(ids.has(id), `kayıp kimlik: ${id}`);
});

test("chapter 20 yields eleven phases and the summary", () => {
  const raw = readFileSync(new URL("../ProductDesignerMaterials/20-sifirdan-tam-surume-akis-haritasi.md", import.meta.url), "utf8");
  const flow = parseFlowMap(raw);
  assert.equal(flow.phases.length, 11);
  assert.equal(flow.phases[0]!.phase, "Faz 0");
  assert.equal(flow.summary.number, "20.12");
});
