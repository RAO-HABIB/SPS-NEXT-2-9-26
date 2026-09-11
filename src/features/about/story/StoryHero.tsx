import Image from "next/image";
import Link from "next/link";
import { Icon as IconifyIcon } from "@iconify-icon/react";

export default function StoryHero() {
  return (
    <section className="relative w-full bg-[#031B3D]">
      <Image
        src="/images/Hero/Hero8.webp"
        alt="Our Story Background"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-60 mix-blend-screen"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40 relative z-10 text-center flex flex-col items-center justify-center min-h-[400px] sm:min-h-[450px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
          Our Story
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover the journey, mission, and people behind Software Productivity Strategists.
        </p>
        <div className="flex items-center justify-center gap-3 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-[#00a7e1] transition-colors">Home</Link>
          <IconifyIcon icon="lucide:chevrons-right" width={16} className="text-slate-500" />
          <span className="text-[#00a7e1]">Our Story</span>
        </div>
      </div>
    </section>
  );
}
