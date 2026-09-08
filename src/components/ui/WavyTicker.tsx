"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  startTransition,
} from "react";
import { useAnimationFrame } from "framer-motion";

export interface WavyTickerProps {
  items: React.ReactNode[];
  interactionType?: "auto" | "scroll";
  speed?: number;
  scrollSpeed?: number;
  direction?: "left" | "right" | "up" | "down";
  slowdownOnHover?: number;
  waveStyle?: "straight" | "wavy";
  waveAmplitude?: number;
  waveFrequency?: number;
  itemSize?: number;
  gap?: number;
  padding?: number;
  verticalAlign?: "top" | "center" | "bottom";
  fadeEdges?: boolean;
  fadeDistance?: number;
  className?: string;
}

export default function WavyTicker({
  items = [],
  interactionType = "auto",
  speed = 40,
  scrollSpeed = 1,
  direction = "left",
  slowdownOnHover = 0.25,
  waveStyle = "wavy",
  waveAmplitude = 18,
  waveFrequency = 0.005,
  itemSize = 90,
  gap = 28,
  padding = 32,
  verticalAlign = "center",
  fadeEdges = true,
  fadeDistance = 15,
  className = "",
}: WavyTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const targetScrollOffset = useRef(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const isVertical = direction === "up" || direction === "down";

  // Track container dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Measure item widths after render
  useEffect(() => {
    if (itemRefs.current.length > 0 && items.length > 0) {
      const widths = itemRefs.current
        .slice(0, items.length)
        .map((ref) => (ref ? ref.offsetWidth || itemSize : itemSize));
      setItemWidths(widths);
    }
  }, [items, itemSize]);

  // Calculate dynamic height based on wave effect
  const calculatedHeight = useMemo(() => {
    const waveHeight = waveStyle === "wavy" ? waveAmplitude * 2 : 0;
    const baseHeight = itemSize + waveHeight + padding * 2;
    return Math.max(5, baseHeight);
  }, [itemSize, waveAmplitude, padding, waveStyle]);

  // Track scroll position
  useEffect(() => {
    if (interactionType !== "scroll") return;
    const handleScroll = () => {
      targetScrollOffset.current = window.scrollY * scrollSpeed;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [interactionType, scrollSpeed]);

  // Animation loop with framer-motion useAnimationFrame
  useAnimationFrame((_, delta) => {
    if (interactionType === "auto") {
      const effectiveSpeed = isHovered ? speed * slowdownOnHover : speed;
      startTransition(() => {
        setOffset((prev) => prev + (effectiveSpeed * delta) / 1000);
      });
    } else {
      startTransition(() => {
        setScrollOffset((prev) => {
          const diff = targetScrollOffset.current - prev;
          return prev + diff * 0.1;
        });
      });
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (interactionType === "auto") {
      startTransition(() => setIsHovered(true));
    }
  }, [interactionType]);

  const handleMouseLeave = useCallback(() => {
    if (interactionType === "auto") {
      startTransition(() => setIsHovered(false));
    }
  }, [interactionType]);

  if (!items || items.length === 0) {
    return null;
  }

  const widthsToUse =
    itemWidths.length === items.length
      ? itemWidths
      : items.map(() => itemSize * 1.5);
  const totalWidth = widthsToUse.reduce((sum, width) => sum + width + gap, 0);
  const totalHeight = items.length * (itemSize + gap);
  const viewportWidth =
    containerWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
  const viewportHeight =
    containerHeight || (typeof window !== "undefined" ? window.innerHeight : 800);

  // Calculate repeats needed for seamless loop
  const repeats = isVertical
    ? Math.max(3, Math.ceil(viewportHeight / (totalHeight || 1)) + 2)
    : Math.max(3, Math.ceil(viewportWidth / (totalWidth || 1)) + 2);

  const allItems = Array.from({ length: repeats }, () => items).flat();
  const allWidths = Array.from({ length: repeats }, () => widthsToUse).flat();

  const currentOffset = interactionType === "scroll" ? scrollOffset : offset;
  const loopLength = isVertical ? totalHeight : totalWidth;

  let finalOffset = 0;
  if (direction === "left") {
    const wrappedOffset = ((currentOffset % loopLength) + loopLength) % loopLength;
    finalOffset = -wrappedOffset;
  } else if (direction === "right") {
    const wrappedOffset = ((currentOffset % loopLength) + loopLength) % loopLength;
    finalOffset = wrappedOffset - loopLength;
  } else if (direction === "up") {
    const wrappedOffset = ((currentOffset % loopLength) + loopLength) % loopLength;
    finalOffset = -wrappedOffset;
  } else {
    const wrappedOffset = ((currentOffset % loopLength) + loopLength) % loopLength;
    finalOffset = wrappedOffset - loopLength;
  }

  const verticalStyles: React.CSSProperties =
    verticalAlign === "top"
      ? { top: `${padding}px`, bottom: "auto" }
      : verticalAlign === "bottom"
      ? { top: "auto", bottom: `${padding}px` }
      : { top: "50%", bottom: "auto", transform: "translateY(-50%)" };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${className}`}
      style={{
        height: isVertical ? "100%" : Math.max(5, calculatedHeight),
        minHeight: 5,
        display: "flex",
        alignItems:
          verticalAlign === "top"
            ? "flex-start"
            : verticalAlign === "bottom"
            ? "flex-end"
            : "center",
        ...(fadeEdges &&
          !isVertical && {
            maskImage: `linear-gradient(to right, transparent 0%, black ${fadeDistance}%, black ${
              100 - fadeDistance
            }%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${fadeDistance}%, black ${
              100 - fadeDistance
            }%, transparent 100%)`,
          }),
        ...(fadeEdges &&
          isVertical && {
            maskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeDistance}%, black ${
              100 - fadeDistance
            }%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeDistance}%, black ${
              100 - fadeDistance
            }%, transparent 100%)`,
          }),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isVertical ? "column" : "row",
          gap: `${gap}px`,
          position: "absolute",
          left: isVertical ? 0 : undefined,
          top: isVertical ? 0 : undefined,
          width: isVertical ? "100%" : undefined,
          ...(!isVertical && verticalStyles),
          transform: isVertical
            ? `translateY(${finalOffset}px)`
            : `translateX(${finalOffset}px) ${
                verticalAlign === "center" ? "translateY(-50%)" : ""
              }`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {allItems.map((item, index) => {
          let position = 0;
          for (let i = 0; i < index; i++) {
            position += (isVertical ? itemSize : allWidths[i]) + gap;
          }
          const itemWidth = allWidths[index] || itemSize;
          const waveOffset =
            waveStyle === "wavy"
              ? Math.sin((position + currentOffset) * waveFrequency) *
                waveAmplitude
              : 0;
          const isOriginalItem = index < items.length;

          return (
            <div
              key={`wavy-item-${index}`}
              ref={
                isOriginalItem
                  ? (el) => {
                      itemRefs.current[index] = el;
                    }
                  : undefined
              }
              style={{
                minWidth: isVertical ? "100%" : itemWidth,
                width: isVertical ? "100%" : undefined,
                height: itemSize,
                flexShrink: 0,
                transform: isVertical
                  ? `translateX(${waveOffset}px)`
                  : `translateY(${waveOffset}px)`,
                willChange: "transform",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
