import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { suburbs, getSuburb } from "@/lib/suburbs";
import { services } from "@/lib/services";

const siteUrl = "https://lumberjord.com.au";

interface PageProps {
  params: Promise<{ suburb: string }>;
}

export function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) return {};

  const title = `Arborist ${suburb.name}: Tree Pruning, Removals & Tree Health`;
  return {
    title,
    description: suburb.metaDescription,
    alternates: { canonical: `${siteUrl}/arborist/${suburb.slug}` },
    openGraph: {
      title: `${title} | LumberJord`,
      description: suburb.metaDescription,
      url: `${siteUrl}/arborist/${suburb.slug}`,
    },
  };
}

export default async function SuburbPage({ params }: PageProps) {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) notFound();

  const nearby = suburb.nearby
    .map((s) => getSuburb(s))
    .filter((s) => s !== undefined);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/arborist/${suburb.slug}#service`,
        name: `Arborist services in ${suburb.name}`,
        serviceType: "Arborist and tree care",
        description: suburb.metaDescription,
        url: `${siteUrl}/arborist/${suburb.slug}`,
        areaServed: {
          "@type": "Place",
          name: `${suburb.name}, Victoria, Australia`,
        },
        provider: {
          "@id": `${siteUrl}/#business`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas",
            item: `${siteUrl}/arborist`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: suburb.name,
            item: `${siteUrl}/arborist/${suburb.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="bg-offwhite">
        {/* Header */}
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
                <li>
                  <Link
                    href="/arborist"
                    className="hover:text-orange-dark transition-colors"
                  >
                    Areas
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy font-medium" aria-current="page">
                  {suburb.name}
                </li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
                {suburb.region} &middot; {suburb.council}
              </p>
              <h1 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                Arborist in <span className="text-orange">{suburb.name}</span>
              </h1>
              {suburb.intro.map((para, i) => (
                <p
                  key={i}
                  className="mt-6 text-base sm:text-lg text-navy/70 leading-relaxed"
                >
                  {para}
                </p>
              ))}

              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-orange text-navy px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-light transition-all duration-300"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="tel:+61413268827"
                  className="inline-flex items-center justify-center gap-2 border border-navy/25 text-navy px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-navy/5 transition-all duration-300"
                >
                  <Phone size={17} aria-hidden="true" />
                  0413 268 827
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services in this suburb */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="bg-navy rounded-[2rem] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
                Tree services in {suburb.name}
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-orange/40 transition-all duration-300"
                  >
                    <p className="font-semibold text-white group-hover:text-orange-light transition-colors">
                      {service.name}
                    </p>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">
                      {service.tagline}
                    </p>
                  </Link>
                ))}
                <a
                  href="#contact"
                  className="group rounded-xl bg-orange p-5 hover:bg-orange-light transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="font-semibold text-navy">
                    Not sure what your tree needs?
                  </p>
                  <p className="mt-2 text-sm text-navy/80 leading-relaxed">
                    Send a couple of photos and Jordan will identify the tree and
                    quote the right work.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local trees */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight text-balance">
                  The trees Jordan sees around {suburb.name}
                </h2>
                <p className="mt-5 text-navy/70 leading-relaxed text-base sm:text-lg">
                  {suburb.localTrees}
                </p>
                <p className="mt-5 text-navy/70 leading-relaxed">
                  Not sure what&apos;s growing at your place? The{" "}
                  <Link
                    href="/trees"
                    className="text-orange-dark hover:text-orange underline underline-offset-2 transition-colors"
                  >
                    tree identification guide
                  </Link>{" "}
                  covers the species Jordan works with most, or just send
                  photos with your quote request and he&apos;ll identify it for
                  you.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                <Image
                  src="/work/winter-pruning.jpg"
                  alt="Jordan pruning in the canopy of a mature tree"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Council note */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border-l-4 border-orange bg-white p-6 sm:p-8 max-w-3xl">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
                Tree permits in {suburb.name}
              </h2>
              <p className="mt-3 text-navy/70 leading-relaxed">
                {suburb.councilNote}
              </p>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        {nearby.length > 0 && (
          <section className="py-10 lg:py-14 pb-4">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
                Also servicing nearby
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/arborist/${n.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:border-orange hover:text-orange-dark transition-colors"
                  >
                    Arborist {n.name}
                  </Link>
                ))}
                <Link
                  href="/arborist"
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-light transition-colors"
                >
                  All service areas
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        )}

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
