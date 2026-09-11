import Image from "next/image";

import { aboutData } from "@/data/about-data";
import ImageAccordion from "@/components/ui/ImageAccordion";

export default function Awards() {
  const { awards } = aboutData;

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-[#0a1b3d]"
      aria-labelledby="awards-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/Hero/hero8.webp"
          alt="SPS Company Achievements Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b3d]/60 via-transparent to-[#0a1b3d]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1BA6C7]">
            Recognition
          </span>
          <h2
            id="awards-heading"
            className="mt-4 text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Achievements & Awards
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Over the years, SPS has been recognized for innovation, technical excellence, and successful collaboration with leading technology partners.
          </p>
        </header>

        {/* Image Accordion */}
        <div className="w-full">
          <ImageAccordion items={awards} />
        </div>
      </div>
    </section>
  );
}