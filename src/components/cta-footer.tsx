import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Logo } from "@/components/nav";
import { Year } from "@/components/year";
import { STORE_LINKS } from "@/content/data";

const CTA_DOODLES: { icon: IconName; pos: string; size: string; delay?: string }[] = [
  { icon: "coin", pos: "left-[6%] top-[14%]", size: "text-6xl" },
  { icon: "receipt", pos: "right-[8%] top-[10%]", size: "text-5xl", delay: "-4s" },
  { icon: "pie", pos: "left-[14%] bottom-[10%]", size: "text-[44px]", delay: "-6s" },
  { icon: "wallet", pos: "right-[12%] bottom-[12%]", size: "text-[56px]", delay: "-2s" },
];

export function Cta() {
  return (
    <section
      id="download"
      className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(72px,10vw,128px)]"
    >
      <div className="rv relative overflow-hidden rounded-[44px] bg-ink px-[clamp(24px,5vw,64px)] py-[clamp(44px,7vw,96px)] text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden text-mint opacity-[0.12]"
          aria-hidden="true"
        >
          {CTA_DOODLES.map((d) => (
            <Icon
              key={d.icon}
              name={d.icon}
              className={`drift absolute ${d.pos} ${d.size}`}
            />
          ))}
        </div>
        <div className="relative">
          <h2 className="mx-auto max-w-[11em] font-display text-[clamp(40px,6.4vw,80px)] font-bold leading-[0.98] tracking-[-0.04em]">
            Your budget, one message at a time.
          </h2>
          <p className="mx-auto mt-[22px] max-w-[30em] text-[19px] leading-normal text-[#b4bbb6]">
            SimpleBudget$ is available now on iPhone and Android. Download it
            and say hi to Alex.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a
              href={STORE_LINKS.appStore}
              className="btn-mint inline-flex min-h-[62px] items-center gap-3 rounded-full px-7 text-[17px] font-bold"
            >
              <Icon name="apple" className="text-2xl" />
              <span className="flex flex-col items-start leading-[1.1]">
                <span className="text-[11px] font-semibold opacity-75">Download on the</span>
                App Store
              </span>
            </a>
            <a
              href={STORE_LINKS.googlePlay}
              className="btn-line inline-flex min-h-[62px] items-center gap-3 rounded-full px-7 text-[17px] font-bold text-ink"
            >
              <Icon name="play" className="text-[22px] text-mint-text" />
              <span className="flex flex-col items-start leading-[1.1]">
                <span className="text-[11px] font-semibold text-muted">Get it on</span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/delete-account", label: "Delete Account" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-12 pt-14">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Logo size="sm" />
        <nav className="flex flex-wrap gap-x-7 gap-y-2.5">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-7 border-t border-hair pt-6 text-sm text-muted">
        © <Year /> SimpleBudget$
      </div>
    </footer>
  );
}
