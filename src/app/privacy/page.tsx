import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How LumberJord collects, uses, and protects the information you share when requesting a quote.",
  alternates: { canonical: "https://lumberjord.com.au/privacy" },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-navy/60">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              What we collect
            </h2>
            <p>
              When you submit a quote request, we collect the details you
              provide: your name, email address, phone number (if given), the
              location of the work, a description of the job, and any photos
              you attach. We don&apos;t collect anything else, and we don&apos;t
              use tracking or advertising cookies on this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              How we use it
            </h2>
            <p>
              Your details are used for one purpose: assessing your enquiry and
              getting back to you with a quote or advice. Your information is
              never sold, shared, or used for marketing without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              How it&apos;s handled
            </h2>
            <p>
              Quote requests are delivered directly to LumberJord&apos;s inbox
              via our email provider and retained only as long as needed to
              handle your enquiry and any resulting work. If you&apos;d like
              your details removed, reply to any email from us and we&apos;ll
              delete them.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-navy mb-3">
              Questions
            </h2>
            <p>
              For any privacy questions or requests, get in touch via the{" "}
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
