"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 bg-primary/[0.02]">
      <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Zap size={200} className="text-primary" />
        </div>

        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to see what your team can build?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Book a pilot session and walk out with a working prototype. No decks, no months of planning — just real output.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
            className="px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center space-x-2 hover:bg-primary/90 transition-all"
          >
            <span>Book a Pilot Session</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="https://joinhabitat.eu"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-bold hover:border-primary/30 transition-all"
          >
            Learn About Habitat
          </Link>
        </div>
      </div>
    </section>
  );
}
