import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { services } from "@/lib/services";

const siteUrl = "https://lumberjord.com.au";

export const metadata: Metadata = {
  title: "Arborist Services: Pruning, Removals, Tree Health & More",
  description:
    "LumberJord's arborist services across Melbourne's bayside and inner east: pruning to AS 4373, tree health diagnostics, structural support, removals and subcontracting.",
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
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
                  Services
                </li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                Professional tree care,
                <br />
                <span className="text-orange">end to end</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-navy/70 leading-relaxed">
                Every service below is delivered personally by Jordan: the
                same qualified arborist who quotes the job climbs the tree.
                Servicing Melbourne&apos;s bayside and inner-eastern suburbs.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl bg-white border border-navy/10 overflow-hidden hover:border-orange/50 transition-all duration-300"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="font-heading font-bold text-lg text-navy group-hover:text-orange-dark transition-colors inline-flex items-center gap-1.5">
                      {service.name}
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </p>
                    <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
