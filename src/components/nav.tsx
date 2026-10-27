import Link from "next/link";
import { Icon } from "@/components/icons";

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const box = size === "md" ? "size-9 rounded-[11px] text-[21px]" : "size-[34px] rounded-[10px] text-[20px]";
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 font-display font-bold tracking-[-0.02em] ${size === "md" ? "text-[22px]" : "text-[21px]"}`}
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
  { href: "#how", label: "How it works" },
  { href: "#inside", label: "Inside the app" },
  { href: "#try", label: "Try it" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-hair bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex min-h-[70px] max-w-[1200px] flex-wrap items-center gap-x-7 gap-y-2.5 px-[clamp(20px,5vw,48px)]">
        <Logo />
        <nav className="ml-auto flex flex-wrap items-center gap-x-7 gap-y-1.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="btn-mint inline-flex min-h-[46px] items-center gap-2 rounded-full px-[22px] text-[15px] font-bold"
          >
            Get the app <Icon name="arrow" className="text-base" />
          </a>
        </nav>
      </div>
    </header>
  );
}
