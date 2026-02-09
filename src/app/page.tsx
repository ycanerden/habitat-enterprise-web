"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, BarChart3, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const solutions = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Venture Studio Model",
      description: "We help corporate teams validate and build internal startups with the speed of a VC-backed founder."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Native Transformation",
      description: "Move beyond ChatGPT. Implement agentic workflows that automate complex strategic and technical operations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Innovation OS",
      description: "A structured methodology for rapid prototyping while maintaining corporate compliance and strategic alignment."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-habitat-indigo/10 border border-habitat-indigo/20 text-habitat-indigo text-xs font-bold uppercase tracking-widest mb-6">
              Corporate Innovation 2.0
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-habitat-slate mb-6">
              The Venture OS for <br />
              <span className="gradient-text italic">Forward-Thinking Enterprises</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-habitat-muted mb-10 leading-relaxed">
              Accelerate intrapreneurship with the Habitat 5-hour sprint methodology. 
              Build, validate, and launch internal ventures at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 rounded-xl bg-habitat-indigo text-white font-bold hover:shadow-lg hover:shadow-habitat-indigo/20 transition-all flex items-center space-x-2">
                <span>Explore Pilot Program</span>
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl border border-habitat-border text-habitat-slate font-bold hover:bg-slate-50 transition-all">
                Download Proposal Framework
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-habitat-slate mb-4">Enterprise-Grade Innovation</h2>
            <p className="text-habitat-muted">Combining startup velocity with strategic corporate rigor.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-habitat-border hover:border-habitat-indigo/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-habitat-indigo/10 text-habitat-indigo flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-habitat-slate mb-3">{item.title}</h3>
                <p className="text-habitat-muted leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-habitat-slate mb-6">The 5-Hour Corporate Sprint</h2>
              <p className="text-habitat-muted mb-8 leading-relaxed">
                Our proprietary sprint methodology is optimized for corporate environments, 
                enabling teams to move from strategic alignment to a functional, 
                live prototype in a single working session.
              </p>
              <ul className="space-y-4">
                {[
                  "Accelerated Market Validation",
                  "AI-Native Tech Stack Implementation",
                  "Strategic ROI Frameworks",
                  "Internal Stakeholder Alignment"
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-3 text-habitat-slate font-medium">
                    <div className="w-5 h-5 rounded-full bg-habitat-indigo/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-habitat-indigo" />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full aspect-video rounded-3xl bg-slate-900 overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-habitat-indigo/20 to-transparent pointer-events-none" />
               <div className="flex items-center justify-center h-full">
                  <BarChart3 className="w-24 h-24 text-white/10 group-hover:text-habitat-indigo/30 transition-colors" />
               </div>
               <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-white text-xs font-mono">
                    <span>STATUS: VALIDATING VENTURE #04</span>
                    <span className="text-habitat-indigo">84% CONFIDENCE</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-habitat-border text-center text-habitat-muted text-sm">
        <p>&copy; 2026 Habitat Enterprise. Professional Intrapreneurship Solutions.</p>
      </footer>
    </main>
  );
}