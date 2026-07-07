"use client";

import { useEffect } from "react";

// Only ever reset once per document — client-side route changes remount
// the home page but must not re-trigger it.
let hasRun = false;

/**
 * Fresh loads of the home page always land on the hero: strips a stale
 * #section hash left in the URL by earlier in-page navigation and defeats
 * the browser's mid-page scroll restoration on reload. In-app navigations
 * (e.g. the privacy page's link to /#contact) are left untouched.
 */
export default function ScrollReset() {
  useEffect(() => {
    if (hasRun) return;
    hasRun = true;

    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    // If the document was originally loaded on a different path, the user
    // arrived here via client-side navigation — don't interfere.
    if (nav && new URL(nav.name).pathname !== window.location.pathname) {
      return;
    }

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
