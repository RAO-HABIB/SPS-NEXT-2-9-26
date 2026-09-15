import Link from "next/link";
import Image from "next/image";
import { PARTNERS, PARTNERS_INTRO } from "@/data/partners";

export default function Partners() {
  // Continuous scroll: 3x duplication ensures smooth seamless marquee loop
  const marqueeList = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="below-fold relative w-full overflow-hidden bg-[#03122F] py-16 lg:py-20">
      <Image
        src="/images/Hero/Hero8.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span className="h-px w-8 bg-[#0BB4D4]" />
            <span>{PARTNERS_INTRO.eyebrow}</span>
            <span className="h-px w-8 bg-[#0BB4D4]" />
          </div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
            {PARTNERS_INTRO.title}{" "}
            <span className="text-cyan-400">{PARTNERS_INTRO.highlight}</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-3">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#03122F] to-transparent lg:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#03122F] to-transparent lg:w-40" />

        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {marqueeList.map((partner, index) => (
            <Link
              key={`${partner.id}-${index}`}
              href={partner.href}
              className="group relative flex w-40 shrink-0 flex-col items-center justify-between rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0BB4D4]/20 hover:ring-[#0BB4D4]/60 sm:w-45"
            >
              <div className="relative mb-4 flex h-16 w-full items-center justify-center rounded-xl bg-slate-50 p-2 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>

              <h3 className="w-full truncate text-center text-sm font-normal text-slate-900 group-hover:text-[#0057B8]">
                {partner.name}
              </h3>

              {/* Interaction Indicator (Lift-and-glow effect) */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0BB4D4]/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}