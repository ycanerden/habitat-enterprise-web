"use client";

import { motion } from 'framer-motion';

const phases = [
  {
    number: "1",
    title: "Idea & Business Model",
    duration: "60 min",
    description:
      "Define the problem, map the business model, and validate the opportunity. Teams align on what to build and why.",
  },
  {
    number: "2",
    title: "Build Prototype",
    duration: "90 min",
    description:
      "Using AI and no-code tools, your team builds a working prototype. Not a mockup — a real, functional product.",
  },
  {
    number: "3",
    title: "Demo & Pitch",
    duration: "20 min",
    description:
      "Present the prototype to stakeholders. Get feedback on something tangible, not a slide deck.",
  },
  {
    number: "4",
    title: "Extra Mile",
    duration: "Optional",
    description:
      "Teams that want to go further refine the prototype, run customer interviews, and prepare for internal pilots.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-slate-50/50 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-6">
            Four phases. One session. Real output.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our proven methodology takes your team from raw idea to demo-ready
            prototype in a structured sprint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {idx < phases.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-[2px] bg-slate-200" />
              )}

              <div className="flex flex-col items-center md:items-center text-center">
                <div className="w-12 h-12 rounded-full bg-habitat-indigo text-white font-black text-lg flex items-center justify-center mb-4 relative z-10">
                  {phase.number}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {phase.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-habitat-indigo/10 text-habitat-indigo text-xs font-semibold mb-3">
                  {phase.duration}
                </span>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
