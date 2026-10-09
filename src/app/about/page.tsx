import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description: "Who Karislab is, what we stand for and how we work.",
  alternates: { canonical: "/about" },
  // Interim page: keep out of search results until the real content is live.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PagePlaceholder
      title="About Karislab"
      summary="We're preparing this page. It will introduce who we are, what we stand for and how we work."
    />
  );
}
