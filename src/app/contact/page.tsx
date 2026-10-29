import type { Metadata } from "next";
import Link from "next/link";
import { Doc, Email, LegalPage, List } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = { title: "Contact Us — SimpleBudget$" };

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      intro="Questions, feedback or something not working? We read every message."
    >
      <Doc id="email" title="Email">
        <p>
          <Email />
        </p>
        <p>
          Tell us which phone and app version you use if it is a problem, and
          never include your password.
        </p>
      </Doc>

      <Doc id="requests" title="Privacy and account requests">
        <List>
          <li>To delete your account, see <Link href="/delete-account">Delete Account</Link>.</li>
          <li>To access, correct or export your data, email us from your account address.</li>
        </List>
      </Doc>

      <Doc id="company" title="Company">
        <p>
          {LEGAL.entity}
          <br />
          {LEGAL.address}
        </p>
      </Doc>
    </LegalPage>
  );
}
