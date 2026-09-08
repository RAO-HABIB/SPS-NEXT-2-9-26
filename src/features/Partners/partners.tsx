// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Icon } from "@iconify-icon/react";
// import { PARTNERS, PARTNERS_INTRO } from "@/lib/partners";

// export default function Partners() {
//   const [activeId, setActiveId] = useState(PARTNERS[0]?.id || "");

//   const active = PARTNERS.find((p) => p.id === activeId) || PARTNERS[0];

//   return (
//     <section 
//       className="relative w-full bg-[#03122F] px-6 py-20 lg:px-8 lg:py-28"
//       aria-labelledby="partners-heading"
//     >
//       <div className="relative mx-auto max-w-7xl">

//         {/* ============ HEADING SECTION ============ */}
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <div className="mb-4 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-300">
//             <span className="h-px w-8 bg-slate-500" aria-hidden="true" />
//             <span>{PARTNERS_INTRO.eyebrow}</span>
//             <span className="h-px w-8 bg-slate-500" aria-hidden="true" />
//           </div>
//           <h2 id="partners-heading" className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
//             {PARTNERS_INTRO.title}{" "}
//             <span className="text-[#0BB4D4]">{PARTNERS_INTRO.highlight}</span>
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
//             {PARTNERS_INTRO.description}
//           </p>
//         </div>

//         {/* ============ INTERACTIVE SPLIT LAYOUT ============ */}
//         <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

//           {/* LEFT COLUMN: Clean Logo Grid (All Partners Visible at Once) */}
//           <div className="lg:col-span-5">
//             <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
//               Select or hover a partner:
//             </p>
//             <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
//               {PARTNERS.map((partner) => {
//                 const isActive = partner.id === active.id;
//                 return (
//                   <button
//                     key={partner.id}
//                     onClick={() => setActiveId(partner.id)}
//                     onMouseEnter={() => setActiveId(partner.id)}
//                     className={`group relative flex h-24 w-full items-center justify-center rounded-2xl p-4 transition-all duration-300 cursor-pointer ${
//                       isActive
//                         ? "bg-white ring-2 ring-[#0BB4D4] shadow-lg shadow-[#0BB4D4]/20 scale-[1.02]"
//                         : "bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/30"
//                     }`}
//                     aria-pressed={isActive}
//                   >
//                     <div className={`relative h-12 w-full transition-all duration-300 ${isActive ? "" : "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}>
//                       <Image
//                         src={partner.logo}
//                         alt={`${partner.name} logo`}
//                         fill
//                         className="object-contain"
//                         sizes="120px"
//                       />
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Active Partner Spotlight Card */}
//           <div className="lg:col-span-7">
//             <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-100 lg:p-10">

//               {/* Top Accent Line */}
//               <div className="absolute top-0 left-0 h-1.5 w-full bg-linear-to-r from-[#0057B8] to-[#0BB4D4]" />

//               {/* SEO Content for All Partners */}
//               <div className="sr-only">
//                 {PARTNERS.map((p) => (
//                   <article key={`seo-${p.id}`}>
//                     <h3>{p.name} - {p.category}</h3>
//                     <p>{p.tagline}</p>
//                     <p>{p.description}</p>
//                     <a href={p.href}>Visit {p.name}</a>
//                   </article>
//                 ))}
//               </div>

//               {/* Active Content */}
//               <div key={active.id} className="animate-in fade-in duration-300">
//                 <div className="flex flex-wrap items-center justify-between gap-4">
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0057B8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0057B8]">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#0057B8]" aria-hidden="true" />
//                     {active.category}
//                   </span>
//                 </div>

//                 <h3 className="mt-4 text-2xl font-bold text-slate-900 lg:text-3xl">
//                   {active.name}
//                 </h3>

//                 <p className="mt-1 text-sm font-semibold text-[#0BB4D4]">
//                   {active.tagline}
//                 </p>

//                 <p className="mt-4 text-base leading-relaxed text-slate-600">
//                   {active.description}
//                 </p>

//                 <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
//                   <Link
//                     href={active.href}
//                     className="group inline-flex items-center gap-2 rounded-full bg-[#0057B8] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#004494] hover:shadow-lg hover:shadow-[#0057B8]/30"
//                   >
//                     Visit Partner
//                     <Icon
//                       icon="lucide:arrow-right"
//                       width={18}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </Link>

//                   <span className="text-xs font-semibold text-slate-400">
//                     Official Technology Partner
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { PARTNERS, PARTNERS_INTRO } from "@/data/partners";

export default function Partners() {
  // Continuous scroll ke liye list duplicate: width maintain rakhne ke liye 3x duplication best hai
  const marqueeList = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full overflow-hidden bg-[#03122F] py-16 lg:py-20">

      <Image
        src="/images/Hero/Hero8.png"
        alt=""
        fill
        sizes="100vw"
        className="object-fit"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300">
            <span className="h-px w-8 bg-[#0BB4D4]" />
            <span>{PARTNERS_INTRO.eyebrow}</span>
            <span className="h-px w-8 bg-[#0BB4D4]" />
          </div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
            {PARTNERS_INTRO.title}{" "}
            <span className="text-cyan-400">{PARTNERS_INTRO.highlight}</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-3">

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#03122F] to-transparent lg:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#03122F] to-transparent lg:w-40" />

        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {marqueeList.map((partner, index) => (
            <Link
              key={`${partner.id}-${index}`}
              href={partner.href}
              className="group relative flex w-40 shrink-0 flex-col items-center justify-between rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0BB4D4]/20 hover:ring-[#0BB4D4]/60 sm:w-45"
            >

              <div className="relative mb-4 flex h-16 w-full items-center justify-center rounded-xl bg-slate-50 p-2 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>

              <h3 className="w-full truncate text-center text-sm font-normal text-slate-900 group-hover:text-[#0057B8]">
                {partner.name}
              </h3>

              {/* Interaction Indicator (Lift-and-glow effect) */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0BB4D4]/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}