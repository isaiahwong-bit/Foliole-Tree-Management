"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 60px, white 60px, white 1px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(249,115,22,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-ember-400" />
              <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
                Get Started
              </span>
              <div className="h-px w-12 bg-ember-400" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
              Your trees deserve expert care.
              <br />
              <span className="text-ember-400">Let&apos;s talk.</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Whether you need a single assessment or an ongoing management
              partner, Jordan is here to help. No obligation, no pressure
              &mdash; just honest, expert advice.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@foliole.com"
                className="group inline-flex items-center gap-2 bg-ember-500 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-ember-400 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+440000000000"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Phone size={16} />
                Call Jordan
              </a>
            </div>

            {/* Contact details */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
              <a
                href="mailto:info@foliole.com"
                className="flex items-center gap-2 hover:text-ember-300 transition-colors"
              >
                <Mail size={14} />
                info@foliole.com
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <a
                href="tel:+440000000000"
                className="flex items-center gap-2 hover:text-ember-300 transition-colors"
              >
                <Phone size={14} />
                +44 (0) 000 000 0000
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
