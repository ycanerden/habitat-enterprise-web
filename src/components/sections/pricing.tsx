"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const tiers = siteConfig.pricing;

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Offerings</h2>
          <p className="text-muted-foreground">Choose the format that fits your team.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative p-8 rounded-xl border flex flex-col transition-all duration-300",
                tier.featured
                  ? "border-primary/30 bg-primary/[0.02]"
                  : "border-border/50 hover:border-primary/20"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                <p className="text-sm text-primary font-semibold mt-1">{tier.price}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.description}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
                className={cn(
                  "w-full py-3 rounded-xl text-center font-bold text-sm transition-all",
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-border text-foreground hover:border-primary/30"
                )}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
