import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}