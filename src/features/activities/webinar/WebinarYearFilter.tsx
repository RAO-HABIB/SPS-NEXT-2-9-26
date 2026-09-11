"use client";

import { useRef, KeyboardEvent } from "react";

interface Props {
  years: number[];
  activeYear: number;
  onYearChange: (year: number) => void;
}

export default function WebinarYearFilter({
  years,
  activeYear,
  onYearChange,
}: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    let newIdx = idx;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        newIdx = (idx + 1) % years.length;
        break;
      case "ArrowLeft":
        e.preventDefault();
        newIdx = (idx - 1 + years.length) % years.length;
        break;
      case "Home":
        e.preventDefault();
        newIdx = 0;
        break;
      case "End":
        e.preventDefault();
        newIdx = years.length - 1;
        break;
      default:
        return;
    }
    onYearChange(years[newIdx]);
    tabRefs.current[newIdx]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Filter webinars by year"
      className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {years.map((year, idx) => {
        const isActive = activeYear === year;
        return (
          <button
            key={year}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            type="button"
            role="tab"
            id={`year-tab-${year}`}
            aria-selected={isActive}
            aria-controls={`year-panel-${year}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onYearChange(year)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`min-h-14 rounded-lg px-6 py-4 text-lg font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 sm:text-xl ${
              isActive
                ? "bg-[#0a1b3d] text-white shadow-xl"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}