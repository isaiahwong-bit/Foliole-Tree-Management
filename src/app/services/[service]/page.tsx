import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { services, getService } from "@/lib/services";
import { suburbs } from "@/lib/suburbs";

const siteUrl = "https://lumberjord.com.au";

interface PageProps {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.name}: Bayside & Inner East Melbourne`;
  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: `${siteUrl}/services/${service.slug}` },
    openGraph: {
      title: `${title} | LumberJord`,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${service.slug}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url: `${siteUrl}/services/${service.slug}`,
        areaServed: suburbs.map((s) => ({
          "@type": "Place",
          name: `${s.name}, Victoria, Australia`,
        })),
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
            name: "Services",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteUrl}/services/${service.slug}`,
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
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
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
                    href="/services"
                    className="hover:text-orange-dark transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-navy font-medium" aria-current="page">
                  {service.shortName}
                </li>
              </ol>
            </nav>

            <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                  {service.name}
                </h1>
                {service.intro.map((para, i) => (
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

              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions */}
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
                {service.inclusionsHeading}
              </h2>
              <div className="relative z-10 mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {service.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={15} className="text-orange" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="relative z-10 mt-10 text-white/70 leading-relaxed max-w-3xl">
                {service.forWho}
              </p>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
              Where Jordan does this work
            </h2>
            <p className="mt-3 text-navy/70 max-w-2xl leading-relaxed">
              Servicing Melbourne&apos;s bayside and inner-eastern suburbs,
              and the areas around them.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/arborist/${s.slug}`}
                  className="inline-flex items-center rounded-full border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:border-orange hover:text-orange-dark transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="py-10 lg:py-14 pb-4">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy tracking-tight">
                Related services
              </h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-4 max-w-3xl">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group rounded-xl border border-navy/10 bg-white p-5 hover:border-orange/50 transition-all duration-300"
                  >
                    <p className="font-semibold text-navy group-hover:text-orange-dark transition-colors">
                      {r.name}
                    </p>
                    <p className="mt-1.5 text-sm text-navy/60 leading-relaxed">
                      {r.tagline}
                    </p>
                  </Link>
                ))}
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
