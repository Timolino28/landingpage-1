
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/pain-section";
import { ProcessSection } from "@/components/process-section";
import { WhyUs } from "@/components/why-us";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <PainSection />
      <ProcessSection />
      <WhyUs />
      <CTASection />
      <Footer />
    </main>
  );
}
