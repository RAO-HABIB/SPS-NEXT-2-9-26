// import { aboutData } from "@/data/about-data";
// import {
//   BriefcaseBusiness,
//   GraduationCap,
//   Rocket,
//   Users,
// } from "lucide-react";

// const icons = [
//   BriefcaseBusiness,
//   GraduationCap,
//   Rocket,
//   Users,
// ];

// export default function WhyJoin() {
//   const { whyJoin } = aboutData.careers;

//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Heading */}

//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
//             Why SPS?
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-slate-900">
//             Why Join Our Team
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600">
//             At SPS you'll work with talented people, modern technologies,
//             and meaningful projects while continuously growing your career.
//           </p>
//         </div>

//         {/* Cards */}

//         <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
//           {whyJoin.map((item, index) => {
//             const Icon = icons[index];

//             return (
//               <div
//                 key={item.title}
//                 className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]"
//               >
//                 {/* Glow */}

//                 <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

//                 {/* Icon */}

//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
//                   <Icon size={32} />
//                 </div>

//                 {/* Title */}

//                 <h3 className="mt-8 text-2xl font-bold text-slate-900">
//                   {item.title}
//                 </h3>

//                 {/* Description */}

//                 <p className="mt-5 leading-7 text-slate-600">
//                   {item.description}
//                 </p>

//                 {/* Bottom Accent */}

//                 <div className="mt-8 h-1 w-0 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }