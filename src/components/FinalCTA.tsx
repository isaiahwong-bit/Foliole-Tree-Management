"use client";

import { m } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-orange px-6 sm:px-10 lg:px-16 py-14 lg:py-20 text-center"
        >
          {/* Soft navy glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, rgba(20,20,56,0.5) 0%, transparent 55%)",
            }}
          />
          <div className="relative">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              Let&apos;s get your
              <br />
              <span className="text-navy">trees sorted.</span>
            </h2>
            <p className="mt-5 text-lg text-navy/85 leading-relaxed max-w-xl mx-auto">
              Whether you need a single assessment or an ongoing management
              partner, Jordan is here to help. No obligation, no pressure.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-navy-light transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
