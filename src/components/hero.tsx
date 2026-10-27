import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import chatConfirm from "@/assets/chat-confirm.png";
import expensesList from "@/assets/expenses-list.jpg";

const DOODLES: { icon: IconName; pos: string; size: string; delay: string }[] = [
  { icon: "coin", pos: "left-[3%] top-[10%]", size: "text-[54px]", delay: "-2s" },
  { icon: "receipt", pos: "left-[44%] top-[3%]", size: "text-[42px]", delay: "-5s" },
  { icon: "pie", pos: "right-[4%] top-[46%]", size: "text-[60px]", delay: "-1s" },
  { icon: "wallet", pos: "left-[36%] bottom-[6%]", size: "text-[46px]", delay: "-7s" },
  { icon: "target", pos: "left-[1%] bottom-[14%]", size: "text-[38px]", delay: "-3s" },
];

const METHOD_PILL =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-hair bg-surface px-2 py-2 text-sm font-semibold sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[15px]";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-[clamp(48px,7vw,80px)] pt-[clamp(40px,7vw,88px)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-ink opacity-10 max-sm:hidden" aria-hidden="true">
        {DOODLES.map((d) => (
          <Icon
            key={d.icon}
            name={d.icon}
            className={`drift absolute ${d.pos} ${d.size}`}
          />
        ))}
      </div>

      <div className="relative flex flex-wrap items-center gap-x-8 gap-y-10 sm:gap-y-14">
        {/* copy */}
        <div className="min-w-0 flex-[1_1_440px]">
          <div className="hero-in inline-flex items-center gap-2.5 rounded-full border border-hair bg-surface py-2 pl-3.5 pr-4 text-sm font-semibold shadow-card">
            <span className="live-dot" />
            Now on iOS &amp; Android
          </div>
          <h1
            className="hero-in mt-6 font-display text-[clamp(42px,7.6vw,96px)] font-bold leading-[0.96] tracking-[-0.04em]"
            style={{ animationDelay: "0.08s" }}
          >
            Every dollar.
            <br />
            <span className="inline-block -rotate-[1.5deg] rounded-[0.16em] bg-mint px-[0.14em] text-on-mint">
              One chat.
            </span>
          </h1>
          <p
            className="hero-in mt-7 max-w-[29em] text-[clamp(18px,2vw,21px)] leading-normal text-muted"
            style={{ animationDelay: "0.16s" }}
          >
            Tell Alex what you spent. Type it, say it, or snap the receipt. Alex
            sorts it into the right bucket, you tap to confirm, and your budget
            is up to date.
          </p>
          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:mt-[34px] sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#download"
              className="btn-mint inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-full px-7 text-[17px] font-bold"
            >
              <Icon name="down" className="text-xl" />
              Download free
            </a>
            <a
              href="#how"
              className="btn-line inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-full px-7 text-[17px] font-semibold"
            >
              See how it works
              <Icon name="arrow" className="text-lg" />
            </a>
          </div>
          <div
            className="hero-in mt-6 grid grid-cols-3 gap-2 sm:mt-[34px] sm:flex sm:flex-wrap sm:gap-2.5"
            style={{ animationDelay: "0.32s" }}
          >
            <span className={METHOD_PILL}>
              <Icon name="type" className="text-lg text-mint-text" />
              Type it
            </span>
            <span className={METHOD_PILL}>
              <Icon name="mic" className="text-lg text-mint-text" />
              Say it
              <span className="wave !h-[18px] !gap-[3px] max-sm:!hidden" aria-hidden="true">
                {[0, 0.15, 0.3, 0.45].map((d) => (
                  <i key={d} style={{ width: 3, animationDelay: `${d}s` }} />
                ))}
              </span>
            </span>
            <span className={METHOD_PILL}>
              <Icon name="camera" className="text-lg text-mint-text" />
              Snap it
            </span>
          </div>
        </div>

        {/* phones */}
        <div className="flex min-w-0 flex-[1_1_420px] justify-center">
          {/* Below 520px the 470px-wide phone composition is scaled down as a unit. */}
          <div className="relative h-[640px] w-[min(100%,470px)] max-[519px]:h-[480px] max-[519px]:w-[348px] max-[379px]:h-[371px] max-[379px]:w-[273px]">
          <div className="relative size-full max-[519px]:absolute max-[519px]:left-0 max-[519px]:top-0 max-[519px]:h-[640px] max-[519px]:w-[470px] max-[519px]:origin-top-left max-[519px]:scale-[.74] max-[379px]:scale-[.58]">
            <div
              className="phone-in absolute left-0 top-20 w-[250px] overflow-hidden rounded-[40px] border-[7px] border-ink bg-ink shadow-[0_30px_60px_rgba(16,19,17,0.28)]"
              style={{ animationDelay: "0.25s" }}
            >
              <Image
                src={expensesList}
                alt="SimpleBudget$ expenses list grouped by day, with search, filters and a bucket label on every entry"
                sizes="250px"
                className="block h-auto w-full"
                placeholder="blur"
              />
            </div>
            <div
              className="phone-in absolute right-0 top-0 w-[264px] overflow-hidden rounded-[42px] border-[7px] border-ink bg-ink shadow-[0_40px_80px_rgba(16,19,17,0.34)]"
              style={{ animationDelay: "0.1s" }}
            >
              <Image
                src={chatConfirm}
                alt="SimpleBudget$ chat showing a $12 coffee entry waiting for a Confirm tap"
                sizes="264px"
                fetchPriority="high"
                className="block h-auto w-full"
                placeholder="blur"
              />
            </div>

            <div
              className="note -rotate-[4deg] bg-mint text-on-mint"
              style={{ left: -14, bottom: 70, animationDelay: "0.9s, 0.9s" }}
            >
              <Icon name="coffee" className="text-lg" />
              Wants · $12.00
            </div>
            <div
              className="note rotate-3 border border-hair bg-surface"
              style={{ right: -6, bottom: 6, animationDelay: "1.2s, 1.8s" }}
            >
              <Icon name="shield" className="text-lg text-mint-text" />
              Nothing saved without your OK
            </div>
            <div
              className="note -rotate-2 bg-ink text-white"
              style={{ left: 44, top: 20, animationDelay: "1.5s, 0.4s" }}
            >
              <Icon name="sparkles" className="text-lg text-mint" />
              Alex sorted it
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
