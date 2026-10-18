/**
 * The site's top-level destinations — one list for both menus (the bottom bar
 * below 64rem, the left rail above). Icons are 24×24 stroke paths.
 */
export type NavId = "roadmap" | "roller" | "sozluk" | "ara" | "araclar" | "ayarlar";

export interface NavItem {
  href: string;
  label: string;
  id: NavId;
  icon: string;
}

export const NAV: NavItem[] = [
  {
    href: "/",
    label: "Harita",
    id: "roadmap",
    // An orbit around a planet.
    icon: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3.5 15.5c-1-2.4 2.6-6.3 8-8.8s10.3-2.6 11.3-.2M20.5 8.5c1 2.4-2.6 6.3-8 8.8s-10.3 2.6-11.3.2",
  },
  {
    href: "/roller/",
    label: "Roller",
    id: "roller",
    // Two people: the roles of a team.
    icon: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14.5a5 5 0 0 1 3 5.5",
  },
  {
    href: "/ara/",
    label: "Ara",
    id: "ara",
    icon: "M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM20 20l-4.6-4.6",
  },
  {
    href: "/sozluk/",
    label: "Sözlük",
    id: "sozluk",
    icon: "M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15ZM5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7.5h6M9 11h4",
  },
  {
    href: "/ayarlar/",
    label: "Ayarlar",
    id: "ayarlar",
    icon: "M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4",
  },
];
