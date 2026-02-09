"use client";

import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const tiers = siteConfig.pricing;

  return (
    <Section
      id="pricing"
      title="Offerings"
      subtitle="Choose the format that fits your team"
      description="From a fast exploration sprint to an ongoing innovation partnership — we meet you where you are."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative rounded-2xl border p-8 flex flex-col transition-all duration-300",
              tier.featured
                ? "border-primary/30 bg-primary/[0.02] shadow-lg shadow-primary/5 scale-[1.02]"
                : "bg-card hover:border-primary/20 hover:shadow-md"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="gradient-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">
                  {tier.price}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>

              <ul className="mt-4 space-y-3 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
                  className={cn(
                    buttonVariants({ variant: tier.featured ? "default" : "outline" }),
                    "w-full rounded-full font-semibold",
                    tier.featured && "gradient-bg border-0 hover:opacity-90"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
