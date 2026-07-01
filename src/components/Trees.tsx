"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import {
  ElegantCarousel,
  type CarouselSlide,
} from "@/components/ui/elegant-carousel";

const trees: CarouselSlide[] = [
  {
    title: "London Plane",
    subtitle: "Platanus × acerifolia · Melbourne's avenues",
    description:
      "Melbourne's most-planted street tree, prized for its pollution tolerance and dense summer shade. Its fine leaf hairs irritate airways in spring and its vigorous surface roots love to lift footpaths, so thoughtful pruning and root management matter.",
    accent: "#F15F3A",
    imageUrl: "/trees/london-plane.jpg",
    imageAlt: "Avenue of London Plane trees arching over an urban street",
  },
  {
    title: "Jacaranda",
    subtitle: "Jacaranda mimosifolia · Streets in bloom",
    description:
      "The purple showstopper of late spring, and a brittle-wooded one. Formative pruning while young builds strong branch unions that resist storm limb failure, and a quick clean-up keeps flower-slicked paths safe.",
    accent: "#3B4D82",
    imageUrl: "/trees/jacaranda.jpg",
    imageAlt: "Urban street lined with jacarandas in full purple bloom",
  },
  {
    title: "Gum Trees",
    subtitle: "Eucalyptus · Melbourne's natives",
    description:
      "Australia's iconic natives, and the ones to respect. Even healthy gums can drop large limbs without warning on hot, still days, so regular crown inspection and deadwood removal are essential wherever one stands near paths, cars or homes.",
    accent: "#62542B",
    imageUrl: "/trees/gum.jpg",
    imageAlt: "Tall eucalyptus gum tree against a blue sky",
  },
  {
    title: "Crepe Myrtle",
    subtitle: "Lagerstroemia indica · Suburban gardens",
    description:
      "A favourite small street and garden tree with smooth, mottled bark and long summer colour. The trick is to avoid 'crepe murder' (hard topping) and thin selectively instead, keeping a clean framework and good airflow against mildew.",
    accent: "#141438",
    imageUrl: "/trees/crepe-myrtle.jpg",
    imageAlt: "Pink-flowering crepe myrtle on a suburban street",
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
            The trees we work with
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            The species Jordan sees most across Melbourne&apos;s streets, parks
            and gardens, and what each one needs to thrive.
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
