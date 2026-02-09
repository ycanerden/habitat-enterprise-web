"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AuroraTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  children,
  className,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  return (
    <Component
      className={cn("relative inline-flex overflow-hidden", className)}
      {...props}
    >
      {children}
      <motion.span
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
          backgroundImage:
            "linear-gradient(90deg, #4F46E5 0%, #2563EB 25%, #4F46E5 50%, #2563EB 75%, #4F46E5 100%)",
        }}
      />
    </Component>
  );
}
