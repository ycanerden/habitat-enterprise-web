"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Target, Boxes } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const services = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Strategic Discovery",
      desc: "Identifying white spaces and high-TAM opportunities within corporate ecosystems using AI-native intelligence."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Venture Building",
      desc: "Transforming internal expertise into functional, standalone digital ventures in high-velocity sprints."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Governance OS",
      desc: "Banking-grade infrastructure and regulatory compliance as a service for high-risk corporate environments."
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Superiority */}
      <div className="absolute inset-0 z-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -mr-[400px] -mt-[200px] pointer-events-none" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
              <Boxes size={12} className="text-indigo-500" />
              <span>Venture Builder for Corporate Alpha</span>
            </span>
            
            <h1 className="text-6xl md:text-[88px] font-black tracking-tighter text-slate-950 mb-8 leading-[0.85] gradient-text">
              THE OPERATING SYSTEM <br />
              FOR INTERNAL VENTURES.
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500 mb-16 font-medium leading-relaxed italic">
              "We provide the strategic speed of a startup with the 
              security and scale of an enterprise powerhouse."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Dashboard />
          </motion.div>
        </div>
      </section>

      {/* Product Pillars */}
      <section id="solutions" className="py-32 border-t border-slate-100 bg-slate-50/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner shadow-white">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-[0.1em]">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action */}
      <section id="methodology" className="py-40 px-6 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-12 tracking-tighter leading-none">
              READY TO <br />
              <span className="italic text-indigo-500">BUILD</span> THE NEXT?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
               <button className="px-10 py-5 rounded-full bg-slate-950 text-white font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100 active:scale-95">
                  Initiate Strategic Briefing
               </button>
               <button className="px-10 py-5 rounded-full border border-slate-200 bg-white text-slate-500 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                  View Framework
               </button>
            </div>
         </div>
      </section>

      {/* Footer Superiority */}
      <footer className="py-20 border-t border-slate-100 bg-white">
         <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="flex items-center mb-10 opacity-40">
               <span className="text-slate-400 font-mono text-xl">[</span>
               <span className="px-2 text-slate-900 font-bold tracking-tight text-xs uppercase">
                 HABITAT <span className="text-indigo-600">Enterprise</span>
               </span>
               <span className="text-slate-400 font-mono text-xl">]</span>
            </div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] text-center">
               Habitat Venture Group &bull; 2026 &bull; Brussels &bull; Amsterdam
            </p>
         </div>
      </footer>
    </main>
  );
}