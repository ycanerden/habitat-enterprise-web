"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="#features"
      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary hover:bg-primary/10 transition-colors"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <Sparkles className="h-3.5 w-3.5" />
      <span className="font-medium">AI-Powered Innovation Sprints</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </motion.a>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full flex-col items-center pt-8">
      <motion.h1
        className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          Your teams have ideas.
        </motion.span>
        <motion.span
          className="block gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          We help them build.
        </motion.span>
      </motion.h1>
      <motion.p
        className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease }}
      >
        {siteConfig.hero.description}
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <motion.div
      className="mt-10 flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "rounded-full px-8 text-sm font-semibold gradient-bg border-0 hover:opacity-90 transition-opacity"
          )}
        >
          {siteConfig.hero.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="#features"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-8 text-sm font-semibold"
          )}
        >
          See how it works
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        {siteConfig.hero.ctaDescription}
      </p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <HeroPill />
          <HeroTitles />
          <HeroCTA />
        </div>
      </div>
    </section>
  );
}
