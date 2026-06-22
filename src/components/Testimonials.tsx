"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import Image from "next/image";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns";

const testimonials: Testimonial[] = [
  {
    text: "Jordan transformed our estate’s tree line. He identified a structural issue in our mature oak that two previous companies missed entirely. Really knowledgeable and a pleasure to work with.",
    name: "Catherine M.",
    role: "Estate Manager",
  },
  {
    text: "We sub-contract Jordan for our most complex climbs and removals. He’s precise, reliable, and completely professional. His safety standards match ours and his documentation is thorough. That’s rare in this industry.",
    name: "David R.",
    role: "Director, Regional Tree Services",
  },
  {
    text: "After years of dealing with ‘tree loppers’ who left our property worse than they found it, LumberJord was a breath of fresh air. Jordan explained every cut before he made it and the results speak for themselves.",
    name: "Sarah & James P.",
    role: "Homeowners",
  },
];

// Rotate the real reviews so duplicate cards don't align across columns.
const firstColumn = [testimonials[0], testimonials[1], testimonials[2]];
const secondColumn = [testimonials[1], testimonials[2], testimonials[0]];
const thirdColumn = [testimonials[2], testimonials[0], testimonials[1]];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Background with tree canopy image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/testimonials-bg.jpg"
          alt="Sunlight filtering through dark tree branches and leaves"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(241,95,58,0.2) 0%, transparent 50%)",
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
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            Trusted by property owners
            <br className="hidden sm:block" />
            and industry professionals
          </h2>
        </motion.div>

        {/* Auto-scrolling testimonial columns */}
        <div className="flex justify-center gap-6 max-h-[560px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={17} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
}
