/**
 * The template downloads with a .md extension, written at build time as static
 * files. The extension is in the file name, not in the parameter, so the site's
 * trailingSlash: "always" leaves these URLs alone (raci-bos.md, not raci-bos.md/).
 */
import type { APIRoute, GetStaticPaths } from "astro";
import { getTemplates, type TemplateFile } from "~/lib/templates";

export const getStaticPaths: GetStaticPaths = async () =>
  (await getTemplates()).flatMap((template) =>
    template.files
      .filter((file) => file.name.endsWith(".md"))
      .map((file) => ({ params: { slug: template.slug, name: file.name.replace(/\.md$/, "") }, props: { file } })),
  );

export const GET: APIRoute = ({ props }) => {
  const { file } = props as { file: TemplateFile };
  return new Response(file.body, { headers: { "Content-Type": file.type } });
};
