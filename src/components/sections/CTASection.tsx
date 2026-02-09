"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to see what your team can build?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Book a free pilot session. We&apos;ll scope a sprint for your team and
            show you exactly what to expect.
          </p>
          <a
            href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-habitat-indigo text-white text-lg font-bold hover:shadow-xl hover:shadow-indigo-900/30 transition-all active:scale-95"
          >
            <span>Book a Pilot Session</span>
            <ArrowRight size={20} />
          </a>
          <p className="text-sm text-slate-500 mt-6">
            Or reach out directly at{" "}
            <a
              href="mailto:ycanerden@gmail.com"
              className="text-slate-400 underline hover:text-white transition-colors"
            >
              ycanerden@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
