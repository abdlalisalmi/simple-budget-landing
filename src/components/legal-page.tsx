import { Footer } from "@/components/cta-footer";
import { Logo } from "@/components/nav";
import { LEGAL } from "@/content/legal";

/** Shell for the footer pages: header, title, prose body, footer. */
export function LegalPage({
  title,
  intro,
  showUpdated = false,
  children,
}: {
  title: string;
  intro?: string;
  showUpdated?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-hair">
        <div className="mx-auto flex min-h-[70px] max-w-[1200px] items-center px-[clamp(20px,5vw,48px)]">
          <Logo />
        </div>
      </header>
      <main className="mx-auto max-w-[800px] px-[clamp(20px,5vw,48px)] pb-24 pt-[clamp(48px,8vw,96px)]">
        <h1 className="font-display text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.03em]">
          {title}
        </h1>
        {showUpdated && (
          <p className="mt-3 text-[15px] text-muted">Last updated: {LEGAL.updated}</p>
        )}
        {intro && (
          <p className="mt-6 text-[19px] leading-[1.6] text-muted">{intro}</p>
        )}
        <div className="mt-10 flex flex-col gap-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

/** A titled block with an anchor id, so sections can be linked to. */
export function Doc({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-[26px] font-bold tracking-[-0.015em]">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-[17px] leading-[1.7] text-muted [&_a]:font-semibold [&_a]:text-mint-text [&_a]:underline [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-mint">{children}</ul>;
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="flex list-decimal flex-col gap-2 pl-6 marker:font-bold marker:text-mint-text">{children}</ol>;
}

export function Email({ subject }: { subject?: string }) {
  const href = `mailto:${LEGAL.supportEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <a href={href}>{LEGAL.supportEmail}</a>;
}
