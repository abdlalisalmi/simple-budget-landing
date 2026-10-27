import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import {
  Bar,
  BlockText,
  BlockTitle,
  Eyebrow,
  SectionHeading,
} from "@/components/section";
import receipt from "@/assets/receipt.png";

const BLOCK = "flex items-center gap-x-16 gap-y-11";

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex size-[22px] flex-none items-center justify-center rounded-full bg-mint-soft text-[13px] text-mint-text">
        <Icon name="check" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

/* ---------- Receipts ---------- */
function ReceiptLine({
  name,
  bucket,
  bucketColor,
  amt,
  delay,
}: {
  name: string;
  bucket: string;
  bucketColor: string;
  amt: string;
  delay: string;
}) {
  return (
    <div
      className="demo-line flex items-center justify-between py-1.5 text-[15px]"
      style={{ animationDelay: delay }}
    >
      <span>{name}</span>
      <span className="flex items-center gap-2.5">
        <span
          className="text-[11px] font-bold tracking-[0.08em]"
          style={{ color: bucketColor }}
        >
          {bucket}
        </span>
        <strong>{amt}</strong>
      </span>
    </div>
  );
}

function Receipts() {
  return (
    <div className={`mt-[72px] flex-wrap ${BLOCK}`}>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <Eyebrow icon="receipt">Receipts</Eyebrow>
        <BlockTitle>Snap it. Alex reads every line.</BlockTitle>
        <BlockText>
          A mixed grocery run lands in the right buckets. Alex pulls out each
          item, the tax, the tip and any discounts, then asks you if the math
          doesn&apos;t add up.
        </BlockText>
        <ul className="mt-[22px] flex flex-col gap-3 text-[17px]">
          <Tick>Items, tax and tip split automatically</Tick>
          <Tick>Totals must match, or Alex asks</Tick>
          <Tick>You review before anything is saved</Tick>
        </ul>
      </div>

      <div className="rv flex min-w-0 flex-[1_1_380px] justify-center">
        <div className="relative w-[min(100%,440px)] pb-[70px] pt-10">
          <div className="relative mx-auto w-[236px] -rotate-[4deg] overflow-hidden rounded-[14px] bg-white shadow-[0_30px_60px_rgba(16,19,17,0.22)]">
            <Image
              src={receipt}
              alt="Photo of a convenience-store receipt"
              sizes="236px"
              className="block h-auto w-full"
            />
            <div
              className="pointer-events-none absolute inset-3 rounded-[10px] border-2 border-dashed border-mint"
              aria-hidden="true"
            />
            <div
              className="scan-line pointer-events-none absolute inset-x-3 h-[3px] rounded-[3px] bg-mint shadow-[0_0_16px_4px_#33d69f99]"
              aria-hidden="true"
            />
          </div>
          <div className="card absolute bottom-0 right-0 w-[272px] rounded-[22px] p-[18px] shadow-[0_24px_50px_rgba(16,19,17,0.2)]">
            <ReceiptLine name="Milk 1 gal" bucket="ESSENTIALS" bucketColor="var(--color-mint-text)" amt="$4.99" delay="0.2s" />
            <ReceiptLine name="Bread × 2" bucket="ESSENTIALS" bucketColor="var(--color-mint-text)" amt="$6.98" delay="0.5s" />
            <ReceiptLine name="Tax (8.25%)" bucket="ESSENTIALS" bucketColor="var(--color-mint-text)" amt="$0.99" delay="0.8s" />
            <div className="mt-2 flex justify-between border-t border-hair pt-2.5 text-base">
              <strong>TOTAL</strong>
              <strong>$12.96</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Buckets ---------- */
const BUCKETS: { name: string; icon: IconName; pct: number; color: string; text: string }[] = [
  { name: "Essentials", icon: "home", pct: 50, color: "var(--color-mint)", text: "text-mint-text" },
  { name: "Wants", icon: "coffee", pct: 20, color: "var(--color-amber)", text: "text-amber-text" },
  { name: "Savings", icon: "wallet", pct: 10, color: "var(--color-blue)", text: "text-[#2f6fe8]" },
  { name: "Investments", icon: "trend-up", pct: 10, color: "var(--color-violet)", text: "text-[#7c3aed]" },
  { name: "Debt", icon: "trend-down", pct: 10, color: "var(--color-pink)", text: "text-pink-text" },
];

function Buckets() {
  return (
    <div className={`mt-24 flex-wrap-reverse ${BLOCK}`}>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <div className="card flex flex-col gap-5 p-[30px]">
          {BUCKETS.map((b) => (
            <div key={b.name}>
              <div className="flex justify-between text-base">
                <strong className="inline-flex items-center gap-2">
                  <Icon name={b.icon} className={`text-lg ${b.text}`} />
                  {b.name}
                </strong>
                <span className="text-muted">{b.pct}%</span>
              </div>
              <div className="mt-[9px]">
                <Bar pct={b.pct} color={b.color} thick />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <Eyebrow icon="pie">Buckets</Eyebrow>
        <BlockTitle>Five buckets, sorted for you.</BlockTitle>
        <BlockText>
          Alex suggests the split that fits your situation, and you can
          customize it anytime. Every expense is filed into the right bucket
          automatically.
        </BlockText>
      </div>
    </div>
  );
}

/* ---------- Funds & debt ---------- */
const FUNDS = [
  { name: "Summer in Barcelona", pct: 62 },
  { name: "Emergency fund", pct: 80 },
  { name: "New laptop", pct: 35 },
];

function FundsAndDebt() {
  return (
    <div className={`mt-24 flex-wrap ${BLOCK}`}>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <Eyebrow icon="target">Funds &amp; debt</Eyebrow>
        <BlockTitle>Save for what matters. Pay off what weighs on you.</BlockTitle>
        <BlockText>
          Set up sinking funds for trips, gifts or a rainy day and watch them
          fill. Track every debt payment and see exactly when you&apos;ll be
          debt-free.
        </BlockText>
      </div>
      <div className="rv flex min-w-0 flex-[1_1_380px] flex-wrap gap-4">
        <div className="card lift flex-[1_1_260px] p-6">
          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] text-muted">
            <Icon name="target" className="text-base text-mint-text" />
            SINKING FUNDS
          </div>
          <div className="mt-[18px] flex flex-col gap-4">
            {FUNDS.map((f) => (
              <div key={f.name}>
                <div className="flex justify-between text-[15px]">
                  <span>{f.name}</span>
                  <strong>{f.pct}%</strong>
                </div>
                <div className="mt-2">
                  <Bar pct={f.pct} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card lift flex-[1_1_220px] p-6">
          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] text-muted">
            <Icon name="trend-down" className="text-base text-pink-text" />
            DEBT
          </div>
          <div className="mt-[18px] text-[15px] text-muted">Car loan</div>
          <div className="mt-1 font-display text-4xl font-bold tracking-[-0.03em]">
            $1,240.00
          </div>
          <div className="mt-0.5 text-[15px] text-muted">left to pay</div>
          <div className="mt-[18px] inline-flex items-center gap-2 rounded-xl bg-mint-soft px-3.5 py-2.5 text-sm font-bold text-mint-text">
            <Icon name="target" className="text-base" />
            Debt-free countdown on
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reports ---------- */
function Report() {
  return (
    <div className={`mt-24 flex-wrap-reverse ${BLOCK}`}>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <div className="card p-7">
          <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] text-mint-text">
            <Icon name="sparkles" className="text-base" />
            MONTHLY REPORT
          </div>
          <div className="mt-2 font-display text-[27px] font-bold tracking-[-0.02em]">
            A Strong First Month, Sarah
          </div>
          <p className="mt-3 text-base leading-[1.55] text-muted">
            You brought in $4,500.00, spent $1,850.00, and kept $2,650.00. Wants
            came in remarkably lean at just $105.00.
          </p>
          <div className="mt-[18px] rounded-[18px] bg-canvas p-4">
            <div className="text-xs font-bold tracking-[0.1em] text-muted">
              YOUR YEAR ONE WEALTH
            </div>
            <div className="mt-1.5 flex items-baseline gap-2.5">
              <span className="font-display text-[34px] font-bold tracking-[-0.03em]">
                $2,840.00
              </span>
              <span className="text-[15px] text-muted">built so far</span>
            </div>
            <svg viewBox="0 0 300 60" className="mt-2 h-[60px] w-full" aria-hidden="true">
              <path
                d="M0 52 C40 50 70 44 110 36 S190 22 230 14 S280 6 300 4"
                fill="none"
                stroke="var(--color-mint)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="grow"
              />
            </svg>
          </div>
          <div className="mt-[18px] text-[13px] font-bold tracking-[0.06em]">
            THREE THINGS TO FOCUS ON NEXT MONTH
          </div>
          <ol className="mt-2.5 list-decimal pl-5 text-[15px] leading-[1.75] text-muted">
            <li>Contribute at least $200.00 to Emergency Fund</li>
            <li>Put at least $450.00 into Investments</li>
            <li>Keep Wants spending under $900.00</li>
          </ol>
        </div>
      </div>
      <div className="rv min-w-0 flex-[1_1_380px]">
        <Eyebrow icon="sparkles">Reports</Eyebrow>
        <BlockTitle>Monthly reports that talk back.</BlockTitle>
        <BlockText>
          At the end of each month Alex writes you a personal report: what went
          well, what to watch, and three things to focus on next. Each report
          builds on the one before.
        </BlockText>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="inside"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <SectionHeading
        icon="wallet"
        eyebrow="Inside the app"
        title="A real budget plan, without the homework."
        maxWidth="13em"
      />
      <Receipts />
      <Buckets />
      <FundsAndDebt />
      <Report />
    </section>
  );
}
