"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";
import { Leaf } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Precision Pruning", href: "#services" },
    { label: "Health Assessments", href: "#services" },
    { label: "Safe Removals & Cabling", href: "#services" },
    { label: "Sub-contracting", href: "#services" },
  ],
  company: [
    { label: "About Jordan", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="bg-forest-950 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={20} className="text-ember-400" strokeWidth={1.5} />
              <span className="text-xl font-semibold text-white tracking-tight">
                Foliole
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Expert tree care by Jordan. Specializing in precision pruning,
              health assessments, and safe removals. Elevating arboriculture
              from root to crown.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-ember-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-ember-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Foliole Tree Management. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
