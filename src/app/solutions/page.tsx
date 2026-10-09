import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = { title: "Solutions" };

export default function Page() {
  return (
    <PagePlaceholder
      title="Our solutions"
      summary="We're preparing this page. It will set out each Karislab platform in detail."
    />
  );
}
