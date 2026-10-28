import { Footer } from "@/components/cta-footer";
import { Logo } from "@/components/nav";

/** Shell for the footer pages. Content is intentionally empty until written. */
export function LegalPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-hair">
        <div className="mx-auto flex min-h-[70px] max-w-[1200px] items-center px-[clamp(20px,5vw,48px)]">
          <Logo />
        </div>
      </header>
      <main className="mx-auto max-w-[800px] px-[clamp(20px,5vw,48px)] pb-24 pt-[clamp(48px,8vw,96px)]">
        <h1 className="font-display text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.022em]">
          {title}
        </h1>
        {/* TODO: page content */}
      </main>
      <Footer />
    </div>
  );
}
