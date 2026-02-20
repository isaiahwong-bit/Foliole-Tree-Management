"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Qualified Experience",
    description:
      "Trade-qualified with real experience across Melbourne and Victoria. Jordan has worked on everything from suburban backyards to large-scale municipal projects — the kind of breadth that only comes from doing the hard yards.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Safety",
    description:
      "A disciplined, systematic approach to high-risk work. Every climb is planned. Every cut is considered. Proper rigging, correct PPE, and clear communication on every site — because there are no shortcuts when you\u2019re working at height.",
  },
  {
    icon: Sparkles,
    title: "Property Respect",
    description:
      "Your property is left better than we found it. Clean sites, protected gardens, no damage to structures or surrounding landscape. The work finishes when the last branch is chipped and the last boot print is swept.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-ember-400" />
              <span className="text-ember-500 text-sm font-medium tracking-[0.2em] uppercase">
                Our Standard
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-forest-950 leading-tight tracking-tight text-balance">
              A professional standard
              <br />
              in the canopy
            </h2>
            <p className="mt-6 text-lg text-forest-800/70 leading-relaxed">
              Jordan doesn&apos;t just climb trees — he manages them. With
              hands-on trade experience across Melbourne and greater Victoria,
              Foliole brings the reliability, skill, and professionalism of a
              qualified tradesman to every job. No guesswork. No cowboys. Just
              consistent, high-quality work you can stand behind.
            </p>
          </motion.div>

          {/* Right: pillar cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={slideInRight}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Orange accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-ember-200 rounded-full group-hover:bg-ember-400 transition-colors duration-300" />

                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-3">
                    <pillar.icon
                      size={20}
                      className="text-ember-500 flex-shrink-0"
                    />
                    <h3 className="text-lg font-semibold text-forest-950">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-forest-800/65 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Transition statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-xl lg:text-2xl text-forest-800/80 font-medium max-w-2xl mx-auto leading-relaxed">
            This is what professional arboriculture looks like — qualified,
            insured, and built on a reputation that&apos;s earned one tree at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
