"use client";

import Script from "next/script";
import { useEffect } from "react";

// GA4 wiring. Inert until NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXXXXX),
// so the site ships no third-party scripts and sets no cookies without it.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event. Safe to call anywhere; no-ops when GA is not loaded. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export default function Analytics() {
  // Track every tap-to-call tap sitewide (nav, hero, CTAs, quote form)
  // with one capture-phase listener instead of wiring each link.
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (e.target.closest('a[href^="tel:"]')) {
        trackEvent("call_click", { page_path: window.location.pathname });
      } else if (e.target.closest('a[href^="mailto:"]')) {
        trackEvent("email_click", { page_path: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
