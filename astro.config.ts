import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { rehypeTermCards } from "./src/plugins/rehype-term-cards";
import { rehypeCrossRefs } from "./src/plugins/rehype-cross-refs";
import { rehypeTableScroll } from "./src/plugins/rehype-table-scroll";
import { rehypeTermRefs } from "./src/plugins/rehype-term-refs";

// Static output: the site is content-only and is served from a static host (ADR-001).
export default defineConfig({
  site: "https://product-designer-roadmap.pages.dev",
  output: "static",
  /*
   * The harness assigns a port via PORT when it starts the dev server; without
   * this, Astro always grabs 4321 and a leftover process on that port blocks
   * every later start. Falls back to 4321 for a plain `npm run dev`.
   */
  server: { port: Number(process.env.PORT) || 4321 },
  // Search engines need the map; the checklist in 21.9 asks for it at launch.
  integrations: [sitemap()],
  trailingSlash: "always",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    /*
     * Astro 7 defaults to the Rust "Sätteri" processor, whose plugin API is a
     * visitor model. Our two transforms are structural (group a heading with the
     * list that follows it), which the unified/hast model expresses directly —
     * so we opt into the unified processor instead of porting them to a new,
     * thinly documented API during setup. Revisit if build time becomes an issue.
     *
     * Order matters: cards are built first, then references inside them linked,
     * then every table that survived gets its scroll wrapper.
     */
    processor: unified({
      rehypePlugins: [rehypeTermCards, rehypeCrossRefs, rehypeTermRefs, rehypeTableScroll],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
