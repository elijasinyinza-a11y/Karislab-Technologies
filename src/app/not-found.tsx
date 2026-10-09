import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PagePlaceholder
      title="Page not found"
      summary="This page doesn't exist or may have moved. Use the menu above or head back to the homepage."
    />
  );
}
