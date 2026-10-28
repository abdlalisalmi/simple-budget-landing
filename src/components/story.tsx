import { Icon, type IconName } from "@/components/icons";
import { Eyebrow, SectionHeading } from "@/components/section";

function Beat({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rv flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex size-10 flex-none items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-mint">
          {n}
        </span>
        <span className="mt-2 w-px flex-1 bg-hair" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1 pb-10">
        <h3 className="font-display text-[22px] font-bold tracking-[-0.015em]">
          {title}
        </h3>
        <div className="mt-3 flex flex-col gap-4 text-[18px] leading-[1.65] text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <div className="rv">
        <Eyebrow icon="chat">Why I&apos;m building this</Eyebrow>
        <h2 className="mt-3.5 max-w-[14em] font-display text-[clamp(34px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.025em]">
          I&apos;m a finance director. My wife isn&apos;t.
        </h2>
      </div>

      <div className="mt-12 flex flex-wrap items-start gap-x-14 gap-y-10">
        {/* left: the question + the founder */}
        <aside className="rv flex min-w-0 flex-[1_1_320px] flex-col gap-5 lg:sticky lg:top-28 lg:max-w-[400px]">
          <figure className="rounded-[32px] border border-mint-line bg-mint-soft p-8">
            <blockquote className="font-display text-[clamp(26px,3vw,34px)] font-semibold leading-[1.18] tracking-[-0.02em]">
              &ldquo;Do we still have room for this?&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-[15px] text-[#3f5a4e]">
              Every coffee. Every dinner. Every Sephora trip.
            </figcaption>
          </figure>
          <div className="card flex items-center gap-4 p-5">
            <span className="flex size-14 flex-none items-center justify-center rounded-full bg-mint font-logo text-2xl font-bold text-on-mint">
              A
            </span>
            <div>
              <div className="text-lg font-bold">Abdel</div>
              <div className="text-[15px] text-muted">
                Founder · finance director
              </div>
            </div>
          </div>
        </aside>

        {/* right: the story in three beats */}
        <div className="min-w-0 flex-[1.5_1_420px]">
          <Beat n="1" title="The question">
            <p>
              We both want to keep track of our money. And since I&apos;m the
              one who lives in spreadsheets all day, she&apos;d ask me before
              every coffee, every dinner, every Sephora trip: &ldquo;Do we
              still have room for this?&rdquo;
            </p>
            <p>
              And honestly? I don&apos;t always know either. I&apos;d pull up
              our budget app, scan the dashboard, do math in my head, and try
              to answer.
            </p>
          </Beat>

          <Beat n="2" title="The coffee machine">
            <p>
              One night, our &ldquo;fancy&rdquo; bank-linked app told me that
              we spent $600 on groceries. We hadn&apos;t. The app saw
              &ldquo;Costco&rdquo; and assumed groceries. It was a coffee
              machine.
            </p>
            <div className="mt-1 flex flex-wrap gap-3" aria-hidden="true">
              <div className="min-w-0 flex-[1_1_200px] rounded-2xl border border-pink-soft bg-pink-soft/60 p-4">
                <div className="text-xs font-bold tracking-[0.08em] text-pink-text">
                  BANK-LINKED APP
                </div>
                <div className="mt-2 font-display text-lg font-bold text-ink">
                  Costco · $612.00
                </div>
                <div className="text-[15px] text-pink-text">
                  tagged &ldquo;Groceries&rdquo;
                </div>
              </div>
              <div className="min-w-0 flex-[1_1_200px] rounded-2xl border border-mint-line bg-mint-soft p-4">
                <div className="text-xs font-bold tracking-[0.08em] text-mint-text">
                  TOLD ALEX
                </div>
                <div className="mt-2 font-display text-lg font-bold text-ink">
                  Coffee machine $280.00
                </div>
                <div className="text-[15px] text-mint-text">
                  Groceries $332.00
                </div>
              </div>
            </div>
          </Beat>

          <Beat n="3" title="That's when it clicked">
            <p>
              Every budget app is built by people who already know how to
              budget, and they assume you do too. They give you charts. They
              give you categories. They give you bank feeds that can&apos;t
              tell a coffee machine from a head of lettuce.
            </p>
            <p>
              What we actually needed was simpler: someone to ask. A coach in
              our pocket.
            </p>
            <p className="rounded-2xl bg-ink px-6 py-5 font-display text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
              So I&apos;m building one.{" "}
              <span className="text-mint">For us, and for you.</span>
            </p>
          </Beat>
        </div>
      </div>
    </section>
  );
}

const PROFILES: {
  icon: IconName;
  tint: string;
  tag: string;
  title: string;
  lead: string;
  text: string;
  quote: string;
}[] = [
  {
    icon: "wallet",
    tint: "bg-mint-soft text-mint-text",
    tag: "Profile 01",
    title: "The busy professional",
    lead: "You could budget,",
    text: "you just don't have 30 minutes every night to log expenses in a spreadsheet. You want the answer, not the homework.",
    quote: "I want to know if I can afford this. In 3 seconds, not 30 minutes.",
  },
  {
    icon: "target",
    tint: "bg-amber-soft text-amber-text",
    tag: "Profile 02",
    title: "The reformed over-spender",
    lead: "You want to be good with money.",
    text: "You really do. But the second you open a budgeting app, your brain checks out. You need a coach in your corner, not a calculator.",
    quote: "Just help me stay on track. And cheer me on when I am.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]">
      <SectionHeading
        icon="sparkles"
        eyebrow="Made for"
        title="Two kinds of people. Or one person, depending on the day."
        maxWidth="16em"
      />
      <div className="mt-11 flex flex-wrap gap-[18px]">
        {PROFILES.map((p) => (
          <div key={p.title} className="card lift rv flex-[1_1_340px] p-[clamp(26px,3vw,38px)]">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-muted">
                {p.tag}
              </span>
              <span
                className={`flex size-12 items-center justify-center rounded-2xl text-2xl ${p.tint}`}
              >
                <Icon name={p.icon} />
              </span>
            </div>
            <h3 className="mt-5 font-display text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.02em]">
              {p.title}
            </h3>
            <p className="mt-3 text-[18px] leading-[1.55] text-muted">
              <strong className="font-semibold text-ink">{p.lead}</strong>{" "}
              {p.text}
            </p>
            <p className="mt-6 rounded-2xl bg-canvas px-5 py-4 text-[17px] font-medium italic leading-[1.5]">
              &ldquo;{p.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
      <p className="rv mt-6 flex items-center gap-2.5 text-[17px] text-muted">
        <Icon name="chat" className="text-xl text-mint-text" />
        <span>
          <strong className="text-ink">Couples? Yes.</strong> We were the
          original use case.
        </span>
      </p>
    </section>
  );
}
