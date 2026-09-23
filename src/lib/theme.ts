/** Theme handling shared by the inline head script and the theme control (ADR-007). */

export const THEME_KEY = "pdr.theme";

export type ThemeChoice = "system" | "light" | "dark";

export function readThemeChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

export function storeThemeChoice(choice: ThemeChoice): void {
  try {
    if (choice === "system") localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
}

/** Dark is the default; light only when explicitly chosen or preferred. */
export function resolveTheme(choice: ThemeChoice): "light" | "dark" {
  if (choice === "light" || choice === "dark") return choice;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(choice: ThemeChoice): void {
  document.documentElement.dataset.theme = resolveTheme(choice);
  document.documentElement.dataset.themeChoice = choice;
}
