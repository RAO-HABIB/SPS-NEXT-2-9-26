"use client";

import { motion } from "framer-motion";

export interface FloatingPillItem {
  id: string;
  label: string;
}

export interface FloatingPillNavigationProps {
  items: FloatingPillItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function FloatingPillNavigation({
  items,
  activeId,
  onChange,
  className = "",
}: FloatingPillNavigationProps) {
  return (
    <div className="w-full flex justify-center overflow-hidden px-2 sm:px-0">
      <nav
        className={`inline-flex items-center max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#E8E8ED] p-1 sm:p-1.5 md:p-1.5 rounded-full relative select-none shadow-xs border border-slate-300/40 ${className}`}
        role="tablist"
        aria-label="Filter solutions"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.id)}
              className={`relative shrink-0 whitespace-nowrap px-3.5 py-1.5 sm:px-4.5 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-2.5 text-xs sm:text-sm md:text-sm lg:text-[15px] font-medium transition-colors duration-300 cursor-pointer rounded-full z-10 outline-none focus-visible:ring-2 focus-visible:ring-[#00a7e1] ${
                isActive
                  ? "text-white font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFloatingPillBackground"
                  className="absolute inset-0 bg-[#031B3D] rounded-full z-[-1] shadow-sm"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 45,
                    mass: 0.8,
                  }}
                />
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
