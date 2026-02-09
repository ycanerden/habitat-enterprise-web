"use client";

import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl h-full flex items-center justify-between px-6">
        <Link href="/" className="flex items-center group">
          <span className="text-muted-foreground font-mono text-lg group-hover:text-primary transition-colors">[</span>
          <span className="px-1.5 text-foreground font-bold tracking-tight text-sm">
            HABITAT
            <span className="text-primary tracking-widest text-[10px] uppercase ml-1 font-black">
              Enterprise
            </span>
          </span>
          <span className="text-muted-foreground font-mono text-lg group-hover:text-primary transition-colors">]</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.header.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Link
              href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full px-5 text-xs font-semibold gradient-bg border-0 hover:opacity-90"
              )}
            >
              Book a Pilot
            </Link>
          </div>
          <div className="lg:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
