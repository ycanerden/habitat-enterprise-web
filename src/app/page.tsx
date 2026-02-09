"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Target, Shield, Boxes, Activity, BarChart3, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { AuroraText } from '@/components/aurora-text';
import { BorderBeam } from '@/components/border-beam';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] -mr-[400px] -mt-[200px] pointer-events-none" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 shadow-sm">
              <Boxes size={12} />
              <span>The OS for Corporate Ventures</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 mb-8 leading-[0.85]">
              <AuroraText>BUILD VENTURES</AuroraText> <br />
              WITH STARTUP VELOCITY.
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 font-medium leading-relaxed italic">
              "We provide the strategic speed of a founder with the 
              banking-grade security of a global enterprise."
            </p>

            <div className="flex items-center space-x-4">
              <button className="px-10 py-4 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100 flex items-center space-x-2 group">
                <span>Start Briefing</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Superior Bento Grid - Product Feel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-24 w-full">
            
            {/* Main Terminal Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:col-span-8 relative group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 overflow-hidden min-h-[400px] shadow-sm hover:shadow-2xl hover:shadow-indigo-50 transition-all"
            >
              <BorderBeam size={300} duration={12} delay={9} />
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                 <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-100" />
                    <div className="w-3 h-3 rounded-full bg-slate-100" />
                    <div className="w-3 h-3 rounded-full bg-slate-100" />
                 </div>
                 <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">venture-dashboard.exe</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase italic underline decoration-indigo-500/30">Venture OS</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                       Functional, AI-native prototypes and validated market strategies 
                       using the Habitat 5-hour framework.
                    </p>
                    <div className="flex items-center space-x-4">
                       <div className="flex items-center space-x-2 px-3 py-1 rounded bg-indigo-50 text-indigo-600 font-mono text-[10px] font-bold">
                          $2.4B TAM IDENTIFIED
                       </div>
                       <div className="flex items-center space-x-2 px-3 py-1 rounded bg-green-50 text-green-600 font-mono text-[10px] font-bold">
                          BANK-GRADE SECURE
                       </div>
                    </div>
                 </div>
                 <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 font-mono text-xs space-y-4">
                    <div className="flex items-start space-x-2 text-indigo-500">
                       <span className="font-bold">[SYS]</span>
                       <span className="text-slate-600 animate-pulse">Analyzing internal expertise...</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400">
                       <Activity size={12} />
                       <span>Market validation score: 94.2%</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400">
                       <Target size={12} />
                       <span>Problem-Solution fit: High</span>
                    </div>
                    <div className="pt-4 border-t border-slate-200/50 text-indigo-600 font-bold">
                       Ready for Deployment &gt;_
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Side Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="md:col-span-4 group relative rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:border-indigo-200 transition-colors shadow-sm"
            >
               <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 shadow-inner shadow-white">
                  <Shield size={24} />
               </div>
               <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Security</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                     Built for the world's most regulated environments. Compliance as a Service.
                  </p>
               </div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="md:col-span-4 group rounded-3xl border border-slate-200 bg-white p-8 hover:border-indigo-200 transition-colors shadow-sm"
            >
               <BarChart3 className="text-indigo-600 mb-6" size={32} />
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Market Intelligence</h3>
               <p className="text-xs text-slate-500 font-medium">Real-time data visualization for venture validation.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="md:col-span-4 group rounded-3xl border border-slate-200 bg-white p-8 hover:border-indigo-200 transition-colors shadow-sm"
            >
               <Globe className="text-indigo-600 mb-6" size={32} />
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Global Scale</h3>
               <p className="text-xs text-slate-500 font-medium">From pilot to global launch in under 6 months.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="md:col-span-4 group rounded-3xl bg-indigo-600 p-8 text-white flex flex-col justify-between"
            >
               <h3 className="text-2xl font-black italic tracking-tighter">Ready to Build?</h3>
               <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest bg-white text-indigo-600 w-fit px-4 py-2 rounded-lg">
                  <span>Start Pilot</span>
                  <ArrowRight size={14} />
               </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white relative z-10">
         <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="flex items-center mb-10 opacity-40">
               <span className="text-slate-400 font-mono text-xl">[</span>
               <span className="px-2 text-slate-900 font-bold tracking-tight text-xs uppercase">
                 HABITAT <span className="text-indigo-600">Enterprise</span>
               </span>
               <span className="text-slate-400 font-mono text-xl">]</span>
            </div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em] text-center">
               Habitat Venture Group &bull; 2026 &bull; Global
            </p>
         </div>
      </footer>
    </main>
  );
}