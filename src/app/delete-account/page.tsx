import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Delete Account — SimpleBudget$" };

export default function DeleteAccountPage() {
  return <LegalPage title="Delete Account" />;
}
