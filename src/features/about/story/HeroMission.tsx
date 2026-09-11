import { aboutData } from "@/data/about-data";
import { Target, Building2, ArrowUpRight } from "lucide-react";

export default function HeroMission() {
  const { missionVision, aboutCompany } = aboutData;

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 relative overflow-hidden font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-10 shadow-xs transition-all duration-500 ease-in-out group hover:bg-[#0a1b3d] hover:border-[#122852] hover:shadow-xl hover:shadow-slate-900/20 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 rounded-xl border border-slate-200 text-[#0a1b3d] group-hover:bg-[#1BA6C7]/10 group-hover:border-[#1BA6C7]/20 group-hover:text-[#1BA6C7] transition-all duration-500">
                    <Target size={22} className="stroke-2" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#1BA6C7] transition-colors duration-500">
                    Our Focus
                  </span>
                </div>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#1BA6C7] transition-colors duration-500" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black tracking-tight text-[#0a1b3d] group-hover:text-white transition-colors duration-500 mb-6">
                {missionVision.title}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 group-hover:text-slate-200 text-sm md:text-base leading-relaxed text-justify transition-colors duration-500">
                {missionVision.description
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>

          {/* Card 2: About Company */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-10 shadow-xs transition-all duration-500 ease-in-out group hover:bg-[#0a1b3d] hover:border-[#122852] hover:shadow-xl hover:shadow-slate-900/20 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 rounded-xl border border-slate-200 text-[#0a1b3d] group-hover:bg-[#1BA6C7]/10 group-hover:border-[#1BA6C7]/20 group-hover:text-[#1BA6C7] transition-all duration-500">
                    <Building2 size={22} className="stroke-2" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#1BA6C7] transition-colors duration-500">
                    Corporate Identity
                  </span>
                </div>
                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#1BA6C7] transition-colors duration-500" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black tracking-tight text-[#0a1b3d] group-hover:text-white transition-colors duration-500 mb-6">
                {aboutCompany.title}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 group-hover:text-slate-200 text-sm md:text-base leading-relaxed text-justify transition-colors duration-500">
                {aboutCompany.description
                  .split("\n")
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}