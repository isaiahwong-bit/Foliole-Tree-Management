"use client";

import { useState } from "react";
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
  onActivate: () => void;
  priority?: boolean;
}

function AccordionPanel({
  item,
  isActive,
  onActivate,
  priority,
}: AccordionPanelProps) {
  const Wrapper = item.href ? "a" : "div";

  return (
    <Wrapper
      href={item.href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-label={item.title}
      className={`relative h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 transition-[width] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite ${
        isActive ? "w-[260px] sm:w-[320px] lg:w-[360px]" : "w-[52px] sm:w-[60px]"
      }`}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 60vw, 360px"
        className="object-cover"
      />
      {/* Gradient for caption legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

      <span
        className={`absolute left-1/2 font-heading font-semibold text-white whitespace-nowrap transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-5 -translate-x-1/2 rotate-0 text-lg"
            : "bottom-24 -translate-x-1/2 rotate-90 text-base"
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

  return (
    <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 overflow-x-auto">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => setActiveIndex(index)}
          priority={index === defaultActiveIndex}
        />
      ))}
    </div>
  );
}
