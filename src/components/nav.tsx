import Link from "next/link";
import { Icon } from "@/components/icons";

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const box = size === "md" ? "size-8 rounded-[10px] text-[19px] sm:size-9 sm:rounded-[11px] sm:text-[21px]" : "size-[34px] rounded-[10px] text-[20px]";
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center gap-2.5 font-logo font-bold tracking-[-0.01em] ${size === "md" ? "text-[17px] min-[360px]:text-[19px] sm:text-[22px]" : "text-[21px]"}`}
    >
      <span
        className={`flex items-center justify-center bg-mint font-bold text-on-mint ${box}`}
      >
        $
      </span>
      SimpleBudget$
    </Link>
  );
}

const LINKS = [
  { href: "#story", label: "Our story" },
  { href: "#how", label: "How it works" },
  { href: "#inside", label: "Inside the app" },
  { href: "#try", label: "Try it" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-hair bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex min-h-[70px] max-w-[1200px] items-center gap-x-4 md:gap-x-7 px-[clamp(20px,5vw,48px)]">
        <Logo />
        <nav className="ml-auto flex items-center gap-x-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="max-md:hidden text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="btn-mint inline-flex min-h-[46px] items-center gap-2 whitespace-nowrap rounded-full px-3.5 text-sm font-bold min-[360px]:px-4 min-[360px]:text-[15px] md:px-[22px]"
          >
            Join waitlist <Icon name="arrow" className="text-base max-[420px]:hidden" />
          </a>
        </nav>
      </div>
    </header>
  );
}
