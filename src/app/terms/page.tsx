import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you engage LumberJord for arboriculture services or use this website.",
  alternates: { canonical: "https://lumberjord.com.au/terms" },
};

export default function TermsPage() {
  return (
    <main className="bg-offwhite min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
        <Link
          href="/"
          className="text-sm font-medium text-orange-dark hover:text-orange transition-colors"
        >
          &larr; Back to LumberJord
        </Link>

        <h1 className="mt-8 font-heading text-3xl sm:text-4xl font-bold text-navy tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-navy/60">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              Quotes and estimates
            </h2>
            <p>
              Quotes provided through this website or following a site visit
              are estimates based on the information available at the time.
              Final pricing is confirmed before any work begins. A quote is not
              a commitment to perform work until accepted by both parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              Services
            </h2>
            <p>
              All tree work is performed by a qualified arborist in accordance
              with Australian Standard AS 4373 (Pruning of Amenity Trees) and
              applicable safety regulations. Work requiring council permits or
              planning approval is the property owner&apos;s responsibility to
              authorise unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              Insurance and liability
            </h2>
            <p>
              LumberJord holds public liability insurance. Liability for any
              work is limited to the scope agreed in writing. Nothing in these
              terms excludes rights that cannot be excluded under Australian
              Consumer Law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              This website
            </h2>
            <p>
              Content on this site is provided for general information about
              our services and doesn&apos;t constitute arboricultural advice
              for your specific trees — every tree needs its own assessment.
              For anything else, get in touch via the{" "}
              <Link
                href="/#contact"
                className="text-orange-dark hover:text-orange underline underline-offset-2 transition-colors"
              >
                contact form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
