import { Layers, ShieldCheck, Users, Wrench, type LucideIcon } from "lucide-react";

/** About page content. Edit the wording here. */

export const story = [
  "Karislab grew out of hands-on work, not theory. Its leadership and culture frameworks were developed and tested inside real organisations, and its infrastructure tools come from direct experience of operational problems, such as water losses and unreliable data in water utilities.",
  "Karislab exists to turn that practical knowledge into platforms that other organisations can use: tools that help leaders build stronger cultures and clearer strategies, and systems that make essential services more accurate, efficient and accountable.",
];

export const mission =
  "To help organisations lead better and to make real-world systems work as they should, by bringing together technology, data and human insight.";

export type Principle = { title: string; text: string; Icon: LucideIcon };

export const principles: Principle[] = [
  {
    title: "Grounded in practice",
    text: "Everything we build starts from a real problem we have seen first-hand, not a feature list.",
    Icon: Wrench,
  },
  {
    title: "People and technology together",
    text: "Tools only create value when people adopt them, so we design for the leaders and teams who use them.",
    Icon: Users,
  },
  {
    title: "Data you can trust",
    text: "Good decisions depend on accurate information. We treat data integrity as a foundation, not an afterthought.",
    Icon: ShieldCheck,
  },
  {
    title: "Built step by step",
    text: "We release one platform at a time, starting with KarisMind™, and grow the ecosystem as each part proves itself.",
    Icon: Layers,
  },
];

export const founder = {
  name: "Elijah Sinyinza",
  role: "Founder",
  photo: "/images/team/elijah-sinyinza.jpg",
  bio: [
    "An electrical engineer and practitioner-author, Elijah developed the GOLD® leadership development framework, the OCAM culture assessment model and the 7Cs of Leading Strategy, which form the foundation of KarisMind™.",
    "Karislab's principles and methods are drawn from two of his books, published by Divine Keys Publishing.",
  ],
};

export type Book = { title: string; subtitle: string; cover: string };

export const books: Book[] = [
  {
    title: "Termites in the Guestroom",
    subtitle: "Dealing with poor culture in the workplace",
    cover: "/images/books/termites-in-the-guestroom.jpg",
  },
  {
    title: "Business Beyond the Strategic Plan",
    subtitle: "Understanding the 5 pillars of organizational transformation",
    cover: "/images/books/business-beyond-the-strategic-plan.jpg",
  },
];
