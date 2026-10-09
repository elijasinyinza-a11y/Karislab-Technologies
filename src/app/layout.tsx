import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karislab | Building intelligent solutions for a changing world",
    template: "%s | Karislab",
  },
  description:
    "We bring together technology, data and human insight to solve meaningful problems and create lasting value.",
  applicationName: "Karislab",
};

export const viewport: Viewport = {
  themeColor: "#07345b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
