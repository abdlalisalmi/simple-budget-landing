import { Cta, Footer } from "@/components/cta-footer";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Goals, Trust } from "@/components/goals-trust";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { FactStrip, Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { TryIt } from "@/components/try-it";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-canvas">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <FactStrip />
        <HowItWorks />
        <Features />
        <TryIt />
        <Goals />
        <Trust />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
