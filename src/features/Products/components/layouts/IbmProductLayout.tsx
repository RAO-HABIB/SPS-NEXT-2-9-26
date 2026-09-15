"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetailData } from "@/data/products-data";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  MessageSquareCode,
  FileSearch,
  Code2,
  Database,
  BrainCircuit,
  Building,
  KeyRound,
  ShieldAlert,
  Shield,
  Target,
  Radar,
  Gauge,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BusinessStrategyEssentials1,
  WorkCommunicationIllustration,
  ProfessionalLeader1,
  ProfessionalEmployeeEssentials12,
} from "@/components/ui/illustrations";

interface ProductCardItem {
  id: string;
  title: string;
  badge: string;
  icon: typeof Cpu;
  image?: string;
  description: string;
  highlights: string[];
  impactMetric: { value: string; label: string };
  modalDetails: {
    overview: string;
    keyFeatures: string[];
    useCases: string[];
  };
}

const IBM_PRODUCTS_BY_SLUG: Record<string, ProductCardItem[]> = {
  automation: [
    {
      id: "orchestrate",
      title: "IBM Watsonx Orchestrate",
      badge: "AI Orchestration",
      icon: Cpu,
      description:
        "IBM watsonx Orchestrate is an AI-powered automation platform designed to transform enterprise workflows by integrating generative AI, predictive analytics, and seamless system orchestration. It empowers teams to automate complex tasks, accelerate decision-making, and enhance productivity through intuitive natural language interactions—turning manual processes into agile, intelligent operations.",
      highlights: [
        "Generative AI Workflows",
        "System Orchestration",
        "Natural Language Actions",
      ],
      impactMetric: { value: "80%", label: "Faster Task Execution" },
      modalDetails: {
        overview:
          "watsonx Orchestrate acts as your enterprise's digital labor engine, enabling employees to initiate complex multi-system workflows using plain language prompts while maintaining strict governance and role-based permissions.",
        keyFeatures: [
          "Pre-built skill catalog covering HR, Procurement, Finance, and IT operations",
          "Natural language orchestration with context memory across SaaS applications",
          "Seamless synchronization with Salesforce, SAP, Workday, and Microsoft 365",
          "Enterprise-grade security controls and audit logging for automated tasks",
        ],
        useCases: [
          "Automated employee onboarding across 6 distinct enterprise systems",
          "Real-time customer billing and invoice dispute resolution",
          "Instant cross-departmental approval workflow acceleration",
        ],
      },
    },
    {
      id: "assistant",
      title: "IBM Watsonx Assistant",
      badge: "Conversational AI",
      icon: MessageSquareCode,
      description:
        "IBM watsonx Assistant is an enterprise-grade AI assistant platform that delivers seamless, natural language interactions across customer and employee touchpoints. Powered by watsonx's generative AI and machine learning, it understands complex queries, provides accurate responses, and continuously improves—helping businesses enhance self-service, reduce support costs, and deliver 24/7 personalized engagement at scale.",
      highlights: [
        "Generative AI & ML",
        "24/7 Self-Service",
        "Multi-Channel Touchpoints",
      ],
      impactMetric: { value: "99.2%", label: "Intent Recognition" },
      modalDetails: {
        overview:
          "watsonx Assistant delivers intelligent, enterprise-calibrated customer and employee self-service. By coupling conversational AI with domain retrieval-augmented generation (RAG), it answers complex questions with verified certainty.",
        keyFeatures: [
          "Visual dialogue builder with low-code conversation branch management",
          "Native enterprise search integration for real-time document grounding",
          "Frictionless voice telephony (IVR) and live-chat agent handoff",
          "Full data privacy compliance with zero training on your proprietary data",
        ],
        useCases: [
          "24/7 Tier-1 customer support automation across web and mobile apps",
          "Internal IT helpdesk resolution for password resets and software access",
          "Policy and benefits exploration for distributed global workforces",
        ],
      },
    },
    {
      id: "discovery",
      title: "IBM Watson Discovery",
      badge: "Cognitive Search",
      icon: FileSearch,
      description:
        "IBM Watson Discovery is an AI-powered enterprise search and text analytics platform that transforms unstructured data into actionable insights. Using natural language processing and machine learning, it uncovers hidden patterns, relationships, and answers across documents, websites, and databases - helping organizations make data-driven decisions faster while reducing manual research time by up to 75%.",
      highlights: [
        "NLP & Text Analytics",
        "Unstructured Data Mining",
        "75% Faster Research",
      ],
      impactMetric: { value: "75%", label: "Research Time Saved" },
      modalDetails: {
        overview:
          "Watson Discovery ingests millions of complex enterprise documents—PDFs, contracts, technical manuals, and filings—to surface precise passages and answers, dramatically accelerating research and discovery cycles.",
        keyFeatures: [
          "Smart Document Understanding (SDU) visual model trainer",
          "Entity, concept, and relationship extraction across massive corpuses",
          "Relevance training that adapts to your organization's specialized vernacular",
          "Out-of-the-box connectors for Box, SharePoint, Salesforce, and Cloud Storage",
        ],
        useCases: [
          "Contract lifecycle and regulatory compliance risk identification",
          "Engineering maintenance manual troubleshooting and root-cause search",
          "Medical and scientific literature review acceleration",
        ],
      },
    },
    {
      id: "code-assistant",
      title: "IBM watsonx Code Assistant",
      badge: "AI Code Companion",
      icon: Code2,
      description:
        "IBM watsonx Code Assistant is an AI-powered coding companion that accelerates software development by generating high-quality code, automating repetitive tasks, and providing intelligent recommendations. Built on IBM's watsonx AI foundation models, it helps developers write cleaner code faster, reduce errors, and maintain consistency across projects—transforming how teams build, test, and deploy enterprise applications.",
      highlights: [
        "AI Foundation Models",
        "Code Generation & Refactoring",
        "Enterprise Governance",
      ],
      impactMetric: { value: "2x+", label: "Development Velocity" },
      modalDetails: {
        overview:
          "watsonx Code Assistant empowers software and infrastructure engineers with purpose-built foundation models trained on trusted, vetted enterprise codebases, dramatically shrinking release cycles while maintaining code hygiene.",
        keyFeatures: [
          "watsonx Code Assistant for Red Hat Ansible Lightspeed IT automation",
          "watsonx Code Assistant for Z mainframe modernization and COBOL-to-Java translation",
          "Full code provenance filter to ensure licensing compliance",
          "Direct integration into VS Code, Eclipse, and standard modern developer IDEs",
        ],
        useCases: [
          "Generating production-grade Ansible playbooks from natural language instructions",
          "Modernizing legacy enterprise systems with automated language translation",
          "Automating unit test authoring and legacy codebase documentation",
        ],
      },
    },
  ],
  "data-ai": [
    {
      id: "watsonx-data",
      title: "IBM Data & AI Watsonx.data",
      badge: "Data Lakehouse",
      icon: Database,
      description:
        "IBM watsonx.data is a next-generation data store built for the AI era, enabling enterprises to unify and govern distributed data across hybrid cloud environments. Powered by an open data lakehouse architecture, it provides high-performance analytics and AI-ready data infrastructure while significantly reducing costs through intelligent workload optimization and open data formats.",
      highlights: [
        "Open Data Lakehouse",
        "Hybrid Cloud Querying",
        "Cost Optimization",
      ],
      impactMetric: { value: "60%", label: "Compute & Storage Savings" },
      modalDetails: {
        overview:
          "watsonx.data is built on open standards (Apache Iceberg and Presto/Trino), allowing organizations to query vast datasets directly where they reside without expensive duplicate data pipelines or vendor lock-in.",
        keyFeatures: [
          "Single pane-of-glass governance across on-prem, AWS, Azure, and IBM Cloud",
          "Support for Parquet, Avro, and ORC open table formats with schema evolution",
          "Built-in metadata integration with IBM Knowledge Catalog",
          "Integrated vector database capabilities for enterprise GenAI grounding",
        ],
        useCases: [
          "Multi-cloud analytical query federation without data movement",
          "Real-time business intelligence across petabyte-scale transaction logs",
          "Grounding enterprise RAG models on trusted, governed corporate records",
        ],
      },
    },
    {
      id: "watsonx-ai",
      title: "IBM Data & AI Watsonx.ai",
      badge: "Enterprise AI",
      icon: BrainCircuit,
      description:
        "IBM watsonx.ai is an enterprise-ready AI and data platform that accelerates the development, deployment, and governance of AI models at scale. Combining IBM's cutting-edge foundation models with robust machine learning capabilities, it empowers organizations to build, customize, and operationalize AI solutions while maintaining full control over data security, model transparency, and compliance.",
      highlights: [
        "Foundation Models",
        "ML Studio & Tuning",
        "Model Transparency",
      ],
      impactMetric: { value: "10x", label: "Faster Deployment Cycles" },
      modalDetails: {
        overview:
          "watsonx.ai brings together next-generation foundation models—including the Granite family—and automated machine learning pipelines into a studio engineered for rigorous enterprise compliance and custom fine-tuning.",
        keyFeatures: [
          "Access to IBM Granite models and curated open-source models from Hugging Face",
          "Prompt Lab with few-shot prompting, parameter tuning, and comparative evaluation",
          "Tuning Studio for efficient PEFT/LoRA parameter tuning on proprietary data",
          "Complete indemnification protection for IBM-developed foundation models",
        ],
        useCases: [
          "Domain-specific enterprise summarization and classification",
          "Customer experience workflow augmentation with grounded domain reasoning",
          "Automated financial report synthesis and compliance verification",
        ],
      },
    },
    {
      id: "watsonx-gov",
      title: "IBM Data & AI Watsonx.gov",
      badge: "AI Governance",
      icon: Building,
      description:
        "IBM watsonx.gov is a secure, AI-powered data and analytics platform designed specifically for government agencies, providing FedRAMP-authorized AI tools to transform public sector decision-making. This specialized solution enables agencies to harness sensitive data responsibly—delivering mission-critical insights while meeting strict compliance requirements for data sovereignty, auditability, and ethical AI deployment in government operations.",
      highlights: [
        "FedRAMP Authorized",
        "Auditability & Guardrails",
        "Public Sector Ready",
      ],
      impactMetric: { value: "100%", label: "Governance Compliance" },
      modalDetails: {
        overview:
          "watsonx.gov provides end-to-end lifecycle governance for machine learning and generative AI, enabling enterprises and public-sector institutions to automate model monitoring, detect bias, and satisfy strict regulatory audits.",
        keyFeatures: [
          "Automated model risk evaluation, drift detection, and fairness scoring",
          "Automated fact-sheets and compliance documentation for AI auditors",
          "Policy enforcement preventing unauthorized model deployment or toxic prompt outputs",
          "FedRAMP-authorized infrastructure ensuring sovereignty for sensitive agency data",
        ],
        useCases: [
          "Public agency compliance reporting under NIST AI Risk Management Framework",
          "Continuous ethical and bias auditing across credit, loan, and benefit decisions",
          "Mission-critical intelligence synthesis with strict confidentiality controls",
        ],
      },
    },
  ],
  security: [
    {
      id: "verify-privilege",
      title: "IBM Security Verify Privilege",
      badge: "Privileged Access",
      icon: KeyRound,
      description:
        "Proactive protection for privileged accounts. IBM Security Verify Privilege Vault helps organizations manage, automate, and track the use of shared privileged identities from a scalable, multi-tenant cloud platform. Security Verify Access supports authentication, authorization, data security, and resource management capabilities. You use Security Verify Access in conjunction with standard internet-based applications to build highly secure and well-managed intranets.",
      highlights: [
        "Privileged Access Vault",
        "Automated Credential Rotation",
        "Intranet Access Control",
      ],
      impactMetric: { value: "99.9%", label: "Privilege Security Score" },
      modalDetails: {
        overview:
          "Verify Privilege establishes ironclad control over administrative accounts, service credentials, and secrets, mitigating credential harvesting and lateral adversary movement across hybrid cloud perimeters.",
        keyFeatures: [
          "Zero-trust credential discovery, automated vaulting, and session recording",
          "Context-aware continuous authentication with biometrics and FIDO2 keys",
          "Automated just-in-time (JIT) access privilege elevation and revocation",
          "Seamless enterprise directory federation (Active Directory, Okta, Ping)",
        ],
        useCases: [
          "Protecting administrative root credentials across multi-cloud clusters",
          "Third-party vendor privileged access auditing and recorded session replay",
          "Meeting PCI-DSS and NIST 800-53 privileged account security mandates",
        ],
      },
    },
    {
      id: "qradar-soar",
      title: "IBM Security QRadar SOAR",
      badge: "Security SOAR",
      icon: ShieldAlert,
      description:
        "IBM Security QRadar SOAR is built on a platform that automatically enriches and correlates alerts. The QRadar platform ingests alerts from multiple sources, enriches the alerts with context that is used to prioritize those alerts, and correlates the alerts together into a case",
      highlights: [
        "Automated Case Correlation",
        "Alert Enrichment",
        "Rapid Playbook Execution",
      ],
      impactMetric: { value: "85%", label: "Faster MTTR Incident Triage" },
      modalDetails: {
        overview:
          "QRadar SOAR arms security operations centers (SOCs) with automated playbooks and AI enrichment, empowering analysts to contain complex cyber incidents with speed and consistency.",
        keyFeatures: [
          "Dynamic playbook engine that adapts containment steps based on real-time IOCs",
          "Over 300+ pre-built technology integrations across firewalls, EDR, and cloud platforms",
          "Comprehensive breach notification simulation covering 180+ global privacy laws",
          "Collaborative war-room case management with granular timeline auditing",
        ],
        useCases: [
          "Automated phishing triage, URL sandbox detonation, and mailbox purge",
          "Ransomware endpoint containment and lateral quarantine execution",
          "Regulatory breach notification reporting within required 72-hour windows",
        ],
      },
    },
    {
      id: "verify",
      title: "IBM Security Verify",
      badge: "Identity & Access",
      icon: Shield,
      description:
        "Safeguard sensitive data, applications, and systems from unauthorized access, ensuring the confidentiality, integrity, and availability of resources",
      highlights: [
        "Zero-Trust Identity",
        "Adaptive MFA",
        "SSO & Passwordless",
      ],
      impactMetric: { value: "100%", label: "Asset Protection Coverage" },
      modalDetails: {
        overview:
          "IBM Security Verify is an enterprise cloud identity platform that protects consumers and employees alike with friction-free, adaptive AI authentication and comprehensive access governance.",
        keyFeatures: [
          "Context-aware adaptive access risk scoring based on device and location signals",
          "Universal Single Sign-On (SSO) with federated SAML/OIDC across thousands of apps",
          "Privacy and consent management aligned with GDPR and CCPA directives",
          "Automated user lifecycle onboarding, access certification, and de-provisioning",
        ],
        useCases: [
          "Modernizing legacy employee VPN and intranet login portals with passwordless MFA",
          "Delivering seamless, secure digital experiences for millions of consumer logins",
          "Continuous zero-trust authorization for distributed remote workforces",
        ],
      },
    },
    {
      id: "qradar",
      title: "IBM Security QRadar",
      badge: "Threat Defense",
      icon: Radar,
      description:
        "Protect Your Critical Attack Surface! Streamline security operations with simple deployment, effortless integrations, and regular app and security content updates",
      highlights: [
        "Log Analytics & SIEM",
        "Attack Surface Defense",
        "Regular Content Updates",
      ],
      impactMetric: { value: "24/7", label: "Real-Time Telemetry" },
      modalDetails: {
        overview:
          "IBM Security QRadar SIEM centralizes security telemetry across network devices, servers, cloud workloads, and endpoints, converting billions of raw events into actionable prioritized offenses.",
        keyFeatures: [
          "High-performance distributed log ingestion and automated correlation rules",
          "Sense analytics detecting anomalous network flow patterns and data exfiltration",
          "IBM X-Force threat intelligence feed integration updated around the clock",
          "App exchange catalog with extensions for AWS, Microsoft, and Cisco ecosystems",
        ],
        useCases: [
          "Centralized compliance audit logging across hybrid enterprise architectures",
          "Proactive insider threat hunting and anomalous data access identification",
          "Real-time network behavior anomaly detection and perimeter defense",
        ],
      },
    },
    {
      id: "randori",
      title: "IBM Randori",
      badge: "Attack Surface",
      icon: Target,
      description:
        "Uncover your external attack surface risks, before attackers do! Enterprise attack surface continues to expand with digital transformation. While organizations have succeeded in fixing known vulnerabilities on managed organizational assets: the rapid adoption of hybrid cloud models and an increasingly remote workforce have made it near impossible for security teams to manage an expanding attack surface.",
      highlights: [
        "External Surface Recon",
        "Shadow IT Discovery",
        "Attacker Perspective",
      ],
      impactMetric: { value: "98%", label: "Exposed Asset Discovery" },
      modalDetails: {
        overview:
          "Randori Recon continuously discovers unknown external-facing assets, APIs, and cloud services through adversary emulation, giving defense teams an authentic view of their true attack surface.",
        keyFeatures: [
          "Zero-installation outside-in continuous reconnaissance of public IPs and domains",
          "Target Temptation metric calculating which assets an attacker is most likely to strike",
          "Automated detection of shadow IT, forgotten test servers, and misconfigured S3 buckets",
          "Bidirectional sync with QRadar, Jira, and enterprise SIEM/SOAR platforms",
        ],
        useCases: [
          "Continuous M&A external security posture and digital risk assessment",
          "Eliminating blind spots created by multi-cloud infrastructure sprawl",
          "Prioritizing vulnerability patching based on actual adversary exploitability",
        ],
      },
    },
  ],
  sustainability: [
    {
      id: "maximo",
      title: "IBM Maximo",
      badge: "Asset Management",
      icon: Gauge,
      description:
        "IBM Maximo is a comprehensive Enterprise Asset Management (EAM) and Computerized Maintenance Management System (CMMS) software solution developed by IBM. It helps organizations manage, monitor, and optimize their physical assets, maintenance operations, and workflows efficiently.",
      highlights: [
        "Predictive Asset Health",
        "CMMS Work Order Systems",
        "Operational Sustainability",
      ],
      impactMetric: { value: "43%", label: "Unplanned Downtime Reduction" },
      modalDetails: {
        overview:
          "IBM Maximo Application Suite (MAS) unifies asset monitoring, predictive maintenance, and computer vision inspections into a single cloud-native platform that extends asset lifespans and reduces carbon overhead.",
        keyFeatures: [
          "Predictive maintenance models using IoT vibration, temperature, and acoustic telemetry",
          "Mobile-first technician app with offline schematics, parts ordering, and checklists",
          "Computer vision defect inspection powered by edge machine learning models",
          "Carbon accounting and environmental sustainability workflow integration",
        ],
        useCases: [
          "Fleet, railway, and aerospace asset lifecycle reliability and overhaul scheduling",
          "Manufacturing plant preventative maintenance preventing costly line stoppages",
          "Smart building HVAC and energy efficiency optimization for ESG compliance",
        ],
      },
    },
  ],
};

const PRODUCT_IMAGE_MAP: Record<string, string> = {
  // Automation
  orchestrate: "/images/products/ibm-automation-card.jpg",
  assistant: "/images/products/ai-mesh-face.jpg",
  discovery: "/images/products/powering_ibm.jpg",
  "code-assistant": "/images/Hero/Hero8.webp",

  // Data & AI
  data: "/images/products/ibm-data-ai-card.jpg",
  ai: "/images/products/ai-mesh-face.jpg",
  gov: "/images/products/powering_ibm.jpg",

  // Security
  verify: "/images/products/ibm-security-card.jpg",
  guardium: "/images/products/powering_security.jpg",
  "qradar-siem": "/images/products/ai-mesh-face.jpg",
  "qradar-soar": "/images/Hero/Hero8.webp",
  randori: "/images/products/powering_ibm.jpg",

  // Sustainability
  envizi: "/images/products/ibm-sustainability-card.jpg",
  maximo: "/images/products/powering_ibm.jpg",
  tririga: "/images/products/powering_security.jpg",
};

const SLUG_FALLBACK_IMAGES: Record<string, string> = {
  automation: "/images/products/ibm-automation-card.jpg",
  "data-ai": "/images/products/ibm-data-ai-card.jpg",
  security: "/images/products/ibm-security-card.jpg",
  sustainability: "/images/products/ibm-sustainability-card.jpg",
};

const PRODUCT_ILLUSTRATION_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  // Automation
  orchestrate: BusinessStrategyEssentials1,
  assistant: WorkCommunicationIllustration,
  discovery: ProfessionalLeader1,
  "code-assistant": ProfessionalEmployeeEssentials12,

  // Data & AI
  "watsonx-data": BusinessStrategyEssentials1,
  data: BusinessStrategyEssentials1,
  "watsonx-ai": ProfessionalLeader1,
  ai: ProfessionalLeader1,
  "watsonx-gov": ProfessionalEmployeeEssentials12,
  gov: ProfessionalEmployeeEssentials12,

  // Security
  "verify-privilege": ProfessionalLeader1,
  "qradar-soar": BusinessStrategyEssentials1,
  verify: ProfessionalEmployeeEssentials12,
  qradar: WorkCommunicationIllustration,
  "qradar-siem": WorkCommunicationIllustration,
  randori: ProfessionalLeader1,

  // Sustainability
  maximo: ProfessionalEmployeeEssentials12,
  envizi: BusinessStrategyEssentials1,
  tririga: WorkCommunicationIllustration,
};

function IbmProductHoverCard({
  product,
  fallbackImage,
  slug,
}: {
  product: ProductCardItem;
  fallbackImage: string;
  slug: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComp = product.icon;
  const imageSrc = product.image || fallbackImage;
  const IllustrationComp =
    PRODUCT_ILLUSTRATION_MAP[product.id] || BusinessStrategyEssentials1;

  return (
    <Link
      href={`/products/ibm/${slug}/${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[24px] cursor-pointer select-none border border-slate-200/80 hover:border-cyan-400/50 bg-[#03132e] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/15 min-h-[470px] sm:min-h-[510px] w-full block"
    >
      {/* 1. Ambient Background Image with Deep Gradient */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full opacity-20"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image
          src={imageSrc}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. Deep Gradient Mask */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#061838]/85 via-[#031026]/90 to-[#020a1a] pointer-events-none" />

      {/* 3. Top Floating Metric Pill (Right-aligned ONLY, top-left pills removed) */}
      <div className="relative top-4 right-4 z-20 flex items-center justify-end pointer-events-none px-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md bg-slate-900/80 text-white border border-white/20 shadow-lg">
          {product.impactMetric.value} {product.impactMetric.label}
        </span>
      </div>

      {/* 4. Center Vector Illustration from components folder */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-2 pb-4 px-6 overflow-hidden pointer-events-none min-h-[175px]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute size-44 rounded-full bg-[#00a7e1]/15 blur-2xl pointer-events-none" />
        <motion.div
          className="relative z-10 w-28 sm:w-32 md:w-36 max-h-[160px] flex items-center justify-center text-cyan-300 drop-shadow-[0_8px_20px_rgba(0,167,225,0.35)]"
          animate={{
            scale: isHovered ? 1.08 : 1,
            y: isHovered ? -3 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <IllustrationComp className="w-full h-auto text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300" />
        </motion.div>
      </div>

      {/* 5. Framer Glassmorphism Bottom Information Overlay */}
      <div className="relative z-20 p-3 sm:p-4 w-full">
        <motion.div
          className="w-full rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/20 bg-slate-900/60 backdrop-blur-md shadow-2xl transition-all duration-300"
          animate={{
            backgroundColor: isHovered
              ? "rgba(15, 23, 42, 0.85)"
              : "rgba(15, 23, 42, 0.60)",
            borderColor: isHovered
              ? "rgba(255, 255, 255, 0.35)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Card Header: Role Tag + Title & 180° Rotating Arrow Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase text-white mb-2 bg-white/10 backdrop-blur-md whitespace-nowrap shrink-0 max-w-full">
                {product.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                {product.title}
              </h3>
            </div>

            {/* Framer 180° Rotating Arrow Button */}
            <motion.div
              className="size-9 sm:size-10 rounded-full flex items-center justify-center shrink-0 border border-white/25 bg-white/10 text-white shadow-md"
              animate={{
                rotate: isHovered ? 180 : 0,
                backgroundColor: isHovered ? "#00a7e1" : "rgba(255, 255, 255, 0.1)",
                borderColor: isHovered ? "#38bdf8" : "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
              }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              <ArrowUpRight className="size-4 sm:size-5" />
            </motion.div>
          </div>

          {/* 4. Revealable Content on Hover: Description & Highlights & Learn More */}
          <AnimatePresence initial={false}>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 12,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
              >
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light mb-3 line-clamp-3">
                  {product.description}
                </p>

                {/* Highlights Pills */}
                <div className="pt-2.5 border-t border-white/15 flex flex-wrap items-center gap-1.5 mb-3">
                  {product.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/10 text-slate-100 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA to open dedicated product page */}
                <div className="flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200 pt-1">
                  <span>Learn More & View Specs</span>
                  <span className="text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Link>
  );
}

export default function IbmProductLayout({
  slug,
  data,
}: {
  slug: string;
  data: ProductDetailData;
}) {
  const normalizedSlug = slug === "data-and-ai" || slug === "dataai" ? "data-ai" : slug;
  const products = IBM_PRODUCTS_BY_SLUG[normalizedSlug] || IBM_PRODUCTS_BY_SLUG.automation;

  const breadcrumbText = data.hero.title.toUpperCase();

  // Grid layout class determination: sleek, slim cards matching Data & AI and Security
  let gridColsClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto";
  if (products.length === 1) {
    gridColsClass = "flex justify-center max-w-md mx-auto";
  } else if (products.length === 3) {
    gridColsClass = "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto";
  } else if (products.length === 4) {
    gridColsClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto";
  } else if (products.length === 5) {
    gridColsClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto";
  }

  return (
    <main className="w-full min-h-screen bg-[#F8F9FB]">
      {/* 1. Hero Section - EXACT SAME BACKGROUND AS CSM HERO SECTION */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 flex items-center overflow-hidden">
        {/* Background Image: Identical to CSM Hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/Hero8.webp"
            alt={`${data.hero.title} Hero Background`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#031B3D]/75 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-[#00a7e1] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <Link href="/products" className="hover:text-white transition-colors">
                PRODUCTS
              </Link>
              <span>›</span>
              <span className="text-white">IBM</span>
              <span>›</span>
              <span className="text-[#00a7e1]">{breadcrumbText}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {data.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="bg-[#00a7e1] hover:bg-[#008dbf] text-white rounded-md px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00a7e1]/30 transition-all hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("products-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore {data.hero.title} Products
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-md px-7 py-3 text-sm font-semibold transition-all hover:scale-105 backdrop-blur-xs"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Products Section */}
      <section id="products-grid" className="py-20 sm:py-28 border-b border-slate-200/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00a7e1]/10 text-[#00a7e1] border border-[#00a7e1]/20 mb-4">
              <Sparkles className="size-3.5" />
              IBM Enterprise Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031B3D] tracking-tight mb-4">
              {data.featuredSolutions.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Enterprise-grade cognitive intelligence, data management, and operational security
              designed to accelerate performance, compliance, and strategic outcomes.
            </p>
          </div>

          {/* Cards Grid */}
          <div className={gridColsClass}>
            {products.map((product) => {
              const fallback =
                PRODUCT_IMAGE_MAP[product.id] ||
                SLUG_FALLBACK_IMAGES[normalizedSlug] ||
                "/images/products/ibm-automation-card.jpg";
              return (
                <IbmProductHoverCard
                  key={product.id}
                  product={product}
                  fallbackImage={fallback}
                  slug={normalizedSlug}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
