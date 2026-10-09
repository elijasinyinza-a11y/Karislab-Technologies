import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Insights",
  description: "Karislab thinking on technology, intelligence and impact.",
  alternates: { canonical: "/insights" },
  // Interim page: keep out of search results until the real content is live.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Insights"
      summary="We're preparing this page. It will share our thinking on technology, intelligence and impact."
    />
  );
}
