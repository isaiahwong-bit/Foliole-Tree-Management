"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "@/lib/animations";
import Image from "next/image";

type ServiceCategory = "homeowner" | "subcontracting";

const homeownerServices = [
  {
    image: "/service-pruning.jpg",
    imageAlt: "Arborist with harness and saw performing precision tree pruning",
    title: "Pruning",
    description:
      "Pruning to Australian Standards (AS 4373). We strengthen your trees\u2019 structure while improving light, airflow, and natural form.",
    features: [
      "Dead wood removal",
      "Weight reduction",
      "Formative pruning",
      "Canopy restoration",
    ],
  },
  {
    image: "/service-tree-health.jpg",
    imageAlt:
      "Massive specimen tree with exposed root system in a park setting",
    title: "Tree Health & Diagnostics",
    description:
      "Identifying decay, disease, root stress, and structural issues before they become emergencies. Informed care plans, not guesswork.",
    features: [
      "Decay detection & risk assessment",
      "Visual health inspections",
      "Soil & root analysis",
      "Pest & disease identification",
    ],
  },
  {
    image: "/service-structural.jpg",
    imageAlt: "Looking up at the large structural branches of a mature tree",
    title: "Structural Support",
    description:
      "Cabling and bracing for trees that need structural reinforcement. Preserving valuable trees safely and extending their lifespan.",
    features: [
      "Cable & bracing systems",
      "Structural assessment",
      "Load reduction",
    ],
  },
  {
    image: "/service-removal.jpg",
    imageAlt: "Arborist performing safe tree removal with proper equipment",
    title: "Tree Removals",
    description:
      "Safe, methodical tree removals for when a tree needs to come down. Fully insured and site-sensitive.",
    features: [
      "Confined space removals",
      "Complex removals",
      "Sectional dismantling",
      "Stump grinding & processing",
    ],
  },
];

const subcontractingServices = [
  {
    image: "/service-removal.jpg",
    imageAlt: "Arborist climbing high in a tree canopy with safety equipment",
    title: "Complex Climb Operations",
    description:
      "High-level climbing support for operations beyond standard scope. Jordan brings the experience, skill, and composure that complex canopy work demands.",
    features: [
      "Advanced rigging & dismantling",
      "Multi-stem & hazardous removals",
      "Crane-assisted operations support",
      "Confined & high-risk access work",
    ],
  },
  {
    image: "/service-tree-health.jpg",
    imageAlt:
      "Massive specimen tree with exposed root system in a park setting",
    title: "Decay Detection & Assessment",
    description:
      "Identifying structural issues, decay, and risk factors in the canopy. Practical assessments that inform the right course of action.",
    features: [
      "Visual tree assessment (VTA)",
      "Decay detection & mapping",
      "Risk identification",
      "Pre-work tree evaluations",
    ],
  },
  {
    image: "/service-pruning.jpg",
    imageAlt: "Arborist with harness performing precision tree work",
    title: "Capacity & Partnership",
    description:
      "Reliable overflow support and ongoing partnership for tree management companies. Consistent standards, proper documentation, and easy coordination with your team.",
    features: [
      "Overflow & surge capacity",
      "Municipal & council contract work",
      "Compliance documentation & reporting",
      "Ongoing retainer arrangements",
    ],
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
    <section id="services" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-[60%] bg-forest-950 diagonal-clip-subtle" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember-400" />
            <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="h-px w-12 bg-ember-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            Professional tree care for
            <br className="hidden sm:block" />
            every level of need
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a property owner seeking expert tree care or an
            industry professional needing reliable subcontracting support,
            Jordan delivers the same standard of work.
          </p>
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center mb-12 lg:mb-16"
        >
          <div className="inline-flex w-full sm:w-auto rounded-xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory("homeowner")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "homeowner"
                  ? "bg-ember-500 text-white"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              Homeowner & Commercial
            </button>
            <button
              onClick={() => setActiveCategory("subcontracting")}
              className={`flex-1 sm:flex-none px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === "subcontracting"
                  ? "bg-ember-500 text-white"
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              Subcontracting & Partnership
            </button>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`grid sm:grid-cols-2 gap-6 lg:gap-8 ${
                activeCategory === "homeowner"
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-3 max-w-5xl mx-auto"
              }`}
            >
              {services.map((service, i) => (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  variants={scaleIn}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 lg:h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Orange accent bar at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ember-400 via-ember-500 to-ember-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-forest-950 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-forest-800/65 leading-relaxed mb-5 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-forest-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-ember-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
