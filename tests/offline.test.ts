import { test } from "node:test";
import assert from "node:assert/strict";
import { plan, type OfflineManifest } from "../src/lib/offline";

const manifest: OfflineManifest = {
  build: "b1",
  generatedAt: "2026-10-20T00:00:00Z",
  shared: [{ url: "/", bytes: 10 }],
  categories: {
    "proje-yonetimi": [{ url: "/proje-yonetimi/a/", bytes: 100 }],
    "cevik-pratikler": [{ url: "/cevik-pratikler/b/", bytes: 200 }],
    algoritmalar: [{ url: "/algoritmalar/c/", bytes: 400 }],
  },
};

test("a single category brings the shared files with it", () => {
  assert.deepEqual(plan(manifest, "proje-yonetimi"), { urls: ["/", "/proje-yonetimi/a/"], bytes: 110 });
});

test("a role's path downloads only the categories it lists", () => {
  const { urls, bytes } = plan(manifest, "path:project-manager", ["proje-yonetimi", "cevik-pratikler", "yok"]);
  assert.deepEqual(urls, ["/", "/proje-yonetimi/a/", "/cevik-pratikler/b/"]);
  assert.equal(bytes, 310);
});

test("all downloads every category", () => {
  assert.equal(plan(manifest, "all").urls.length, 4);
});
