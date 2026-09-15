"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Bot,
  Users,
  FlaskConical,
  Landmark,
  Factory,
  HeartPulse,
  ShoppingCart,
  Fuel,
  Banknote,
  Radio,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import RequestQuoteModal from "@/components/ui/RequestQuoteModal";

/* =========================================================================
   Pill Dropdown Nav Data (7 Verticals + exact sub-items from navigation.ts)
   ========================================================================= */

interface VerticalSubItem {
  label: string;
  href: string;
  badge?: string;
  desc?: string;
}

interface VerticalPillItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
  subItems: VerticalSubItem[];
}

const VERTICAL_NAV_PILLS: VerticalPillItem[] = [
  {
    id: "public-sector",
    label: "Public Sector",
    icon: Landmark,
    href: "/verticals/public-sector",
    active: true,
    subItems: [
      {
        label: "Government",
        href: "/verticals/public-sector/government",
        desc: "Federal, state & municipal IT modernization and security",
      },
      {
        label: "County Government",
        href: "/verticals/public-sector/county-government",
        desc: "Executive cyber range, cloud migration & citizen AI",
      },
      {
        label: "Public Safety",
        href: "/verticals/public-sector/public-safety",
        desc: "911 dispatch resilience & emergency communications",
      },
      {
        label: "Education",
        href: "/verticals/public-sector/education",
        badge: "Current Page",
        desc: "K-12 & higher education campus digital infrastructure",
      },
      {
        label: "Healthcare - Mid Atl",
        href: "/verticals/public-sector/healthcare-mid-atl",
        desc: "Public health clinical systems & HIPAA compliance",
      },
    ],
  },
  {
    id: "industrials",
    label: "Industrials",
    icon: Factory,
    href: "/verticals/industrials",
    active: false,
    subItems: [
      {
        label: "Manufacturing",
        href: "/verticals/industrials",
        desc: "Smart factory floor automation & predictive maintenance",
      },
      {
        label: "Textile",
        href: "/verticals/industrials",
        desc: "Supply chain visibility & automated quality inspection",
      },
      {
        label: "Utilities",
        href: "/verticals/industrials",
        desc: "Grid modernization & critical infrastructure defense",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    href: "/verticals/healthcare",
    active: false,
    subItems: [
      {
        label: "Compliance",
        href: "/verticals/healthcare",
        desc: "Continuous HIPAA, HITECH & HITRUST compliance",
      },
      {
        label: "Interoperability",
        href: "/verticals/healthcare",
        desc: "FHIR standard data exchange & EHR integration",
      },
      {
        label: "Multi-Clinic",
        href: "/verticals/healthcare",
        desc: "Unified clinical operations across distributed clinics",
      },
      {
        label: "Patient Experience",
        href: "/verticals/healthcare",
        desc: "Omnichannel patient portals & digital check-in",
      },
      {
        label: "Telehealth",
        href: "/verticals/healthcare",
        desc: "Secure remote patient consultations & IoT diagnostics",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    icon: ShoppingCart,
    href: "/verticals/retail",
    active: false,
    subItems: [
      {
        label: "Convenience Store",
        href: "/verticals/retail",
        desc: "Automated checkout & POS fleet management",
      },
      {
        label: "Marketing",
        href: "/verticals/retail",
        desc: "AI-driven customer segmentation & promotions",
      },
      {
        label: "Omni-channel",
        href: "/verticals/retail",
        desc: "Unified online & brick-and-mortar inventories",
      },
      {
        label: "Personalization",
        href: "/verticals/retail",
        desc: "Real-time product recommendations & loyalty perks",
      },
      {
        label: "Supply Chain",
        href: "/verticals/retail",
        desc: "Warehouse tracking & automated order fulfillment",
      },
    ],
  },
  {
    id: "energy",
    label: "Energy",
    icon: Fuel,
    href: "/verticals/energy",
    active: false,
    subItems: [
      {
        label: "Electric",
        href: "/verticals/energy",
        desc: "Smart meter telemetry & distributed energy management",
      },
      {
        label: "Oil & Gas",
        href: "/verticals/energy",
        desc: "Refinery IoT sensors & zero-trust OT cybersecurity",
      },
    ],
  },
  {
    id: "financial",
    label: "Financial",
    icon: Banknote,
    href: "/verticals/financial",
    active: false,
    subItems: [
      {
        label: "Banking",
        href: "/verticals/financial",
        desc: "Core banking modernization & high-velocity transactions",
      },
      {
        label: "Insurance",
        href: "/verticals/financial",
        desc: "Automated claims underwriting & fraud detection",
      },
    ],
  },
  {
    id: "telecom",
    label: "Telecommunications",
    icon: Radio,
    href: "/verticals/telecom",
    active: false,
    subItems: [
      {
        label: "Telcos",
        href: "/verticals/telecom",
        desc: "5G cloud edge networks & autonomous NOC operations",
      },
    ],
  },
];

/* =========================================================================
   Education Practice Tabs & Services Data
   ========================================================================= */

interface EducationSubService {
  id: string;
  title: string;
  description: string;
}

interface EducationPracticeTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  services: EducationSubService[];
}

const EDUCATION_TABS: EducationPracticeTab[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: ShieldCheck,
    services: [
      {
        id: "network-visibility",
        title: "Network Visibility Operations Services",
        description:
          "The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments: 1) Basic Health Check; 2) Configuration Review & Testing; 3) Comprehensive Documentation and Training.",
      },
      {
        id: "security-jump-start",
        title: "Security Management Jump Start - SMJS",
        description:
          "Accelerate campus IT security operations with a structured 30-day onboarding blueprint, FERPA and research data architecture review, and zero-trust policy implementation designed for K-12 and university networks.",
      },
      {
        id: "security-as-a-service",
        title: "Security Management as a Service - SMaaS",
        description:
          "24/7 continuous security management, automated threat detection, incident containment, and compliance auditing delivered by certified SPS security engineers.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    services: [
      {
        id: "migrate-vmware",
        title: "Migrate VMware Workload to Cloud",
        description:
          "SPS offers a seamless service for migrating VMware workloads to IBM Cloud, enhancing scalability, flexibility, and cost-efficiency. Our tailored approach includes comprehensive assessment, planning, and execution to ensure minimal disruption. We provide ongoing support for optimized cloud operations.",
      },
      {
        id: "migrate-ibm-power",
        title: "Migrate IBM Power to Cloud",
        description:
          "Modernize legacy university mainframe and administrative student databases (AIX, IBM i) to resilient cloud environments, eliminating aging hardware capital costs.",
      },
      {
        id: "cloud-app-dev",
        title: "Cloud Application Development",
        description:
          "Build scalable, cloud-native student portals, learning management extensions, and admissions workflows utilizing serverless architectures and automated CI/CD pipelines.",
      },
      {
        id: "it-ops-support",
        title: "IT Ops and Support",
        description:
          "Round-the-clock campus infrastructure management, cloud cost optimization, automated patching, and proactive SRE monitoring tailored for higher education budgets.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Bot,
    services: [
      {
        id: "cognitive-tutoring",
        title: "AI Student Advising & Virtual Tutors",
        description:
          "Deploy 24/7 multilingual generative AI academic advisors that answer curriculum questions, guide financial aid applications, and surface personalized tutoring resources.",
      },
      {
        id: "admissions-processing",
        title: "Intelligent Admissions Document Automation",
        description:
          "Automate transcript verification, credential evaluation, and financial aid verification using specialized OCR computer vision pipelines.",
      },
      {
        id: "retention-analytics",
        title: "Predictive Student Retention Analytics",
        description:
          "Identify early academic risk signals, attendance variances, and intervention opportunities through historical learning telemetry and predictive dashboards.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    services: [
      {
        id: "hybrid-classroom",
        title: "Next-Gen Hybrid Classroom Infrastructure",
        description:
          "Seamless audio-visual lecture capture, automated transcription, and secure remote student participation across on-campus auditoriums and distance learning cohorts.",
      },
      {
        id: "campus-emergency-alerting",
        title: "Unified Campus Safety Communications",
        description:
          "Instant multichannel emergency alerts connecting campus police, emergency call boxes, digital signage, SMS broadcast, and mobile safety apps.",
      },
      {
        id: "faculty-research-portal",
        title: "Secure Research Collaboration Environments",
        description:
          "Encrypted research data enclaves enabling multi-institutional grant collaboration while maintaining rigorous compliance with NSF and federal research guidelines.",
      },
    ],
  },
  {
    id: "spinnlabs",
    label: "Spinnlabs",
    icon: FlaskConical,
    services: [
      {
        id: "campus-iot-sandboxes",
        title: "Smart Campus IoT Testbeds",
        description:
          "SpinnLabs incubation environments for piloting campus smart microgrids, automated laboratory sensors, and connected facility management.",
      },
      {
        id: "student-incubators",
        title: "Student Tech Accelerator Sandboxes",
        description:
          "Dedicated cloud infrastructure, AI model sandboxes, and enterprise software licenses enabling student entrepreneurs to build prototype applications.",
      },
      {
        id: "curriculum-immersion",
        title: "Faculty Tech Immersion Workshops",
        description:
          "Hands-on immersion programs training computer science and engineering faculty in modern cloud-native architectures, enterprise security, and applied AI.",
      },
    ],
  },
];

/* =========================================================================
   Featured Education Customers (Matching User Screenshot 2)
   ========================================================================= */

interface CustomerItem {
  name: string;
  role: string;
  image: string;
}

const FEATURED_CUSTOMERS: CustomerItem[] = [
  {
    name: "MetaCoastal",
    role: "Enterprise Technology",
    image: "/images/customers/MetaCoastal.webp",
  },
  {
    name: "Anne Arundel Community College",
    role: "Higher Education & Public Sector",
    image: "/images/customers/anne-arundel.webp",
  },
  {
    name: "Allied Bank",
    role: "Commercial Banking",
    image: "/images/customers/Allied-Bank.webp",
  },
  {
    name: "Askari Bank",
    role: "Banking & Financial Services",
    image: "/images/customers/Askari-Bank4.webp",
  },
];

/* =========================================================================
   Main Component: EducationLayout
   ========================================================================= */

export default function EducationLayout() {
  const [activeTabId, setActiveTabId] = useState("cybersecurity");
  const [activeServiceId, setActiveServiceId] = useState("network-visibility");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedSolutionTitle, setSelectedSolutionTitle] = useState("");

  // Framer Pill Dropdown Hover State
  const [hoveredPillId, setHoveredPillId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePillMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredPillId(id);
  };

  const handlePillMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredPillId(null);
    }, 180);
  };

  const currentTab =
    EDUCATION_TABS.find((t) => t.id === activeTabId) || EDUCATION_TABS[0];
  const currentService =
    currentTab.services.find((s) => s.id === activeServiceId) ||
    currentTab.services[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = EDUCATION_TABS.find((t) => t.id === tabId);
    if (targetTab && targetTab.services.length > 0) {
      setActiveServiceId(targetTab.services[0].id);
    }
  };

  const handleOpenModal = (title: string) => {
    setSelectedSolutionTitle(title);
    setIsQuoteModalOpen(true);
  };

  const activePillData = VERTICAL_NAV_PILLS.find((p) => p.id === hoveredPillId);

  return (
    <main className="w-full min-h-screen bg-[#F8F9FB] text-slate-900 selection:bg-[#00a7e1] selection:text-white">
      {/* 1. HERO SECTION WITH OUR SOLUTIONS CARD (Exact Match to User Screenshot 2) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden bg-[#031B3D]">
        {/* Ambient Subtle Tech / Cyber Grid Texture in Background */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-screen">
          <Image
            src="/images/verticals/industrial.jpg"
            alt="Education Tech Backdrop"
            fill
            className="object-cover object-right"
            priority
          />
        </div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                Education
              </h1>
              <span className="text-[#38BDF8] text-sm sm:text-base font-semibold tracking-wide uppercase mb-6 inline-block">
                Public Sector
              </span>

              <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed font-normal">
                Educational institutions require new strategic thinking, better data insights,
                personalized services and agile infrastructure. SPS Education solutions help
                create cognitive campuses, which help educators and students improve the learning
                process for better outcomes from kindergarten through higher education. Implementing
                the newest educational technologies helps support customized learning styles,
                increase research capacity and optimize operations for better cost effectiveness.
                Education technologies such as speech-to-text options, artificial intelligence (AI),
                hybrid cloud computing, data management and augmented reality enhance learning
                environments by unlocking learning potential and resulting in improved outcomes and
                better student engagement.
              </p>
            </div>

            {/* Right Column: "Our Solutions (Click to learn more)" Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl">
                <h3 className="text-white text-base sm:text-lg font-bold mb-4 flex items-baseline gap-2">
                  <span>Our Solutions</span>
                  <span className="text-slate-300 text-xs font-normal">
                    (Click to learn more)
                  </span>
                </h3>

                <div className="flex flex-col gap-3">
                  {/* Solution 1: Access Control */}
                  <button
                    onClick={() => handleOpenModal("Access Control Solution")}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-full bg-white text-slate-800 text-sm font-semibold shadow-sm hover:shadow-md hover:bg-slate-50 transition-all group cursor-pointer"
                  >
                    <span>Access Control</span>
                    <ArrowRight className="size-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                  </button>

                  {/* Solution 2: Body Worn Camera Solution */}
                  <button
                    onClick={() => handleOpenModal("Body Worn Camera Solution")}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-full bg-white text-slate-800 text-sm font-semibold shadow-sm hover:shadow-md hover:bg-slate-50 transition-all group cursor-pointer"
                  >
                    <span>Body Worn Camera Solution</span>
                    <ArrowRight className="size-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                  </button>

                  {/* Solution 3: View More */}
                  <button
                    onClick={() => handleOpenModal("Education Solutions Overview")}
                    className="w-full flex items-center justify-between px-5 py-3.5 rounded-full bg-[#00a7e1] hover:bg-[#0092c4] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <span>View More</span>
                    <ArrowRight className="size-4 text-white group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FRAMER PILL DROPDOWN NAV (Framer Style: Pill-Dropdown-Nav) */}
      <section className="relative z-40 w-full -mt-6 sm:-mt-8 px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1360px]">
          {/* Main Floating Pill Track */}
          <div
            className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full shadow-[0_16px_40px_-10px_rgba(3,27,61,0.12),0_4px_16px_rgba(0,0,0,0.04)] p-1.5 sm:p-2"
            onMouseLeave={handlePillMouseLeave}
          >
            <div className="flex items-center justify-between overflow-x-auto lg:overflow-visible gap-1 sm:gap-1.5 lg:gap-1 xl:gap-2 no-scrollbar px-1">
              {VERTICAL_NAV_PILLS.map((item) => {
                const Icon = item.icon;
                const isHovered = hoveredPillId === item.id;
                const isActive = item.active;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handlePillMouseEnter(item.id)}
                    className="relative shrink-0"
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 px-2.5 sm:px-3 lg:px-2 xl:px-3.5 2xl:px-4 py-2 rounded-full text-[10.5px] sm:text-[11px] lg:text-[11px] xl:text-xs font-bold tracking-tight xl:tracking-wider uppercase transition-all duration-200 select-none ${isActive
                        ? "text-white"
                        : isHovered
                          ? "text-[#0057B8]"
                          : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      {/* Active / Hover Pill Background using Framer Motion */}
                      {isActive && (
                        <motion.div
                          layoutId="activeVerticalPillEducation"
                          transition={{ type: "spring", bounce: 0.12, duration: 0.4 }}
                          className="absolute inset-0 bg-[#031B3D] rounded-full shadow-md -z-10"
                        />
                      )}

                      {!isActive && isHovered && (
                        <motion.div
                          layoutId="hoverVerticalPillEducation"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                          className="absolute inset-0 bg-slate-100/90 rounded-full -z-10"
                        />
                      )}

                      {/* Icon Circle */}
                      <div
                        className={`size-6.5 sm:size-7 lg:size-6.5 xl:size-7.5 rounded-full flex items-center justify-center transition-colors shrink-0 ${isActive
                          ? "bg-white/15 text-white"
                          : isHovered
                            ? "bg-[#0057B8]/10 text-[#0057B8]"
                            : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        <Icon className="size-3 sm:size-3.5 xl:size-4" />
                      </div>

                      {/* Label */}
                      <span className="whitespace-nowrap">
                        {item.label}
                      </span>

                      {/* Dropdown Indicator */}
                      <ChevronDown
                        className={`size-2.5 sm:size-3 transition-transform duration-200 shrink-0 ${isHovered ? "rotate-180 text-cyan-400" : "opacity-40"
                          }`}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Framer Animated Dropdown Card for Sub-items */}
            <AnimatePresence>
              {hoveredPillId && activePillData && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ type: "spring", bounce: 0.08, duration: 0.35 }}
                  onMouseEnter={() => handlePillMouseEnter(hoveredPillId)}
                  onMouseLeave={handlePillMouseLeave}
                  className="absolute top-full mt-3 left-4 right-4 sm:left-auto sm:right-auto sm:min-w-[380px] md:min-w-[440px] bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-[0_24px_50px_-12px_rgba(3,27,61,0.22)] p-4 sm:p-5 z-50 overflow-hidden"
                  style={{
                    left: `${Math.min(
                      Math.max(
                        VERTICAL_NAV_PILLS.findIndex((p) => p.id === hoveredPillId) * 12 + 2,
                        4
                      ),
                      55
                    )}%`,
                  }}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-lg bg-[#031B3D] text-white flex items-center justify-center">
                        <activePillData.icon className="size-3.5" />
                      </div>
                      <span className="text-xs font-bold text-[#031B3D] uppercase tracking-wider">
                        {activePillData.label}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {activePillData.subItems.length} Sub-items
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    {activePillData.subItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150"
                      >
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover/item:text-[#0057B8] transition-colors">
                              {sub.label}
                            </span>
                            {sub.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-[#0057B8] border border-blue-100">
                                {sub.badge}
                              </span>
                            )}
                          </div>
                          {sub.desc && (
                            <span className="text-[11px] text-slate-500 font-normal line-clamp-1">
                              {sub.desc}
                            </span>
                          )}
                        </div>

                        <ArrowRight className="size-3.5 text-slate-300 group-hover/item:text-[#0057B8] group-hover/item:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Explore all {activePillData.label} solutions</span>
                    <Link
                      href={activePillData.href}
                      className="text-[#00a7e1] hover:underline flex items-center gap-1 font-bold"
                    >
                      Overview <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TECHNOLOGY TABS (Exact Match to User Screenshot 2) */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Top Tab Bar with Chrome Fluid Wings */}
            <div className="bg-[#F3F5F9] border-b border-slate-200/90 px-4 sm:px-8 pt-3 flex items-end gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {EDUCATION_TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                const TabIcon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative flex items-center gap-2.5 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 select-none cursor-pointer rounded-t-xl shrink-0 ${isActive ? "text-white z-10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                      }`}
                  >
                    {/* Active Chrome Tab Background with smooth layoutId animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeChromeTabEducation"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 bg-[#031B3D] rounded-t-xl shadow-md"
                      >
                        {/* Left Inverted Curved Wing Fillet */}
                        <svg
                          className="absolute -left-3 bottom-0 size-3 text-[#031B3D] fill-current pointer-events-none"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path d="M12 0 C12 6.627 6.627 12 0 12 L12 12 Z" />
                        </svg>
                        {/* Right Inverted Curved Wing Fillet */}
                        <svg
                          className="absolute -right-3 bottom-0 size-3 text-[#031B3D] fill-current pointer-events-none"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path d="M0 0 C0 6.627 5.373 12 12 12 L0 12 Z" />
                        </svg>
                      </motion.div>
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <TabIcon
                        className={`size-4 transition-colors ${isActive ? "text-[#00a7e1]" : "text-slate-500"
                          }`}
                      />
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Tabs & Content Pane */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Vertical Sub-tabs */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  {currentTab.services.map((svc) => {
                    const isSubActive = svc.id === activeServiceId;
                    return (
                      <button
                        key={svc.id}
                        onClick={() => setActiveServiceId(svc.id)}
                        className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${isSubActive
                          ? "bg-[#031B3D] text-white shadow-md"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          }`}
                      >
                        {svc.title}
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Detail description & CTA */}
                <div className="lg:col-span-8 flex flex-col justify-between min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {currentService.description}
                      </p>

                      <button
                        onClick={() => handleOpenModal(currentService.title)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm font-semibold hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
                      >
                        Learn More
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PRODUCT FOR EDUCATION (Matching Screenshot 2 Fischer Identity Card) */}
      <section className="py-16 sm:py-20 bg-[#F8F9FB] border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header with Accent Lines */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-slate-300 hidden sm:block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031B3D] tracking-tight">
                Our Product for Education
              </h2>
              <div className="h-px w-12 bg-slate-300 hidden sm:block" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore Education products we provide across our core practices
            </p>
          </div>

          {/* Fischer Identity Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-12 lg:p-14 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Left Column: Fischer Identity Logo */}
              <div className="md:col-span-5 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
                <div className="relative w-full max-w-[260px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/products/fischer-identity.svg"
                    alt="Fischer Identity Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Narrative Description */}
              <div className="md:col-span-7">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  SPS has teamed up with Fischer Identity, a top tier provider of Identity
                  Governance and Administration (IGA) software and solutions to revolutionize how
                  higher education institutions, universities and colleges seamlessly automate
                  identity lifecycle management, enforce robust password governance, simplify
                  single sign-on/authentication, and ensure continuous compliance. Fischer
                  Identity empowers institutions of all sizes to securely manage diverse identities.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => handleOpenModal("Fischer Identity Education Solution")}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-sm font-semibold hover:border-slate-800 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMERS WE ARE PROUD TO WORK WITH (Matching Screenshot 2 Badges) */}
      <section className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
            Customers We Are Proud To Work With.
          </h2>

          {/* Circular Customer Badges (4 Badges from Screenshot 2) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-4xl mx-auto mt-12 sm:mt-16">
            {FEATURED_CUSTOMERS.map((customer, idx) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                {/* Circular Container */}
                <div className="relative size-28 sm:size-36 md:size-40 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-slate-200/90 flex items-center justify-center p-5 sm:p-7 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_14px_40px_rgba(0,167,225,0.22)] group-hover:border-[#00a7e1]">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      fill
                      sizes="(max-width: 640px) 112px, 160px"
                      className="object-contain filter contrast-105 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Customer Brand Name */}
                <span className="mt-3.5 text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#00a7e1] transition-colors text-center max-w-[160px]">
                  {customer.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Modal */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceTitle={`Education - ${selectedSolutionTitle || currentService.title}`}
      />
    </main>
  );
}
