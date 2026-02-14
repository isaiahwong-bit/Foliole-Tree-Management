"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "@/lib/animations";
import Image from "next/image";

const services = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663133889210-1d52a1d7baec?w=800&q=80",
    imageAlt: "Arborist with harness and saw performing precision tree pruning",
    title: "Precision Pruning",
    description:
      "Targeted structural and aesthetic pruning guided by ISA standards. We strengthen your trees\u2019 architecture while enhancing light, airflow, and natural form.",
    features: [
      "Crown reduction & thinning",
      "Structural training",
      "Canopy restoration",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1768737427692-076271f2c25a?w=800&q=80",
    imageAlt:
      "Massive specimen tree with exposed root system in a park setting",
    title: "Health Assessments",
    description:
      "Comprehensive diagnostics that identify decay, disease, root stress, and structural deficiencies before they become emergencies. Data-driven care plans, not guesswork.",
    features: [
      "Decay & risk assessment",
      "Soil & root analysis",
      "Pest & disease identification",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?w=800&q=80",
    imageAlt: "Arborist climbing high in a tree canopy with safety equipment",
    title: "Safe Removals & Cabling",
    description:
      "Complex dismantles, technical rigging, and cabling for trees that need structural support or safe removal. Methodical, insured, and site-sensitive.",
    features: [
      "Technical rigging & cabling",
      "Confined-space removals",
      "Stump processing",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1657730390984-13ab529bb175?w=800&q=80",
    imageAlt:
      "Tree surgeon with helmet and safety gear working at height in tree",
    title: "Contract & Sub-contracting",
    description:
      "Reliable sub-contracting for tree management firms and municipal contractors. Consistent standards, proper documentation, and the climbing skills to match.",
    features: [
      "Overflow management",
      "Complex climb specialists",
      "Compliance documentation",
    ],
  },
];

export default function Solution() {
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
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-ember-400" />
            <span className="text-ember-400 text-sm font-medium tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="h-px w-12 bg-ember-400" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            Science-driven care for
            <br className="hidden sm:block" />
            every stage of a tree&apos;s life
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            From proactive health management to precise surgical removals, every
            intervention is planned, purposeful, and grounded in arboricultural
            science.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 lg:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Orange accent bar at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ember-400 via-ember-500 to-ember-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-forest-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-forest-800/65 leading-relaxed mb-5">
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
      </div>
    </section>
  );
}
