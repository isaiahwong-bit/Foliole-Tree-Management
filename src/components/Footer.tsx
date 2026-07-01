"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Pruning", href: "#services" },
    { label: "Tree Health & Diagnostics", href: "#services" },
    { label: "Structural Support", href: "#services" },
    { label: "Tree Removals", href: "#services" },
    { label: "Subcontracting & Partnership", href: "#services" },
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
      className="bg-navy border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/brand/lj-secondary-white.png"
                alt="LumberJord"
                width={247}
                height={30}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Melbourne-based professional arboriculture by Jordan. Qualified
              tree care, risk assessment, and subcontracting across Melbourne
              and greater Victoria.
            </p>
            <div className="mt-6 flex items-baseline gap-2.5">
              <span className="text-3xl font-bold text-orange tracking-tight">
                500+
              </span>
              <span className="text-white/45 text-sm">
                trees managed across Melbourne &amp; greater Victoria
              </span>
            </div>
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
                    className="text-white/40 text-sm hover:text-orange-light transition-colors duration-200"
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
                    className="text-white/40 text-sm hover:text-orange-light transition-colors duration-200"
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
            &copy; {new Date().getFullYear()} LumberJord. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white/25 text-xs hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Photo credits */}
        <p className="mt-4 text-white/20 text-[11px] leading-relaxed">
          Elm avenue photo &copy;{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Avenue_of_Elms,_Fitzroy_Gardens,_Melbourne_Australia_(4523703561).jpg"
            className="hover:text-white/40 transition-colors"
            rel="nofollow noopener"
            target="_blank"
          >
            Rexness
          </a>{" "}
          &middot; claret ash photo &copy;{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Gunnersbury_Park,_autumn_leaves,_claret_ash_tree_-_geograph.org.uk_-_6640116.jpg"
            className="hover:text-white/40 transition-colors"
            rel="nofollow noopener"
            target="_blank"
          >
            David Hawgood
          </a>
          , licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/2.0/"
            className="hover:text-white/40 transition-colors"
            rel="nofollow noopener"
            target="_blank"
          >
            CC BY-SA 2.0
          </a>
          .
        </p>
      </div>
    </motion.footer>
  );
}
