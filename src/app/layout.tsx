import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { IconSprite } from "@/components/icons";
import "./globals.css";

// Same pairing as the app: Outfit for text, Fraunces for the logo.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SimpleBudget$ — Budgeting that feels like texting a friend",
  description:
    "Tell Alex what you spent. Type it, say it, or snap the receipt. Alex sorts it into the right bucket, you tap to confirm, and your budget is up to date.",
  applicationName: "SimpleBudget$",
};

export const viewport: Viewport = {
  themeColor: "#f3f3ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="overflow-x-clip">
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
