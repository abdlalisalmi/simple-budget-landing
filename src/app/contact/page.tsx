import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Contact Us — SimpleBudget$" };

export default function ContactPage() {
  return <LegalPage title="Contact Us" />;
}
