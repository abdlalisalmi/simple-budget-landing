import { Icon, type IconName } from "@/components/icons";
import { SectionHeading } from "@/components/section";

const GOALS: {
  icon: IconName;
  tint: string;
  title: string;
  text: string;
}[] = [
  {
    icon: "pie",
    tint: "bg-mint-soft text-mint-text",
    title: "Know where it goes",
    text: "Every expense filed into the right bucket, so a leaky month shows up in seconds, not at the end of it.",
  },
  {
    icon: "target",
    tint: "bg-amber-soft text-amber-text",
    title: "Save for something",
    text: "Sinking funds for the trip, the gift or the rainy day, each one filling up as you put money in.",
  },
  {
    icon: "trend-down",
    tint: "bg-pink-soft text-pink-text",
    title: "Get out of debt",
    text: "Log each payment and see the exact month you'll be debt-free.",
  },
];

export function Goals() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]">
      <SectionHeading
        icon="target"
        eyebrow="Your goal"
        title="Spend smart. Save more. Owe less."
      />
      <div className="mt-11 flex flex-wrap gap-[18px]">
        {GOALS.map((g) => (
          <div key={g.title} className="card lift rv flex-[1_1_300px] p-[30px]">
            <span
              className={`flex size-14 items-center justify-center rounded-[18px] text-[28px] ${g.tint}`}
            >
              <Icon name={g.icon} />
            </span>
            <h3 className="mt-[22px] font-display text-[27px] font-bold tracking-[-0.02em]">
              {g.title}
            </h3>
            <p className="mt-2.5 text-base leading-[1.55] text-muted">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const PILLARS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "help",
    title: "One question, never a guess",
    text: "If your message is ambiguous, Alex asks a single clarifying question with tap-to-answer chips. A batch is never half-logged.",
  },
  {
    icon: "shield",
    title: "The math always adds up",
    text: "Items, tax and tip must equal the receipt total. If they don't, Alex asks you. Amounts are never silently adjusted.",
  },
  {
    icon: "lock",
    title: "Your data stays yours",
    text: "Encrypted, no bank linking, and we never store your passwords. Delete your account and data anytime from inside the app.",
  },
];

export function Trust() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]">
      <SectionHeading
        icon="shield"
        eyebrow="Honest by design"
        title="Alex never guesses."
      />
      <div className="mt-11 flex flex-wrap gap-[18px]">
        {PILLARS.map((p) => (
          <div key={p.title} className="card lift rv flex-[1_1_300px] p-[30px]">
            <span className="flex size-[50px] items-center justify-center rounded-2xl bg-ink text-2xl text-mint">
              <Icon name={p.icon} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em]">
              {p.title}
            </h3>
            <p className="mt-2.5 text-base leading-[1.55] text-muted">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
