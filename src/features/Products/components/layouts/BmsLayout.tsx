import Image from "next/image";
import Link from "next/link";
import { ProductDetailData } from "@/data/products-data";
import { Button } from "@/components/ui/button";
import {
  Receipt,
  Users,
  Briefcase,
  FileSpreadsheet,
  GraduationCap,
  Megaphone,
  Calculator,
  PackageSearch,
  TrendingUp,
  LayoutTemplate,
  Server,
  Puzzle,
} from "lucide-react";

const managementAreasCol1 = [
  { name: "Sales", icon: Receipt, color: "cyan" },
  { name: "HR Management", icon: Users, color: "navy" },
  { name: "Services Management", icon: Briefcase, color: "navy" },
  { name: "Business Statements", icon: FileSpreadsheet, color: "cyan" },
  { name: "Learning & Education", icon: GraduationCap, color: "navy" },
  { name: "Marketing", icon: Megaphone, color: "cyan" },
];

const managementAreasCol2 = [
  { name: "Accounting", icon: Calculator, color: "navy" },
  { name: "Product Management", icon: PackageSearch, color: "cyan" },
  { name: "Business Forecast", icon: TrendingUp, color: "navy" },
  { name: "Web Content Management", icon: LayoutTemplate, color: "cyan" },
  { name: "IT & Infrastructure", icon: Server, color: "navy" },
  { name: "Integrations & Automation", icon: Puzzle, color: "cyan" },
];

export default function BmsLayout({ data }: { data: ProductDetailData }) {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[540px] sm:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.webp"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/70 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
              <span>›</span>
              <span className="text-white">SPS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Business Management System
            </h1>

            <p className="text-base text-slate-200 leading-relaxed mb-8 font-light">
              Get real-time insights into every aspect of your company's performance, optimize
              processes and streamline business with our Business Management System.
            </p>

            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-md px-6 py-2.5 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105">
              Request Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* 2. What BMS Offers - Vertical Cards Grid */}
      <section className="py-24 bg-[#F8F9FB] border-y border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              What BMS Offers
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light">
              A complete enterprise platform built for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Vertical Cyan Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#00a7e1] border border-[#00a7e1]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Deep Navy) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#031B3D]/30"
                  />

                </svg>
              </div>

              <div>
                {/* Top Row: Minimalist Geometric Logo & Badge */}
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-white/90"
                  >
                    <path
                      d="M16 4L24 9V17L16 22L8 17V9L16 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4V13M24 17L16 13M8 17L16 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    BMS Overview
                  </span>
                </div>

                {/* Circular Avatar with thick solid white border */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#031B3D] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="BMS Business"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  How can BMS help your business?
                </h3>

                {/* Description */}
                <p className="relative z-10 text-white/90 text-sm leading-relaxed font-light mb-8">
                  With a fully-integrated system, employees across departments can use the same reliable information to meet their day-to-day needs. The system brings the front office and back office together — a full enterprise management solution that helps you identify areas for improvement and make cost-effective decisions.
                </p>
              </div>

              {/* Bottom Row: Button */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Card 2 - Vertical Navy Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#031B3D] border border-[#031B3D]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Vibrant Cyan) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#00a7e1]/20"
                  />


                </svg>
              </div>

              <div>
                {/* Top Row: Minimalist Geometric Logo & Badge */}
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-[#00a7e1]"
                  >
                    <path
                      d="M16 4L24 9V17L16 22L8 17V9L16 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4V13M24 17L16 13M8 17L16 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    Core Benefits
                  </span>
                </div>

                {/* Circular Avatar with thick solid white border */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#00a7e1] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="BMS Benefits"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  What are the benefits of BMS?
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-300 text-sm leading-relaxed font-light mb-8">
                  BMS offers more than traditional ERP solutions. Our system is tailored to your business needs so you can streamline operations and collaborate effectively across departments. It provides essential real-time information about your company, highlighting areas for improvement — all from one platform.
                </p>
              </div>

              {/* Bottom Row: Button */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Card 3 - Vertical Cyan Card */}
            <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#00a7e1] border border-[#00a7e1]/80 p-7 sm:p-9 text-white shadow-xl min-h-[520px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {/* Background Geometric Polygonal Shapes (Deep Navy) */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-full overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full w-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <polygon
                    points="160,0 400,0 400,200 240,140"
                    className="fill-[#031B3D]/30"
                  />

                </svg>
              </div>

              <div>
                {/* Top Row: Minimalist Geometric Logo & Badge */}
                <div className="relative z-10 flex items-center justify-between w-full mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-white/90"
                  >
                    <path
                      d="M16 4L24 9V17L16 22L8 17V9L16 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4V13M24 17L16 13M8 17L16 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-xs font-semibold text-white bg-white/20 border border-white/30 px-3 py-1 rounded-full">
                    CMS Integration
                  </span>
                </div>

                {/* Circular Avatar with thick solid white border */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[#031B3D] mb-6">
                  <Image
                    src="/images/products/product.webp"
                    alt="BMS CMS"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug mb-4">
                  Integrated Content Management System
                </h3>

                {/* Description */}
                <p className="relative z-10 text-white/90 text-sm leading-relaxed font-light mb-8">
                  It's business oriented. With BMS, companies can manage their products and services right in BMS and create website content that will be published with just one click. No more need for full-time technical resources to manage the website.
                </p>
              </div>

              {/* Bottom Row: Button */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00a7e1] border border-white rounded-full text-xs font-bold px-5 py-2 shadow-sm transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Management Areas - Feature List Matching User's Design */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              Business Management Areas
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light">
              Comprehensive enterprise modules built directly into the BMS core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Column 1 */}
            <div className="flex flex-col">
              {managementAreasCol1.map((item, idx) => {
                const isCyan = item.color === "cyan";
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-5 py-5 sm:py-6 border-b border-slate-200/80 group hover:translate-x-1 transition-transform"
                  >
                    <div
                      className={`size-13 sm:size-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${isCyan
                        ? "bg-[#00a7e1] text-white shadow-md shadow-[#00a7e1]/20"
                        : "bg-[#031B3D] text-[#00a7e1] shadow-md shadow-[#031B3D]/30"
                        }`}
                    >
                      <IconComponent className="size-6 sm:size-7" strokeWidth={2.2} />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#031B3D] group-hover:text-[#00a7e1] transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {managementAreasCol2.map((item, idx) => {
                const isCyan = item.color === "cyan";
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-5 py-5 sm:py-6 border-b border-slate-200/80 group hover:translate-x-1 transition-transform"
                  >
                    <div
                      className={`size-13 sm:size-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${isCyan
                        ? "bg-[#00a7e1] text-white shadow-md shadow-[#00a7e1]/20"
                        : "bg-[#031B3D] text-[#00a7e1] shadow-md shadow-[#031B3D]/30"
                        }`}
                    >
                      <IconComponent className="size-6 sm:size-7" strokeWidth={2.2} />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-[#031B3D] group-hover:text-[#00a7e1] transition-colors">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
