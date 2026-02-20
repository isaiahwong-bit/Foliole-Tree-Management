"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { Award, ClipboardCheck, ShieldCheck } from "lucide-react";

const guarantees = [
  {
    icon: Award,
    title: "Trade Qualified",
    description:
      "AQF-certified with real trade experience across Melbourne and greater Victoria. Jordan has built his skills on the job — not in a classroom. Every technique has been refined through real-world operations in local conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Standard Compliant",
    description:
      "All work strictly follows Australian Pruning Standards (AS 4373-2007). No cowboy cuts. No guesswork. Every prune, reduction, and removal is executed to the letter of Australian industry standards.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Full public liability insurance for total peace of mind. You\u2019re covered — whether you\u2019re a homeowner or a company subcontracting complex work.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-forest-950" />

      {/* Subtle geometric pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 60px, white 60px, white 1px)",
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember-400" />
            <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
              The Foliole Guarantee
            </span>
            <div className="h-px w-12 bg-ember-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            Commitment to quality
          </h2>
          <p className="mt-6 text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a homeowner trusting someone with your property
            or a company putting your reputation on the line — you need to know
            the person in the canopy holds themselves to the same standard you do.
          </p>
        </motion.div>

        {/* Guarantee Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 lg:p-9 border border-white/10 hover:border-ember-400/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-ember-500/15 flex items-center justify-center mb-6 group-hover:bg-ember-500/25 transition-colors duration-300">
                <item.icon
                  size={22}
                  className="text-ember-400"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/55 leading-relaxed text-[15px]">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ember-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Personal reassurance */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            Jordan personally stands behind every job. If it&apos;s not right,
            it gets fixed. That&apos;s not a policy — it&apos;s how the business runs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
