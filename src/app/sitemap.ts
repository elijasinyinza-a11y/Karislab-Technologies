import type { MetadataRoute } from "next";
import { articles } from "@/content/insights";
import { site } from "@/lib/site";

/**
 * Only finished pages belong here. Interim pages are marked noindex,
 * so add each one to this list when its real content goes live.
 */
const pages = [
  "/",
  "/solutions",
  "/about",
  "/insights",
  ...articles.map((a) => `/insights/${a.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
