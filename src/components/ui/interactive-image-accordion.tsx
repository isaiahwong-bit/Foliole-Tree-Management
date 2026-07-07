"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface ImageAccordionItem {
  id: string | number;
  title: string;
  imageUrl: string;
  href?: string;
}

interface AccordionPanelProps {
  item: ImageAccordionItem;
  isActive: boolean;
  /** Hover-capable (desktop) panels are links; touch panels just expand. */
  asLink: boolean;
  onActivate: () => void;
  priority?: boolean;
}

function AccordionPanel({
  item,
  isActive,
  asLink,
  onActivate,
  priority,
}: AccordionPanelProps) {
  const Wrapper = asLink && item.href ? "a" : "div";

  return (
    <Wrapper
      href={asLink ? item.href : undefined}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-label={asLink ? item.title : undefined}
      className={`relative h-[300px] sm:h-[420px] lg:h-[460px] min-w-0 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite ${
        isActive ? "flex-[3.5]" : "flex-[1]"
      }`}
    >
      <Image
        src={item.imageUrl}
        alt=""
        fill
        priority={priority}
        sizes={
          isActive ? "(max-width: 768px) 70vw, 420px" : "(max-width: 768px) 20vw, 140px"
        }
        className="object-cover"
      />
      {/* Gradient for caption legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

      <span
        className={`absolute left-1/2 font-heading font-semibold text-white whitespace-nowrap transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-5 -translate-x-1/2 rotate-0 text-lg"
            : "hidden sm:block bottom-24 -translate-x-1/2 rotate-90 text-base"
        }`}
      >
        {item.title}
      </span>
    </Wrapper>
  );
}

interface ImageAccordionProps {
  items: ImageAccordionItem[];
  defaultActiveIndex?: number;
}

export function ImageAccordion({
  items,
  defaultActiveIndex = 0,
}: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  // On touch devices a scroll gesture over a panel can register as a tap,
  // and a tap on a link yanks the page to #services mid-scroll. So panels
  // are only links when the device can actually hover (mouse/trackpad);
  // on touch, tapping simply expands the panel.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex w-full items-stretch gap-2 sm:gap-3">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          asLink={canHover}
          onActivate={() => setActiveIndex(index)}
          priority={index === defaultActiveIndex}
        />
      ))}
    </div>
  );
}
