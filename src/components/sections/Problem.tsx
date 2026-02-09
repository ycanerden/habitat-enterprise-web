"use client";

import { motion } from 'framer-motion';
import { Clock, FileText, Sparkles } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Months of planning",
    description:
      "By the time a concept gets approved, the market has moved on. Speed kills bureaucracy.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Slide decks, not software",
    description:
      "Teams present ideas that look good on paper but never become real products anyone can use.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Innovation theater",
    description:
      "Hackathons and offsites that generate excitement but no lasting output. Fun, but not productive.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-6">
            Most corporate innovation never ships.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            Your teams spend months in planning cycles, build slide decks
            instead of products, and call a workshop &ldquo;innovation.&rdquo; The result?
            No working software. No validated ideas. No momentum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-slate-200 bg-white"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
