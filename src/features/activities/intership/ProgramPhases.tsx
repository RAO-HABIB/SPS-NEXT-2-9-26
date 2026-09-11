import React from 'react';
import Image from 'next/image';
import { phases } from "@/data/intership-data";

export default function ProgressivePhases() {
  return (
    <section id="phases" className="py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1BA6C7] font-black tracking-[0.3em] uppercase text-xs">
            Career Roadmap
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A1847] mt-3 mb-4">
            Progressive Phases of Internship
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our structured 4-stage progression takes you from fundamental learning to real-world software delivery and full-time professional career opportunities.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-200/70 hover:border-[#1BA6C7]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Landscape Image Container with guaranteed height */}
                <div
                  className="relative w-full overflow-hidden rounded-2xl mb-5 bg-slate-100"
                  style={{ height: '240px', width: '100%' }}
                >
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    width={700}
                    height={450}
                    priority={idx < 2}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute top-3 left-3 bg-[#083ea9] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md backdrop-blur-sm">
                    {phase.id}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    Stage {idx + 1} of 4
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#083ea9] transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  #{phase.title.replace(/[^a-zA-Z0-9]/g, '')}
                </span>
                <span className="text-xs font-bold text-[#083ea9] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}