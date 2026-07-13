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
      "Melbourne's most-planted street tree, arching over avenues across the inner suburbs. Pick it by its mottled cream-and-olive bark that flakes away in patches, broad maple-like leaves, and the spiky seed balls that hang on through winter. Hay fever sufferers know its fine spring leaf-hairs all too well.",
    accent: "#F15F3A",
    imageUrl: "/trees/london-plane.jpg",
    imageAlt: "Avenue of London Plane trees arching over an urban street",
  },
  {
    title: "Elm",
    subtitle: "Ulmus · Melbourne's grand avenues",
    description:
      "Melbourne shelters one of the world's last great elm populations, lost to Dutch elm disease almost everywhere else. They line Royal Parade and the city's historic gardens. Look for the broad, arching canopy, deeply furrowed bark, and small saw-edged leaves that sit slightly lopsided at the base.",
    accent: "#3F5E3C",
    imageUrl: "/trees/elm.jpg",
    imageAlt: "Broad elm canopy arching over a Melbourne avenue",
  },
  {
    title: "Gum Trees",
    subtitle: "Eucalyptus · Melbourne's natives",
    description:
      "Australia's icons, and an enormous family in their own right: river reds, spotted gums, lemon-scenteds and many more, each with its own character. Look for ribboning or smooth bark, long sickle-shaped hanging leaves, and that unmistakable eucalyptus scent after rain.",
    accent: "#62542B",
    imageUrl: "/trees/gum-canopy.jpg",
    imageAlt: "Looking up the pale trunks of tall gum trees into the canopy",
  },
  {
    title: "Claret Ash",
    subtitle: "Fraxinus 'Raywood' · Autumn colour",
    description:
      "The tree behind Melbourne's deep-red autumns, a cultivar raised in Australia before it went global. Its fine, feathery leaflets turn rich claret every autumn. Like many fast growers it can form tight, 'included bark' branch unions, which is one reason formative pruning while a tree is young is time well spent.",
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
            Know what&apos;s growing at your place
          </h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed">
            A quick guide to the trees Jordan sees most across Melbourne&apos;s
            streets, parks and gardens. Put a name to yours if you can. And if
            you can&apos;t, no problem: a couple of photos in the{" "}
            <a
              href="#contact"
              className="text-orange-dark hover:text-orange underline underline-offset-2 transition-colors"
            >
              quote form
            </a>{" "}
            is all Jordan needs to identify it. Every tree is different, so
            what yours needs is always assessed in person.
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

        {/* Link to the full guide */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <a
            href="/trees"
            className="inline-flex items-center justify-center gap-2 border border-navy/25 text-navy px-7 py-3.5 rounded-full font-medium text-sm sm:text-base hover:bg-navy/5 transition-all duration-300"
          >
            Browse the full tree guide
          </a>
        </m.div>
      </div>
    </section>
  );
}
