"use client";

import { motion } from 'framer-motion';
import { Rocket, Wrench, RefreshCw } from 'lucide-react';

const offerings = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Exploration Sprint",
    duration: "Half-day or full-day",
    description:
      "Your team explores new ideas, validates assumptions, and builds rough prototypes in a structured session. Perfect for testing the waters.",
    bestFor: "Innovation days, team offsites, hackathons",
    output: "Validated concepts + rough prototypes",
    featured: false,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Prototyping Workshop",
    duration: "1\u20132 days",
    description:
      "A deep-dive sprint focused on a specific challenge. Your team walks out with a demo-ready product they can present to management.",
    bestFor: "Manager proposals, proof-of-concept projects",
    output: "Demo-ready product for management",
    featured: true,
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Innovation Partnership",
    duration: "Recurring monthly",
    description:
      "Ongoing sprints embedded within your teams. Build innovation muscle over time with systematic, repeatable sessions.",
    bestFor: "Long-term culture change, systematic innovation",
    output: "Innovation capability embedded in your organization",
    featured: false,
  },
];

export default function CorporateOfferings() {
  return (
    <section id="offerings" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-habitat-indigo text-sm font-bold uppercase tracking-wider">
            Corporate Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-6">
            Choose the format that fits your team.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From a half-day exploration to an ongoing innovation partnership.
            Every session is customized to your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                offering.featured
                  ? "border-habitat-indigo bg-habitat-indigo/[0.03] shadow-lg shadow-indigo-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              {offering.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-habitat-indigo text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  offering.featured
                    ? "bg-habitat-indigo text-white"
                    : "bg-habitat-indigo/5 text-habitat-indigo"
                }`}
              >
                {offering.icon}
              </div>

              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {offering.duration}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {offering.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                {offering.description}
              </p>

              <div className="border-t border-slate-100 pt-4 mt-auto space-y-2">
                <div>
                  <span className="font-semibold text-xs text-slate-900">
                    Best for:{" "}
                  </span>
                  <span className="text-xs text-slate-500">
                    {offering.bestFor}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-xs text-slate-900">
                    Output:{" "}
                  </span>
                  <span className="text-xs text-slate-500">
                    {offering.output}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-8 italic"
        >
          Every sprint can be customized based on your unique needs.
        </motion.p>
      </div>
    </section>
  );
}
