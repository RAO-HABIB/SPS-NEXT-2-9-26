import Image from 'next/image';
import React from 'react';

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-[#1BA6C7] font-black tracking-[0.3em] uppercase text-xs">The Program</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A1847] mt-4">Overview</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image with Decorative Frame */}
          <div className="relative group w-full" style={{ minHeight: '460px' }}>
            <div className="absolute -inset-4 bg-[#1BA6C7]/10 rounded-3xl rotate-3 transition-transform group-hover:rotate-6 pointer-events-none" />
            <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl z-10" style={{ height: '460px', width: '100%' }}>
              <Image
                src="/images/activities/overview.webp"
                alt="Overview"
                width={800}
                height={550}
                priority
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              The SPS Internship Program offers an incredible opportunity to jump-start your career.
              We provide a structured environment to apply your academic knowledge to real-world projects,
              working closely with experienced professionals who mentor you throughout your journey.
            </p>

            <div className="grid gap-4">
              {[
                { title: "Professional Development", desc: "Comprehensive training and skill building." },
                { title: "Financial Benefit", desc: "Competitive stipends and performance bonuses." },
                { title: "Real Responsibility", desc: "Work on impactful business projects." },
                { title: "Mentorship", desc: "1-on-1 guidance from industry experts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1BA6C7]/30 transition-all group">
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#1BA6C7] flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                  </div>
                  <div>
                    <strong className="text-[#0A1847] font-bold">{item.title}</strong>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}