"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt?: string;
}

interface Gallery4Props {
  items: Gallery4Item[];
  ctaLabel?: string;
  /** "dark" controls (navy on light bg) or "light" controls (white on dark bg). */
  tone?: "light" | "dark";
}

export function Gallery4({
  items,
  ctaLabel = "Get a quote",
  tone = "dark",
}: Gallery4Props) {
  const isLight = tone === "light";
  const arrowBtn = isLight
    ? "border-white/45 text-white hover:bg-white hover:text-navy disabled:hover:bg-transparent disabled:hover:text-white"
    : "border-navy/30 text-navy hover:bg-navy hover:text-white disabled:hover:bg-transparent disabled:hover:text-navy";
  const dotInactive = isLight
    ? "bg-white/45 hover:bg-white/70"
    : "bg-navy/30 hover:bg-navy/50";
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: { "(max-width: 768px)": { dragFree: true } },
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 lg:gap-6 px-1 py-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 grow-0 basis-[82%] sm:basis-[48%] lg:basis-[31.5%]"
            >
              <a href={item.href} className="group block">
                <div className="relative h-[25rem] lg:h-[27rem] overflow-hidden rounded-3xl shadow-sm">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 768px) 82vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-white">
                    <h3 className="font-heading text-xl font-bold mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-orange">
                      {ctaLabel}
                      <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous service"
          className={`flex size-10 items-center justify-center rounded-full border transition-colors disabled:opacity-30 ${arrowBtn}`}
        >
          <ArrowLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-6 bg-orange" : `w-2 ${dotInactive}`
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next service"
          className={`flex size-10 items-center justify-center rounded-full border transition-colors disabled:opacity-30 ${arrowBtn}`}
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
