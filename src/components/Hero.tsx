"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  ImageAccordion,
  type ImageAccordionItem,
} from "@/components/ui/interactive-image-accordion";

const services: ImageAccordionItem[] = [
  { id: "pruning", title: "Pruning", imageUrl: "/work/winter-pruning.jpg", href: "#services" },
  { id: "health", title: "Tree Health", imageUrl: "/work/canopy-dieback.jpg", href: "#services" },
  { id: "structural", title: "Structural Support", imageUrl: "/work/rigging-limbs.jpg", href: "#services" },
  { id: "removal", title: "Tree Removals", imageUrl: "/work/stem-dismantle.jpg", href: "#services" },
  { id: "subcontracting", title: "Subcontracting", imageUrl: "/work/giant-gum-climb.jpg", href: "#services" },
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
          {/* Left: copy — CSS entrance so the LCP paints before hydration */}
          <div className="max-w-xl">
            <h1 className="animate-rise animate-rise-1 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
              Tree care,
              <br />
              <span className="text-orange">done properly</span>
            </h1>

            <p className="animate-rise animate-rise-2 mt-6 sm:mt-8 text-base sm:text-lg text-navy/70 leading-relaxed max-w-lg">
              LumberJord is a climbing arborist servicing Melbourne&apos;s
              bayside and inner-eastern suburbs with a hands-on approach to
              arboriculture. Focused on tree health, best-practice end-to-end
              services, and innovation.
            </p>

            <div className="animate-rise animate-rise-3 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-orange text-navy px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-light transition-all duration-300"
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
            </div>

            <p className="animate-rise animate-rise-4 mt-5 text-sm text-navy/70">
              Prefer to talk?{" "}
              <a
                href="tel:+61413268827"
                className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4 hover:text-orange-dark transition-colors"
              >
                Call 0413 268 827
              </a>
            </p>

            <div className="animate-rise animate-rise-4 mt-8 sm:mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-navy/70">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                Bayside &amp; Inner East
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                Fully Insured
              </span>
            </div>
          </div>

          {/* Right: interactive image accordion */}
          <div className="animate-rise animate-rise-2">
            <ImageAccordion items={services} defaultActiveIndex={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
