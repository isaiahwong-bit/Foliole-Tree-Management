"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { Award, BookOpen, Leaf, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: Award,
    title: "Certified Arborist",
    detail: "AQF-certified with hands-on climbing and diagnostic experience across Melbourne and greater Victoria",
  },
  {
    icon: BookOpen,
    title: "Trade Qualified",
    detail: "Years of local experience and AQF certification in arboriculture",
  },
  {
    icon: Zap,
    title: "Technical Rigour",
    detail: "Decay detection, risk assessment, and structural analysis inform every intervention",
  },
  {
    icon: Leaf,
    title: "Preservation First",
    detail: "Committed to the long-term health of every tree, not quick-fix solutions",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    detail: "Comprehensive public liability coverage for total peace of mind",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Jordan's real photo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden">
              <Image
                src="/jordan-climbing.jpeg"
                alt="Jordan climbing a massive tree in full safety harness and hi-vis gear"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 sm:-right-4 bottom-8 sm:bottom-12 bg-white rounded-xl p-4 sm:p-5 shadow-xl border-l-4 border-ember-400"
            >
              <p className="text-2xl font-bold text-forest-900">500+</p>
              <p className="text-xs text-forest-700/70 mt-0.5">
                Trees
                <br />
                managed
              </p>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-ember-200/30" />
          </motion.div>

          {/* Right: content about Jordan */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-ember-400" />
              <span className="text-ember-500 text-sm font-medium tracking-[0.2em] uppercase">
                Meet Jordan
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-forest-950 leading-tight tracking-tight text-balance">
              The arborist
              <br />
              behind every project
            </h2>

            <p className="mt-6 text-lg text-forest-800/70 leading-relaxed">
              When you hire Foliole, you&apos;re hiring Jordan — not a sales team,
              not a call centre, not a rotating roster. With years of
              professional arboriculture experience across Melbourne and greater
              Victoria, Jordan is the one who assesses your trees, plans the
              work, and executes at height with the care of a qualified
              tradesman.
            </p>
            <p className="mt-4 text-forest-800/65 leading-relaxed">
              Professional arboriculture — where disciplined safety protocols
              meet genuine trade knowledge and hands-on experience. Every climb is methodical. Every cut is
              deliberate. Every site is left immaculate. Whether sub-contracting
              complex operations for established firms or working directly with
              property owners, the standard never changes.
            </p>

            {/* Credentials */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-10 grid sm:grid-cols-2 gap-5"
            >
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-ember-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon
                      size={16}
                      className="text-ember-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-forest-950">
                      {item.title}
                    </p>
                    <p className="text-sm text-forest-800/55 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
