/**
 * Which material section gets which diagram (SPEC Faz 5).
 *
 * The binding lives here rather than in the markdown because generated content
 * is rewritten on every import and `import:check` guards it byte for byte
 * (ADR-002). The section numbers themselves live in ./sections so that
 * `npm run validate` — which runs under tsx and cannot load .astro files — can
 * still check that each one exists; a renamed section fails the build instead
 * of silently dropping its diagram.
 */
import BranchMerge from "./BranchMerge.astro";
import CriticalRenderingPath from "./CriticalRenderingPath.astro";
import DoubleDiamond from "./DoubleDiamond.astro";
import Funnel from "./Funnel.astro";
import MonolithVsServices from "./MonolithVsServices.astro";
import Pipeline from "./Pipeline.astro";
import RenderingStrategies from "./RenderingStrategies.astro";
import RequestResponse from "./RequestResponse.astro";
import TestPyramid from "./TestPyramid.astro";
import TokenLayers from "./TokenLayers.astro";
import { DIAGRAM_SECTIONS } from "./sections";

// Deliberately unannotated: the inferred type keeps each value a real Astro
// component, which a Record<_, unknown> would erase.
export const DIAGRAM_BY_SECTION = {
  "1.3": RequestResponse,
  "1.4": CriticalRenderingPath,
  "3.7": Funnel,
  "4.2": DoubleDiamond,
  "5.2": TokenLayers,
  "8.10": RenderingStrategies,
  "14.2": MonolithVsServices,
  "15.3": BranchMerge,
  "16.2": Pipeline,
  "17.1": TestPyramid,
} as const;

export { DIAGRAM_SECTIONS };
