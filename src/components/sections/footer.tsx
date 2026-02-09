"use client";

import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteConfig.footer.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
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
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
             <div className="flex items-center group">
               <span className="text-muted-foreground font-mono text-xl">[</span>
               <span className="px-2 text-foreground font-bold tracking-tight text-xs">
                 HABITAT <span className="text-primary uppercase ml-1 font-black">Enterprise</span>
               </span>
               <span className="text-muted-foreground font-mono text-xl">]</span>
             </div>
             <p className="text-xs text-muted-foreground leading-relaxed">
               The OS for Internal Ventures. Built for corporate intrapreneurs.
             </p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Habitat Venture Group &bull; Brussels &bull; Amsterdam &bull; Global
          </p>
          <div className="flex gap-4">
             {Object.entries(siteConfig.links).map(([name, href]) => (
               <Link key={name} href={href} className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                 {name}
               </Link>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}