"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportConfig,
} from "@/lib/animations";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jordan transformed our estate\u2019s tree line. He identified a structural issue in our mature oak that two previous companies missed entirely. Methodical, knowledgeable, and a pleasure to work with.",
    author: "Catherine M.",
    role: "Estate Manager",
    stars: 5,
  },
  {
    quote:
      "We sub-contract Jordan for our most complex climbs and technical removals. His safety standards match ours, his documentation is thorough, and he shows up when he says he will. That\u2019s rare in this industry.",
    author: "David R.",
    role: "Director, Regional Tree Services",
    stars: 5,
  },
  {
    quote:
      "After years of dealing with \u2018tree loppers\u2019 who left our property worse than they found it, Foliole was a breath of fresh air. Jordan explained every cut before he made it and the results speak for themselves.",
    author: "Sarah & James P.",
    role: "Homeowners",
    stars: 5,
  },
];

const stats = [
  { value: "500+", label: "Trees Managed" },
  { value: "100%", label: "Safety Record" },
  { value: "15+", label: "Years Experience" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Background with tree canopy image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1767463412573-0122945b7d52?w=1920&q=80"
          alt="Sunlight filtering through dark tree branches and leaves"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-950/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.2) 0%, transparent 50%)",
          }}
        />
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
              Testimonials
            </span>
            <div className="h-px w-12 bg-ember-400" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            Trusted by property owners
            <br className="hidden sm:block" />
            and industry professionals
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-ember-400/30 transition-colors duration-300"
            >
              <Quote
                size={28}
                className="text-ember-400/30 mb-5"
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-ember-400 fill-ember-400"
                  />
                ))}
              </div>

              <p className="text-white/75 leading-relaxed mb-8 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/10 pt-5">
                <p className="text-white font-semibold text-sm">{t.author}</p>
                <p className="text-white/45 text-sm mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-ember-400 tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/45 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
