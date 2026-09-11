"use client";

import React, { useState, useRef, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import RequestQuoteModal from "@/components/ui/RequestQuoteModal";

/* =========================================================================
   Data Definitions for Government Layout (Self-contained like IbmProductLayout)
   ========================================================================= */

interface SubTabItem {
  id: string;
  title: string;
  description: string;
}

interface MainTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  subTabs: SubTabItem[];
}

const GOVERNMENT_TABS: MainTab[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: ShieldCheck,
    subTabs: [
      {
        id: "cyber-range",
        title: "County Cyber Range & Tabletop Exercises",
        description:
          "Executive-level simulation training led by former state & federal security directors to test county-wide incident response workflows, departmental coordination, and public communication under simulated ransomware conditions.",
      },
      {
        id: "zero-trust",
        title: "Zero Trust & Identity (IAM)",
        description:
          "Modernize constituent and municipal employee authentication with multi-factor authentication, role-based microsegmentation, and CJIS-compliant access controls across all county departments.",
      },
      {
        id: "threat-detection",
        title: "24/7 Managed Threat Detection & SOC",
        description:
          "Round-the-clock telemetry monitoring across county data centers, 911 dispatch networks, and cloud endpoints to intercept adversarial attacks before service disruptions occur.",
      },
      {
        id: "compliance-readiness",
        title: "Compliance & Security Audit Readiness",
        description:
          "Continuous compliance alignment with NIST 800-53, CJIS, HIPAA, and state digital governance standards with automated evidence generation for regulatory audits.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    subTabs: [
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
          "Modernize legacy IBM Power Systems (AIX, IBM i) to resilient cloud environments, eliminating aging hardware capital costs and enhancing disaster recovery response times for mission-critical records.",
      },
      {
        id: "cloud-app-dev",
        title: "Cloud Application Development",
        description:
          "Build scalable, cloud-native citizen portals and internal agency workflows utilizing serverless architectures, microservices, and automated CI/CD pipelines.",
      },
      {
        id: "it-ops-support",
        title: "IT Ops and Support",
        description:
          "Round-the-clock infrastructure management, cloud cost optimization, automated patching, and proactive performance monitoring tailored for municipal IT budgets.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Bot,
    subTabs: [
      {
        id: "citizen-ai-agents",
        title: "Citizen Service AI Agents",
        description:
          "Deploy 24/7 multilingual generative AI chatbots that resolve constituent permit queries, tax inquiries, and 311 service tickets with verified county data sources.",
      },
      {
        id: "document-processing",
        title: "Intelligent Document Automation",
        description:
          "Automate county clerk recording, property deed indexing, and public records redaction using specialized computer vision and optical character recognition pipelines.",
      },
      {
        id: "predictive-analytics",
        title: "Predictive Municipal Analytics",
        description:
          "Anticipate public works maintenance, budget expenditures, and emergency service dispatch demand through historical telemetry models and predictive AI dashboards.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    subTabs: [
      {
        id: "secure-workplace",
        title: "Secure Hybrid Workplace",
        description:
          "Compliant productivity environments enabling seamless, secure collaboration across remote county personnel, field inspectors, and administrative offices.",
      },
      {
        id: "emergency-comms",
        title: "Unified Emergency Communications",
        description:
          "Interoperable real-time communication bridges connecting police, fire, EMS, public health, and county executives during natural disasters and civic emergencies.",
      },
      {
        id: "civic-streaming",
        title: "Public Meeting Streaming & Civic Engagement",
        description:
          "Modern hybrid council meeting platforms with automated closed captioning, agenda synchronization, and secure citizen public testimony management.",
      },
    ],
  },
  {
    id: "spinnlabs",
    label: "Spinnlabs",
    icon: FlaskConical,
    subTabs: [
      {
        id: "innovation-sandboxes",
        title: "Municipal Innovation Sandboxes",
        description:
          "SpinnLabs incubation environments enabling county agencies to safely prototype emerging civic technologies, blockchain records, and AI pilots before wide deployment.",
      },
      {
        id: "smart-county-iot",
        title: "Smart County IoT Prototyping",
        description:
          "Rapid testing of environmental sensors, smart streetlights, traffic flow optimization cameras, and municipal utility metering hardware.",
      },
      {
        id: "executive-upskilling",
        title: "Executive Tech Upskilling",
        description:
          "Hands-on immersion programs and specialized workshops training county staff in modern cyber resilience, cloud management, and applied artificial intelligence.",
      },
    ],
  },
];

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
        badge: "Active",
        desc: "Modern digital governance & strategic modernization",
      },
      {
        label: "County Government",
        href: "/verticals/public-sector/government",
        badge: "Current Page",
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
   Featured Enterprise & County Customers (Matching NetworkSecurityLayout)
   ========================================================================= */

const FEATURED_CUSTOMERS = [
  {
    name: "County of Spotsylvania",
    role: "County Government",
    image: "/images/customers/county-of-spotsylvania.webp",
  },
  {
    name: "Loudoun County",
    role: "Municipal Administration",
    image: "/images/customers/loudon-county.webp",
  },
  {
    name: "Anne Arundel College",
    role: "Higher Education & Public Sector",
    image: "/images/customers/anne-arundel.webp",
  },
  {
    name: "MetaCoastal",
    role: "Enterprise Technology",
    image: "/images/customers/MetaCoastal.webp",
  },
  {
    name: "Askari Bank",
    role: "Banking & Financial Services",
    image: "/images/customers/Askari-Bank4.webp",
  },
  {
    name: "Allied Bank",
    role: "Commercial Banking",
    image: "/images/customers/Allied-Bank.webp",
  },
];

/* =========================================================================
   Showcase Slideshow Data (Framer hero-slideshow style)
   ========================================================================= */

interface CountyShowcaseSlide {
  id: string;
  eyebrow: string;
  titlePrimary: string;
  titleHighlight: string;
  description: string;
  image: string;
  label: string;
  tag: string;
}

const COUNTY_SHOWCASE_SLIDES: CountyShowcaseSlide[] = [
  {
    id: "transform-county",
    eyebrow: "Digital Public Service Delivery",
    titlePrimary: "Transform How Your County",
    titleHighlight: "Serves Its People.",
    description:
      "Unlock the full potential of your county government with a guided, executive-led approach to digital transformation. From cybersecurity awareness to cloud migration and AI readiness, we help you modernize the systems that power your public services and deliver exceptional constituent experiences.",
    image: "/images/verticals/country2.png",
    label: "County Operations Command Center",
    tag: "01. Citizen Transformation",
  },
  {
    id: "helping-county",
    eyebrow: "Executive-Led IT Modernization",
    titlePrimary: "Accelerate County IT with",
    titleHighlight: "AI, Cloud & Cyber.",
    description:
      "We begin with a county-wide Cyber Range event, led by the County Executive and joined by department heads from Finance, HR, Public Safety, Fire, Utilities, and more. Next, we conduct Tabletop Exercises with each department to evaluate risks, refactor legacy applications, migrate to the cloud, and unlock the potential of data for AI and advanced analytics. The outcome is a comprehensive, top-down digital transformation blueprint.",
    image: "/images/verticals/country1.jpg",
    label: "Cross-Departmental Tabletop Collaboration",
    tag: "02. Multi-Department Blueprint",
  },
];

/* =========================================================================
   Main Component: CountyGovernmentLayout
   ========================================================================= */

export default function CountyGovernmentLayout() {
  const [activeTabId, setActiveTabId] = useState("cloud");
  const [activeSubTabId, setActiveSubTabId] = useState("migrate-vmware");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Framer Hero Showcase Slideshow State
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState(false);
  const SLIDESHOW_INTERVAL_SEC = 5.5;

  useEffect(() => {
    if (isSlideshowPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % COUNTY_SHOWCASE_SLIDES.length);
    }, SLIDESHOW_INTERVAL_SEC * 1000);
    return () => clearInterval(timer);
  }, [isSlideshowPaused]);

  const handleNextSlide = () => {
    setCurrentSlideIdx((prev) => (prev + 1) % COUNTY_SHOWCASE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIdx(
      (prev) => (prev - 1 + COUNTY_SHOWCASE_SLIDES.length) % COUNTY_SHOWCASE_SLIDES.length
    );
  };

  const activeShowcaseSlide = COUNTY_SHOWCASE_SLIDES[currentSlideIdx];

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

  const currentTab = GOVERNMENT_TABS.find((t) => t.id === activeTabId) || GOVERNMENT_TABS[1];
  const currentSubTab =
    currentTab.subTabs.find((s) => s.id === activeSubTabId) || currentTab.subTabs[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = GOVERNMENT_TABS.find((t) => t.id === tabId);
    if (targetTab && targetTab.subTabs.length > 0) {
      setActiveSubTabId(targetTab.subTabs[0].id);
    }
  };

  const activePillData = VERTICAL_NAV_PILLS.find((p) => p.id === hoveredPillId);

  return (
    <main className="w-full min-h-screen bg-[#F8F9FB] text-slate-900 selection:bg-[#00a7e1] selection:text-white">
      {/* 1. HERO SECTION (Matching Image 1) */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden bg-[#031B3D]">
        {/* Background Capitol Dome & Cyber Matrix Texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/verticals/county-hero-bg.jpg"
            alt="US Capitol Dome with Cyber Grid"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031B3D] via-[#031B3D]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 inline-block">
              Public Sector
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              County Government
            </h1>

            {/* Narrative text */}
            <p className="text-slate-200/90 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Unlock the full potential of your county government with a guided, executive-led approach to
              digital transformation. From cybersecurity awareness to cloud migration and AI readiness, we
              help you modernize the systems that power your public services. We begin with executive
              awareness followed by department-specific Tabletop Exercises that reveal risks and
              modernization opportunities. From refactoring legacy systems to unlocking data for AI, we
              help you build a multi-year roadmap aligned with your mission to serve, protect, and
              innovate. Ready to lead the change? Let&apos;s shape your county&apos;s digital future together.
            </p>
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
                      className={`relative flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 px-2.5 sm:px-3 lg:px-2 xl:px-3.5 2xl:px-4 py-2 rounded-full text-[10.5px] sm:text-[11px] lg:text-[11px] xl:text-xs font-bold tracking-tight xl:tracking-wider uppercase transition-all duration-200 select-none ${
                        isActive
                          ? "text-white"
                          : isHovered
                          ? "text-[#0057B8]"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {/* Active / Hover Pill Background using Framer Motion */}
                      {isActive && (
                        <motion.div
                          layoutId="activeVerticalPill"
                          transition={{ type: "spring", bounce: 0.12, duration: 0.4 }}
                          className="absolute inset-0 bg-[#031B3D] rounded-full shadow-md -z-10"
                        />
                      )}

                      {!isActive && isHovered && (
                        <motion.div
                          layoutId="hoverVerticalPill"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                          className="absolute inset-0 bg-slate-100/90 rounded-full -z-10"
                        />
                      )}

                      {/* Icon Circle */}
                      <div
                        className={`size-6.5 sm:size-7 lg:size-6.5 xl:size-7.5 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          isActive
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
                        className={`size-2.5 sm:size-3 transition-transform duration-200 shrink-0 ${
                          isHovered ? "rotate-180 text-cyan-400" : "opacity-40"
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
                    // Smart alignment positioning based on index
                    left: `${Math.min(
                      Math.max(
                        VERTICAL_NAV_PILLS.findIndex((p) => p.id === hoveredPillId) * 12 + 2,
                        4
                      ),
                      55
                    )}%`,
                  }}
                >
                  {/* Dropdown Header */}
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

                  {/* Sub-items List (Matching Navigation Items) */}
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

                  {/* Dropdown Footer Link */}
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

      {/* 3. INTERACTIVE TECHNOLOGY TABS (Image 1 Layout + Image 3 Chrome Fluid Tab Style) */}
      <section className="py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Top Tab Bar with Image 3 Style Inverted Curved Wings */}
            <div className="bg-[#F3F5F9] border-b border-slate-200/90 px-4 sm:px-8 pt-3 flex items-end gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {GOVERNMENT_TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                const TabIcon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative flex items-center gap-2.5 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 select-none cursor-pointer rounded-t-xl shrink-0 ${
                      isActive ? "text-white z-10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                    }`}
                  >
                    {/* Active Chrome Tab Background with smooth layoutId animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeChromeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 bg-[#031B3D] rounded-t-xl shadow-md"
                      >
                        {/* Left Inverted Curved Wing Fillet (Image 3 style) */}
                        <svg
                          className="absolute -left-3 bottom-0 size-3 text-[#031B3D] fill-current pointer-events-none"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path d="M12 0 C12 6.627 6.627 12 0 12 L12 12 Z" />
                        </svg>
                        {/* Right Inverted Curved Wing Fillet (Image 3 style) */}
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
                        className={`size-4 transition-colors ${
                          isActive ? "text-[#00a7e1]" : "text-slate-500"
                        }`}
                      />
                      <span>{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sub-Tabs & Content Pane (Matching Image 1 Split View) */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Vertical Sub-tabs */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  {currentTab.subTabs.map((sub) => {
                    const isSubActive = sub.id === activeSubTabId;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubTabId(sub.id)}
                        className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSubActive
                            ? "bg-[#031B3D] text-white shadow-md"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                      >
                        {sub.title}
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Detail description & CTA */}
                <div className="lg:col-span-8 flex flex-col justify-between min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSubTab.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {currentSubTab.description}
                      </p>

                      <button
                        onClick={() => setIsQuoteModalOpen(true)}
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

      {/* 4. FRAMER HERO SHOWCASE SLIDESHOW (Matching Framer hero-slideshow component) */}
      <section className="py-20 sm:py-28 bg-[#031B3D] text-white relative overflow-hidden">
        {/* Subtle Ambient Backing Glow */}
        <div className="absolute -top-40 -left-40 size-96 rounded-full bg-[#00a7e1]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 size-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Trust Badge / Avatars Stack */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="relative size-8 rounded-full border-2 border-[#031B3D] overflow-hidden bg-slate-200">
                    <Image
                      src="/images/avatar/small/avatar1.webp"
                      alt="County Leader"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-8 rounded-full border-2 border-[#031B3D] overflow-hidden bg-slate-200">
                    <Image
                      src="/images/avatar/small/avatar2.webp"
                      alt="County Executive"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative size-8 rounded-full border-2 border-[#031B3D] overflow-hidden bg-slate-200">
                    <Image
                      src="/images/avatar/small/avatar3.webp"
                      alt="Public Safety Director"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="size-8 rounded-full border-2 border-[#031B3D] bg-slate-800 text-[11px] font-bold text-white flex items-center justify-center">
                    +50
                  </div>
                </div>

                <span className="text-xs font-semibold text-slate-300">
                  Trusted by County Leaders & Agency Directors
                </span>
              </div>

              {/* Slide Navigation Pill Tabs */}
              <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 w-fit">
                {COUNTY_SHOWCASE_SLIDES.map((slide, idx) => {
                  const isActive = currentSlideIdx === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIdx(idx)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                        isActive ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="slideshowTabHighlight"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                          className="absolute inset-0 bg-[#00a7e1] rounded-full shadow-md -z-10"
                        />
                      )}
                      <span>{slide.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Headline with Smooth Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcaseSlide.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-2 block">
                    {activeShowcaseSlide.eyebrow}
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
                    {activeShowcaseSlide.titlePrimary}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {activeShowcaseSlide.titleHighlight}
                    </span>
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 font-normal">
                    {activeShowcaseSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-white text-[#031B3D] text-sm font-bold shadow-lg hover:bg-slate-100 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <span>Request Strategy Assessment</span>
                  <ArrowRight className="size-4 text-[#031B3D] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-all cursor-pointer"
                >
                  Schedule Tabletop
                </button>
              </div>
            </div>

            {/* Right Showcase Slideshow Card (ShowcaseSlideshow implementation) */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 group"
                onMouseEnter={() => setIsSlideshowPaused(true)}
                onMouseLeave={() => setIsSlideshowPaused(false)}
              >
                {/* Images with crossfade transition */}
                {COUNTY_SHOWCASE_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{
                      opacity: idx === currentSlideIdx ? 1 : 0,
                      pointerEvents: idx === currentSlideIdx ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Bottom Scrim Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Top Quick Controls (Prev / Next Buttons on hover) */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous Slide"
                    className="size-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    aria-label="Next Slide"
                    className="size-8 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Bottom Bar: Caption Label & Progress Ring + Counter */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                  {/* Rotating Caption Label */}
                  <div className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white/90 drop-shadow-md">
                    {activeShowcaseSlide.label}
                  </div>

                  {/* Circular Arc-Progress Ring & Counter (Framer Style) */}
                  <div className="flex items-center gap-3 pointer-events-auto">
                    {/* SVG Progress Ring */}
                    <div className="relative size-9 flex items-center justify-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        className="-rotate-90"
                      >
                        {/* Track */}
                        <circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.2)"
                          strokeWidth="2"
                        />
                        {/* Animated Arc */}
                        <motion.circle
                          key={`${currentSlideIdx}-${isSlideshowPaused}`}
                          cx="18"
                          cy="18"
                          r="15"
                          fill="none"
                          stroke="#00a7e1"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 15}
                          initial={{ strokeDashoffset: 2 * Math.PI * 15 }}
                          animate={{ strokeDashoffset: isSlideshowPaused ? undefined : 0 }}
                          transition={
                            isSlideshowPaused
                              ? { duration: 0 }
                              : { duration: SLIDESHOW_INTERVAL_SEC, ease: "linear" }
                          }
                        />
                      </svg>
                    </div>

                    {/* Counter (01 / 02) */}
                    <div className="text-xs font-bold tracking-wider text-white/80 select-none">
                      <strong className="text-white font-extrabold text-sm">
                        {String(currentSlideIdx + 1).padStart(2, "0")}
                      </strong>
                      <span className="text-white/40 mx-1">/</span>
                      <span>{String(COUNTY_SHOWCASE_SLIDES.length).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMERS WE ARE PROUD TO WORK WITH (Matching NetworkSecurityLayout Round Circles) */}
      <section className="py-20 sm:py-28 bg-[#F8F9FB] text-slate-900 border-t border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
            Customers we are proud to work with.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-14 sm:mb-16">
            Our mission is to deliver compelling narratives, remarkable experiences, and outstanding
            results for our public sector and enterprise clients.
          </p>

          {/* Circular Customer Badges (Exact NetworkSecurityLayout round circle style) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
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
                <span className="mt-3.5 text-xs sm:text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#00a7e1] transition-colors text-center">
                  {customer.name}
                </span>
                {/* Role / Category */}
                <span className="text-[10px] sm:text-xs text-slate-500 text-center font-medium">
                  {customer.role}
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
        serviceTitle={`County Government - ${currentSubTab.title}`}
      />
    </main>
  );
}
