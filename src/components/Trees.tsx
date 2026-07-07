"use client";

import { m } from "framer-motion";
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
    title: "Elm",
    subtitle: "Ulmus · Melbourne's grand avenues",
    description:
      "Melbourne shelters one of the world's last great elm populations, lost to Dutch elm disease almost everywhere else. These broad, arching giants line Royal Parade and the city's gardens. They need careful large-limb reduction to manage their weight, and year-round vigilance against elm leaf beetle.",
    accent: "#3F5E3C",
    imageUrl: "/trees/elm.jpg",
    imageAlt: "Broad elm canopy arching over a Melbourne avenue",
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
    title: "Claret Ash",
    subtitle: "Fraxinus 'Raywood' · Autumn colour",
    description:
      "The street tree behind Melbourne's deep-red autumns. Its fast, eager growth comes at a cost: narrow, included-bark forks that split in storms. Formative pruning while young builds strong branch unions, and selective thinning keeps the canopy sound as it matures.",
    accent: "#7A2E3A",
    imageUrl: "/trees/claret-ash.jpg",
    imageAlt: "Claret ash in deep-red autumn colour on a suburban street",
  },
];

export default function Trees() {
  return (
    <section id="trees" className="py-24 lg:py-36 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight text-balance">
            The trees we work with
          </h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed">
            The species Jordan sees most across Melbourne&apos;s streets, parks
            and gardens, and what each one needs to thrive.
          </p>
        </m.div>

        {/* Carousel */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <ElegantCarousel slides={trees} />
        </m.div>
      </div>
    </section>
  );
}
