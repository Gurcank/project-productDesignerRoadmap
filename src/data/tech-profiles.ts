/**
 * Technology profiles (Araçlar → Teknoloji profilleri): one page per tool card
 * in chapter 9. The card text comes from the material; this file only says which
 * cards become profiles, under which URL, and where the tool's own documentation
 * lives. Appendix B names "each tool's own official documentation" as the
 * primary source for this chapter, so every link here is that, opened and read
 * in the browser on the date below — not a blog, not a comparison article.
 *
 * Concept cards (Library, Framework, Headless vs Styled, Trade-off …) stay in
 * their lessons; only tools get a profile. The slug is a URL: once published it
 * does not change.
 */

export const LINKS_CHECKED = "20 Ekim 2026";

export interface ProfileSpec {
  /** The card's "### " heading in chapter 9, verbatim. */
  card: string;
  slug: string;
  links: { label: string; url: string }[];
}

export const TECH_PROFILES: ProfileSpec[] = [
  // 9.2 UI katmanı
  { card: "React", slug: "react", links: [{ label: "react.dev", url: "https://react.dev/" }] },
  { card: "Vue", slug: "vue", links: [{ label: "vuejs.org", url: "https://vuejs.org/" }] },
  { card: "Svelte", slug: "svelte", links: [{ label: "svelte.dev", url: "https://svelte.dev/" }] },
  { card: "Angular", slug: "angular", links: [{ label: "angular.dev", url: "https://angular.dev/" }] },
  { card: "Solid", slug: "solid", links: [{ label: "solidjs.com", url: "https://www.solidjs.com/" }] },
  // 9.3 Meta-framework
  { card: "Next.js", slug: "nextjs", links: [{ label: "nextjs.org", url: "https://nextjs.org/" }] },
  { card: "Astro", slug: "astro", links: [{ label: "astro.build", url: "https://astro.build/" }] },
  { card: "React Router v7", slug: "react-router", links: [{ label: "reactrouter.com", url: "https://reactrouter.com/" }] },
  {
    card: "SvelteKit / Nuxt",
    slug: "sveltekit-nuxt",
    links: [
      { label: "SvelteKit belgeleri", url: "https://svelte.dev/docs/kit" },
      { label: "nuxt.com", url: "https://nuxt.com/" },
    ],
  },
  { card: "TanStack Start", slug: "tanstack-start", links: [{ label: "tanstack.com/start", url: "https://tanstack.com/start/latest" }] },
  // 9.5 Component kütüphaneleri
  {
    card: "Radix UI / Base UI",
    slug: "radix-base-ui",
    links: [
      { label: "radix-ui.com", url: "https://www.radix-ui.com/" },
      { label: "base-ui.com", url: "https://base-ui.com/" },
    ],
  },
  { card: "shadcn/ui", slug: "shadcn-ui", links: [{ label: "ui.shadcn.com", url: "https://ui.shadcn.com/" }] },
  {
    card: "Styled kütüphaneler: MUI, Mantine, Chakra, Ant Design",
    slug: "styled-bilesen-kutuphaneleri",
    links: [
      { label: "mui.com", url: "https://mui.com/" },
      { label: "mantine.dev", url: "https://mantine.dev/" },
      { label: "chakra-ui.com", url: "https://chakra-ui.com/" },
      { label: "ant.design", url: "https://ant.design/" },
    ],
  },
  {
    card: "React Aria / Headless UI",
    slug: "react-aria-headless-ui",
    links: [
      { label: "React Aria", url: "https://react-aria.adobe.com/" },
      { label: "headlessui.com", url: "https://headlessui.com/" },
    ],
  },
  // 9.6 Animasyon ve 3D
  { card: "Motion (eski adıyla Framer Motion)", slug: "motion", links: [{ label: "motion.dev", url: "https://motion.dev/" }] },
  { card: "GSAP", slug: "gsap", links: [{ label: "gsap.com", url: "https://gsap.com/" }] },
  { card: "Lenis", slug: "lenis", links: [{ label: "lenis.dev", url: "https://lenis.dev/" }] },
  {
    card: "Three.js / React Three Fiber",
    slug: "threejs-react-three-fiber",
    links: [
      { label: "threejs.org", url: "https://threejs.org/" },
      { label: "React Three Fiber belgeleri", url: "https://r3f.docs.pmnd.rs/getting-started/introduction" },
    ],
  },
  {
    card: "Lottie / Spline",
    slug: "lottie-spline",
    links: [
      { label: "Lottie belgeleri", url: "https://lottie.airbnb.tech/" },
      { label: "spline.design", url: "https://spline.design/" },
    ],
  },
  // 9.7 State yönetimi
  {
    card: "Local state / Context",
    slug: "local-state-context",
    links: [{ label: "React — Passing Data Deeply with Context", url: "https://react.dev/learn/passing-data-deeply-with-context" }],
  },
  {
    card: "Zustand / Jotai",
    slug: "zustand-jotai",
    links: [
      { label: "Zustand belgeleri", url: "https://zustand.docs.pmnd.rs/" },
      { label: "jotai.org", url: "https://jotai.org/" },
    ],
  },
  { card: "Redux Toolkit", slug: "redux-toolkit", links: [{ label: "Redux Toolkit belgeleri", url: "https://redux.js.org/toolkit/" }] },
  // 9.8 Server state
  {
    card: "TanStack Query / SWR",
    slug: "tanstack-query-swr",
    links: [
      { label: "tanstack.com/query", url: "https://tanstack.com/query/latest" },
      { label: "SWR", url: "https://vercel.com/oss/swr" },
    ],
  },
  // 9.9 Form ve doğrulama
  { card: "React Hook Form", slug: "react-hook-form", links: [{ label: "react-hook-form.com", url: "https://react-hook-form.com/" }] },
  { card: "Zod", slug: "zod", links: [{ label: "zod.dev", url: "https://zod.dev/" }] },
  {
    card: "Formik / Yup",
    slug: "formik-yup",
    links: [
      { label: "formik.org", url: "https://formik.org/" },
      { label: "Yup (GitHub)", url: "https://github.com/jquense/yup" },
    ],
  },
  // 9.10 İçerik yönetimi
  { card: "CMS / Headless CMS", slug: "headless-cms", links: [] },
  { card: "MDX", slug: "mdx", links: [{ label: "mdxjs.com", url: "https://mdxjs.com/" }] },
];
