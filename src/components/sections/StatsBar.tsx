"use client";

import { motion } from 'framer-motion';

const stats = [
  { value: "100+", label: "Participants" },
  { value: "20+", label: "MVPs Launched" },
  { value: "3", label: "Cities" },
  { value: "4.4/5", label: "Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="bg-slate-900 py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-black text-white">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider mt-1 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
