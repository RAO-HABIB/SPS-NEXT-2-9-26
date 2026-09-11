"use client";

import { useState } from "react";
import { Webinar } from "@/data/webinars-data";
import WebinarYearFilter from "./WebinarYearFilter";
import WebinarCard from "./WebinarCard";

interface Props {
  eyebrow: string;
  heading: string;
  subheading: string;
  years: number[];
  webinars: Webinar[];
  emptyMessage?: string;
}

export default function WebinarGrid({
  eyebrow,
  heading,
  subheading,
  years,
  webinars,
  emptyMessage = "No webinars available.",
}: Props) {
  const [activeYear, setActiveYear] = useState<number>(
    years[0] || new Date().getFullYear()
  );

  const filteredWebinars = webinars.filter((w) => w.year === activeYear);

  return (
    <section
      aria-labelledby="webinars-heading"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center md:mb-12">
          <p className="mb-2 text-sm font-semibold text-gray-700 sm:text-base">
            {eyebrow}
          </p>
          <h2
            id="webinars-heading"
            className="mb-3 text-2xl font-bold text-[#0a1b3d] sm:text-3xl md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 sm:text-base">
            {subheading}
          </p>
        </header>

        {years.length > 0 && (
          <WebinarYearFilter
            years={years}
            activeYear={activeYear}
            onYearChange={setActiveYear}
          />
        )}

        <div
          role="tabpanel"
          id={`year-panel-${activeYear}`}
          aria-labelledby={`year-tab-${activeYear}`}
          tabIndex={0}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
        >
          {filteredWebinars.length > 0 ? (
            // ✅ FIXED: Flex with justify-center for auto-centering
            <div className="flex flex-wrap justify-center gap-6">
              {filteredWebinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
                >
                  <WebinarCard webinar={webinar} />
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[#0a1b3d]">
                {emptyMessage}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Check back soon for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}