export type VerticalFeaturedSolution = {
  title: string;
  description: string;
  image: string;
};

export type VerticalWhyChoosePoint = {
  title: string;
  description: string;
};

export type VerticalMetric = {
  value: string;
  label: string;
};

export type VerticalTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  categoryTag?: string;
};

export type VerticalPricingPlan = {
  name: string;
  price: string;
  isPopular?: boolean;
  features: Array<{ name: string; included: boolean }>;
};

export type VerticalDetailData = {
  id: string;
  category: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  featuredSolutions?: {
    title: string;
    items: VerticalFeaturedSolution[];
  };
  whyChoose?: {
    title: string;
    image: string;
    badgeText: string;
    points: VerticalWhyChoosePoint[];
  };
  metrics?: VerticalMetric[];
  testimonials?: {
    title: string;
    image: string;
    items: VerticalTestimonial[];
  };
  pricing?: {
    title: string;
    plans: VerticalPricingPlan[];
  };
  cta?: {
    title: string;
    image: string;
  };
};

export const VERTICALS_DETAIL_DATA: Record<string, VerticalDetailData> = {
  all: {
    id: "all",
    category: "verticals",
    slug: "all",
    hero: {
      title: "Industry Verticals & Strategic Solutions",
      subtitle:
        "Tailored, industry-specific solutions built on deep domain expertise — empowering organizations across every sector to lead their digital transformation.",
    },
  },

  "public-sector": {
    id: "public-sector",
    category: "verticals",
    slug: "public-sector",
    hero: {
      title: "Public Sector Modernization",
      subtitle:
        "Secure, compliant, and citizen-centric digital services engineered for federal, state, and local government agencies.",
    },
    featuredSolutions: {
      title: "Featured Government Solutions",
      items: [
        {
          title: "Citizen Self-Service Portals",
          description:
            "Accessible, intuitive digital services for permits, tax records, benefits filing, and civic constituent engagement.",
          image: "/images/verticals/public.jpg",
        },
        {
          title: "GovCloud & Zero Trust Architecture",
          description:
            "DoD IL4/IL5 and FedRAMP High compliant cloud enclaves ensuring impenetrable protection of government datasets.",
          image: "/images/verticals/government1.jpg",
        },
        {
          title: "Public Safety & Emergency Dispatch",
          description:
            "High-availability CAD/GIS systems with low-latency edge communications for first responders and 911 dispatch centers.",
          image: "/images/verticals/country2.png",
        },
        {
          title: "Municipal Data Mesh",
          description:
            "Scalable modernization blueprints designed specifically for regional, county, and local public IT systems.",
          image: "/images/verticals/country1.jpg",
        },
      ],
    },
    whyChoose: {
      title: "Why Public Agencies Partner With SPS",
      image: "/images/verticals/public.jpg",
      badgeText: "25+ Years\nGov Trust",
      points: [
        {
          title: "FedRAMP & CJIS Certified",
          description: "Our platforms meet the strictest federal, state, and defense security accreditations.",
        },
        {
          title: "Seamless Legacy Integration",
          description: "Bridge decades-old mainframe databases with modern cloud APIs without service disruptions.",
        },
        {
          title: "Accelerated Procurement",
          description: "Approved cooperative purchasing vehicles enable rapid government agency onboarding.",
        },
        {
          title: "Dedicated Clearance Teams",
          description: "Engineers and enterprise architects with top-tier security clearances and domain expertise.",
        },
      ],
    },
    metrics: [
      { value: "99.999%", label: "GovCloud Uptime" },
      { value: "15M+", label: "Citizens Served" },
      { value: "100%", label: "FedRAMP Compliant" },
      { value: "40%", label: "Cost Reduction" },
    ],
    testimonials: {
      title: "Transforming Public Services at National Scale",
      image: "/images/verticals/government1.jpg",
      items: [
        {
          quote:
            "SPS transformed our regional licensing system into an automated digital workflow that slashed citizen wait times from 3 weeks to under 4 minutes.",
          author: "Marcus Vance",
          role: "Chief Information Officer",
          company: "State Department of Transportation",
          avatar: "/images/avatar/avatar-1.webp",
          categoryTag: "Public Sector",
        },
        {
          quote:
            "The GovCloud migration executed by SPS exceeded our security benchmarks while passing our FedRAMP audit ahead of schedule.",
          author: "Elena Rostova",
          role: "Director of Enterprise Cloud",
          company: "Federal Security Commission",
          avatar: "/images/avatar/avatar-2.webp",
          categoryTag: "Cybersecurity",
        },
      ],
    },
    pricing: {
      title: "Public Sector Engagement Models",
      plans: [
        {
          name: "Agency Discovery",
          price: "Custom",
          features: [
            { name: "FedRAMP / CJIS Audit", included: true },
            { name: "Architecture Assessment", included: true },
            { name: "Legacy Mainframe Review", included: true },
            { name: "Production Deployment", included: false },
          ],
        },
        {
          name: "Modernization Core",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "GovCloud Infrastructure", included: true },
            { name: "Citizen Experience Portal", included: true },
            { name: "24/7 Dedicated SOC Monitoring", included: true },
            { name: "cATO Pipeline Automation", included: true },
          ],
        },
        {
          name: "Full Mission Assurance",
          price: "Turnkey",
          features: [
            { name: "Multi-Agency Interoperability", included: true },
            { name: "DoD IL5 Enclave Hosting", included: true },
            { name: "Emergency Dispatch Mesh", included: true },
            { name: "Continuous Compliance Guarantee", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Ready to modernize your agency's digital operations?",
      image: "/images/verticals/public.jpg",
    },
  },

  industrials: {
    id: "industrials",
    category: "verticals",
    slug: "industrials",
    hero: {
      title: "Industrial & Smart Manufacturing",
      subtitle:
        "Connecting assembly floor automation, IIoT sensors, and cloud analytics to eliminate unplanned downtime.",
    },
    featuredSolutions: {
      title: "Manufacturing 4.0 Solutions",
      items: [
        {
          title: "Predictive Equipment Maintenance",
          description: "Vibration and acoustic sensor algorithms alerting operators to machine wear days before failure.",
          image: "/images/verticals/industrial.jpg",
        },
        {
          title: "Connected Factory Data Fabric",
          description: "Unified namespace connecting legacy PLC controllers with modern ERP databases via MQTT & OPC-UA.",
          image: "/images/verticals/country2.png",
        },
        {
          title: "Automated Computer Vision QA",
          description: "High-speed camera inspection spotting microscopic manufacturing defects at 1,000 parts per minute.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Supply Chain Digital Twin",
          description: "Dynamic simulation modeling supplier lead times and warehouse logistics to prevent bottlenecks.",
          image: "/images/verticals/country1.jpg",
        },
      ],
    },
    whyChoose: {
      title: "Why Industrial Leaders Choose SPS",
      image: "/images/verticals/industrial.jpg",
      badgeText: "45% Downtime\nReduction",
      points: [
        {
          title: "OT/IT Convergence",
          description: "Proven blueprints bridging SCADA industrial control systems and cloud enterprise software.",
        },
        {
          title: "Air-Gapped Cybersecurity",
          description: "Certified industrial data diodes preventing cyber intrusions into critical assembly lines.",
        },
        {
          title: "Edge Real-Time Computing",
          description: "Sub-10ms response loops deployed on ruggedized factory floor micro-servers.",
        },
        {
          title: "Universal Equipment Support",
          description: "Compatibility with Siemens, Rockwell, Mitsubishi, and custom legacy industrial machinery.",
        },
      ],
    },
    metrics: [
      { value: "45%", label: "Less Downtime" },
      { value: "99.97%", label: "Defect Detection" },
      { value: "<10ms", label: "Edge Latency" },
      { value: "3.2x", label: "ROI in Year 1" },
    ],
    testimonials: {
      title: "Revolutionizing Modern Factory Floors",
      image: "/images/verticals/industrial.jpg",
      items: [
        {
          quote:
            "SPS predictive maintenance saved our assembly plant over $2.4M in potential gearbox failures within the first six months of deployment.",
          author: "David Schneider",
          role: "VP of Global Manufacturing",
          company: "Apex Precision Engineering",
          avatar: "/images/avatar/avatar-3.webp",
          categoryTag: "Smart Factory",
        },
      ],
    },
    pricing: {
      title: "Industrial Deployment Packages",
      plans: [
        {
          name: "Pilot Cell",
          price: "Custom",
          features: [
            { name: "Single Production Line IIoT", included: true },
            { name: "Sensor Ingestion Setup", included: true },
            { name: "Basic OEE Dashboard", included: true },
            { name: "Plant-Wide Rollout", included: false },
          ],
        },
        {
          name: "Smart Factory Core",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Full Facility IIoT Fabric", included: true },
            { name: "Predictive Maintenance AI", included: true },
            { name: "Computer Vision QA Station", included: true },
            { name: "SCADA Zero-Trust Gateway", included: true },
          ],
        },
        {
          name: "Global Enterprise",
          price: "Turnkey",
          features: [
            { name: "Multi-Plant Unified Namespace", included: true },
            { name: "Supply Chain Digital Twin", included: true },
            { name: "24/7 Industrial OT Support", included: true },
            { name: "Custom PLC Firmware Adapters", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Accelerate your transition to Industry 4.0",
      image: "/images/verticals/industrial.jpg",
    },
  },

  healthcare: {
    id: "healthcare",
    category: "verticals",
    slug: "healthcare",
    hero: {
      title: "Healthcare & Clinical Systems",
      subtitle:
        "Modernizing clinical workflows, patient engagement, and medical data interoperability with secure, compliant healthcare ecosystems.",
    },
    featuredSolutions: {
      title: "Featured Clinical Innovations",
      items: [
        {
          title: "FHIR Interoperability Hub",
          description: "Real-time clinical data exchange across Cerner, Epic, and legacy electronic health records.",
          image: "/images/verticals/health.jpg",
        },
        {
          title: "Secure Telehealth & RPM",
          description: "Virtual clinic systems with remote patient monitoring and automatic biometric telemetry charting.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Multi-Clinic Consolidation",
          description: "Centralized scheduling, billing harmonization, and multi-tenant EHR management for hospital networks.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "AI Clinical Decision Support",
          description: "Predictive diagnostic pipelines identifying sepsis and readmission risks before patient deterioration.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Healthcare Providers Trust SPS",
      image: "/images/verticals/health.jpg",
      badgeText: "100% HIPAA\n& HITRUST",
      points: [
        {
          title: "HIPAA & HITRUST Certified",
          description: "Every architectural layer is audited and validated for strict patient privacy and PHI compliance.",
        },
        {
          title: "Clinician-Centric UX",
          description: "Designed alongside physicians and nurses to cut administrative charting hours and fatigue.",
        },
        {
          title: "High-Availability Resiliency",
          description: "Zero-downtime failover ensures patient telemetry and clinical charts remain available 24/7.",
        },
        {
          title: "Open FHIR Standards",
          description: "Future-proof health architectures conforming to USCDI and ONC healthcare mandates.",
        },
      ],
    },
    metrics: [
      { value: "99.99%", label: "Clinical System Uptime" },
      { value: "32%", label: "Fewer Readmissions" },
      { value: "<200ms", label: "FHIR API Latency" },
      { value: "4.8/5", label: "Physician Satisfaction" },
    ],
    testimonials: {
      title: "Elevating Patient Care and Interoperability",
      image: "/images/verticals/health.jpg",
      items: [
        {
          quote:
            "Integrating our 14 regional clinics with SPS's FHIR engine unified our longitudinal patient records and cut emergency triage times in half.",
          author: "Dr. Sarah Jenkins",
          role: "Chief Medical Officer",
          company: "Mid-Atlantic Health Alliance",
          avatar: "/images/avatar/avatar-4.webp",
          categoryTag: "Healthcare",
        },
      ],
    },
    pricing: {
      title: "Healthcare Solutions Tiers",
      plans: [
        {
          name: "Clinic Essential",
          price: "Custom",
          features: [
            { name: "Single-Clinic EHR Cloud", included: true },
            { name: "HIPAA Security Baseline", included: true },
            { name: "Basic Telehealth Gateway", included: true },
            { name: "FHIR Interoperability", included: false },
          ],
        },
        {
          name: "Health System Core",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Multi-Clinic Unified FHIR", included: true },
            { name: "HITRUST Certified Cloud", included: true },
            { name: "Remote Patient Monitoring", included: true },
            { name: "AI Readmission Alerts", included: true },
          ],
        },
        {
          name: "National IDN",
          price: "Turnkey",
          features: [
            { name: "Enterprise Payer & Provider Mesh", included: true },
            { name: "Clinical Decision Support AI", included: true },
            { name: "Dedicated 24/7 BAA Engineering", included: true },
            { name: "IoMT Medical Device Ingestion", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Transform your clinical operations with modern digital health",
      image: "/images/verticals/health.jpg",
    },
  },

  retail: {
    id: "retail",
    category: "verticals",
    slug: "retail",
    hero: {
      title: "Omnichannel Retail & Consumer Goods",
      subtitle:
        "Unifying in-store experiences, digital commerce, and agile inventory systems to maximize lifetime customer value.",
    },
    featuredSolutions: {
      title: "Featured Retail Solutions",
      items: [
        {
          title: "Unified Omnichannel POS",
          description: "Cloud-native point-of-sale systems empowering store associates with real-time global stock lookup.",
          image: "/images/verticals/retail.jpg",
        },
        {
          title: "AI Personalization Engine",
          description: "Real-time recommendation models evaluating user intent and shopping trends to lift conversion.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Smart RFID Inventory",
          description: "Sensor-backed warehouse tracking providing millisecond-accurate stock counts across all stores.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Autonomous Grab-and-Go",
          description: "Computer vision frictionless checkout systems for high-traffic retail convenience locations.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Retailers Choose SPS",
      image: "/images/verticals/retail.jpg",
      badgeText: "+28% Mobile\nConversion",
      points: [
        {
          title: "Composable MACH Architecture",
          description: "Headless e-commerce and microservices APIs enabling instant merchandising changes.",
        },
        {
          title: "Sub-Second Inventory Sync",
          description: "Eliminate phantom inventory and overselling across online and physical retail channels.",
        },
        {
          title: "PCI-DSS Level 1 Secure",
          description: "Tokenized payment orchestration safeguarding sensitive consumer credit transactions.",
        },
        {
          title: "Black Friday Resiliency",
          description: "Battle-tested cloud infrastructure handling 100x traffic spikes with zero downtime.",
        },
      ],
    },
    metrics: [
      { value: "28%", label: "Higher Mobile Conversion" },
      { value: "<150ms", label: "Catalog API Response" },
      { value: "18.5%", label: "AOV Lift" },
      { value: "99.999%", label: "Holiday Peak Uptime" },
    ],
    testimonials: {
      title: "Powering High-Volume Retail Innovation",
      image: "/images/verticals/retail.jpg",
      items: [
        {
          quote:
            "Migrating to SPS's composable retail architecture gave us the agility to roll out personalized mobile promotions in hours rather than months.",
          author: "Rachel Sterling",
          role: "Chief Digital Officer",
          company: "Urban Retail Brands",
          avatar: "/images/avatar/avatar-1.webp",
          categoryTag: "E-Commerce",
        },
      ],
    },
    pricing: {
      title: "Retail Transformation Plans",
      plans: [
        {
          name: "Growth Commerce",
          price: "Custom",
          features: [
            { name: "Headless Storefront", included: true },
            { name: "Single-Store POS Sync", included: true },
            { name: "Basic Recommendation Rules", included: true },
            { name: "Real-Time RFID Mesh", included: false },
          ],
        },
        {
          name: "Omnichannel Scale",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Multi-Store Cloud POS", included: true },
            { name: "AI Personalization Engine", included: true },
            { name: "Sub-Second Inventory Sync", included: true },
            { name: "Curbside Pickup Automation", included: true },
          ],
        },
        {
          name: "Global Retail Mesh",
          price: "Turnkey",
          features: [
            { name: "Autonomous Frictionless Stores", included: true },
            { name: "Cross-Border Tax & Payment", included: true },
            { name: "Predictive Replenishment AI", included: true },
            { name: "24/7 Peak Event War-Room", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Deliver seamless shopping across digital and retail storefronts",
      image: "/images/verticals/retail.jpg",
    },
  },

  energy: {
    id: "energy",
    category: "verticals",
    slug: "energy",
    hero: {
      title: "Energy Transition & Smart Utilities",
      subtitle:
        "Modernizing transmission grids, renewable generation facilities, and utility infrastructure with real-time operational intelligence.",
    },
    featuredSolutions: {
      title: "Featured Energy Innovations",
      items: [
        {
          title: "Grid Telemetry & AMI Mesh",
          description: "Scalable ingestion processing tens of millions of smart meter data points every 15 minutes.",
          image: "/images/verticals/energy.jpg",
        },
        {
          title: "Renewable Generation Analytics",
          description: "Machine learning synthesizing weather forecasts and solar/wind output for optimal battery dispatch.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Critical Infrastructure NERC-CIP",
          description: "Certified security monitoring protecting OT substations and remote terminal units from advanced cyber threats.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Predictive Transformer Health",
          description: "Dissolved gas analysis algorithms flagging substation transformer anomalies before power outages occur.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Utilities Partner With SPS",
      image: "/images/verticals/energy.jpg",
      badgeText: "NERC-CIP\nCertified",
      points: [
        {
          title: "Substation Cyber Hardening",
          description: "Air-gapped data diodes and zero-trust perimeter control defending mission-critical energy grids.",
        },
        {
          title: "Real-Time Distributed Control",
          description: "Sub-100ms dispatch optimization for battery energy storage systems (BESS) and distributed generation.",
        },
        {
          title: "Field Crew Automation",
          description: "Integrated GIS and Outage Management Systems (OMS) for rapid storm response and line repairs.",
        },
        {
          title: "Decarbonization Compliance",
          description: "Automated ESG and clean energy accounting dashboards designed for regulatory public utility commissions.",
        },
      ],
    },
    metrics: [
      { value: "99.999%", label: "Grid Data Reliability" },
      { value: "10M+", label: "Smart Meters Monitored" },
      { value: "<100ms", label: "Dispatch Latency" },
      { value: "100%", label: "NERC-CIP Compliance" },
    ],
    testimonials: {
      title: "Securing and Modernizing Critical Power Grids",
      image: "/images/verticals/energy.jpg",
      items: [
        {
          quote:
            "SPS helped us integrate over 800MW of distributed solar and storage without destabilizing our transmission substation feeders.",
          author: "Thomas Gallagher",
          role: "VP of Electric Grid Modernization",
          company: "Continental Power & Light",
          avatar: "/images/avatar/avatar-2.webp",
          categoryTag: "Energy",
        },
      ],
    },
    pricing: {
      title: "Utility Solutions Frameworks",
      plans: [
        {
          name: "Substation Pilot",
          price: "Custom",
          features: [
            { name: "Single Substation SCADA Gateway", included: true },
            { name: "NERC-CIP Audit Assessment", included: true },
            { name: "Transformer Telemetry", included: true },
            { name: "Grid-Wide AMI Mesh", included: false },
          ],
        },
        {
          name: "Smart Grid Core",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Grid-Wide AMI Telemetry Mesh", included: true },
            { name: "Renewable Battery Dispatch AI", included: true },
            { name: "Outage Management Automation", included: true },
            { name: "Continuous NERC-CIP Auditing", included: true },
          ],
        },
        {
          name: "Critical Infrastructure",
          price: "Turnkey",
          features: [
            { name: "Air-Gapped Data Diode Security", included: true },
            { name: "Multi-Substation Autonomous Failover", included: true },
            { name: "Predictive Transformer Monitoring", included: true },
            { name: "24/7 Power Operations Center", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Powering the future of reliable, decentralized clean energy",
      image: "/images/verticals/energy.jpg",
    },
  },

  financial: {
    id: "financial",
    category: "verticals",
    slug: "financial",
    hero: {
      title: "Financial Services & Digital Banking",
      subtitle:
        "Building resilient, low-latency, and compliant banking architectures for modern wealth management, fintech, and banking institutions.",
    },
    featuredSolutions: {
      title: "Featured Banking Solutions",
      items: [
        {
          title: "Real-Time AI Fraud Shield",
          description: "Streaming graph neural networks evaluating risk in under 15ms, stopping account takeover cold.",
          image: "/images/verticals/financial.jpg",
        },
        {
          title: "Core Ledger Modernization",
          description: "Migrating legacy mainframe ledger systems to event-driven cloud microservices with zero transaction loss.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Open Banking (PSD2) APIs",
          description: "Secure developer portals allowing seamless connections with third-party payment apps and fintech aggregators.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Automated Credit Underwriting",
          description: "Machine learning underwriting engines approving loan applications in minutes with full regulatory auditability.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Financial Institutions Choose SPS",
      image: "/images/verticals/financial.jpg",
      badgeText: "PCI-DSS\nLevel 1",
      points: [
        {
          title: "Zero-Trust Banking Enclaves",
          description: "Cryptographic microsegmentation isolating transaction balances from administrative network vectors.",
        },
        {
          title: "Sub-15ms Risk Scoring",
          description: "Real-time streaming evaluation that halts fraudulent wire transfers without creating false-positive friction.",
        },
        {
          title: "SEC & FINRA Regulatory Compliance",
          description: "Immutable WORM audit archives that guarantee regulatory reporting accuracy and peace of mind.",
        },
        {
          title: "Multi-Region Active-Active",
          description: "Resilient database topology delivering five-nines uptime for mission-critical payment gateways.",
        },
      ],
    },
    metrics: [
      { value: "99.999%", label: "Core Banking Uptime" },
      { value: "<15ms", label: "Fraud Decision Latency" },
      { value: "42%", label: "Fewer False Declines" },
      { value: "100%", label: "PCI-DSS Compliant" },
    ],
    testimonials: {
      title: "Modernizing Enterprise Financial Engines",
      image: "/images/verticals/financial.jpg",
      items: [
        {
          quote:
            "SPS core banking modernization enabled our regional bank to offer instant digital lending while cutting underwriting overhead by 35%.",
          author: "Arthur Sterling",
          role: "Chief Technology Officer",
          company: "Crown Fidelity Bank",
          avatar: "/images/avatar/avatar-3.webp",
          categoryTag: "FinTech",
        },
      ],
    },
    pricing: {
      title: "Financial Architecture Packages",
      plans: [
        {
          name: "FinTech Accelerator",
          price: "Custom",
          features: [
            { name: "Open Banking PSD2 APIs", included: true },
            { name: "BaaS Integration Adapter", included: true },
            { name: "PCI-DSS Level 1 Baseline", included: true },
            { name: "Core Mainframe Migration", included: false },
          ],
        },
        {
          name: "Banking Core Modernization",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Event-Driven Ledger Migration", included: true },
            { name: "Real-Time AI Fraud Shield", included: true },
            { name: "Automated Lending Engine", included: true },
            { name: "SEC Rule 17a-4 WORM Storage", included: true },
          ],
        },
        {
          name: "Global Financial Infrastructure",
          price: "Turnkey",
          features: [
            { name: "Active-Active Multi-Region Mesh", included: true },
            { name: "Hardware Security Module (HSM) FIPS 140-3", included: true },
            { name: "24/7 Financial SOC Team", included: true },
            { name: "Continuous Penetration Testing", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Build the future of secure, low-latency digital banking",
      image: "/images/verticals/financial.jpg",
    },
  },

  telecom: {
    id: "telecom",
    category: "verticals",
    slug: "telecom",
    hero: {
      title: "5G & Telecommunications Infrastructure",
      subtitle:
        "Empowering telecommunications operators with cloud-native Open RAN, edge computing clusters, and automated OSS/BSS platforms.",
    },
    featuredSolutions: {
      title: "Featured Telecom Solutions",
      items: [
        {
          title: "Open RAN Software Architecture",
          description: "Disaggregated O-DU and O-CU stacks deployed on commercial off-the-shelf edge servers.",
          image: "/images/verticals/telecom.jpg",
        },
        {
          title: "Multi-Access Edge Computing (MEC)",
          description: "Ultra-low latency micro-datacenters deployed at cell tower bases for private enterprise 5G.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Automated Network Slicing",
          description: "Dynamic provisioning of dedicated network slices with guaranteed throughput and latency SLAs.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Self-Healing AI Radios",
          description: "Real-time RF anomaly detection automatically re-tuning antenna parameters before packet drops occur.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    whyChoose: {
      title: "Why Telecom Carriers Partner With SPS",
      image: "/images/verticals/telecom.jpg",
      badgeText: "-30% RAN\nCAPEX & OPEX",
      points: [
        {
          title: "Vendor Independence",
          description: "O-RAN Alliance compliant software liberating carriers from restrictive proprietary hardware lock-in.",
        },
        {
          title: "Sub-5ms Edge Latency",
          description: "Hardware accelerated DPDK and SR-IOV data planes for mission-critical B2B enterprise 5G services.",
        },
        {
          title: "Zero-Touch Provisioning",
          description: "Automated continuous deployment pipelines managing software across thousands of cell tower sites.",
        },
        {
          title: "Converged BSS/OSS Billing",
          description: "Real-time ratings engine charging across data, voice, and dedicated private network slices.",
        },
      ],
    },
    metrics: [
      { value: "30%", label: "CAPEX Savings" },
      { value: "<5ms", label: "Radio Edge Latency" },
      { value: "65%", label: "Fewer Field Dispatches" },
      { value: "99.999%", label: "Carrier Network Reliability" },
    ],
    testimonials: {
      title: "Pioneering Next-Generation 5G Networks",
      image: "/images/verticals/telecom.jpg",
      items: [
        {
          quote:
            "SPS edge orchestration and Open RAN architecture allowed us to launch private 5G services for enterprise manufacturing clients in weeks.",
          author: "Hiroshi Tanaka",
          role: "VP of Network Engineering",
          company: "Pacific Mobile Telecom",
          avatar: "/images/avatar/avatar-4.webp",
          categoryTag: "5G Telecom",
        },
      ],
    },
    pricing: {
      title: "Carrier Engagement Tiers",
      plans: [
        {
          name: "Open RAN Trial",
          price: "Custom",
          features: [
            { name: "Lab Testbed Deployment", included: true },
            { name: "O-RAN Compliance Verification", included: true },
            { name: "Performance Benchmarking", included: true },
            { name: "Live Tower Rollout", included: false },
          ],
        },
        {
          name: "Carrier Edge Core",
          price: "Enterprise",
          isPopular: true,
          features: [
            { name: "Multi-Tower O-DU/O-CU Deployment", included: true },
            { name: "Multi-Access Edge Compute (MEC)", included: true },
            { name: "Self-Healing AI Radio Controller", included: true },
            { name: "Dynamic Network Slicing Engine", included: true },
          ],
        },
        {
          name: "National Network Scale",
          price: "Turnkey",
          features: [
            { name: "Zero-Touch Tower Fleet Provisioning", included: true },
            { name: "Converged Real-Time OSS/BSS", included: true },
            { name: "Private 5G B2B Enterprise Portal", included: true },
            { name: "24/7 Carrier NOC Tier-3 Support", included: true },
          ],
        },
      ],
    },
    cta: {
      title: "Build the next-generation telco cloud and Open RAN network",
      image: "/images/verticals/telecom.jpg",
    },
  },
};

export function getVerticalDetail(slug: string): VerticalDetailData | undefined {
  return VERTICALS_DETAIL_DATA[slug];
}
