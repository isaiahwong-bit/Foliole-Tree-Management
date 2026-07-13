"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Areas", href: "/arborist" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-offwhite/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 lg:h-20">
          <a href="/" className="relative z-10 flex items-center" aria-label="LumberJord home">
            <Image
              src="/brand/lj-secondary-navy.png"
              alt="LumberJord"
              width={329}
              height={40}
              priority
              className="h-5 sm:h-7 lg:h-7 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-navy/80 hover:text-navy transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+61413268827"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange-dark transition-colors duration-300"
            >
              <Phone size={15} aria-hidden="true" />
              0413 268 827
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-6 py-2.5 rounded-full bg-orange text-navy hover:bg-orange-light transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile: call + quote stay visible at all times + menu button */}
          <div className="lg:hidden relative z-10 flex items-center gap-1">
            <a
              href="tel:+61413268827"
              aria-label="Call LumberJord on 0413 268 827"
              className="flex size-8 items-center justify-center rounded-full border border-navy/30 text-navy hover:bg-navy/5 transition-colors"
            >
              <Phone size={15} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-full bg-orange text-navy hover:bg-orange-light transition-colors"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </m.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-offwhite"
          >
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-navy hover:text-orange transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-lg font-semibold px-8 py-3 rounded-full bg-orange text-navy hover:bg-orange-light transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="tel:+61413268827"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 text-lg font-medium text-navy/80 hover:text-orange transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                Call 0413 268 827
              </a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
