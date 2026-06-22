"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  ImageAccordion,
  type ImageAccordionItem,
} from "@/components/ui/interactive-image-accordion";

const services: ImageAccordionItem[] = [
  { id: "pruning", title: "Pruning", imageUrl: "/service-pruning.jpg", href: "#services" },
  { id: "health", title: "Tree Health", imageUrl: "/service-tree-health.jpg", href: "#services" },
  { id: "structural", title: "Structural Support", imageUrl: "/service-structural.jpg", href: "#services" },
  { id: "removal", title: "Tree Removals", imageUrl: "/service-removal.jpg", href: "#services" },
  { id: "subcontracting", title: "Subcontracting", imageUrl: "/jordan-climbing.jpeg", href: "#services" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      {/* Large brandmark — creative feature: climber scaling the hero from the corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-24 sm:-left-28 lg:-left-32 z-0 select-none"
      >
        <Image
          src="/brand/lj-brandmark-orange.png"
          alt=""
          width={520}
          height={593}
          className="h-[460px] sm:h-[620px] lg:h-[820px] w-auto opacity-[0.13]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance"
            >
              Tree care,
              <br />
              <span className="text-orange">done properly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-navy/65 leading-relaxed max-w-lg"
            >
              LumberJord is a climbing arborist servicing Melbourne and greater
              Victoria with a hands-on approach to arboriculture. Focused on tree
              health, best-practice end-to-end services, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-orange text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-dark transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-navy/25 text-navy px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-navy/5 transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 sm:mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-navy/55"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                Melbourne Based
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                Fully Insured
              </span>
            </motion.div>
          </div>

          {/* Right: interactive image accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ImageAccordion items={services} defaultActiveIndex={4} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
