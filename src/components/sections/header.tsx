"use client";

import { Icons } from "@/components/icons";
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
        "sticky top-0 z-50 w-full transition-all duration-300 h-[var(--header-height)] bg-background/60 backdrop-blur",
        isScrolled ? "border-b" : "bg-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center group">
          <span className="text-muted-foreground font-mono text-xl group-hover:text-primary transition-colors">[</span>
          <span className="px-2 text-foreground font-bold tracking-tight">
            HABITAT <span className="text-primary tracking-widest text-[10px] uppercase ml-1 font-black">Enterprise</span>
          </span>
          <span className="text-muted-foreground font-mono text-xl group-hover:text-primary transition-colors">]</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
           {siteConfig.header.map((item, i) => (
              <Link key={i} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
           ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-lg h-8 px-4 text-xs"
              )}
            >
              Start Pilot
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