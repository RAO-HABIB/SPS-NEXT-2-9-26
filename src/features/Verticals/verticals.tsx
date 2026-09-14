import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { VERTICALS, VERTICALS_INTRO, type Vertical } from "@/data/verticals";

export default function Verticals() {
  return (
    <section className="below-fold relative w-full overflow-hidden bg-blue-50 px-6 py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0057B8]">
            {VERTICALS_INTRO.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
            {VERTICALS_INTRO.title}
            <br className="hidden sm:block" /> {VERTICALS_INTRO.highlight}
          </h2>
        </div>

        {/* ============ Cards Grid ============ */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VERTICALS.map((v) => (
            <VerticalCard key={v.id} vertical={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== Vertical Card ====================== */
function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* ===== BACKGROUND IMAGE (absolute, behind content) ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={vertical.image}
          alt=""
          aria-hidden="true"
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="scale-110 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-[#003e85]/95 via-[#0057B8]/85 to-[#0BB4D4]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      </div>

      {/* ===== CONTENT (above background) ===== */}
      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white group-focus-within:text-white">
          {vertical.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/90 group-focus-within:text-white/90">
          {vertical.description}
        </p>

        {/* Read More */}
        <Link
          href={vertical.href}
          className="mt-2 inline-block w-fit rounded text-sm font-semibold text-[#0057B8] underline-offset-4 transition-colors duration-500 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057B8] group-hover:text-cyan-200 group-focus-within:text-cyan-200"
        >
          Read More about {vertical.title}
          <span className="sr-only"> vertical</span>
        </Link>

        {/* Items list */}
        <ul className="mt-5 min-h-55 flex-1 space-y-2.5">
          {vertical.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-700 transition-colors duration-500 group-hover:text-white/95 group-focus-within:text-white/95"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 w-4 h-4 shrink-0 text-[#0057B8] transition-colors duration-500 group-hover:text-cyan-200 group-focus-within:text-cyan-200"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}