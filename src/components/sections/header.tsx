"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { Navbar } from "@/components/navbar";
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
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="flex items-center group">
          <span className="text-muted-foreground font-mono text-xl group-hover:text-primary transition-colors">[</span>
          <span className="px-2 text-foreground font-bold tracking-tight">
            HABITAT <span className="text-primary tracking-widest text-[10px] uppercase ml-1 font-black">Enterprise</span>
          </span>
          <span className="text-muted-foreground font-mono text-xl group-hover:text-primary transition-colors">]</span>
        </Link>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-6"
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