"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center group mb-4">
              <span className="text-muted-foreground font-mono text-lg">[</span>
              <span className="px-1.5 text-foreground font-bold tracking-tight text-sm">
                HABITAT
                <span className="text-primary tracking-widest text-[10px] uppercase ml-1 font-black">
                  Enterprise
                </span>
              </span>
              <span className="text-muted-foreground font-mono text-lg">]</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered innovation sprints for corporate teams. From concept to working prototype in a single session.
            </p>
          </div>

          {/* Footer columns */}
          {siteConfig.footer.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                {section.title}
              </h3>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Habitat. Brussels & Leuven.
          </p>
          <div className="flex gap-6">
            {Object.entries(siteConfig.links).map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
