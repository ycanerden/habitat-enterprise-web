"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Zap, Shield, Target, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const categories = [
    { num: "01", title: "Venture Discovery", desc: "We identify white spaces in your market and validate them with real customer data in weeks, not months." },
    { num: "02", title: "AI Transformation", desc: "We build agentic systems that don't just 'assist' your teams, but handle complete strategic workflows." },
    { num: "03", title: "Corporate Sprints", desc: "Our 5-hour high-octane methodology is the gold standard for rapid prototyping in complex organizations." }
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section - High Impact */}
      <section className="pt-48 pb-24 px-6 md:px-12 border-b border-black">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-4 mb-12">
               <span className="w-12 h-[1px] bg-black" />
               <span className="text-xs font-bold uppercase tracking-[0.3em]">The OS for Intrapreneurs</span>
            </div>
            
            <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-16">
              WE BUILD <br />
              <span className="text-habitat-indigo">VENTURES</span> FOR <br />
              ENTERPRISES.
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl font-medium leading-tight max-w-xl">
                Habitat Enterprise is a venture-building powerhouse. 
                We bridge the gap between corporate strategy and functional, AI-native reality.
              </p>
              <div className="flex justify-start md:justify-end">
                <button className="group relative flex items-center justify-center w-48 h-48 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-500 overflow-hidden">
                   <div className="relative z-10 flex flex-col items-center">
                     <span className="font-bold text-sm uppercase mb-1">Start Pilot</span>
                     <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Bundl/Board style */}
      <section id="solutions" className="border-b border-black">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
          {categories.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: "#F8FAFC" }}
              className="p-12 md:p-20 flex flex-col justify-between aspect-square md:aspect-auto min-h-[500px]"
            >
              <div>
                <span className="text-sm font-mono font-bold mb-12 block">{item.num}</span>
                <h3 className="text-4xl font-bold mb-6 leading-none uppercase tracking-tighter">{item.title}</h3>
                <p className="text-lg text-black/60 font-medium leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-12">
                <Plus className="w-8 h-8 text-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Vision - Large Full Width */}
      <section className="py-32 px-6 md:px-12 bg-black text-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter uppercase">
                 Consulting <br />is Dead. <br />
                 <span className="text-habitat-indigo italic">Building</span> is <br />Everything.
               </h2>
               <div className="space-y-12">
                  <p className="text-2xl text-white/70 leading-relaxed font-medium">
                    The era of 100-page slide decks is over. We deliver functional MVPs and 
                    validated market engines using the Habitat 5-hour methodology.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { l: "Velocity", v: "10x Build" },
                       { l: "Security", v: "Bank Grade" },
                       { l: "Efficiency", v: "Lean Ops" },
                       { l: "Ownership", v: "100% Yours" }
                     ].map((s, i) => (
                       <div key={i} className="border-t border-white/20 pt-6">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2 block">{s.l}</span>
                          <span className="text-xl font-bold uppercase">{s.v}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Impact - High End Footer */}
      <section id="methodology" className="py-40 px-6 md:px-12 text-center border-b border-black">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              Ready for the <br />Next Era?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-16 text-black/60">
              Join leading organizations deploying AI-native ventures 
              with the velocity of a high-growth startup.
            </p>
            <button className="h-20 px-16 rounded-full bg-black text-white text-lg font-bold hover:bg-habitat-indigo transition-colors duration-300">
              Request Enterprise Briefing
            </button>
         </div>
      </section>

      {/* Footer - Minimalist Brutalist */}
      <footer className="py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="flex items-center">
            <span className="text-black/20 font-mono text-2xl">[</span>
            <span className="px-3 text-black font-black tracking-tighter text-2xl uppercase">
              HABITAT <span className="text-habitat-indigo">Enterprise</span>
            </span>
            <span className="text-black/20 font-mono text-2xl">]</span>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-2">Habitat Venture Group &copy; 2026</div>
            <div className="text-xs font-medium text-black/40 uppercase tracking-widest">Brussles &bull; Amsterdam &bull; Global</div>
          </div>
        </div>
      </footer>
    </main>
  );
}