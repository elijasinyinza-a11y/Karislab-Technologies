import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Karislab platforms for organisational intelligence and digital infrastructure.",
  alternates: { canonical: "/solutions" },
  // Interim page: keep out of search results until the real content is live.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Our solutions"
      summary="We're preparing this page. It will set out each Karislab platform in detail."
    />
  );
}
