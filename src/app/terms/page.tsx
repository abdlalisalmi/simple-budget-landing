import type { Metadata } from "next";
import Link from "next/link";
import { Doc, Email, LegalPage, List } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = { title: "Terms of Service — SimpleBudget$" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      showUpdated
      intro={`These terms are the agreement between you and ${LEGAL.entity} (“we”, “us”) for the SimpleBudget$ app and this website. By using them you accept these terms.`}
    >
      <Doc id="service" title="The service">
        <p>
          SimpleBudget$ lets you log expenses by chatting with Alex, our AI
          budgeting assistant, and gives you budget tracking and monthly
          coaching reports. Features may change over time.
        </p>
      </Doc>

      <Doc id="eligibility" title="Who can use it">
        <p>
          You must be at least {LEGAL.minAge} years old. You are responsible for
          keeping your sign-in details safe and for activity on your account.
        </p>
      </Doc>

      <Doc id="not-advice" title="Alex is not financial advice">
        <p>
          Alex is an AI assistant. Its answers, summaries and coaching are
          general information to help you track your spending. They are{" "}
          <strong>not</strong> financial, investment, tax or legal advice, and Alex
          can make mistakes. Check what Alex logs before you confirm it, and make
          your own financial decisions.
        </p>
      </Doc>

      <Doc id="subscriptions" title="Subscriptions and billing">
        <List>
          <li>Paid plans are bought through the Apple App Store or Google Play, and billed by them.</li>
          <li>Plans renew automatically until you cancel. Cancel in your App Store or Google Play subscription settings, at least 24 hours before the renewal date.</li>
          <li>Refunds are handled by Apple or Google under their own policies.</li>
          <li>
            Deleting your SimpleBudget$ account does <strong>not</strong> cancel
            your subscription. Cancel it in the store yourself, or you may keep
            being charged.
          </li>
        </List>
      </Doc>

      <Doc id="use" title="Acceptable use">
        <p>You agree not to:</p>
        <List>
          <li>break the law or use the app for anything unlawful;</li>
          <li>try to access other people&apos;s accounts or data;</li>
          <li>interfere with or overload the service, or try to bypass its security;</li>
          <li>reverse engineer the app, or use it to build a competing product;</li>
          <li>use scripts or bots to send requests to the service in bulk.</li>
        </List>
      </Doc>

      <Doc id="content" title="Your content">
        <p>
          You keep ownership of the data you enter. You give us permission to
          store and process it, including with our AI provider, only to run the
          service for you as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Doc>

      <Doc id="ip" title="Our property">
        <p>
          The app, the website, the SimpleBudget$ name and logo, and the
          software behind them belong to {LEGAL.entity} or its licensors. These
          terms give you a personal, limited right to use the app, not to own it.
        </p>
      </Doc>

      <Doc id="termination" title="Ending your account">
        <p>
          You can stop using SimpleBudget$ and delete your account at any time.
          See <Link href="/delete-account">Delete Account</Link> for how, and for
          what is removed. We may suspend or end an account that breaks these
          terms.
        </p>
      </Doc>

      <Doc id="disclaimer" title="Disclaimers and liability">
        <p>
          The service is provided “as is” and “as available”, without
          guarantees that it will be uninterrupted or error-free. To the extent
          the law allows, we are not liable for indirect or consequential
          losses, or for decisions you make based on the app, and our total
          liability to you is limited to the amount you paid us in the 12 months
          before the claim. Some places do not allow these limits, so they apply
          only as far as your local law permits.
        </p>
      </Doc>

      <Doc id="law" title="Governing law">
        <p>These terms are governed by {LEGAL.governingLaw}.</p>
      </Doc>

      <Doc id="changes" title="Changes to these terms">
        <p>
          We may update these terms. We will change the date at the top, and tell
          you in the app or by email about significant changes. Continuing to use
          SimpleBudget$ after a change means you accept it.
        </p>
      </Doc>

      <Doc id="contact" title="Contact us">
        <p>
          {LEGAL.entity}, {LEGAL.address}
          <br />
          <Email />
        </p>
      </Doc>
    </LegalPage>
  );
}
