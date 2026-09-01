"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { SERVICE_TABS } from "../../lib/services";

export default function Services() {
  const [activeTabId, setActiveTabId] = useState(SERVICE_TABS[0].id);
  const activeTab = SERVICE_TABS.find((t) => t.id === activeTabId)!;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(activeTab.slides.length / 3);

  useEffect(() => {
    setCurrentPage(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTabId]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const itemElement = scrollRef.current.children[0] as HTMLElement;
        const itemWidth = itemElement?.offsetWidth || 312;
        const itemsToScroll = Math.floor(clientWidth / itemWidth) || 1;
        const scrollAmount = itemWidth * itemsToScroll;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [isHovered, activeTabId]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const itemElement = scrollRef.current.children[0] as HTMLElement;
      const itemWidth = itemElement?.offsetWidth || 312;
      const page = Math.round(scrollRef.current.scrollLeft / itemWidth);
      setCurrentPage(Math.floor(page / 3));
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const itemElement = scrollRef.current.children[0] as HTMLElement;
      const itemWidth = itemElement?.offsetWidth || 312;
      scrollRef.current.scrollBy({ left: -itemWidth * 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const itemElement = scrollRef.current.children[0] as HTMLElement;
      const itemWidth = itemElement?.offsetWidth || 312;
      scrollRef.current.scrollBy({ left: itemWidth * 3, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="sr-only">Our Services</h2>
        <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SERVICE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 sm:gap-2.5 rounded-xl border px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-[#00a7e1] text-white border-[#00a7e1] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#00a7e1] hover:text-[#00a7e1]"
                  }`}
              >
                <Icon
                  icon={tab.icon}
                  width={18}
                  className={`${isActive ? "text-white" : "text-slate-600"} w-[14px] sm:w-[16px] md:w-[18px]`}
                />
                {tab.title}
              </button>
            );
          })}
        </div>

        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="mx-auto max-w-4xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-slate-600">
            {activeTab.description}
          </p>
        </div>

        <div
          className="group/slider relative mx-auto w-full pb-8 sm:pb-10 pt-2 sm:pt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="carousel carousel-center scroll-smooth w-full max-w-[936px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {activeTab.slides.map((slide, index) => (
              <div key={`${slide.id}-${index}`} className="carousel-item px-2 sm:px-4 py-6 sm:py-8">
                <div
                  className="group relative flex h-[340px] sm:h-[360px] w-[260px] sm:w-[280px] flex-col justify-between rounded-2xl border border-slate-200/70 bg-[#f1f6f8] p-6 sm:p-8 text-left shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-[#00a7e1] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                >
                  <div>
                    <div className="mb-3 sm:mb-4 text-[#00a7e1] transition-colors duration-300 group-hover:text-white">
                      <Icon icon={slide.icon} className="text-3xl sm:text-4xl" />
                    </div>

                    <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg lg:text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-white line-clamp-2">
                      {slide.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed sm:leading-loose text-slate-600 transition-colors duration-300 group-hover:text-white/90 line-clamp-4">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t sm:border-t-0 border-transparent">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#00a7e1] transition-colors duration-300 group-hover:bg-white" />
                      <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">
                        Read More
                      </span>
                    </div>

                    <Link
                      href={slide.href}
                      aria-label={`Read more about ${slide.title}`}
                      className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#00a7e1] shadow-sm opacity-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    >
                      <Icon icon="lucide:arrow-up-right" className="text-lg sm:text-xl font-bold" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mx-auto flex w-full max-w-[936px] justify-center pt-2">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentPage === i ? "w-6 sm:w-8 bg-[#00a7e1]" : "w-2 sm:w-3 bg-slate-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}