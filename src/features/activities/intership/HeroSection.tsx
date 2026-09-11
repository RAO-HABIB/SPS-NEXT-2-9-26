import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#03122F] text-white overflow-hidden">
      {/* Background Image with Ambient Gradient */}
      <Image
        src="/images/Hero/Hero8.webp"
        alt="SPS Internship Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03122F] via-[#03122F]/80 to-transparent" />

      {/* Content properly aligned with max-w-7xl and navbar clearance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-3xl md:max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-[#1BA6C7]/15 text-[#1BA6C7] border border-[#1BA6C7]/30 backdrop-blur-md mb-4 sm:mb-5 md:mb-6">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>SPS Internship Program 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6 text-white">
            Start your professional journey by joining the{" "}
            <span className="text-[#1BA6C7]">SPS Internship Program</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 sm:mb-8 leading-relaxed max-w-xl md:max-w-2xl">
            Join our hands-on structured program, open to graduates and undergraduates. Discover your career path, build valuable skills, and gain practical real-world experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/Activities/Internship/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#1BA6C7] hover:bg-[#158ca8] text-white font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg shadow-[#1BA6C7]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#phases"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Explore Phases</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}