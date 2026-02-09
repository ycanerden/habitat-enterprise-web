"use client";

import { motion } from 'framer-motion';

const tools = [
  { name: "Lovable", ambassador: true },
  { name: "Framer", ambassador: true },
  { name: "Claude Code", ambassador: false },
  { name: "Cursor", ambassador: false },
  { name: "Replit", ambassador: false },
  { name: "Bubble", ambassador: false },
  { name: "Glide", ambassador: false },
  { name: "FlutterFlow", ambassador: false },
  { name: "Zapier", ambassador: false },
  { name: "V0", ambassador: false },
  { name: "Antigravity", ambassador: false },
];

export default function Toolkit() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            Our Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            20+ AI and no-code tools.
            <br className="hidden md:block" />
            We teach your team the right ones.
          </h2>
          <p className="text-slate-500 mb-10">
            We are official ambassadors for Lovable and Framer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tools.map((tool) => (
            <span
              key={tool.name}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                tool.ambassador
                  ? "border-habitat-indigo/30 bg-habitat-indigo/5 text-habitat-indigo"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {tool.name}
              {tool.ambassador && (
                <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider opacity-70">
                  Ambassador
                </span>
              )}
            </span>
          ))}
          <span className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-400">
            +10 more tools
          </span>
        </motion.div>
      </div>
    </section>
  );
}
