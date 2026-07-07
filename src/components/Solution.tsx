"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

type ServiceCategory = "homeowner" | "subcontracting";

const homeownerServices: Gallery4Item[] = [
  {
    id: "pruning",
    image: "/work/roofline-pruning.jpg",
    imageAlt: "Jordan pruning branches overhanging a tiled roof, working from ropes",
    title: "Pruning",
    description:
      "Pruning to Australian Standards (AS 4373): dead wood removal, weight reduction, formative pruning, and canopy restoration. We strengthen your trees’ structure while improving light, airflow, and natural form.",
    href: "#contact",
  },
  {
    id: "tree-health",
    image: "/work/tree-assessment.jpg",
    imageAlt: "Mature cypress with sections of canopy dieback under assessment",
    title: "Tree Health & Diagnostics",
    description:
      "Identifying decay, disease, root stress, and structural issues before they become emergencies. Decay detection, visual inspections, soil and root analysis: informed care plans, not guesswork.",
    href: "#contact",
  },
  {
    id: "structural",
    image: "/work/limb-rigging-close.jpg",
    imageAlt: "Arborist rigging ropes among the structural limbs of a conifer",
    title: "Structural Support",
    description:
      "Cabling and bracing for trees that need structural reinforcement. Structural assessment and load reduction that preserves valuable trees safely and extends their lifespan.",
    href: "#contact",
  },
  {
    id: "removals",
    image: "/work/canopy-topping.jpg",
    imageAlt: "Climber dismantling the top of a conifer high above a rooftop",
    title: "Tree Removals",
    description:
      "Safe, methodical tree removals for when a tree needs to come down. Confined-space and complex removals, sectional dismantling, and stump grinding, fully insured and site-sensitive.",
    href: "#contact",
  },
];

const subcontractingServices: Gallery4Item[] = [
  {
    id: "complex-climb",
    image: "/work/complex-canopy-cut.jpg",
    imageAlt: "Chainsaw work deep inside a dense cypress canopy",
    title: "Complex Climb Operations",
    description:
      "High-level climbing support for operations beyond standard scope: advanced rigging and dismantling, multi-stem and hazardous removals, crane-assisted and high-risk access work.",
    href: "#contact",
  },
  {
    id: "decay-assessment",
    image: "/work/decay-assessment.jpg",
    imageAlt: "Full crown of a mature cypress showing deadwood against the sky",
    title: "Decay Detection & Assessment",
    description:
      "Identifying structural issues, decay, and risk factors in the canopy. Visual tree assessment (VTA), decay detection and mapping, and pre-work evaluations that inform the right course of action.",
    href: "#contact",
  },
  {
    id: "capacity",
    image: "/work/job-complete-logs.jpg",
    imageAlt: "Logs stacked neatly beside a house after a completed removal",
    title: "Capacity & Partnership",
    description:
      "Reliable overflow support and ongoing partnership for tree management companies: surge capacity, municipal and council contract work, compliance documentation, and retainer arrangements.",
    href: "#contact",
  },
];

export default function Solution() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("homeowner");

  const services =
    activeCategory === "homeowner"
      ? homeownerServices
      : subcontractingServices;

  return (
    <section id="services" className="py-20 lg:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-[2rem] lg:rounded-[2.5rem] px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* Header */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            Professional tree care for
            <br className="hidden sm:block" />
            every level of need
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a property owner seeking expert tree care or an
            industry professional needing reliable subcontracting support,
            Jordan delivers the same standard of work.
          </p>
        </m.div>

        {/* Category Toggle */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center mb-12 lg:mb-16"
        >
          <div className="inline-flex w-full sm:w-auto rounded-xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory("homeowner")}
              aria-pressed={activeCategory === "homeowner"}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "homeowner"
                  ? "bg-orange text-navy font-semibold"
                  : "text-white/60 hover:text-white/85"
              }`}
            >
              Homeowner & Commercial
            </button>
            <button
              onClick={() => setActiveCategory("subcontracting")}
              aria-pressed={activeCategory === "subcontracting"}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "subcontracting"
                  ? "bg-orange text-navy font-semibold"
                  : "text-white/60 hover:text-white/85"
              }`}
            >
              Subcontracting & Partnership
            </button>
          </div>
        </m.div>

        {/* Service carousel */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Gallery4 items={services} tone="light" />
          </m.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
