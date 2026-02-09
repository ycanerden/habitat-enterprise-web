"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align = "center" },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = forwardedRef || internalRef;
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center";

    return (
      <section id={id} ref={ref} className="py-20 md:py-28">
        <div className={cn("relative mx-auto max-w-6xl px-6", className)}>
          {(title || subtitle || description) && (
            <div className={cn(alignmentClass, "mb-14")}>
              {title && (
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  {title}
                </span>
              )}
              {subtitle && (
                <h2
                  className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]",
                    align === "center" ? "mx-auto max-w-3xl" : ""
                  )}
                >
                  {subtitle}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "mt-4 text-lg text-muted-foreground text-balance max-w-2xl leading-relaxed",
                    align === "center" ? "mx-auto" : ""
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
