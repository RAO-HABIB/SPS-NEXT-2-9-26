"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { STARTUPS, STARTUPS_INTRO } from "../../lib/startups";

export default function Startups() {
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden bg-[#03122F] px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4FC3F7 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 sm:h-96 w-[500px] sm:w-[700px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {STARTUPS_INTRO.eyebrow}
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg lg:text-xl font-medium text-white/90">
            {STARTUPS_INTRO.title}
          </p>
          <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-xs sm:text-sm lg:text-base leading-relaxed text-white/90">
            {STARTUPS_INTRO.description}
          </p>
        </div>
      </div>

      <div className="relative bg-[#EAF4FB] px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STARTUPS.map((s) => (
            <StartupCard key={s.id} startup={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StartupCard({ startup }: { startup: (typeof STARTUPS)[number] }) {
  return (
    <article className="group relative flex h-full min-h-[300px] sm:min-h-[360px] cursor-pointer flex-col justify-between rounded-2xl border border-slate-200/70 bg-[#f1f6f8] p-6 sm:p-8 text-left shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-[#00a7e1] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]">

      <div>
        <div className="mb-3 sm:mb-4 relative h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={startup.image}
            alt={`${startup.name} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 48px, 56px"
          />
        </div>

        <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
          {startup.name}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
          {startup.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 mt-auto">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#00a7e1] transition-colors duration-300 group-hover:bg-white" />
          <span className="text-[11px] sm:text-xs font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">
            Read More
          </span>
        </div>

        <Link
          href={startup.href}
          aria-label={`Open ${startup.name}`}
          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#00a7e1] shadow-sm opacity-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <Icon icon="lucide:arrow-up-right" className="text-lg sm:text-xl font-bold" />
        </Link>
      </div>
    </article>
  );
}