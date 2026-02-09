"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl gradient-bg px-8 py-16 md:px-16 md:py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to see what your
              <br className="hidden sm:block" />
              team can build?
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Book a pilot session and get a working prototype built with your team in a single day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-8 bg-white text-primary hover:bg-white/90 font-semibold border-0"
                )}
              >
                Book a Pilot Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-white/50 text-sm">
              ycanerden@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
