export type ServiceFeaturedSolution = {
  title: string;
  description: string;
  image: string;
};

export type ServiceWhyChoosePoint = {
  title: string;
  description: string;
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  categoryTag?: string;
};

export type ServicePricingPlan = {
  name: string;
  price: string;
  isPopular?: boolean;
  features: Array<{ name: string; included: boolean }>;
};

export type ServiceDetailData = {
  id: string;
  category: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  featuredSolutions?: {
    title: string;
    items: ServiceFeaturedSolution[];
  };
  whyChoose?: {
    title: string;
    image: string;
    badgeText: string;
    points: ServiceWhyChoosePoint[];
  };
  metrics?: ServiceMetric[];
  testimonials?: {
    title: string;
    image: string;
    items: ServiceTestimonial[];
  };
  pricing?: {
    title: string;
    plans: ServicePricingPlan[];
  };
  cta?: {
    title: string;
    image: string;
  };
};

export const SERVICES_DATA: Record<string, ServiceDetailData> = {
  all: {
    id: "services-all",
    category: "Services",
    slug: "all",
    hero: {
      title: "Our Enterprise Services",
      subtitle:
        "From Cybersecurity to Cloud, AI & Automation — we deliver scalable, mission-critical services that drive measurable business velocity and resilience.",
    },
    featuredSolutions: {
      title: "Core Service Practice Areas",
      items: [
        {
          title: "Cybersecurity & SOC",
          description: "Managed detection, incident containment, zero-trust perimeters, and regulatory compliance.",
          image: "/images/products/powering_security.jpg",
        },
        {
          title: "Cloud & Hybrid DevOps",
          description: "Multi-cloud architecture, zero-downtime migrations, and automated FinOps governance.",
          image: "/images/products/powering_ibm.jpg",
        },
        {
          title: "AI & Intelligent Automation",
          description: "Autonomous customer care agents, private LLM tuning, and cognitive RPA pipelines.",
          image: "/images/products/ibm-automation-card.jpg",
        },
        {
          title: "Strategic Consulting",
          description: "Modernization blueprints, operating model transformations, and principal architect reviews.",
          image: "/images/products/powering_sps.jpg",
        },
      ],
    },
    whyChoose: {
      title: "Why Global Enterprises Choose SPS",
      image: "/images/products/powering_sps.jpg",
      badgeText: "25+\nYears Trusted",
      points: [
        {
          title: "Battle-Tested Delivery",
          description: "Over two decades architecting resilient infrastructure for Fortune 500s and public institutions.",
        },
        {
          title: "Zero-Downtime Guarantee",
          description: "Seamless migration protocols and proactive SRE monitoring to keep operations uninterrupted.",
        },
        {
          title: "Certified Principal Engineers",
          description: "Certified architects across AWS, Azure, Google Cloud, IBM Cloud, and leading security frameworks.",
        },
        {
          title: "Vendor-Neutral Advisory",
          description: "Unbiased technical counsel designed purely around your ROI, security, and long-term scaling.",
        },
      ],
    },
    metrics: [
      { value: "99.99%", label: "Uptime Commitment" },
      { value: "500+", label: "Projects Delivered" },
      { value: "4.8x", label: "Average Client ROI" },
      { value: "24/7", label: "Active Telemetry" },
    ],
    testimonials: {
      title: "What Industry Leaders Say About SPS",
      image: "/images/products/sarah-liu.jpg",
      items: [
        {
          quote:
            "SPS transformed our monolithic core into an agile hybrid-cloud architecture, reducing our cloud spend by 45% while boosting release cadence by 3x.",
          author: "Marcus Vance",
          role: "Chief Technology Officer",
          company: "FinTech Global",
          avatar: "/images/avatar/memoji1.jpg",
          categoryTag: "Cloud Modernization",
        },
        {
          quote:
            "Their 24/7 managed SOC detected and contained a critical supply chain zero-day within minutes. SPS is our most dependable security partner.",
          author: "Sarah Liu",
          role: "Head of Information Security",
          company: "HealthCore Systems",
          avatar: "/images/avatar/memoji2.jpg",
          categoryTag: "Cybersecurity",
        },
        {
          quote:
            "Deploying autonomous agents with SPS reduced customer tier-1 resolution time from hours to seconds with zero hallucinations.",
          author: "Kenneth Fong",
          role: "VP of Digital Innovation",
          company: "Nexus Logistics",
          avatar: "/images/avatar/memoji3.jpg",
          categoryTag: "AI & Automation",
        },
      ],
    },
    pricing: {
      title: "Flexible Engagement Models",
      plans: [
        {
          name: "Standard Advisory",
          price: "$4,500",
          isPopular: false,
          features: [
            { name: "Quarterly Architecture Audit", included: true },
            { name: "Infrastructure Cost Optimization", included: true },
            { name: "Standard 8x5 Engineer Support", included: true },
            { name: "24/7 SOC Threat Hunting", included: false },
            { name: "Dedicated Delivery Pod", included: false },
          ],
        },
        {
          name: "Enterprise Retainer",
          price: "$9,800",
          isPopular: true,
          features: [
            { name: "24/7 Managed SOC & Incident Response", included: true },
            { name: "Dedicated Full-Stack Engineering Pod", included: true },
            { name: "Multi-Cloud FinOps & SLA Governance", included: true },
            { name: "Custom AI Agent Configuration", included: true },
            { name: "Quarterly C-Suite Advisory Reviews", included: true },
          ],
        },
        {
          name: "Custom Turnkey",
          price: "Custom",
          isPopular: false,
          features: [
            { name: "Full Lift-and-Shape Cloud Cutover", included: true },
            { name: "Air-Gapped Private Model Fine-Tuning", included: true },
            { name: "Embedded Principal Solution Architect", included: true },
            { name: "Custom Regulatory Audit Defense", included: true },
            { name: "100% Dedicated Global SRE Team", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Ready to Accelerate Your Enterprise Transformation?",
      image: "/images/products/powering_ibm.jpg",
    },
  },

  cybersecurity: {
    id: "services-cybersecurity",
    category: "Cybersecurity",
    slug: "cybersecurity",
    hero: {
      title: "Cybersecurity & Zero-Trust Defense",
      subtitle:
        "Defend hybrid cloud perimeters, enforce continuous identity verification, and orchestrate rapid automated threat mitigation across modern enterprise surfaces.",
    },
    featuredSolutions: {
      title: "Key Cybersecurity Capabilities",
      items: [
        {
          title: "24/7 Managed Detection (MDR)",
          description: "Proactive telemetry correlation across endpoints, cloud logs, and perimeters powered by automated SIEM & SOAR playbooks.",
          image: "/images/products/powering_security.jpg",
        },
        {
          title: "Zero-Trust Identity Mesh",
          description: "Continuous adaptive authentication, least-privilege role boundaries, and micro-segmentation across distributed microservices.",
          image: "/images/products/ibm-security-card.jpg",
        },
        {
          title: "Ransomware Containment",
          description: "Automated behavioral heuristics isolating compromised endpoints in milliseconds to prevent lateral movement.",
          image: "/images/products/powering_ibm.jpg",
        },
        {
          title: "Compliance & GRC Automation",
          description: "Continuous audit reporting and automated policy enforcement for HIPAA, SOC 2, ISO 27001, and NIST frameworks.",
          image: "/images/products/powering_sps.jpg",
        },
      ],
    },
    whyChoose: {
      title: "Why SPS Leads in Enterprise Defense",
      image: "/images/products/powering_security.jpg",
      badgeText: "<15m\nMTTC",
      points: [
        {
          title: "24/7/365 Global SOC",
          description: "Continuous threat monitoring by seasoned offensive and defensive security specialists.",
        },
        {
          title: "Sub-15 Minute Containment",
          description: "Industry-leading Mean Time to Containment through automated threat response playbooks.",
        },
        {
          title: "Zero-Trust Architecture",
          description: "Never trust, always verify — protecting identities, applications, and hybrid data stores.",
        },
        {
          title: "Regulatory Assurance",
          description: "Guaranteed audit readiness with continuous compliance evidence generation.",
        },
      ],
    },
    metrics: [
      { value: "<15m", label: "Containment Time" },
      { value: "99.99%", label: "Zero-Trust Coverage" },
      { value: "24/7", label: "SOC Telemetry" },
      { value: "100%", label: "Compliance Score" },
    ],
    testimonials: {
      title: "Client Trust & Defense Case Studies",
      image: "/images/products/sarah-liu.jpg",
      items: [
        {
          quote:
            "SPS Managed Detection and Response mitigated an advanced credential stuffing attack across our cloud infrastructure without a second of downtime.",
          author: "Sarah Liu",
          role: "CISO",
          company: "HealthCore Systems",
          avatar: "/images/avatar/memoji2.jpg",
          categoryTag: "Zero-Trust Defense",
        },
        {
          quote:
            "Their automated compliance tooling saved our engineering team over 300 hours during our annual SOC 2 Type II audit.",
          author: "Kenneth Fong",
          role: "Security Engineering Director",
          company: "Nexus Logistics",
          avatar: "/images/avatar/memoji3.jpg",
          categoryTag: "GRC Automation",
        },
      ],
    },
    pricing: {
      title: "Cybersecurity Service Plans",
      plans: [
        {
          name: "Vulnerability Assessment",
          price: "$3,900",
          isPopular: false,
          features: [
            { name: "External Perimeter Scan", included: true },
            { name: "Cloud Configuration Audit", included: true },
            { name: "Executive Remediation Report", included: true },
            { name: "24/7 SOC Telemetry", included: false },
            { name: "Automated SOAR Playbooks", included: false },
          ],
        },
        {
          name: "Managed SOC Pro",
          price: "$8,500",
          isPopular: true,
          features: [
            { name: "24/7/365 Managed SIEM/SOC", included: true },
            { name: "Sub-15m Containment Guarantee", included: true },
            { name: "Endpoint Detection & Response (EDR)", included: true },
            { name: "Continuous Compliance Monitoring", included: true },
            { name: "Dedicated Incident Commander", included: true },
          ],
        },
        {
          name: "Complete Zero-Trust Mesh",
          price: "Custom",
          isPopular: false,
          features: [
            { name: "Full Zero-Trust Architecture", included: true },
            { name: "Identity & Access Mesh Integration", included: true },
            { name: "Threat Hunting & Red Teaming", included: true },
            { name: "Air-Gapped Data Protection", included: true },
            { name: "Unlimited Incident Remediation", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Request a Comprehensive Vulnerability Assessment",
      image: "/images/products/powering_security.jpg",
    },
  },

  cloud: {
    id: "services-cloud",
    category: "Cloud",
    slug: "cloud",
    hero: {
      title: "Cloud & Hybrid Infrastructure",
      subtitle:
        "Modernize legacy workloads, automate deployment pipelines, and optimize multi-cloud infrastructure with scalable, resilient cloud architectures.",
    },
    featuredSolutions: {
      title: "Enterprise Cloud Practices",
      items: [
        {
          title: "Multi-Cloud Kubernetes Fabric",
          description: "Declarative infrastructure as code with automated cluster provisioning, service mesh, and unified observability.",
          image: "/images/products/powering_ibm.jpg",
        },
        {
          title: "Zero-Downtime Cloud Migration",
          description: "Lift-and-shape pipelines migrating on-prem databases and enterprise applications with continuous data synchronization.",
          image: "/images/products/ms_illustration.png",
        },
        {
          title: "Automated FinOps Governance",
          description: "Machine learning cost monitors tracking resource idle capacity, right-sizing VM clusters, and securing spot arbitrage.",
          image: "/images/products/sps_illustration.png",
        },
        {
          title: "CI/CD & GitOps Automation",
          description: "High-velocity pipeline engineering ensuring immutable releases, automated rollback policies, and security guardrails.",
          image: "/images/products/powering_sps.jpg",
        },
      ],
    },
    whyChoose: {
      title: "Why Migrate & Scale with SPS",
      image: "/images/products/powering_ibm.jpg",
      badgeText: "45%\nCost Cut",
      points: [
        {
          title: "Multi-Cloud Expertise",
          description: "Certified architects across AWS, Azure, Google Cloud, and IBM Cloud.",
        },
        {
          title: "Zero Data Loss Cutover",
          description: "Replication frameworks guaranteeing zero downtime and zero data loss windows.",
        },
        {
          title: "Aggressive Cost Reduction",
          description: "Average 45% reduction in ongoing monthly cloud operational expenditures.",
        },
        {
          title: "24/7 Global SRE",
          description: "Continuous telemetry and site reliability engineering monitoring every transaction.",
        },
      ],
    },
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "45%", label: "Average Cost Reduction" },
      { value: "3.5x", label: "Faster Deployments" },
      { value: "24/7", label: "Cloud SRE Telemetry" },
    ],
    testimonials: {
      title: "What Engineering Leaders Say About SPS Cloud",
      image: "/images/products/marcus-vance.png",
      items: [
        {
          quote:
            "Migrating our mission-critical data lake to hybrid cloud with SPS was the smoothest engineering cutover we've ever experienced.",
          author: "Marcus Vance",
          role: "CTO",
          company: "FinTech Global",
          avatar: "/images/avatar/memoji1.jpg",
          categoryTag: "Cloud Modernization",
        },
      ],
    },
    pricing: {
      title: "Cloud Infrastructure Engagements",
      plans: [
        {
          name: "Cloud Architecture Audit",
          price: "$4,200",
          isPopular: false,
          features: [
            { name: "Multi-Cloud Resource Inventory", included: true },
            { name: "FinOps Cost Waste Identification", included: true },
            { name: "Security & IaC Gap Analysis", included: true },
            { name: "Hands-on SRE Pod", included: false },
            { name: "Automated Kubernetes Pipeline", included: false },
          ],
        },
        {
          name: "Cloud SRE & FinOps",
          price: "$8,900",
          isPopular: true,
          features: [
            { name: "24/7 SRE Uptime Governance", included: true },
            { name: "Automated FinOps Cost Trimming", included: true },
            { name: "Kubernetes Cluster Management", included: true },
            { name: "GitOps Continuous Deployment", included: true },
            { name: "Dedicated Lead Cloud Architect", included: true },
          ],
        },
        {
          name: "Full Cloud Modernization",
          price: "Custom",
          isPopular: false,
          features: [
            { name: "Turnkey Monolith to Microservices", included: true },
            { name: "Zero-Downtime Database Migration", included: true },
            { name: "Multi-Region Active-Active DR", included: true },
            { name: "Custom Platform Engineering", included: true },
            { name: "Guaranteed SLA & Performance", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Schedule Your Enterprise Cloud Architecture Review",
      image: "/images/products/powering_ibm.jpg",
    },
  },

  "ai-automation": {
    id: "services-ai-automation",
    category: "AI & Automation",
    slug: "ai-automation",
    hero: {
      title: "AI & Intelligent Automation Services",
      subtitle:
        "Accelerate operations with intelligent autonomous agents, custom fine-tuned generative AI pipelines, and cognitive robotic process automation.",
    },
    featuredSolutions: {
      title: "Intelligent Automation Practice",
      items: [
        {
          title: "Multi-Agent System Orchestration",
          description: "Collaborative teams of specialized AI agents planning, executing, and peer-reviewing complex multi-step workflows.",
          image: "/images/products/ibm-automation-card.jpg",
        },
        {
          title: "Enterprise RAG & Domain Knowledge",
          description: "Air-gapped vector retrieval pipelines connecting proprietary manuals, databases, and policies to hallucination-free models.",
          image: "/images/products/ibm-data-ai-card.jpg",
        },
        {
          title: "Private Model Fine-Tuning",
          description: "Custom parameter-efficient fine-tuning (PEFT/LoRA) preserving complete data sovereignty and zero public telemetry.",
          image: "/images/products/ai-mesh-face.jpg",
        },
        {
          title: "Cognitive RPA Connectors",
          description: "AI vision and natural language connectors bridging legacy green-screen terminals, desktop software, and modern cloud APIs.",
          image: "/images/products/ms_illustration.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Build AI Workflows with SPS",
      image: "/images/products/ibm-automation-card.jpg",
      badgeText: "99.4%\nAccuracy",
      points: [
        {
          title: "Hallucination-Free Reasoning",
          description: "Strict vector grounding and verification layers ensuring verifiably accurate outputs.",
        },
        {
          title: "Air-Gapped Privacy",
          description: "Deploy private models entirely within your VPC or on-prem hardware with zero telemetry leaks.",
        },
        {
          title: "Legacy-to-Cloud Interop",
          description: "Connect modern LLMs directly to mainframe systems, SAP, Salesforce, and custom SQL stores.",
        },
        {
          title: "Measurable ROI",
          description: "Immediate operational cost reductions and up to 10x process throughput acceleration.",
        },
      ],
    },
    metrics: [
      { value: "80%", label: "Manual Effort Reduction" },
      { value: "99.4%", label: "Intent Accuracy" },
      { value: "10x", label: "Process Velocity" },
      { value: "Zero", label: "Data Leakage" },
    ],
    testimonials: {
      title: "Transformative Automation Results",
      image: "/images/products/kenneth-fong.jpg",
      items: [
        {
          quote:
            "SPS integrated cognitive agents into our customer care pipeline. Over 70% of support requests are now resolved instantly without human escalation.",
          author: "Kenneth Fong",
          role: "VP Innovation",
          company: "Nexus Logistics",
          avatar: "/images/avatar/memoji3.jpg",
          categoryTag: "Agentic AI",
        },
      ],
    },
    pricing: {
      title: "AI Development Packages",
      plans: [
        {
          name: "Feasibility Pilot",
          price: "$5,000",
          isPopular: false,
          features: [
            { name: "Single Workflow Agent Prototype", included: true },
            { name: "Local Document RAG Pipeline", included: true },
            { name: "Accuracy & Latency Benchmark", included: true },
            { name: "Production ERP Integration", included: false },
            { name: "Custom Fine-Tuning Pod", included: false },
          ],
        },
        {
          name: "Production Agent Pod",
          price: "$11,500",
          isPopular: true,
          features: [
            { name: "Multi-Agent System Orchestration", included: true },
            { name: "Air-Gapped Vector Knowledge Base", included: true },
            { name: "CRM & Database API Connectors", included: true },
            { name: "Continuous Evaluation & Guardrails", included: true },
            { name: "Dedicated AI Engineer Support", included: true },
          ],
        },
        {
          name: "Enterprise Cognitive Fabric",
          price: "Custom",
          isPopular: false,
          features: [
            { name: "Full Enterprise Agent Ecosystem", included: true },
            { name: "Private LLM Self-Hosting", included: true },
            { name: "Automated RPA Screen Vision", included: true },
            { name: "Custom Guardrail & Security Policies", included: true },
            { name: "Unlimited Scaling & Optimization", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Design Your First Autonomous Enterprise Agent",
      image: "/images/products/ibm-automation-card.jpg",
    },
  },

  consulting: {
    id: "services-consulting",
    category: "Consulting",
    slug: "consulting",
    hero: {
      title: "Strategic Technology Consulting",
      subtitle:
        "Align business strategy with high-impact technology execution. We guide enterprises through complex digital transformations, modernization roadmaps, and scalable technology investments.",
    },
    featuredSolutions: {
      title: "Advisory & Modernization Practices",
      items: [
        {
          title: "Digital Transformation Blueprints",
          description: "Restructuring technology operating models, agile delivery pods, and modern product engineering cultures.",
          image: "/images/products/powering_sps.jpg",
        },
        {
          title: "Enterprise Architecture Review",
          description: "System audits assessing architectural bottlenecks, single points of failure, and scalability roadmaps.",
          image: "/images/products/powering_ibm.jpg",
        },
        {
          title: "Cloud & Data Modernization Advisory",
          description: "Strategic roadmaps migrating away from legacy databases toward resilient distributed architectures.",
          image: "/images/products/ms_illustration.png",
        },
        {
          title: "M&A Technical Due Diligence",
          description: "Comprehensive audits of codebase quality, technical debt, security posture, and infrastructure costs.",
          image: "/images/products/sps_illustration.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Partner with SPS Advisory",
      image: "/images/products/powering_sps.jpg",
      badgeText: "25+\nYears",
      points: [
        {
          title: "Vendor-Neutral Perspective",
          description: "Recommendations driven exclusively by your operational goals, not vendor sales quotas.",
        },
        {
          title: "Principal-Led Engagements",
          description: "Direct collaboration with veteran practitioners who have designed large-scale enterprise systems.",
        },
        {
          title: "Actionable Roadmaps",
          description: "Tangible execution blueprints with measurable milestones, risk mitigations, and ROI projections.",
        },
        {
          title: "Proven Track Record",
          description: "Over 50 enterprise modernizations delivered on time and within budget.",
        },
      ],
    },
    metrics: [
      { value: "4.8x", label: "Average Project ROI" },
      { value: "50+", label: "Modernizations Delivered" },
      { value: "98%", label: "Executive Retention" },
      { value: "100%", label: "Vendor-Neutral" },
    ],
    testimonials: {
      title: "Executive Endorsements",
      image: "/images/products/sarah-liu.jpg",
      items: [
        {
          quote:
            "The strategic clarity and engineering discipline SPS brought to our digital transformation saved us millions in avoidable missteps.",
          author: "Marcus Vance",
          role: "CTO",
          company: "FinTech Global",
          avatar: "/images/avatar/memoji1.jpg",
          categoryTag: "Enterprise Advisory",
        },
      ],
    },
    pricing: {
      title: "Consulting Engagement Models",
      plans: [
        {
          name: "Targeted Architecture Audit",
          price: "$6,500",
          isPopular: false,
          features: [
            { name: "2-Week Deep Dive Architecture Review", included: true },
            { name: "Bottleneck & Scalability Analysis", included: true },
            { name: "Executive Recommendation Deck", included: true },
            { name: "Hands-on Implementation Pod", included: false },
            { name: "Ongoing C-Suite Retainer", included: false },
          ],
        },
        {
          name: "Strategic Modernization Retainer",
          price: "$12,000",
          isPopular: true,
          features: [
            { name: "Embedded Principal Solution Architect", included: true },
            { name: "Full Modernization Roadmap & Governance", included: true },
            { name: "Vendor-Neutral RFP & Tool Evaluation", included: true },
            { name: "Agile Pod Mentorship & Upskilling", included: true },
            { name: "Monthly Board-Level Progress Briefings", included: true },
          ],
        },
        {
          name: "Enterprise Turnkey Transformation",
          price: "Custom",
          isPopular: false,
          features: [
            { name: "Full Operational Model Restructuring", included: true },
            { name: "Cross-Functional Transformation Squads", included: true },
            { name: "M&A Technical Due Diligence Support", included: true },
            { name: "Continuous ROI & Velocity Tracking", included: true },
            { name: "Executive Advisory SLA", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Book a Strategic Architecture Consultation",
      image: "/images/products/powering_sps.jpg",
    },
  },
};

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  const normalized = slug.toLowerCase().trim();
  return (
    SERVICES_DATA[normalized] ||
    Object.values(SERVICES_DATA).find((s) => s.slug === normalized)
  );
}

export function getAllServices(): ServiceDetailData[] {
  return Object.values(SERVICES_DATA).filter((s) => s.slug !== "all");
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES_DATA);
}
