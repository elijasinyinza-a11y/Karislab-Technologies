import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Insights" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Insights"
      summary="We're preparing this page. It will share our thinking on technology, intelligence and impact."
    />
  );
}
