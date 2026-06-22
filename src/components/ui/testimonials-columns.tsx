"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  /** Optional avatar image URL. Falls back to initials when omitted. */
  image?: string;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((word) => word.replace(/[^A-Za-z]/g, "").charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((dup) => (
          <React.Fragment key={dup}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-xl shadow-navy/20 max-w-xs w-full"
                key={`${dup}-${i}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-orange fill-orange" />
                  ))}
                </div>
                <p className="text-white/75 leading-relaxed text-[15px]">{text}</p>
                <div className="flex items-center gap-3 mt-5">
                  {image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="h-10 w-10 rounded-full bg-orange flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                    >
                      {initials(name)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">
                      {name}
                    </div>
                    <div className="leading-5 text-white/50 tracking-tight text-sm">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
