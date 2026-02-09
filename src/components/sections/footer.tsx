"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 text-center text-muted-foreground text-sm">
      <p>&copy; {new Date().getFullYear()} Habitat. Brussels & Leuven.</p>
    </footer>
  );
}
