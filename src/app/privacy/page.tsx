import type { Metadata } from "next";
import Link from "next/link";
import { Doc, Email, LegalPage, List } from "@/components/legal-page";
import { LEGAL } from "@/content/legal";

export const metadata: Metadata = { title: "Privacy Policy — SimpleBudget$" };

const PROCESSORS: [string, string][] = [
  ["Supabase", "Sign-in, our database and receipt photo storage."],
  ["Railway", "Hosting for our servers."],
  ["Anthropic", "AI provider that generates Alex's replies and your monthly reports."],
  ["RevenueCat and Superwall", "Subscription management and the paywall."],
  ["Google Firebase Cloud Messaging", "Delivering push notifications only."],
  ["Sentry", "Error reports, set up not to include personal data."],
  ["Resend", "Email delivery, including the waitlist on this website."],
  ["Vercel", "Hosting for this website."],
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      showUpdated
      intro={`SimpleBudget$ is a budgeting app you talk to. This policy explains what ${LEGAL.entity} (“we”, “us”) collects when you use the app and this website, why, and the choices you have.`}
    >
      <Doc id="collect" title="What we collect">
        <List>
          <li><strong>Account details:</strong> your email address or phone number, and a user ID, used to sign you in.</li>
          <li><strong>Profile and setup answers:</strong> your name, age group, currency, income profile and sources, housing situation, and household status and size.</li>
          <li><strong>Budget data:</strong> expenses, income, funds, debts, recurring items and your monthly reports.</li>
          <li><strong>Chat with Alex:</strong> the messages you send and Alex&apos;s replies. If you use voice input, your phone converts speech to text on the device and only the text is sent to us. We do not receive or store audio.</li>
          <li><strong>Receipt photos:</strong> images you take or upload so Alex can read them.</li>
          <li><strong>Subscription status:</strong> whether you have an active plan, through Apple or Google. We never see your card number.</li>
          <li><strong>Notification token:</strong> a device token, only if you turn on push notifications.</li>
          <li><strong>Error reports:</strong> technical details when the app fails, collected without personal data.</li>
          <li><strong>Website waitlist:</strong> the email address you enter on this website.</li>
        </List>
        <p>
          We do not connect to your bank, and we never ask for your bank login or
          card details.
        </p>
      </Doc>

      <Doc id="use" title="How we use it">
        <List>
          <li>To run the app: log your expenses, track your buckets, funds and debts, and show your history.</li>
          <li>To generate Alex&apos;s answers and your monthly reports.</li>
          <li>To manage your subscription and send notifications you asked for.</li>
          <li>To keep the service secure, fix errors and answer your messages.</li>
          <li>To email you about the launch if you joined the waitlist.</li>
        </List>
        <p>We do not sell your data and we do not show ads.</p>
      </Doc>

      <Doc id="ai" title="How Alex uses AI">
        <p>
          When you chat with Alex, scan a receipt or open a report, the relevant
          messages, receipt images and budget figures are sent from our servers
          to our AI provider, which processes them to generate the response. The
          app never contacts the AI provider directly. Alex can make mistakes,
          so you review and confirm entries before they are saved.
        </p>
      </Doc>

      <Doc id="share" title="Who we share data with">
        <p>
          We use these service providers to run SimpleBudget$. They process data
          only on our behalf and to provide their service.
        </p>
        <List>
          {PROCESSORS.map(([name, what]) => (
            <li key={name}>
              <strong>{name}:</strong> {what}
            </li>
          ))}
        </List>
        <p>
          We may also disclose data if the law requires it, or to protect our
          rights and the safety of our users.
        </p>
      </Doc>

      <Doc id="retention" title="How long we keep it">
        <List>
          <li>Receipt photos are deleted automatically after {LEGAL.receiptDays} days. The expenses Alex read from them stay in your history.</li>
          <li>Everything else is kept until you delete your account.</li>
          <li>Waitlist emails are kept until you ask us to remove them or the launch email has been sent.</li>
        </List>
      </Doc>

      <Doc id="delete" title="Deleting your account and data">
        <p>
          You can delete your account from the app, or request it from this
          website. Your data is then permanently removed after a short waiting
          period. Full steps, and exactly what is deleted, are on the{" "}
          <Link href="/delete-account">Delete Account</Link> page.
        </p>
      </Doc>

      <Doc id="rights" title="Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct,
          export or delete your personal data, to object to certain uses, and to
          complain to your local data protection authority. To use any of these
          rights, email <Email />. You can delete your account yourself at any
          time.
        </p>
      </Doc>

      <Doc id="security" title="Security">
        <p>
          Data is encrypted in transit, and every request is checked so that each
          account can only reach its own data. No system is perfectly secure, so
          we cannot guarantee absolute security.
        </p>
      </Doc>

      <Doc id="transfers" title="International transfers">
        <p>
          Our providers may process data in countries other than your own. Where
          required, we rely on appropriate safeguards for those transfers.
        </p>
      </Doc>

      <Doc id="children" title="Children">
        <p>
          SimpleBudget$ is not for anyone under {LEGAL.minAge}. We do not
          knowingly collect data from younger children. If you believe a child
          has given us data, email <Email /> and we will delete it.
        </p>
      </Doc>

      <Doc id="changes" title="Changes to this policy">
        <p>
          We may update this policy. We will change the date at the top, and for
          significant changes we will tell you in the app or by email.
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
