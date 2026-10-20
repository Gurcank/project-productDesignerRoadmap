/**
 * CSV that opens correctly in Turkish Excel (plan §3.4).
 *
 * Excel with a Turkish locale expects `;` as the separator (the comma is the
 * decimal mark) and only reads UTF-8 as UTF-8 when the file starts with a
 * byte-order mark — without it "ş" and "ğ" arrive as mojibake. Rows end in
 * CRLF and fields are quoted per RFC 4180 when they contain the separator, a
 * quote or a line break.
 */
const BOM = "﻿";

function field(value: string | number): string {
  const text = String(value);
  return /[;"\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function toCsv(head: string[], rows: (string | number)[][]): string {
  return BOM + [head, ...rows].map((row) => row.map(field).join(";")).join("\r\n") + "\r\n";
}

/** The same table as GitHub-flavoured Markdown, for the copyable text version. */
export function toMarkdownTable(head: string[], rows: (string | number)[][]): string {
  const cell = (value: string | number) => String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
  const line = (row: (string | number)[]) => `| ${row.map(cell).join(" | ")} |`;
  return [line(head), line(head.map(() => "---")), ...rows.map(line)].join("\n") + "\n";
}
