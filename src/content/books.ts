export type SourceBook = {
  title: string;
  subtitle: string;
  publisher: string;
  /** Cover image. Books without cover art get a typographic tile instead. */
  cover?: string;
};

export const sourceBooks = {
  aed: {
    title: "Realising the African Economic Dream",
    subtitle: "Dealing with the 7 most deadly prosperity killer diseases",
    publisher: "Insight Media House",
    cover: "/images/books/realising-the-african-economic-dream.jpg",
  },
  bbsp: {
    title: "Business Beyond the Strategic Plan",
    subtitle: "Understanding the 5 pillars of organizational transformation",
    publisher: "Divine Keys Publishing",
    cover: "/images/books/business-beyond-the-strategic-plan.jpg",
  },
  tig: {
    title: "Termites in the Guestroom",
    subtitle: "Dealing with poor culture in the workplace",
    publisher: "Divine Keys Publishing",
    cover: "/images/books/termites-in-the-guestroom.jpg",
  },
} satisfies Record<string, SourceBook>;
