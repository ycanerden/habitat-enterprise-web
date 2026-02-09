"use client";

import { MobileDrawer } from "@/components/mobile-drawer";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md",
      isScrolled && "shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <span className="text-muted-foreground/40 font-mono text-xl group-hover:text-primary transition-colors">[</span>
            <span className="px-2 text-foreground font-bold tracking-tight">
              HABITAT <span className="text-primary">ENTERPRISE</span>
            </span>
            <span className="text-muted-foreground/40 font-mono text-xl group-hover:text-primary transition-colors">]</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
            {siteConfig.header.map((item, i) => (
              <Link key={i} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link
              href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl border border-border hover:border-primary/30 transition-colors text-sm font-bold"
            >
              <span>Book a Pilot</span>
            </Link>
            <div className="md:hidden">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
