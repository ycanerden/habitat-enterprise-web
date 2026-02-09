"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const tools1 = ["Lovable", "Cursor", "Claude Code", "Framer", "V0", "Replit"];
const tools2 = ["Bubble", "Glide", "FlutterFlow", "Zapier", "Antigravity", "Bolt"];

export function Logos() {
  const [currentSet, setCurrentSet] = useState(tools1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === tools1 ? tools2 : tools1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
          We teach your teams to build with
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {tools1.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center py-3"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSet[idx]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: idx * 0.05 }}
                  className="text-sm font-semibold text-muted-foreground/40 hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {currentSet[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
