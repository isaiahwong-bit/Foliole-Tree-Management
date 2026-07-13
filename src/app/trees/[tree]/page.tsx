import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Camera, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { treeGuides, getTreeGuide } from "@/lib/trees";
import { getSuburb } from "@/lib/suburbs";

const siteUrl = "https://lumberjord.com.au";

interface PageProps {
  params: Promise<{ tree: string }>;
}

export function generateStaticParams() {
  return treeGuides.map((t) => ({ tree: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { tree: slug } = await params;
  const tree = getTreeGuide(slug);
  if (!tree) return {};

  return {
    title: tree.metaTitle,
    description: tree.metaDescription,
    alternates: { canonical: `${siteUrl}/trees/${tree.slug}` },
    openGraph: {
      title: `${tree.metaTitle} | LumberJord`,
      description: tree.metaDescription,
      url: `${siteUrl}/trees/${tree.slug}`,
      images: [{ url: `${siteUrl}${tree.image}` }],
    },
  };
}

export default async function TreeGuidePage({ params }: PageProps) {
  const { tree: slug } = await params;
  const tree = getTreeGuide(slug);
  if (!tree) notFound();

  const suburbs = tree.relatedSuburbs
    .map((s) => getSuburb(s))
    .filter((s) => s !== undefined);
  const related = treeGuides.filter((t) => t.slug !== tree.slug).slice(0, 3);
  const article = /^[aeiou]/i.test(tree.name) ? "an" : "a";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}/trees/${tree.slug}#article`,
        headline: tree.metaTitle,
        description: tree.metaDescription,
        image: `${siteUrl}${tree.image}`,
        url: `${siteUrl}/trees/${tree.slug}`,
        author: {
          "@type": "Person",
          name: "Jordan",
          jobTitle: "Certified Arborist",
          worksFor: { "@id": `${siteUrl}/#business` },
        },
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tree Guide",
            item: `${siteUrl}/trees`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tree.name,
            item: `${siteUrl}/trees/${tree.slug}`,
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
                    href="/trees"
                    className="hover:text-orange-dark transition-colors"
                  >
                    Tree Guide
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy font-medium" aria-current="page">
                  {tree.name}
                </li>
              </ol>
            </nav>

            <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
                  {tree.group}
                </p>
                <h1 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                  {tree.name}
                </h1>
                <p className="mt-3 text-lg italic text-navy/60">
                  {tree.botanicalName}
                </p>
                <p className="mt-6 text-base sm:text-lg text-navy/70 leading-relaxed">
                  {tree.intro}
                </p>
              </div>

              <figure>
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                  <Image
                    src={tree.image}
                    alt={tree.imageAlt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {tree.imageCredit && (
                  <figcaption className="mt-2 text-[11px] text-navy/45">
                    Photo &copy;{" "}
                    <a
                      href={tree.imageCredit.sourceUrl}
                      rel="nofollow noopener"
                      target="_blank"
                      className="hover:text-navy/70 transition-colors underline underline-offset-2"
                    >
                      {tree.imageCredit.artist}
                    </a>
                    , licensed under{" "}
                    <a
                      href={tree.imageCredit.licenseUrl}
                      rel="nofollow noopener"
                      target="_blank"
                      className="hover:text-navy/70 transition-colors underline underline-offset-2"
                    >
                      {tree.imageCredit.license}
                    </a>
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </section>

        {/* How to spot it */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-navy rounded-[2rem] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
              {/* Brandmark watermark in the panel corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-8 z-0 select-none"
              >
                <Image
                  src="/brand/lj-brandmark-white.png"
                  alt=""
                  width={520}
                  height={593}
                  className="h-[240px] sm:h-[300px] lg:h-[380px] w-auto opacity-[0.06]"
                />
              </div>
              <h2 className="relative z-10 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
                How to spot {article} {tree.name.toLowerCase()}
              </h2>
              <div className="relative z-10 mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {tree.howToSpot.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf size={15} className="text-orange" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where you'll see it */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                Where you&apos;ll see it around the south east
              </h2>
              <p className="mt-5 text-navy/70 leading-relaxed text-base sm:text-lg">
                {tree.whereYouSeeIt}
              </p>
              {suburbs.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {suburbs.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/arborist/${s.slug}`}
                      className="inline-flex items-center rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:border-orange hover:text-orange-dark transition-colors"
                    >
                      Arborist {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Worth knowing + lookalikes */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
              <div className="rounded-2xl border-l-4 border-orange bg-white p-6 sm:p-8">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
                  Worth knowing
                </h2>
                <p className="mt-3 text-navy/70 leading-relaxed">
                  {tree.worthKnowing}
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-navy/30 bg-white p-6 sm:p-8">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
                  Easily confused with
                </h2>
                <p className="mt-3 text-navy/70 leading-relaxed">
                  {tree.lookalikes}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo CTA */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-orange/10 border border-orange/30 p-6 sm:p-8 max-w-3xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                <Camera size={18} className="text-orange-dark" strokeWidth={2} />
              </div>
              <div>
                <p className="font-semibold text-navy">
                  Think this is your tree? Or still not sure?
                </p>
                <p className="mt-2 text-sm sm:text-base text-navy/70 leading-relaxed">
                  Either way, a couple of photos in the{" "}
                  <a
                    href="#contact"
                    className="text-orange-dark hover:text-orange underline underline-offset-2 transition-colors"
                  >
                    quote form
                  </a>{" "}
                  is all Jordan needs to identify it. Every tree is different,
                  so what yours needs is always assessed in person, never from
                  a guide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More trees */}
        <section className="py-10 lg:py-14 pb-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
              More from the tree guide
            </h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-4 max-w-4xl">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/trees/${t.slug}`}
                  className="group rounded-xl border border-navy/10 bg-white overflow-hidden hover:border-orange/50 transition-all duration-300"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-navy group-hover:text-orange-dark transition-colors inline-flex items-center gap-1.5">
                      {t.name}
                      <ArrowRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/trees"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-dark hover:text-orange transition-colors"
            >
              Browse all trees in the guide
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
