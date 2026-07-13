import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { suburbs } from "@/lib/suburbs";

const siteUrl = "https://lumberjord.com.au";

export const metadata: Metadata = {
  title: "Areas We Service: Bayside & Inner East Melbourne",
  description:
    "LumberJord services Melbourne's bayside and inner-eastern suburbs: Brighton, Hampton, Sandringham, Toorak, Malvern, Armadale, Kew, Canterbury, Camberwell and Hawthorn.",
  alternates: { canonical: `${siteUrl}/arborist` },
};

const regions: { name: string; blurb: string }[] = [
  {
    name: "Bayside",
    blurb:
      "Coastal gardens shaped by salt and wind: Norfolk Island pines, banksias and moonah alongside the grand exotics of the older streets.",
  },
  {
    name: "Inner East",
    blurb:
      "Melbourne's most established tree country: century-old oaks, elms and planes in the gardens of Stonnington and Boroondara.",
  },
];

export default function AreasPage() {
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
                  Areas
                </li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight text-balance">
                Servicing Melbourne&apos;s
                <br />
                <span className="text-orange">bayside &amp; inner east</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-navy/70 leading-relaxed">
                LumberJord works the suburbs where Melbourne&apos;s most
                established trees grow, from the coastal gardens of Bayside to
                the heritage streetscapes of Stonnington and Boroondara. Pick
                your suburb below, or get in touch if you&apos;re nearby: Jordan
                regularly works the surrounding areas too.
              </p>
            </div>
          </div>
        </section>

        {regions.map((region) => (
          <section key={region.name} className="py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                {region.name}
              </h2>
              <p className="mt-3 text-navy/70 leading-relaxed max-w-2xl">
                {region.blurb}
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {suburbs
                  .filter((s) => s.region === region.name)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/arborist/${s.slug}`}
                      className="group rounded-xl border border-navy/10 bg-white p-5 hover:border-orange/50 transition-all duration-300"
                    >
                      <p className="font-semibold text-navy group-hover:text-orange-dark transition-colors inline-flex items-center gap-1.5">
                        Arborist {s.name}
                        <ArrowRight
                          size={15}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </p>
                      <p className="mt-1.5 text-sm text-navy/60">{s.council}</p>
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
