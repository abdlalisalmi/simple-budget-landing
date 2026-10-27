import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { IconSprite } from "@/components/icons";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="overflow-x-clip">
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
