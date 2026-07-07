"use client";

import { m } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { Award, BookOpen, Leaf, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: Award,
    title: "Certified Arborist",
    detail: "Qualified arborist with hands-on climbing and diagnostic experience across Melbourne and greater Victoria",
  },
  {
    icon: BookOpen,
    title: "Trade Qualified",
    detail: "Years of local experience and formal certification in arboriculture",
  },
  {
    icon: Zap,
    title: "The Hard Jobs",
    detail: "Technical pruning, large tree work, and preservation projects. The challenging jobs are the ones Jordan enjoys most",
  },
  {
    icon: Leaf,
    title: "Preservation First",
    detail: "Focused on long-term tree health, not quick-fix solutions",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    detail: "Comprehensive public liability coverage for total peace of mind",
  },
  {
    icon: Sparkles,
    title: "Property Respect",
    detail: "Clean sites, protected gardens, and no damage. Your property is left better than we found it",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Jordan's real photo */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden">
              <Image
                src="/work/jordan-canopy-selfie.jpg"
                alt="Jordan smiling in helmet and harness at the top of a tall gum tree"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <m.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 sm:-right-4 bottom-8 sm:bottom-12 bg-white rounded-xl p-4 sm:p-5 shadow-xl border-l-4 border-orange"
            >
              <p className="text-2xl font-bold text-navy">500+</p>
              <p className="text-xs text-navy/70 mt-0.5">
                Trees
                <br />
                managed
              </p>
            </m.div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-orange-light/30" />
          </m.div>

          {/* Right: content about Jordan */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-navy leading-tight tracking-tight text-balance">
              The arborist
              <br />
              behind every project
            </h2>

            <p className="mt-6 text-lg text-navy/70 leading-relaxed">
              When you hire LumberJord, you&apos;re hiring Jordan. Not a sales team,
              not a call centre, not a rotating roster. With years of
              professional arboriculture experience across Melbourne and greater
              Victoria, Jordan is the one who assesses your trees, plans the
              work, and gets it done at height with the care of a qualified
              tradesman.
            </p>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Disciplined safety protocols, genuine trade knowledge, and
              hands-on experience. Every climb is methodical. Every cut is
              deliberate. Every site is left immaculate. Whether sub-contracting
              complex operations for established firms or working directly with
              property owners, the standard never changes.
            </p>

            {/* Credentials */}
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-10 grid sm:grid-cols-2 gap-5"
            >
              {credentials.map((item, i) => (
                <m.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon
                      size={16}
                      className="text-orange"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {item.title}
                    </p>
                    <p className="text-sm text-navy/70 mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
