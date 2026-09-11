import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  subtitle?: string;
  badgeText?: string;
}

export default function WebinarHero({
  title,
  breadcrumb,
  subtitle,
  badgeText,
}: Props) {
  return (
    <section
      aria-labelledby="webinar-hero-title"
      className="relative w-full overflow-hidden bg-[#03122F] text-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60"
    >
      {/* Background Image with Ambient Glow & Gradient Overlays */}
      <Image
        src="/images/Hero/Hero8.webp"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#03122F]/90 via-[#03122F]/80 to-[#03122F] z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1BA6C7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Responsive Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-slate-400">
            {breadcrumb.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="uppercase tracking-wider hover:text-[#1BA6C7] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="uppercase tracking-wider text-cyan-400 font-semibold"
                  >
                    {item.label}
                  </span>
                )}
                {idx < breadcrumb.length - 1 && (
                  <ChevronRight
                    aria-hidden="true"
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-600 shrink-0"
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Header with SPS Signature Cyan Accent Bar */}
        <div className="border-l-4 border-[#1BA6C7] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
          {badgeText && (
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-[#1BA6C7]/15 text-[#1BA6C7] border border-[#1BA6C7]/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1BA6C7] animate-pulse" />
              {badgeText}
            </span>
          )}

          <h1
            id="webinar-hero-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}