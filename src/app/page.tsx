import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Problem from '@/components/sections/Problem';
import HowItWorks from '@/components/sections/HowItWorks';
import CorporateOfferings from '@/components/sections/CorporateOfferings';
import Outcomes from '@/components/sections/Outcomes';
import Toolkit from '@/components/sections/Toolkit';
import Team from '@/components/sections/Team';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Problem />
      <HowItWorks />
      <CorporateOfferings />
      <Outcomes />
      <Toolkit />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
