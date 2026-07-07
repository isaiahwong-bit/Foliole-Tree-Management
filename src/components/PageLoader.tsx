"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen page loader shown on first load: the LumberJord brandmark
 * climbing his rope. Rendered on the server so it covers the first paint,
 * then fades out once the page has loaded (with a minimum on-screen time so
 * it never flashes, and a hard cap so it can never get stuck).
 *
 * The climb motion is CSS-only (see .animate-climb in globals.css) so it runs
 * before framer-motion hydrates, and is disabled under prefers-reduced-motion.
 */
export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  // Start the fade once the page has loaded (min 600ms visible, 4s hard cap).
  useEffect(() => {
    const MIN_VISIBLE = 600;
    const started = performance.now();

    const beginFade = () => {
      const wait = Math.max(0, MIN_VISIBLE - (performance.now() - started));
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      beginFade();
    } else {
      window.addEventListener("load", beginFade, { once: true });
    }

    const cap = window.setTimeout(() => setHidden(true), 4000);

    return () => {
      window.removeEventListener("load", beginFade);
      window.clearTimeout(cap);
    };
  }, []);

  // Unmount after the fade transition finishes so it leaves no dead node.
  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 550);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex h-32 w-32 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/lj-brandmark-orange.png"
          alt=""
          className="w-24 animate-climb"
        />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/lj-secondary-white.png"
        alt="LumberJord"
        className="h-5 opacity-90"
      />
      <span className="loading-dots text-[0.72rem] uppercase tracking-[0.32em] text-offwhite/60">
        Loading
      </span>
    </div>
  );
}
