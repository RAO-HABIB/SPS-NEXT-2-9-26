"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { NEWS_ITEMS, NEWS_INTRO } from "../../lib/news";
import type { NewsItem } from "../../lib/news";

export default function NewsInsights() {
  const item1 = NEWS_ITEMS[0];
  const item2 = NEWS_ITEMS[1];
  const item3 = NEWS_ITEMS[2];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00a7e1]/5 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#0057B8]/5 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-2 sm:mb-3 block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0057B8]">
              {NEWS_INTRO.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-[#031B3D] leading-tight lg:leading-[1.1]">
              Stay Updated With Our Latest News & Insights
            </h2>
          </div>
          <Link
            href={NEWS_INTRO.cta.href}
            className="group flex shrink-0 items-center gap-2 sm:gap-3 rounded-xl bg-[#0057B8] py-2 sm:py-2.5 pl-4 sm:pl-5 pr-2 sm:pr-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003e85] hover:shadow-lg"
          >
            {NEWS_INTRO.cta.label}
            <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white text-[#0057B8] transition-transform duration-300 group-hover:translate-x-0.5">
              <Icon icon="lucide:arrow-right" width={16} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-7 lg:row-span-2 min-h-[400px] sm:min-h-[480px] lg:h-full">
            <FeaturedCard item={item1} />
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-5 lg:row-span-1">
            <SmallCard item={item2} />
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-5 lg:row-span-1">
            <SmallCard item={item3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <article className="group relative h-full w-full">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/60 bg-white p-2 sm:p-3 shadow-sm transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-2xl">
        <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] w-full shrink-0 overflow-hidden rounded-xl sm:rounded-[1.5rem] bg-slate-100">
          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" quality={75} />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-6 lg:p-8">
          <div>
            <span className="inline-block rounded-full bg-[#0057B8]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#0057B8]">
              {item.category}
            </span>
            <h3 className="mt-3 sm:mt-5 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight text-[#031B3D] transition-colors duration-300 group-hover:text-[#0057B8] line-clamp-3">
              <Link href={item.href} className="focus-visible:outline-none">
                <span className="absolute inset-0 z-0" aria-hidden="true" />
                {item.title}
              </Link>
            </h3>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-600">
              <span suppressHydrationWarning>{formattedDate}</span>
              {item.readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{item.readTime}</span>
                </>
              )}
            </div>
            <Link
              href={item.href}
              aria-label={`Read more about ${item.title}`}
              title={`Read more about ${item.title}`}
              className="group/btn relative z-10 flex shrink-0 items-center gap-2 sm:gap-3 rounded-xl bg-[#0057B8] py-1.5 sm:py-2 pl-4 sm:pl-5 pr-1.5 sm:pr-2 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#003e85] hover:shadow-lg w-full sm:w-auto justify-between sm:justify-start"
            >
              Read More
              <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white text-[#0057B8] transition-transform duration-300 group-hover/btn:translate-x-0.5">
                <Icon icon="lucide:arrow-right" width={14} className="sm:w-[16px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SmallCard({ item }: { item: NewsItem }) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <article className="group relative h-full w-full">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200/60 bg-white p-2 sm:p-3 shadow-sm transition-all duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-2xl">
        <div className="relative h-[160px] sm:h-[200px] md:h-[220px] lg:h-[150px] xl:h-[180px] w-full shrink-0 overflow-hidden rounded-xl sm:rounded-[1.5rem] bg-slate-100">
          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 40vw" quality={75} />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 lg:px-6 lg:py-5">
          <div>
            <span className="inline-block rounded-full bg-[#0057B8]/10 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0057B8]">
              {item.category}
            </span>
            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg lg:text-[19px] font-bold leading-snug text-[#031B3D] transition-colors duration-300 group-hover:text-[#0057B8] line-clamp-2">
              <Link href={item.href} className="focus-visible:outline-none">
                <span className="absolute inset-0 z-0" aria-hidden="true" />
                {item.title}
              </Link>
            </h3>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-600" suppressHydrationWarning>{formattedDate}</span>
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#0057B8]/10 text-[#0057B8] transition-colors duration-300 group-hover:bg-[#0057B8] group-hover:text-white">
              <Icon icon="lucide:arrow-right" width={14} className="sm:w-[16px] transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}