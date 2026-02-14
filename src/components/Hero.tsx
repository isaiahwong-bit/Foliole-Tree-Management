"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — looking up into massive tree canopy */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1759941691570-c2aa2e109ccf?w=1920&q=80"
          alt="Looking up through a towering tree canopy with sunlight filtering through the leaves"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/60 to-forest-950/90" />
        {/* Bottom gradient for smoother transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-forest-950 to-transparent" />
      </div>

      {/* Diagonal geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 1px)",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 border border-ember-400/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[30%] w-16 h-16 border border-ember-400/15 rotate-45 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-32 lg:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-ember-400" />
            <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
              Expert Arboriculture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-[1.08] tracking-tight text-balance"
          >
            Elevating arboriculture
            <br />
            <span className="text-ember-400">from root to crown</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl"
          >
            Science-based tree care that protects your investment and enhances
            your landscape. Precision pruning, health diagnostics, and safe
            removals by a certified arborist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-ember-500 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-ember-400 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-400" />
              Certified Arborist
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-400" />
              Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-400" />
              Science-Based Methods
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M0 120L1440 40V120H0Z" className="fill-cream" />
        </svg>
      </div>
    </section>
  );
}
