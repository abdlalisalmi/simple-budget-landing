import type { Metadata } from "next";
import Link from "next/link";
import { Doc, Email, LegalPage, List, Steps } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = { title: "Delete Account — SimpleBudget$" };

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Account"
      intro="You can delete your SimpleBudget$ account and your data at any time, from the app or from here."
    >
      <Doc id="in-app" title="Delete it in the app">
        <Steps>
          <li>Open SimpleBudget$ and sign in.</li>
          <li>Go to Settings.</li>
          <li>Choose Delete account and confirm.</li>
        </Steps>
      </Doc>

      <Doc id="by-email" title="Can’t open the app? Ask us">
        <p>
          Email <Email subject="Delete my SimpleBudget$ account" /> from the
          email address (or tell us the phone number) on your account, with the
          subject “Delete my SimpleBudget$ account”. We may reply to confirm it
          is really you before we start.
        </p>
      </Doc>

      <Doc id="what-happens" title="What happens next">
        <List>
          <li>
            <strong>{LEGAL.graceDays}-day waiting period.</strong> Your deletion
            is scheduled, and you can change your mind: signing back in during
            these {LEGAL.graceDays} days cancels it.
          </li>
          <li>
            <strong>Then it is permanent.</strong> After the waiting period your
            account is deleted and cannot be restored.
          </li>
        </List>
      </Doc>

      <Doc id="deleted" title="What is deleted">
        <List>
          <li>Your sign-in account.</li>
          <li>Your profile and setup answers.</li>
          <li>All expenses, income, funds, debts and recurring items.</li>
          <li>Your chat with Alex and your monthly reports.</li>
          <li>Any receipt photos still stored.</li>
          <li>Your subscription record with our billing provider.</li>
        </List>
      </Doc>

      <Doc id="kept" title="What we keep">
        <List>
          <li>An anonymous placeholder record: an ID and timestamps, with no name, email, phone number or budget data. It stops the deleted account from being recreated.</li>
          <li>Records that Apple or Google keep about your purchases. Those are under their control, not ours.</li>
        </List>
      </Doc>

      <Doc id="subscription" title="Important: your subscription">
        <p>
          Deleting your account <strong>does not cancel your paid plan</strong>.
          Cancel it yourself in your App Store or Google Play subscription
          settings, or you may keep being charged.
        </p>
      </Doc>

      <Doc id="waitlist" title="Joined the waitlist on this website?">
        <p>
          Email <Email subject="Remove me from the waitlist" /> and we will
          remove your address. See also our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Doc>
    </LegalPage>
  );
}
