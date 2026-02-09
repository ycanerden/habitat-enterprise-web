"use client";

import { Section } from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Features() {
  const features = siteConfig.features;

  return (
    <Section
      id="features"
      title="What we deliver"
      subtitle="Everything your team needs to go from idea to prototype"
      description="Our structured sprint methodology combines AI tools, business frameworks, and hands-on building to create real output in a single session."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ name, description, icon }, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative rounded-2xl border bg-card p-6 transition-all duration-300",
              "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
