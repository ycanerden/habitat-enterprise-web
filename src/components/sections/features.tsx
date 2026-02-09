"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function Features() {
  const features = siteConfig.features;

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
          <p className="text-muted-foreground">Structured sprints that turn ideas into working prototypes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ name, description, icon }, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
