import { test } from "node:test";
import assert from "node:assert/strict";
import { toCsv, toMarkdownTable } from "../src/lib/csv";

test("CSV starts with a BOM, uses ; and CRLF, and quotes only when it must", () => {
  const csv = toCsv(["Risk", "Olasılık"], [["Tedarikçi gecikir; POS hazır olmaz", "Yüksek"], ['"Öğrenci kartı"', 3]]);
  assert.ok(csv.startsWith("﻿"));
  assert.equal(csv.slice(1), 'Risk;Olasılık\r\n"Tedarikçi gecikir; POS hazır olmaz";Yüksek\r\n"""Öğrenci kartı""";3\r\n');
});

test("Markdown tables escape pipes", () => {
  assert.equal(toMarkdownTable(["A", "B"], [["x|y", 1]]), "| A | B |\n| --- | --- |\n| x\\|y | 1 |\n");
});
