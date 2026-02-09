"use client";

import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2, Users, BarChart3, TrendingUp } from 'lucide-react';

const outcomes = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Working Prototypes",
    description:
      "Not slide decks. Functional software your team built themselves using AI and no-code tools.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Validated Concepts",
    description:
      "Ideas tested against real constraints and customer data, not just internal opinions.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Team Upskilling",
    description:
      "Your people learn modern AI and no-code tools they can use in their daily work long after the sprint.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Management-Ready Output",
    description:
      "Demos and pitches ready for leadership review. Tangible deliverables, not abstract proposals.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Innovation Momentum",
    description:
      "Teams leave energized with a repeatable methodology they can apply to future challenges independently.",
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-4 bg-slate-50/50 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            Expected Outcomes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-6">
            What your team walks away with.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every sprint is designed to produce tangible, actionable results your
            team can use immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200"
            >
              <div className="w-10 h-10 rounded-lg bg-habitat-indigo/5 text-habitat-indigo flex items-center justify-center shrink-0">
                {outcome.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
