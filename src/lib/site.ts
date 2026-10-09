/**
 * Company details shown in the top bar (and later the footer and contact page).
 * Leave a value empty ("") to hide it. Never put placeholder numbers or addresses here.
 */
export const site = {
  email: "", // e.g. the real company inbox
  phone: "", // international format, e.g. "+260 ..."
  /** Shown in the top bar on tablet and desktop when no contact details are set. */
  tagline: "Intelligent platforms and digital infrastructure",
};

/** Turns a display phone number into a tel: link value. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
