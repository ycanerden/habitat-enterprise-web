"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Offerings", href: "#offerings" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">
              [
            </span>
            <span className="px-2 text-slate-900 font-bold tracking-tight">
              HABITAT{" "}
              <span className="text-habitat-indigo tracking-widest text-xs uppercase ml-1">
                Enterprise
              </span>
            </span>
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">
              ]
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-habitat-indigo transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://joinhabitat.eu"
              target="_blank"
              className="hover:text-habitat-indigo transition-colors"
            >
              Community
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-habitat-indigo transition-all duration-300 shadow-lg shadow-indigo-100"
            >
              Book a Pilot Session
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-slate-600 hover:text-habitat-indigo transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://joinhabitat.eu"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-habitat-indigo transition-colors py-2"
              >
                Community
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-habitat-indigo transition-all mt-2"
              >
                Book a Pilot Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
