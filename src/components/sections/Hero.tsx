"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            <span>AI-Powered Innovation Sprints</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Your teams have ideas. <br />
            <span className="text-primary italic">We help them build.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
            {siteConfig.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
            className="px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center space-x-2 hover:bg-primary/90 transition-all"
          >
            <span>{siteConfig.hero.cta}</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#features"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-bold hover:border-primary/30 transition-all"
          >
            See How It Works
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          {siteConfig.hero.ctaDescription}
        </motion.p>
      </div>
    </section>
  );
}
