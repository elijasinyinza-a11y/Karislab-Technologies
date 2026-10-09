/**
 * Company details used across the site: top bar, metadata, structured data.
 * Leave a value empty ("") to hide it. Never put placeholder numbers or addresses here.
 */

/**
 * The site's public address. On Vercel this is filled in automatically from the
 * production domain (it switches to your custom domain once one is connected).
 */
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "Karislab",
  url: productionHost ? `https://${productionHost}` : "http://localhost:3000",
  title: "Karislab | Building intelligent solutions for a changing world",
  description:
    "We bring together technology, data and human insight to solve meaningful problems and create lasting value.",
  email: "", // the real company inbox
  phone: "", // international format, e.g. "+260 ..."
  /** Shown in the top bar on tablet and desktop when no contact details are set. */
  tagline: "Intelligent platforms and digital infrastructure",
};

/** Turns a display phone number into a tel: link value. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
