import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { Pillars } from "@/components/Pillars";
import { Pricing } from "@/components/Pricing";
import { Personas } from "@/components/Personas";
import { DemoFormSection } from "@/components/DemoFormSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <Pillars />
        <Pricing />
        <Personas />
        <DemoFormSection />
      </main>
      <Footer />
    </div>
  );
}
