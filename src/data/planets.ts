/**
 * Which celestial body each roadmap category is drawn as (home page map, category
 * header). Purely decorative — the map orients by area; the body only makes a
 * category recognisable at a glance. Palettes live in tokens.css
 * (`[data-body]`), surface patterns in planets.css (`[data-pattern]`).
 *
 * Order follows the route: Earth first (the ground you stand on), the inner
 * planets for product and team, the giants for design, moons for engineering,
 * the small far bodies for systems and operations, and the Sun at the end.
 */
export type PlanetPattern = "earth" | "craters" | "bands" | "swirl" | "veins" | "spots" | "sun";

export interface Planet {
  body: string;
  /** Turkish name, used as the planet's accessible description. */
  name: string;
  pattern: PlanetPattern;
  ring?: boolean;
}

export const PLANET_BY_SLUG: Record<string, Planet> = {
  "web-temelleri": { body: "earth", name: "Dünya", pattern: "earth" },

  "urun-gelistirme": { body: "mars", name: "Mars", pattern: "craters" },
  "calisma-bicimi": { body: "venus", name: "Venüs", pattern: "swirl" },
  "sirket-sozlugu": { body: "mercury", name: "Merkür", pattern: "craters" },

  "ux-ui-ilkeleri": { body: "jupiter", name: "Jüpiter", pattern: "bands" },
  "tasarim-sistemi": { body: "saturn", name: "Satürn", pattern: "bands", ring: true },
  erisilebilirlik: { body: "uranus", name: "Uranüs", pattern: "swirl", ring: true },
  "arayuz-anatomisi": { body: "neptune", name: "Neptün", pattern: "swirl" },

  "front-end": { body: "moon", name: "Ay", pattern: "craters" },
  "programlama-dilleri": { body: "io", name: "Io", pattern: "spots" },
  frameworkler: { body: "europa", name: "Europa", pattern: "veins" },
  kutuphaneler: { body: "ganymede", name: "Ganymede", pattern: "craters" },
  "back-end-api": { body: "titan", name: "Titan", pattern: "swirl" },
  veritabani: { body: "callisto", name: "Callisto", pattern: "craters" },
  "veri-yapilari": { body: "enceladus", name: "Enceladus", pattern: "veins" },
  algoritmalar: { body: "triton", name: "Triton", pattern: "spots" },

  auth: { body: "pluto", name: "Plüton", pattern: "spots" },
  "guvenlik-ve-hukuk": { body: "charon", name: "Charon", pattern: "craters" },
  "sistem-mimarisi": { body: "ceres", name: "Ceres", pattern: "craters" },
  "git-ve-github": { body: "vesta", name: "Vesta", pattern: "craters" },
  "devops-ve-yayin": { body: "phobos", name: "Phobos", pattern: "craters" },
  "test-ve-kalite": { body: "eris", name: "Eris", pattern: "swirl" },

  "yapay-zeka-ile-calisma": { body: "sun", name: "Güneş", pattern: "sun" },
};

const FALLBACK: Planet = { body: "moon", name: "Ay", pattern: "craters" };

export function planetOf(slug: string): Planet {
  return PLANET_BY_SLUG[slug] ?? FALLBACK;
}
