import { Icon, type IconName } from "@/components/icons";
import { Bar, SectionHeading } from "@/components/section";

function Step({
  n,
  icon,
  title,
  text,
  children,
}: {
  n: string;
  icon: IconName;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card lift rv flex-[1_1_250px] p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-[15px] font-bold tracking-[0.1em] text-mint-text">
          {n}
        </span>
        <Icon name={icon} className="text-2xl text-mint-text" />
      </div>
      <h3 className="mt-4 font-display text-[26px] font-bold tracking-[-0.02em]">{title}</h3>
      <p className="mt-2.5 text-base leading-[1.55] text-muted">{text}</p>
      <div className="mt-[22px]">{children}</div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <SectionHeading
        icon="sparkles"
        eyebrow="How it works"
        title="Seconds, not screens."
        sub="Four beats. No forms, no spreadsheets, no homework."
      />
      <div className="mt-11 flex flex-wrap gap-[18px]">
        <Step
          n="01"
          icon="chat"
          title="Tell Alex"
          text="Type it, say it, or snap a receipt. However you'd tell a friend."
        >
          <div className="inline-block rounded-[18px_18px_4px_18px] bg-mint px-4 py-3 text-[15px] font-semibold text-on-mint">
            uber home 9.50
          </div>
        </Step>

        <Step
          n="02"
          icon="sparkles"
          title="Alex sorts it"
          text="Amount, category and bucket, filled in for you."
        >
          <dl className="flex flex-col gap-2 rounded-2xl bg-canvas px-4 py-3.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Amount</dt>
              <dd className="font-bold">$9.50</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Category</dt>
              <dd className="inline-flex items-center gap-1.5 font-bold">
                <Icon name="car" className="text-[15px]" />
                Transport
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Bucket</dt>
              <dd className="font-bold text-mint-text">Essentials</dd>
            </div>
          </dl>
        </Step>

        <Step
          n="03"
          icon="check"
          title="Tap to confirm"
          text="One tap and it's saved. Nothing is logged without your OK."
        >
          <div className="pulse-ring inline-flex items-center gap-2.5 rounded-full bg-mint px-[22px] py-[13px] text-base font-bold text-on-mint">
            <Icon name="check" className="text-lg" strokeWidth={3} />
            Confirm
          </div>
        </Step>

        <Step
          n="04"
          icon="undo"
          title="Done"
          text="Your budget updates instantly. Changed your mind? Undo anytime."
        >
          <div className="rounded-2xl bg-canvas px-4 py-3.5">
            <div className="flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-[13px]">
              <strong className="tracking-[0.06em]">ESSENTIALS</strong>
              <strong>$1,184.00 / $1,500.00</strong>
            </div>
            <div className="mt-2.5">
              <Bar pct={79} />
            </div>
          </div>
        </Step>
      </div>
    </section>
  );
}
