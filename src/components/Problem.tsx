"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/lib/animations";
import { AlertTriangle, TrendingDown, ShieldX } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Reckless cutting destroys value",
    description:
      "Improper pruning and topping cause irreversible structural damage, leaving trees weakened, disease-prone, and aesthetically ruined. Butchered crowns and jagged stumps where a canopy used to be.",
  },
  {
    icon: TrendingDown,
    title: "Neglect compounds quietly",
    description:
      "Hidden decay, root stress, and pest infestations don\u2019t announce themselves until a limb drops on your roof or a mature tree collapses entirely. By then, the cost has multiplied tenfold.",
  },
  {
    icon: ShieldX,
    title: "Safety shortcuts create liability",
    description:
      "Unqualified operators cutting corners with outdated gear and no plan. One wrong cut near a power line, one unsecured branch over a walkway\u2014the consequences fall on your property.",
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
                The problem
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-forest-950 leading-tight tracking-tight text-balance">
              Most &ldquo;tree services&rdquo; do more harm than good
            </h2>
            <p className="mt-6 text-lg text-forest-800/70 leading-relaxed">
              The industry is riddled with operators who confuse chainsaws with
              expertise. Your trees\u2014and the significant investment they
              represent\u2014deserve more than guesswork and brute force.
            </p>
          </motion.div>

          {/* Right: pain point cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={slideInRight}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Orange accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-ember-200 rounded-full group-hover:bg-ember-400 transition-colors duration-300" />

                <div className="pl-4">
                  <div className="flex items-center gap-3 mb-3">
                    <point.icon
                      size={20}
                      className="text-ember-500 flex-shrink-0"
                    />
                    <h3 className="text-lg font-semibold text-forest-950">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-forest-800/65 leading-relaxed">
                    {point.description}
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
            There is a better standard. It starts with understanding that every
            tree is a living system\u2014and treating it accordingly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
