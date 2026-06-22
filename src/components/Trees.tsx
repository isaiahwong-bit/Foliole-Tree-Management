"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import {
  ElegantCarousel,
  type CarouselSlide,
} from "@/components/ui/elegant-carousel";

const trees: CarouselSlide[] = [
  {
    title: "Mountain Ash",
    subtitle: "Eucalyptus regnans · Central Highlands",
    description:
      "The tallest flowering plant on Earth. Victoria's Central Highlands grow specimens past 90 metres, among the tallest trees anywhere. Their height demands experienced climbers, and because they regenerate from fire, timing every cut matters.",
    accent: "#F15F3A",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=1200&fit=crop&q=80",
    imageAlt: "Towering Mountain Ash forest",
  },
  {
    title: "River Red Gum",
    subtitle: "Eucalyptus camaldulensis · Murray & waterways",
    description:
      "Australia's most widespread eucalypt lines Victoria's rivers and can live 500–1,000 years. It's famous for dropping heavy limbs without warning, which is exactly why regular health and risk assessment matters when one stands near a home.",
    accent: "#3B4D82",
    imageUrl:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1000&h=1200&fit=crop&q=80",
    imageAlt: "River Red Gum beside water",
  },
  {
    title: "Snow Gum",
    subtitle: "Eucalyptus pauciflora · Victorian Alps",
    description:
      "The sculptural survivor of the Victorian Alps, with twisted, multi-coloured trunks that shrug off snow and temperatures well below freezing. Slow-growing and long-lived, prized as ornamentals, they reward patient formative pruning.",
    accent: "#62542B",
    imageUrl:
      "https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=1000&h=1200&fit=crop&q=80",
    imageAlt: "Snow Gum with twisted trunk in alpine country",
  },
  {
    title: "Manna Gum",
    subtitle: "Eucalyptus viminalis · Koala country",
    description:
      "A favourite koala food tree that sheds bark in long ribbons and weeps a sweet, edible 'manna', the source of its name. Its habitat value and shedding habit shape how and when it should be pruned: wildlife first.",
    accent: "#141438",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&h=1200&fit=crop&q=80",
    imageAlt: "Manna Gum in open woodland",
  },
];

export default function Trees() {
  return (
    <section id="trees" className="py-24 lg:py-36 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight text-balance">
            Victoria&apos;s iconic trees
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            Four of the trees Jordan works with across Melbourne and greater
            Victoria: what makes each remarkable, and what it needs to thrive.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <ElegantCarousel slides={trees} />
        </motion.div>
      </div>
    </section>
  );
}
