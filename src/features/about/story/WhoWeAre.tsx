import Image from "next/image";
import { aboutData } from "@/data/about-data";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeAre() {
  const { whoWeAre } = aboutData;

  return (
    <section className="relative overflow-hidden bg-[#0a1b3d] py-20 text-white lg:py-28 font-sans antialiased">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero/Hero8.webp"
          alt="Abstract Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 px-6 lg:px-8 z-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1BA6C7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1BA6C7] border border-[#1BA6C7]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1BA6C7] animate-pulse" />
            About SPS
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {whoWeAre.title}
          </h2>

          <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-slate-300 text-justify">
            {whoWeAre.description
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index} className="opacity-95">
                  {paragraph}
                </p>
              ))}
          </div>

          <div className="mt-10">
            <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-[#1BA6C7] to-[#128ba7] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#1BA6C7]/20 transition-all duration-300 hover:brightness-110 active:scale-95 group">
              <span>Learn More</span>
              <ArrowUpRight size={14} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1BA6C7]/10 blur-2xl rounded-full transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

          <Image
            src={whoWeAre.image}
            alt={whoWeAre.title}
            width={900}
            height={650}
            priority
            className="h-auto w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}