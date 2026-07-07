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
  /** Hover-capable (desktop) panels are links; touch panels expand first. */
  asLink: boolean;
  onActivate: () => void;
  onNavigate: () => void;
  priority?: boolean;
}

function AccordionPanel({
  item,
  isActive,
  asLink,
  onActivate,
  onNavigate,
  priority,
}: AccordionPanelProps) {
  const Wrapper = asLink && item.href ? "a" : "div";

  // Touch: first tap expands the panel, a second tap on the expanded panel
  // goes through to the services section. Desktop anchors navigate natively.
  const handleClick = () => {
    if (!asLink && isActive) {
      onNavigate();
      return;
    }
    onActivate();
  };

  return (
    <Wrapper
      href={asLink ? item.href : undefined}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={handleClick}
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
        {/* Touch affordance: the expanded panel is one more tap from services */}
        {!asLink && isActive && (
          <span aria-hidden="true" className="ml-1.5 text-orange-light">
            &rsaquo;
          </span>
        )}
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
  // are only links when the device can actually hover (mouse/trackpad).
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll to the target without writing a #hash into the URL, so reloads
  // still land on the hero.
  const navigateTo = (href?: string) => {
    if (!href?.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="flex w-full items-stretch gap-2 sm:gap-3">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          asLink={canHover}
          onActivate={() => setActiveIndex(index)}
          onNavigate={() => navigateTo(item.href)}
          priority={index === defaultActiveIndex}
        />
      ))}
    </div>
  );
}
