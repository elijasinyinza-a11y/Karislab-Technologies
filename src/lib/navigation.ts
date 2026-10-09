export type NavLink = { label: string; href: string };

/** Main navigation, in the order set by the master prompt. */
export const mainNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Insights", href: "/insights" },
];

export const contactHref = "/contact";
