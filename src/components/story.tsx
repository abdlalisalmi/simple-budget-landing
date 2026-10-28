import { Icon, type IconName } from "@/components/icons";
import { Eyebrow, SectionHeading } from "@/components/section";

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <div className="card rv flex flex-wrap gap-x-16 gap-y-10 p-[clamp(26px,5vw,64px)]">
        <div className="min-w-0 flex-[1_1_320px]">
          <Eyebrow icon="chat">Why I&apos;m building this</Eyebrow>
          <h2 className="mt-3.5 font-display text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.02] tracking-[-0.028em]">
            I&apos;m a finance director. My wife isn&apos;t.
          </h2>
          <blockquote className="mt-8 border-l-4 border-mint pl-5 font-display text-[clamp(22px,2.6vw,30px)] font-semibold leading-[1.25] tracking-[-0.015em]">
            &ldquo;Do we still have room for this?&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-3.5">
            <span className="flex size-12 items-center justify-center rounded-full bg-mint font-logo text-xl font-bold text-on-mint">
              A
            </span>
            <div>
              <div className="font-bold">Abdel</div>
              <div className="text-sm text-muted">Founder</div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1.3_1_380px] flex-col gap-5 text-[18px] leading-[1.65] text-muted">
          <p>
            We both want to keep track of our money. And since I&apos;m the one
            who lives in spreadsheets all day, she&apos;d ask me before every
            coffee, every dinner, every Sephora trip: &ldquo;Do we still have
            room for this?&rdquo;
          </p>
          <p>
            And honestly? I don&apos;t always know either. I&apos;d pull up our
            budget app, scan the dashboard, do math in my head, and try to
            answer.
          </p>
          <p>
            One night, our &ldquo;fancy&rdquo; bank-linked app told me that we
            spent $600 on groceries. We hadn&apos;t. The app saw
            &ldquo;Costco&rdquo; and assumed groceries. It was a coffee
            machine.
          </p>
          <p className="font-semibold text-ink">That&apos;s when it clicked.</p>
          <p>
            Every budget app is built by people who already know how to budget,
            and they assume you do too. They give you charts. They give you
            categories. They give you bank feeds that can&apos;t tell a coffee
            machine from a head of lettuce.
          </p>
          <p>
            What we actually needed was simpler: someone to ask. A coach in our
            pocket.
          </p>
          <p className="font-semibold text-ink">
            So I&apos;m building one. For us, and for you.
          </p>
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
