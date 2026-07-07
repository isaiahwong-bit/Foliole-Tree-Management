"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * Site-wide motion setup:
 * - LazyMotion + domAnimation keeps the framer-motion bundle small
 *   (components use `m.` instead of `motion.`).
 * - MotionConfig respects the user's prefers-reduced-motion setting.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
