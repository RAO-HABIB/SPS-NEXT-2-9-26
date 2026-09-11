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
        desc: "K-12 & higher education campus digital infrastructure",
      },
      {
        label: "Healthcare - Mid Atl",
        href: "/verticals/public-sector/healthcare-mid-atl",
        badge: "Current Page",
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
   Healthcare Practice Tabs & Services Data
   ========================================================================= */

interface HealthcareSubService {
  id: string;
  title: string;
  description: string;
}

interface HealthcarePracticeTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  services: HealthcareSubService[];
}

const HEALTHCARE_TABS: HealthcarePracticeTab[] = [
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
        id: "hipaa-zero-trust",
        title: "HIPAA & HITRUST Zero Trust Architecture",
        description:
          "Enforce patient data confidentiality and CJIS/HIPAA regulatory alignment through medical device network microsegmentation, role-based clinician access, and automated compliance auditing.",
      },
      {
        id: "ehr-threat-monitoring",
        title: "24/7 Clinical SOC & Ransomware Defense",
        description:
          "Continuous telemetry monitoring across hospitals, clinical endpoint networks, and electronic health record databases to thwart ransomware before patient care is disrupted.",
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
        id: "fhir-ehr-cloud",
        title: "FHIR-Compliant Healthcare Cloud Migration",
        description:
          "Migrate legacy on-premise EHR and imaging archive systems (PACS/VNA) to resilient, HIPAA-authorized cloud repositories with sub-second retrieval times.",
      },
      {
        id: "cloud-app-dev",
        title: "Cloud Application Development",
        description:
          "Build scalable, cloud-native patient portals, telemedicine triage systems, and mobile clinical staff applications utilizing modern FHIR APIs and microservices.",
      },
      {
        id: "it-ops-support",
        title: "IT Ops and Support",
        description:
          "Round-the-clock hospital IT infrastructure management, medical device fleet monitoring, automated patching, and proactive SRE support.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Bot,
    services: [
      {
        id: "clinical-triage-ai",
        title: "Clinical Workflow & Triage AI Agents",
        description:
          "Assist healthcare providers with ambient clinical documentation, automated billing code transcription, and intelligent patient intake triage.",
      },
      {
        id: "imaging-ocr-automation",
        title: "Medical Imaging & Records Document Automation",
        description:
          "Extract critical patient diagnostics from multi-provider records and automate insurance prior-authorization filings using HIPAA-compliant vision pipelines.",
      },
      {
        id: "patient-flow-analytics",
        title: "Predictive Hospital Capacity Analytics",
        description:
          "Forecast emergency room patient inflow, bed occupancy, and nursing staffing demand with real-time predictive machine learning dashboards.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    services: [
      {
        id: "telehealth-bridges",
        title: "Omnichannel Telemedicine Platforms",
        description:
          "End-to-end encrypted remote clinician consultation rooms with integrated diagnostic device streaming and instant EHR notes synchronization.",
      },
      {
        id: "care-team-messaging",
        title: "HIPAA-Compliant Care Team Messaging",
        description:
          "Secure real-time coordination tools connecting attending physicians, bedside nurses, pharmacists, and lab specialists on hospital-issued mobile devices.",
      },
      {
        id: "patient-engagement",
        title: "Digital Patient Education & Aftercare Portals",
        description:
          "Multilingual interactive discharge guides, automated prescription refill reminders, and biometric vitals tracking for chronic disease management.",
      },
    ],
  },
  {
    id: "spinnlabs",
    label: "Spinnlabs",
    icon: FlaskConical,
    services: [
      {
        id: "medical-iot-sandboxes",
        title: "IoMT Medical Device Sandboxes",
        description:
          "SpinnLabs testing environments for verifying the cybersecurity, battery longevity, and network resilience of wearable patient monitors before clinical rollout.",
      },
      {
        id: "clinical-genai-pilots",
        title: "Specialized Healthcare AI Sandboxes",
        description:
          "Private sandboxes enabling healthcare networks to benchmark specialized clinical language models and diagnostic assistants on de-identified patient data.",
      },
      {
        id: "clinician-tech-upskilling",
        title: "Healthcare Tech Executive Immersion",
        description:
          "Workshops and simulation courses training chief medical officers and health system administrators in digital resilience and healthcare cloud economics.",
      },
    ],
  },
];

/* =========================================================================
   Featured Healthcare Customers (Matching CountyGovernment / NetworkSecurity)
   ========================================================================= */

interface CustomerItem {
  name: string;
  role: string;
  image: string;
}

const FEATURED_CUSTOMERS: CustomerItem[] = [
  {
    name: "Maryland Health",
    role: "State Public Health System",
    image: "/images/customers/maryland-health1.webp",
  },
  {
    name: "Highmark Health",
    role: "Integrated Healthcare Network",
    image: "/images/customers/highmark-health.webp",
  },
  {
    name: "Anne Arundel College",
    role: "Nursing & Health Sciences",
    image: "/images/customers/anne-arundel.webp",
  },
  {
    name: "MetaCoastal",
    role: "Health Technology",
    image: "/images/customers/MetaCoastal.webp",
  },
  {
    name: "Askari Bank",
    role: "Healthcare Financial Services",
    image: "/images/customers/Askari-Bank4.webp",
  },
  {
    name: "Allied Bank",
    role: "Institutional Finance",
    image: "/images/customers/Allied-Bank.webp",
  },
];

/* =========================================================================
   Main Component: HealthcareMidAtlLayout
   ========================================================================= */

export default function HealthcareMidAtlLayout() {
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
    HEALTHCARE_TABS.find((t) => t.id === activeTabId) || HEALTHCARE_TABS[0];
  const currentService =
    currentTab.services.find((s) => s.id === activeServiceId) ||
    currentTab.services[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    const targetTab = HEALTHCARE_TABS.find((t) => t.id === tabId);
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
      {/* 1. HERO SECTION (Centered Typography - Exact Match to User Screenshot 3) */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#031B3D]">
        {/* Ambient Hex / Geometric Cyber Network Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#00a7e1_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031B3D] via-transparent to-[#031B3D]" />
        </div>

        {/* Ambient Gradient Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031B3D] via-[#031B3D]/95 to-[#031B3D] z-0 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl text-center">
          {/* Main Centered Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-2">
            Healthcare
          </h1>

          {/* Sub-heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 tracking-tight mb-3">
            - Mid At
          </h2>

          {/* Category Tag */}
          <span className="text-[#38BDF8] text-sm sm:text-base font-semibold tracking-wider uppercase inline-block">
            Public Sector
          </span>
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
                          layoutId="activeVerticalPillHealthcare"
                          transition={{ type: "spring", bounce: 0.12, duration: 0.4 }}
                          className="absolute inset-0 bg-[#031B3D] rounded-full shadow-md -z-10"
                        />
                      )}

                      {!isActive && isHovered && (
                        <motion.div
                          layoutId="hoverVerticalPillHealthcare"
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

      {/* 3. INTERACTIVE TECHNOLOGY TABS */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Top Tab Bar with Chrome Fluid Wings */}
            <div className="bg-[#F3F5F9] border-b border-slate-200/90 px-4 sm:px-8 pt-3 flex items-end gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {HEALTHCARE_TABS.map((tab) => {
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
                        layoutId="activeChromeTabHealthcare"
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
                        className={`text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSubActive
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

      {/* 4. CUSTOMERS WE ARE PROUD TO WORK WITH */}
      <section className="py-20 sm:py-28 bg-[#F8F9FB] text-slate-900 border-t border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#031B3D] mb-3">
            Customers we are proud to work with.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-14 sm:mb-16">
            Our mission is to deliver compelling narratives, remarkable experiences, and outstanding
            results for our healthcare and public sector clients.
          </p>

          {/* Circular Customer Badges */}
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
        serviceTitle={`Healthcare - Mid Atl - ${selectedSolutionTitle || currentService.title}`}
      />
    </main>
  );
}
