"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    CalendarX,
    ChevronDown,
    GraduationCap,
    Search,
    Users,
} from "lucide-react";

type TabType = "training" | "instructor";

export default function TrainingClient() {
    const [activeTab, setActiveTab] = useState<TabType>("training");

    const isTraining = activeTab === "training";

    return (
        <main className="w-full bg-white">
            {/* ============ HERO ============ */}
            <section className="relative w-full overflow-hidden bg-[#02122c] min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Hero/Hero8.webp"
                        alt="Training Hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center opacity-60"
                    />
                    <div className="absolute inset-0 bg-[#031B3D]/70" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031B3D] via-[#031B3D]/60 to-transparent" />
                </div>

                {/* Vertical "OUR SERVICES" */}
                <div className="hidden lg:flex absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 items-center gap-4">
                    <span
                        className="text-white/80 text-[11px] font-bold tracking-[0.35em]"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        OUR SERVICES
                    </span>
                    <div className="h-24 w-px bg-white/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 tracking-tight">
                        {isTraining
                            ? "Training And Certifications"
                            : "Become A Instructor"}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
                        {isTraining
                            ? "Grow Your IT & Business Skills & Get Certified"
                            : "SPS Instructor Network is comprised of professionals across hundreds of technology disciplines from around the world."}
                    </p>
                </div>
            </section>

            {/* ============ SUB-BAR WITH TABS ============ */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="text-[11px] sm:text-sm font-bold text-[#031B3D] uppercase tracking-widest text-center sm:text-left">
                        SPS Digital Learning Services
                    </h2>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Training Tab */}
                        <button
                            type="button"
                            onClick={() => setActiveTab("training")}
                            style={
                                isTraining
                                    ? {
                                        backgroundColor: "#1B4F9C",
                                        color: "#ffffff",
                                        borderColor: "#1B4F9C",
                                    }
                                    : undefined
                            }
                            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${isTraining
                                ? "shadow-md shadow-[#1B4F9C]/30"
                                : "bg-white text-[#031B3D] border-slate-300 hover:border-[#1B4F9C] hover:text-[#1B4F9C]"
                                }`}
                        >
                            <GraduationCap className="w-4 h-4" />
                            SPS Training
                        </button>

                        {/* Instructor Tab */}
                        <button
                            type="button"
                            onClick={() => setActiveTab("instructor")}
                            style={
                                !isTraining
                                    ? {
                                        backgroundColor: "#1B4F9C",
                                        color: "#ffffff",
                                        borderColor: "#1B4F9C",
                                    }
                                    : undefined
                            }
                            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border ${!isTraining
                                ? "shadow-md shadow-[#1B4F9C]/30"
                                : "bg-white text-[#031B3D] border-slate-300 hover:border-[#1B4F9C] hover:text-[#1B4F9C]"
                                }`}
                        >
                            <Users className="w-4 h-4" />
                            Become Instructor
                        </button>
                    </div>
                </div>
            </div>

            {/* ============ TAB CONTENT ============ */}
            {isTraining ? <TrainingTab /> : <InstructorTab />}
        </main>
    );
}

/* ============================================================
   TAB 1 — SPS TRAINING
   ============================================================ */
function TrainingTab() {
    return (
        <section className="w-full bg-[#EFF6FF] py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technology Partners */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031B3D] leading-tight mb-6">
                            Our
                            <br />
                            Technology
                            <br />
                            Partners
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
                            We work with world-class technology vendors to deliver secure,
                            scalable, and innovative solutions across Cloud, AI,
                            Cybersecurity, and Enterprise IT.
                        </p>
                    </div>

                    {/* IBM Partner Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[220px] sm:min-h-[260px]">
                        <div className="relative w-[140px] h-[56px] mb-4">
                            <Image
                                src="/images/partners/ibm.webp"
                                alt="IBM Security"
                                fill
                                sizes="140px"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#031B3D] mb-1">
                            IBM Security
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mb-3">
                            Identity - Access &amp; Zero Trust Solutions
                        </p>
                        <Link
                            href="#"
                            className="text-[#1B4F9C] text-xs sm:text-sm font-semibold hover:underline"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-end">
                        <FilterSelect
                            label="Tech Provider"
                            options={["Databricks", "IBM", "AWS", "Microsoft", "Google Cloud"]}
                        />
                        <FilterSelect label="Course Name" options={["All Courses"]} />
                        <FilterSelect
                            label="Select Month"
                            options={["Upcoming", "January", "February", "March"]}
                        />

                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 bg-[#1B4F9C] hover:bg-[#154080] text-white font-bold text-sm px-6 py-3 rounded-lg transition-all shadow-md shadow-[#1B4F9C]/30 w-full"
                        >
                            <Search className="w-4 h-4" />
                            Find Training
                        </button>
                    </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 italic mb-8">
                    *All courses can be scheduled for in-house training at a negotiated rate.
                </p>

                {/* Empty State */}
                <div className="border-2 border-dashed border-slate-300 rounded-2xl py-14 sm:py-16 px-6 text-center bg-white/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#1B4F9C]/10 mb-4">
                        <CalendarX className="w-6 h-6 text-[#1B4F9C]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#031B3D] mb-2">
                        No Upcoming Schedules
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
                        We couldn&apos;t find any sessions matching your criteria for this month.
                    </p>
                </div>

                <p className="text-center text-sm sm:text-base text-[#031B3D] font-semibold mt-8">
                    Need a specific date or an appointment?{" "}
                    <Link href="/Contact" className="text-[#1B4F9C] hover:underline">
                        Contact our Advisors
                    </Link>
                </p>
            </div>
        </section>
    );
}

/* Reusable select */
function FilterSelect({ label, options }: { label: string; options: string[] }) {
    return (
        <div>
            <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                {label}
            </label>
            <div className="relative">
                <select className="w-full appearance-none bg-[#EFF4FF] border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#031B3D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4F9C]/30 cursor-pointer">
                    {options.map((o) => (
                        <option key={o}>{o}</option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            </div>
        </div>
    );
}

/* ============================================================
   TAB 2 — BECOME INSTRUCTOR
   ============================================================ */
function InstructorTab() {
    const partners = [
        { name: "AWS", logo: "/images/partners/aws.webp" },
        { name: "Google Cloud", logo: "/images/partners/google-cloud.webp" },
        { name: "IBM", logo: "/images/partners/ibm.webp" },
        { name: "Microsoft", logo: "/images/partners/microsoft.webp" },
        { name: "Red Hat", logo: "/images/partners/redhat.webp" },
        { name: "Apple", logo: "/images/partners/apple.webp" },
    ];

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#031B3D] leading-tight mb-8 text-center max-w-3xl mx-auto">
                    SPS is looking to continue meeting experienced and talented
                    individuals with proven experience with both technology and
                    instructional acumen.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    <p>
                        We offer numerous Train-the-Trainer (T3) certification paths to
                        expand your training capabilities in various technology areas.
                    </p>
                    <p>
                        If you are interested in becoming a member of our Instructor
                        Network, please complete our sign-up form, and we will reach out
                        to you to schedule an initial call.
                    </p>
                    <p>
                        We&apos;re also certified training partners with some of the
                        world&apos;s leading technology brands, such as
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
                    {partners.map((p) => (
                        <div
                            key={p.name}
                            className="w-[140px] sm:w-[170px] h-[80px] sm:h-[90px] bg-white border border-slate-200 rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={p.logo}
                                    alt={p.name}
                                    fill
                                    sizes="170px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#031B3D] text-center mb-10">
                    Instructor Registration
                </h3>

                <form className="space-y-5 max-w-3xl mx-auto">
                    <FormField label="Full Name" placeholder="John Doe" type="text" />
                    <FormField label="Email Address" placeholder="john@example.com" type="email" />
                    <FormField label="Organization" placeholder="Company Name" type="text" />
                    <FormField label="Job Title / Role" placeholder="e.g. Lead Trainer" type="text" />
                    <FormField label="Phone Number" placeholder="+1 (000) 000-0000" type="tel" />

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-[#1B4F9C] hover:bg-[#154080] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition-all shadow-md shadow-[#1B4F9C]/30 uppercase tracking-wider"
                        >
                            Submit Registration
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function FormField({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-[#F5F8FF] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#031B3D] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B4F9C]/30 focus:border-[#1B4F9C]/40"
            />
        </div>
    );
}