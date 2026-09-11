'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef, startTransition } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CurvedCarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean, originalIndex: number) => React.ReactNode;
  visibleCards?: number;
  radiusDepth?: number;
  verticalDip?: number;
  cardWidth?: number | string;
  cardHeight?: number | string;
  horizontalSpread?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number; // in seconds
}

export default function CurvedCarousel<T>({
  items,
  renderItem,
  visibleCards = 5,
  radiusDepth = 400,
  verticalDip = 30,
  cardWidth = 350,
  cardHeight = 450,
  horizontalSpread = 800,
  autoPlay = false,
  autoPlayInterval = 3,
}: CurvedCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Basic touch dragging
  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const width = el.getBoundingClientRect().width;
      if (width > 0) startTransition(() => setContainerWidth(width));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goToPrevious = useCallback(() => {
    if (totalItems <= 1) return;
    startTransition(() => setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems));
  }, [totalItems]);

  const goToNext = useCallback(() => {
    if (totalItems <= 1) return;
    startTransition(() => setCurrentIndex(prev => (prev + 1) % totalItems));
  }, [totalItems]);

  const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    touchStartX.current = clientX;
    isDragging.current = true;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const deltaX = clientX - touchStartX.current;
    
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) goToPrevious();
      else goToNext();
    }
    isDragging.current = false;
  }, [goToPrevious, goToNext]);

  useEffect(() => {
    if (!autoPlay || totalItems === 0) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }
    const timerId = setInterval(() => {
      startTransition(() => setCurrentIndex(prev => (prev + 1) % totalItems));
    }, autoPlayInterval * 1000);
    autoPlayTimerRef.current = timerId;
    return () => clearInterval(timerId);
  }, [autoPlay, autoPlayInterval, totalItems]);

  const getCardTransform = useCallback((position: number) => {
    const isMobile = containerWidth < 768;
    const activeVisibleCards = isMobile ? Math.min(3, visibleCards) : visibleCards;
    
    const normalizedPos = position / Math.max(activeVisibleCards, 1);
    const angle = normalizedPos * Math.PI * 0.5;
    
    // Spread adjustments based on screen width
    let currentSpread = horizontalSpread;
    if (containerWidth < 768) currentSpread = Math.max(500, Number(cardWidth) * 2.2);
    else currentSpread = Math.max(750, Number(cardWidth) * 2.1);
    
    const x = Math.sin(angle) * currentSpread;
    const y = Math.abs(position) * verticalDip;
    
    let responsiveRadiusDepth = radiusDepth;
    if (containerWidth < 768) responsiveRadiusDepth = radiusDepth * 1.5;

    const baseZ = -Math.abs(Math.cos(angle) - 1) * responsiveRadiusDepth;
    const depthMultiplier = Math.abs(position) * responsiveRadiusDepth * 0.5;
    
    // Scaling down side cards
    const scale = Math.max(0.4, 1 - Math.abs(position) * 0.18);
    const rotateY = angle * 45; // Turn cards inwards
    
    const z = baseZ - depthMultiplier;
    const opacity = Math.max(0.2, 1 - Math.abs(position) * 0.3);
    const zIndex = Math.round(10000 + z * 10);
    const blurAmount = Math.abs(position) * 2; // subtle depth of field
    
    return { x, y, z, scale, rotateY, opacity, zIndex, blurAmount };
  }, [containerWidth, visibleCards, horizontalSpread, verticalDip, radiusDepth, cardWidth]);

  const visibleItems = useMemo(() => {
    if (totalItems === 0) return [];
    const isMobile = containerWidth < 768;
    const activeVisibleCards = isMobile ? Math.min(3, visibleCards) : visibleCards;
    const maxVisible = Math.ceil(activeVisibleCards / 2);
    
    return items.map((item, index) => {
      let position = index - currentIndex;
      if (position > totalItems / 2) position -= totalItems;
      else if (position < -totalItems / 2) position += totalItems;
      
      if (Math.abs(position) > maxVisible) return null;
      return { item, index, position };
    }).filter(Boolean) as { item: T, index: number, position: number }[];
  }, [items, currentIndex, totalItems, visibleCards, containerWidth]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center touch-pan-y"
      style={{ perspective: 2500, perspectiveOrigin: '50% 50%' }}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {visibleItems.map(({ item, index, position }) => {
          const isCenter = index === currentIndex;
          const transform = getCardTransform(position);
          
          return (
            <motion.div
              key={index}
              onClick={() => {
                if (index !== currentIndex) startTransition(() => setCurrentIndex(index));
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: cardWidth,
                height: cardHeight,
                marginLeft: typeof cardWidth === 'number' ? -cardWidth / 2 : `calc(-${cardWidth} / 2)`,
                marginTop: typeof cardHeight === 'number' ? -cardHeight / 2 : `calc(-${cardHeight} / 2)`,
                transformStyle: 'preserve-3d',
                cursor: isCenter ? 'default' : 'pointer',
                zIndex: transform.zIndex,
                backfaceVisibility: 'visible'
              }}
              initial={{
                x: transform.x,
                y: transform.y,
                z: transform.z,
                scale: transform.scale,
                rotateY: transform.rotateY,
                opacity: transform.opacity
              }}
              animate={{
                x: transform.x,
                y: transform.y,
                z: transform.z,
                scale: transform.scale,
                rotateY: transform.rotateY,
                opacity: transform.opacity
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                mass: 0.8
              }}
            >
              {renderItem(item, isCenter, index)}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none flex items-center justify-between px-4 md:px-8 z-[10001]">
        <button 
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          className="pointer-events-auto w-12 h-12 bg-white hover:bg-[#1BA6C7] rounded-full flex items-center justify-center border border-slate-200 text-[#0a1b3d] hover:text-white hover:border-[#1BA6C7] shadow-lg transition-all duration-300"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="pointer-events-auto w-12 h-12 bg-white hover:bg-[#1BA6C7] rounded-full flex items-center justify-center border border-slate-200 text-[#0a1b3d] hover:text-white hover:border-[#1BA6C7] shadow-lg transition-all duration-300"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
