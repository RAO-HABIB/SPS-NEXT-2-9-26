import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NEWS_ITEMS, NEWS_INTRO } from "@/data/news";
import type { NewsItem } from "@/data/news";

export default function NewsInsights() {
  const item1 = NEWS_ITEMS[0];
  const item2 = NEWS_ITEMS[1];
  const item3 = NEWS_ITEMS[2];

  return (
    <section className="below-fold relative w-full overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
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
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[400px] sm:min-h-[480px] lg:h-[500px]">
            <LargeCard item={item1} />
          </div>

          <div className="col-span-1 lg:col-span-1 min-h-[350px] lg:h-[500px]">
            <MiddleCard item={item2} />
          </div>

          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4 sm:gap-6 lg:gap-6 min-h-[400px] lg:h-[500px]">
            <div className="flex-1 min-h-[200px]">
              <SmallImageCard item={item3} />
            </div>
            <div className="flex-1 min-h-[160px]">
              <ExploreCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LargeCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" quality={75} />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <div className="self-start rounded-full bg-white px-3 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#031B3D]">
          {item.category}
        </div>
        
        <div>
          <h3 className="mb-6 text-2xl sm:text-[28px] font-bold leading-tight text-white drop-shadow-md">
            <Link href={item.href} className="focus-visible:outline-none before:absolute before:inset-0">
              {item.title}
            </Link>
          </h3>
          
          <Link
            href={item.href}
            className="group/btn relative z-10 inline-flex items-center gap-3 rounded-xl bg-[#0077b6] py-2.5 pl-5 pr-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#005f94] hover:shadow-lg"
          >
            Read More
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#0077b6] transition-transform duration-300 group-hover/btn:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function MiddleCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" quality={75} />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <div className="self-start rounded-full bg-white px-3 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#031B3D]">
          {item.category}
        </div>
        
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-bold leading-tight text-white drop-shadow-md">
            <Link href={item.href} className="focus-visible:outline-none before:absolute before:inset-0">
              {item.title}
            </Link>
          </h3>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#031B3D] transition-transform duration-300 group-hover:scale-110 shadow-lg">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </article>
  );
}

function SmallImageCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" quality={75} />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <div className="self-start rounded-full bg-white px-3 py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#031B3D]">
          {item.category}
        </div>
        
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-base sm:text-lg font-bold leading-tight text-white drop-shadow-md">
            <Link href={item.href} className="focus-visible:outline-none before:absolute before:inset-0">
              {item.title}
            </Link>
          </h3>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#031B3D] transition-transform duration-300 group-hover:scale-110 shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ExploreCard() {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#03122F] p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] shadow-xl">
      <Link href="/" className="focus-visible:outline-none before:absolute before:inset-0">
        <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">
          Explore SPS insights and company updates
        </h3>
      </Link>
      <div className="self-end flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#03122F] transition-transform duration-300 group-hover:scale-110 shadow-lg mt-4">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </article>
  );
}