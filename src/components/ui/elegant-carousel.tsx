"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  imageAlt?: string;
}

interface ElegantCarouselProps {
  slides: CarouselSlide[];
}

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 800;

export function ElegantCarousel({ slides }: ElegantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Autoplay only while the carousel is actually on screen, and never for
  // users who prefer reduced motion.
  const isInView = useInView(containerRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const autoplay = isInView && !isPaused && !reducedMotion;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide, slides.length]);

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const slide = slides[currentIndex];
  const shift = isTransitioning
    ? "opacity-0 translate-y-4"
    : "opacity-100 translate-y-0";

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Tree species we work with"
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={(e) => (touchStartX.current = e.targetTouches[0].clientX)}
      onTouchMove={(e) => (touchEndX.current = e.targetTouches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${slide.accent}1f 0%, transparent 70%)`,
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center p-6 sm:p-10 lg:p-14">
        {/* Left: text */}
        <div className="order-2 lg:order-1" aria-live="polite">
          <div
            className={`flex items-center gap-3 mb-5 transition-all duration-500 ${shift}`}
          >
            <span className="h-px w-10 bg-navy/30" />
            <span className="text-navy/65 text-sm font-medium tracking-[0.2em]">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <h3
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight transition-all duration-500 ${shift}`}
          >
            {slide.title}
          </h3>

          <p
            className={`mt-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-500 ${shift}`}
            style={{ color: slide.accent }}
          >
            {slide.subtitle}
          </p>

          <p
            className={`mt-6 text-navy/70 text-base sm:text-lg leading-relaxed max-w-lg transition-all duration-500 ${shift}`}
          >
            {slide.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous tree"
              className="flex size-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-orange"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next tree"
              className="flex size-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-orange"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="order-1 lg:order-2 relative">
          <div
            className={`relative h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-2xl transition-all duration-700 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {slides.map((s, index) => (
              <Image
                key={s.imageUrl}
                src={s.imageUrl}
                alt={s.imageAlt ?? s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className={`object-cover ${index === currentIndex ? "" : "hidden"}`}
              />
            ))}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${slide.accent}33 0%, transparent 55%)`,
              }}
            />
          </div>
          {/* Decorative frame corners */}
          <div
            className="pointer-events-none absolute -top-3 -left-3 h-14 w-14 border-t-2 border-l-2 rounded-tl-xl"
            style={{ borderColor: slide.accent }}
          />
          <div
            className="pointer-events-none absolute -bottom-3 -right-3 h-14 w-14 border-b-2 border-r-2 rounded-br-xl"
            style={{ borderColor: slide.accent }}
          />
        </div>
      </div>

      {/* Progress indicators */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 sm:px-10 lg:px-14 pb-8">
        {slides.map((s, index) => (
          <button
            key={s.title}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${s.title}`}
            aria-current={index === currentIndex}
            className="group text-left focus-visible:outline-2 focus-visible:outline-orange rounded"
          >
            <div className="h-0.5 w-full rounded-full bg-navy/15 overflow-hidden">
              {index === currentIndex ? (
                // CSS animation drives both the bar and the auto-advance —
                // no JS polling. Paused whenever autoplay conditions fail.
                <div
                  key={`progress-${currentIndex}`}
                  onAnimationEnd={goNext}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: slide.accent,
                    width: autoplay ? undefined : "100%",
                    animation: autoplay
                      ? `carousel-progress ${SLIDE_DURATION}ms linear forwards`
                      : "none",
                  }}
                />
              ) : (
                <div
                  className="h-full rounded-full"
                  style={{
                    width: index < currentIndex ? "100%" : "0%",
                    backgroundColor: "rgba(20,20,56,0.25)",
                  }}
                />
              )}
            </div>
            <span
              className={`mt-2 block text-xs tracking-tight transition-colors ${
                index === currentIndex
                  ? "text-navy font-semibold"
                  : "text-navy/60 group-hover:text-navy/80"
              }`}
            >
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
