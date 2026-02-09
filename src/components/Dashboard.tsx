"use client";

import { motion } from 'framer-motion';
import { Terminal, Activity, Zap, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

export default function VentureDashboard() {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl border border-slate-200 bg-white/70 backdrop-blur-2xl shadow-2xl habitat-glow">
      {/* Precision Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50/50">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
            habitat-enterprise — venture-os-v1.0
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Metric Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
           {[
             { label: "Velocity", val: "12x", icon: <Zap size={14} /> },
             { label: "Stability", val: "99.9%", icon: <Shield size={14} /> },
             { label: "Output", val: "A.I.", icon: <Activity size={14} /> }
           ].map((s, i) => (
             <div key={i} className="p-3 rounded-lg border border-slate-100 bg-white shadow-sm group hover:border-indigo-200 transition-colors">
                <div className="text-indigo-500 mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">{s.label}</div>
                <div className="text-lg font-bold text-slate-900 tracking-tight">{s.val}</div>
             </div>
           ))}
        </div>

        {/* System Logs - The "Superior" DNA */}
        <div className="space-y-3 font-mono text-xs md:text-sm">
          <div className="flex items-start space-x-3">
            <span className="text-indigo-500 font-bold tracking-tighter">[BOOT]</span>
            <span className="text-slate-600 italic">Initializing Venture Discovery Protocol...</span>
          </div>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-slate-100 py-1">
            <CheckCircle2 size={12} className="text-indigo-500" />
            <span className="text-slate-500">TAM Analysis complete ($2.4B Identified)</span>
          </div>

          <div className="flex items-center space-x-3 pl-4 border-l border-slate-100 py-1">
            <CheckCircle2 size={12} className="text-indigo-500" />
            <span className="text-slate-500">Governance Framework validated for KBC-level compliance</span>
          </div>

          <div className="flex items-center space-x-3 mt-4">
             <span className="text-indigo-500 font-bold animate-pulse tracking-tighter">&gt;</span>
             <span className="text-slate-900 font-bold">Ready for Habitat 5-hour Sprint.</span>
             <motion.span 
               animate={{ opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="w-2 h-4 bg-indigo-500 inline-block align-middle"
             />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
           <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-slate-950 text-white text-xs font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100">
             <span>Deploy Venture OS</span>
             <ChevronRight size={14} />
           </button>
        </div>
      </div>
    </div>
  );
}
