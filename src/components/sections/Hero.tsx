"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-mesh">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-dot-pattern" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-habitat-indigo/5 border border-habitat-indigo/10 text-habitat-indigo text-xs font-semibold uppercase tracking-wider mb-8">
            AI-Powered Innovation Sprints
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
            Your teams have ideas.{' '}
            <br className="hidden md:block" />
            We help them <span className="gradient-text italic">build.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
            Habitat runs structured AI sprints that help corporate teams go from
            concept to demo-ready prototype in a single day. No months of
            planning. No innovation theater. Just real output.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-habitat-indigo text-white font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95"
            >
              <span>Book a Pilot Session</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
