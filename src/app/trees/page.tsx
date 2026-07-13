import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { treeGuides } from "@/lib/trees";

const siteUrl = "https://lumberjord.com.au";

export const metadata: Metadata = {
  title: "Melbourne Tree Guide: Know What's Growing at Your Place",
  description:
    "Identify the trees of Melbourne's south east: London planes, elms, oaks, river red gums, Norfolk Island pines and more. Identification guides by a qualified arborist.",
  alternates: { canonical: `${siteUrl}/trees` },
};

const groups = [
  {
    name: "Garden & avenue classics" as const,
    blurb:
      "The exotics that built the leafy east: planted by the Victorians and Edwardians, now grown into the avenues and garden giants of Stonnington and Boroondara.",
  },
  {
    name: "Backyard & hedge favourites" as const,
    blurb:
      "The trees on real quotes every week: front-garden features, driveway rows and the screens along boundary fences.",
  },
  {
    name: "Natives & coastal icons" as const,
    blurb:
      "The trees that were here first, and the salt-hardy icons of the bayside foreshore from Brighton to Sandringham.",
  },
];

export default function TreeGuideHub() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Melbourne Tree Identification Guide",
    itemListElement: treeGuides.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${siteUrl}/trees/${t.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="bg-offwhite">
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
          {/* Brandmark climbing in from the corner, echoing the homepage hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-14 -right-16 sm:-right-10 lg:right-12 z-0 select-none"
          >
            <Image
              src="/brand/lj-brandmark-orange.png"
              alt=""
              width={520}
              height={593}
              className="h-[300px] sm:h-[420px] lg:h-[560px] w-auto opacity-[0.12]"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-navy/60">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-orange-dark transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy font-medium" aria-current="page">
                  Tree Guide
                </li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                Know what&apos;s growing
                <br />
                <span className="text-orange">at your place</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-navy/70 leading-relaxed">
                Identification guides to the trees Jordan sees most across
                Melbourne&apos;s bayside and inner east: what to look for in the
                bark, leaves and form, where each species turns up, and the
                stories behind them. Put a name to your tree, and if you
                can&apos;t, a couple of photos in the quote form is all Jordan
                needs. What a tree needs is always assessed in person.
              </p>
            </div>
          </div>
        </section>

        {groups.map((group) => (
          <section key={group.name} className="py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                {group.name}
              </h2>
              <p className="mt-3 text-navy/70 leading-relaxed max-w-2xl">
                {group.blurb}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {treeGuides
                  .filter((t) => t.group === group.name)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      href={`/trees/${t.slug}`}
                      className="group rounded-2xl bg-white border border-navy/10 overflow-hidden hover:border-orange/50 transition-all duration-300"
                    >
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <Image
                          src={t.image}
                          alt={t.imageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-heading font-bold text-lg text-navy group-hover:text-orange-dark transition-colors inline-flex items-center gap-1.5">
                          {t.name}
                          <ArrowRight
                            size={16}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          />
                        </p>
                        <p className="mt-1 text-xs italic text-navy/50">
                          {t.botanicalName}
                        </p>
                        <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                          {t.cardLine}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        ))}

        <div className="pt-6" />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
