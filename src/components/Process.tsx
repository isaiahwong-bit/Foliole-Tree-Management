"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { Phone, ClipboardCheck, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Initial Consultation",
    description:
      "Reach out and tell us about your trees. Jordan will discuss your concerns, goals, and timeline before scheduling a site visit.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Site Assessment",
    description:
      "Jordan inspects every tree in scope. Species, condition, and structural risks are all documented in a clear, written report with recommendations.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Precision Execution",
    description:
      "Approved work is carried out with proper rigging, clear communication, and strict adherence to the plan. No surprises, no shortcuts.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Clean Site & Follow-Up",
    description:
      "Your site is left cleaner than it was found. Post-work documentation and ongoing care recommendations ensure lasting results.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 relative">
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
            <div className="h-px w-12 bg-ember-300" />
            <span className="text-ember-500 text-sm font-medium tracking-[0.2em] uppercase">
              How It Works
            </span>
            <div className="h-px w-12 bg-ember-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-forest-950 leading-tight tracking-tight text-balance">
            A clear, methodical process
            <br className="hidden sm:block" />
            from enquiry to completion
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Connecting line (desktop) — spans between first and last step circle centers */}
          <div className="hidden lg:block absolute top-[48px] left-[12.5%] right-[12.5%] h-px bg-forest-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-forest-900 flex items-center justify-center relative z-10">
                      <item.icon
                        size={20}
                        className="text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="absolute -top-2 -right-3 text-xs font-bold text-ember-500 bg-ember-50 px-2 py-0.5 rounded-full border border-ember-100">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-forest-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-forest-800/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
