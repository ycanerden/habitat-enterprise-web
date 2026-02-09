"use client";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const tiers = siteConfig.pricing;

  return (
    <Section id="pricing" title="Offerings">
      <div className="grid grid-cols-1 md:grid-cols-3 border-x border-t bg-background">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={cn(
              "relative p-8 flex flex-col border-b last:border-b-0 md:border-r md:last:border-r-0",
              tier.featured ? "bg-primary/5" : "bg-background"
            )}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </span>
                {tier.featured && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold tracking-tight">{tier.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <Link
                  href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
                  className={cn(
                    buttonVariants({ variant: tier.featured ? "default" : "outline" }),
                    "w-full rounded-lg"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}