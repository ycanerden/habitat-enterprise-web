import { motion } from 'framer-motion';
import { BarChart3, Activity, PieChart, CheckCircle2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-xl terminal-glow">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-slate-200"></div>
          <div className="w-3 h-3 rounded-full bg-slate-200"></div>
          <div className="w-3 h-3 rounded-full bg-slate-200"></div>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
          Habitat Enterprise // Venture OS v1.0
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { label: "Validation Score", val: "94.2%", icon: <Activity size={16} />, color: "text-habitat-indigo" },
            { label: "Market TAM", val: "$2.4B", icon: <PieChart size={16} />, color: "text-blue-600" },
            { label: "Build Velocity", val: "12x", icon: <BarChart3 size={16} />, color: "text-indigo-500" }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
               <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
               <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">{stat.label}</div>
               <div className="text-2xl font-bold tracking-tight text-slate-900">{stat.val}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 font-mono text-sm text-slate-600">
          <div className="flex items-start space-x-3">
            <span className="text-habitat-indigo font-bold tracking-tighter">[SYS]</span>
            <span className="animate-pulse">Analyzing strategic alignment for Venture #04...</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 pl-4">
            <CheckCircle2 size={14} className="text-habitat-indigo" />
            <span>Problem-Solution fit validated (Confidence: 89%)</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 pl-4">
            <CheckCircle2 size={14} className="text-habitat-indigo" />
            <span>AI-Native tech stack mapped to infrastructure</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 pl-4">
            <div className="w-1.5 h-1.5 rounded-full bg-habitat-indigo animate-ping" />
            <span className="text-slate-900 font-bold">Ready for 5-hour prototype sprint.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
