"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Shield, Cpu, BarChart4 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Venture Intelligence",
      description: "We identify white spaces in your market and validate them with real-time customer data and AI-driven TAM analysis."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Venture Studio",
      description: "Moving from strategic alignment to a functional, AI-native prototype in a single 5-hour sprint."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Governance & Scale",
      description: "Enterprise-grade infrastructure designed for deployment within complex regulatory and security environments."
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-habitat-indigo selection:text-white bg-mesh">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-dot-pattern"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-habitat-indigo/5 border border-habitat-indigo/10 text-habitat-indigo text-[10px] font-bold uppercase tracking-widest mb-8">
              <BarChart4 size={12} />
              <span>The OS for Corporate Intrapreneurs</span>
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
              The Operating System for <br />
              <span className="gradient-text italic">Internal Ventures</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
              We empower global organizations to build, validate, and scale 
              AI-native ventures with the velocity of a founder.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
              <button className="px-8 py-4 rounded-full bg-habitat-indigo text-white font-bold flex items-center space-x-2 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95">
                <span>Start Pilot Briefing</span>
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                The Methodology
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Dashboard />
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="solutions" className="py-32 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-habitat-indigo/30 transition-all hover:shadow-xl hover:shadow-indigo-50"
              >
                <div className="w-12 h-12 rounded-xl bg-habitat-indigo/5 text-habitat-indigo flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase tracking-widest text-sm">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium italic">
                  "{item.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="methodology" className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
            Speed is the new <br />
            <span className="text-habitat-indigo tracking-widest">Compliance.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">
            We deliver functional, AI-native prototypes and validated market strategies 
            using the Habitat 5-hour framework—bypassing traditional R&D friction.
          </p>
          <div className="flex justify-center items-center space-x-12 grayscale opacity-50">
             <div className="flex items-center space-x-2 font-black text-2xl tracking-tighter">[ HABITAT ]</div>
             <div className="flex items-center space-x-2 font-black text-2xl tracking-tighter uppercase text-habitat-indigo">OS</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 text-center">
        <div className="flex justify-center mb-8">
           <div className="flex items-center">
              <span className="text-slate-300 font-mono text-xl">[</span>
              <span className="px-2 text-slate-900 font-bold tracking-tight text-sm uppercase">
                HABITAT <span className="text-habitat-indigo">Enterprise</span>
              </span>
              <span className="text-slate-300 font-mono text-xl">]</span>
           </div>
        </div>
        <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em]">&copy; 2026 Habitat Venture Group. Built for Intrapreneurs.</p>
      </footer>
    </main>
  );
}
