import { Icon } from "@/components/icons";
import { TICKER } from "@/content/data";

export function Marquee() {
  // Doubled so the -50% translate loops seamlessly.
  const items = [...TICKER, ...TICKER];
  return (
    <section
      className="marquee overflow-hidden pt-1.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-label="Examples of what Alex logs"
    >
      <div className="marquee-track">
        {items.map((t, i) => (
          <div
            key={i}
            aria-hidden={i >= TICKER.length}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-hair bg-surface px-[18px] py-3 text-base shadow-card"
          >
            <span className="flex size-[30px] items-center justify-center rounded-full bg-mint-soft text-mint-text">
              <Icon name={t.icon} className="text-base" />
            </span>
            <span className="font-semibold">{t.msg}</span>
            <Icon name="arrow" className="text-[15px] text-[#9aa59e]" />
            <span className="font-bold text-mint-text">{t.bucket}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const FACTS = [
  { icon: "lock", title: "0 bank logins", text: "Nothing to link, nothing to leak." },
  { icon: "pie", title: "5 buckets", text: "Essentials, Wants, Savings, Investments, Debt." },
  { icon: "chat", title: "3 ways to log", text: "Type it, say it, or snap the receipt." },
] as const;

export function FactStrip() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(48px,6vw,72px)]">
      <div className="card rv flex flex-wrap overflow-hidden">
        {FACTS.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-[1_1_240px] items-center gap-[18px] px-8 py-[30px] ${i > 0 ? "border-l border-hair" : ""}`}
          >
            <span className="flex size-[52px] flex-none items-center justify-center rounded-2xl bg-mint-soft text-[26px] text-mint-text">
              <Icon name={f.icon} />
            </span>
            <div>
              <div className="font-display text-[30px] font-bold tracking-[-0.03em]">
                {f.title}
              </div>
              <div className="mt-0.5 text-[15px] text-muted">{f.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
