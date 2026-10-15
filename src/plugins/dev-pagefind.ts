import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, sep } from "node:path";
import type { Plugin } from "vite";

/**
 * Search in `npm run dev`.
 *
 * Pagefind builds its index from the finished HTML in dist/, so a dev server has
 * none and /ara/ reported "no index". This serves the index of the last
 * `npm run build` under /pagefind/ so search works while developing. It can be
 * stale (it reflects the last build, not the file you are editing); run a build
 * to refresh it. Production is untouched: this plugin exists only for the dev
 * server (`apply: "serve"`).
 */
const TYPES: Record<string, string> = {
  ".js": "text/javascript",
  ".json": "application/json",
  ".wasm": "application/wasm",
  ".css": "text/css",
};

export function devPagefind(): Plugin {
  const root = join(process.cwd(), "dist", "pagefind");

  return {
    name: "dev-pagefind",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/pagefind/", (request, response, next) => {
        const relative = normalize(decodeURIComponent((request.url ?? "").split("?")[0]!)).replace(/^[\/]+/, "");
        const file = join(root, relative);
        // Stay inside dist/pagefind: no ../ escapes.
        if (!file.startsWith(root + sep) || !existsSync(file) || !statSync(file).isFile()) return next();

        response.setHeader("Content-Type", TYPES[extname(file)] ?? "application/octet-stream");
        response.setHeader("Cache-Control", "no-store");
        createReadStream(file).pipe(response);
      });
    },
  };
}
