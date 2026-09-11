'use client';

import Image from "next/image";
import { aboutData } from "@/data/about-data";
import {
  Calendar,
  Rocket,
  Award,
  Globe,
  Users,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";


const CurvedCarousel = dynamic(() => import("@/components/ui/CurvedCarousel"), {
  ssr: false,
});


export default function Timeline() {
  const { timeline } = aboutData;
  const timelineIcons = [Rocket, Award, Globe, Users, TrendingUp, Cpu, ShieldCheck, Zap];

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 font-sans antialiased relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1BA6C7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1BA6C7] border border-[#1BA6C7]/20">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-[#0a1b3d]">
              Highlights of the Past Two Decades
            </h2>
          </div>
        </div>
      </div>

      <div className="relative w-full z-10 mt-16" style={{ height: 700, minHeight: 700 }}>
        <CurvedCarousel
          items={timeline}
          cardWidth={350}
          cardHeight={520}
          visibleCards={5}
          radiusDepth={450}
          horizontalSpread={650}
          renderItem={(rawItem, isActive, originalIndex) => {
            const item = rawItem as (typeof timeline)[number];
            const IconComponent = timelineIcons[originalIndex % timelineIcons.length];


            return (
              <div className="w-full h-full relative group">
                <div className={`w-full h-full bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-between ${isActive ? 'border-[#1BA6C7] shadow-xl shadow-[#1BA6C7]/20 scale-100' : 'border-slate-200/60 hover:bg-[#0a1b3d] hover:border-[#122852] hover:shadow-xl hover:shadow-slate-900/30'}`}>

                  <div>
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover"
                      />
                      <div className={`absolute top-4 right-4 z-10 p-2 backdrop-blur-xs rounded-xl border transition-all duration-500 shadow-sm ${isActive ? 'bg-[#1BA6C7] text-white border-white/20' : 'bg-white/90 text-[#0a1b3d] border-white/20 group-hover:bg-[#1BA6C7] group-hover:text-white'}`}>
                        <IconComponent size={18} className="stroke-[2.5]" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className={`text-lg font-black transition-colors duration-500 tracking-tight line-clamp-2 ${isActive ? 'text-[#0a1b3d]' : 'text-[#0a1b3d] group-hover:text-white'}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-3 text-sm leading-relaxed text-justify transition-colors duration-500 line-clamp-4 ${isActive ? 'text-slate-600' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className={`pt-4 border-t transition-colors duration-500 flex justify-between items-center text-xs ${isActive ? 'border-slate-200' : 'border-slate-100 group-hover:border-slate-800'}`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1BA6C7]" />
                        <span className={`font-bold transition-colors duration-500 ${isActive ? 'text-slate-700' : 'text-slate-700 group-hover:text-white'}`}>
                          Milestone Achieve
                        </span>
                      </div>
                      <div className={`flex items-center gap-1 font-black px-2.5 py-1 rounded-lg border transition-colors duration-500 ${isActive ? 'text-white bg-[#1BA6C7] border-[#1BA6C7]' : 'text-[#1BA6C7] bg-[#1BA6C7]/5 group-hover:bg-[#1BA6C7]/10 border-[#1BA6C7]/10'}`}>
                        <Calendar size={12} className="stroke-[2.5]" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          }}
        />
      </div>
    </section>
  );
}