"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight, CheckCircle2, Globe, BarChart4 } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const pillars = [
    {
      label: "Strategy",
      title: "Venture Intelligence",
      description: "Moving beyond predictive models to agentic decision-making frameworks.",
      icon: <Target className="w-5 h-5" />
    },
    {
      label: "Execution",
      title: "Rapid Venture Studio",
      description: "Validating internal concepts with the speed of a high-growth startup.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      label: "Security",
      title: "Compliance-First AI",
      description: "Enterprise-grade safeguards for proprietary data and strategic IP.",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(white,transparent)]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-habitat-indigo opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-habitat-indigo"></span>
              </span>
              <span>Available for Selective Pilots</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-950 mb-8 leading-[0.9]">
              The Operating System for <br />
              <span className="text-habitat-indigo italic font-serif-display">Internal Ventures</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 font-medium leading-relaxed">
              We empower global organizations to build, validate, and scale 
              AI-native ventures with the velocity of a founder.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="h-14 px-10 rounded-full bg-slate-950 text-white font-bold hover:bg-habitat-indigo transition-all duration-300 flex items-center space-x-2 group">
                <span>Initiate Transformation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 px-10 rounded-full border border-slate-200 text-slate-950 font-bold hover:bg-slate-50 transition-all">
                The Methodology
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="solutions" className="py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="mb-6 text-habitat-indigo">{item.icon}</div>
                <div className="text-[10px] uppercase tracking-widest text-habitat-indigo font-bold mb-3">{item.label}</div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Venture Studio Advantage */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-habitat-indigo/10 blur-[120px] rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                From Strategy Deck to <br />
                <span className="text-habitat-indigo">Functional Reality</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                Traditional consulting stops at the presentation. We start with the sprint. 
                Our 5-hour framework transforms internal constraints into technical momentum.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "Velocity", val: "10x Build Speed" },
                  { title: "Efficiency", val: "90% Leaner R\u0026D" },
                  { title: "Scale", val: "Global Ready" },
                  { title: "IP", val: "100% Owned" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-white/10 pl-6 py-2">
                    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">{stat.title}</div>
                    <div className="text-xl font-bold">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-square rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <BarChart4 className="w-12 h-12 text-habitat-indigo" />
                   <div className="text-right">
                     <div className="text-xs text-slate-500 font-mono">PILOT STAGE</div>
                     <div className="text-sm font-bold">ALPHA-01</div>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-habitat-indigo" 
                      />
                   </div>
                   <div className="flex justify-between text-xs font-mono text-slate-400">
                     <span>VALIDATION CYCLE</span>
                     <span>70% COMPLETE</span>
                   </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle2 size={16} className="text-habitat-indigo" />
                      <span className="text-slate-300">Semantic Engine Integrated</span>
                   </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-habitat-indigo rounded-full mix-blend-screen filter blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Scale */}
      <section id="methodology" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <Globe className="w-12 h-12 text-slate-200 mx-auto mb-8" />
           <h2 className="text-3xl font-bold text-slate-950 mb-6">Designed for the Global Stage</h2>
           <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
             Our methodology is being deployed across logistics, finance, and manufacturing sectors 
             to bridge the gap between AI hype and operational ROI.
           </p>
           <button className="px-10 py-4 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-all">
              Request Case Studies
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center group">
              <span className="text-slate-300 font-mono text-lg">[</span>
              <span className="px-2 text-slate-950 font-bold tracking-tight text-sm uppercase">
                HABITAT <span className="text-habitat-indigo">Enterprise</span>
              </span>
              <span className="text-slate-300 font-mono text-lg">]</span>
            </div>
            <div className="text-slate-400 text-xs font-medium tracking-widest uppercase">
              &copy; 2026 Habitat Venture Group. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
