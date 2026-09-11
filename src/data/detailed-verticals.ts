import React from "react";

export interface DetailedVerticalHero {
  title: string;
  subtitle: string;
  bgImage?: string;
  breadcrumb?: string;
}

export interface DetailedVerticalSection1 {
  title: string;
  subtitle?: string;
  description: string;
  description2?: string;
  checklists?: string[];
  singleImage?: string;
}

export interface DetailedVerticalHighlight {
  title: string;
  description: string;
  image?: string;
}

export interface DetailedVerticalSection2 {
  title: string;
  subtitle?: string;
  highlights: DetailedVerticalHighlight[];
  image?: string;
}

export interface DetailedVerticalSection3 {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  bulletPoints?: string[];
}

export interface DetailedVerticalTableColumn {
  key: string;
  label: string;
}

export interface DetailedVerticalTableRow {
  [key: string]: string | React.ReactNode;
}

export interface DetailedVerticalTableData {
  columns: DetailedVerticalTableColumn[];
  rows: DetailedVerticalTableRow[];
}

export interface SupportedSolution {
  name: string;
  description?: string;
  tag?: string;
}

export interface DetailedVerticalSection4 {
  title: string;
  description?: string;
  solutions: SupportedSolution[];
}

export interface DetailedVerticalData {
  id: string;
  title: string;
  tagline: string;
  hero: DetailedVerticalHero;
  section1?: DetailedVerticalSection1;
  section2: DetailedVerticalSection2;
  section3?: DetailedVerticalSection3;
  tableData?: DetailedVerticalTableData;
  section4?: DetailedVerticalSection4;
}

export const DETAILED_VERTICALS: Record<string, DetailedVerticalData> = {
  "public-sector": {
    id: "public-sector",
    title: "Public Sector Solutions",
    tagline: "Secure, Citizen-Centric Digital Infrastructure for Government Agencies",
    hero: {
      title: "Public Sector Modernization & GovCloud",
      subtitle:
        "Empowering federal, state, and municipal agencies with secure, scalable, and compliant digital services designed for mission success.",
      breadcrumb: "Public Sector",
    },
    section1: {
      title: "Resilient Government Infrastructure & Trust",
      subtitle: "About Public Sector Solutions",
      description:
        "Modern governments face the challenge of modernizing legacy mainframes and fragmented silos while adhering to stringent compliance frameworks like FedRAMP, FISMA, and CJIS. SPS provides enterprise-grade public sector modernization that balances security, performance, and citizen experience.",
      description2:
        "From digital service delivery and public safety dispatch networks to zero-trust cloud migrations, our engineering frameworks help public agencies serve constituents with agility and confidence.",
      singleImage: "/images/verticals/public.jpg",
      checklists: [
        "FedRAMP, FISMA, and CJIS compliance frameworks",
        "Citizen digital identity and seamless self-service portals",
        "Mission-critical public safety and emergency communications",
        "Legacy system refactoring and secure cloud data pipelines",
        "Inter-agency data mesh and unified analytics dashboards",
      ],
    },
    section2: {
      title: "Core Capabilities & Government Solutions",
      subtitle: "MISSION-CRITICAL CAPABILITIES",
      image: "/images/verticals/government1.jpg",
      highlights: [
        {
          title: "Citizen-Centric Digital Services",
          description:
            "Omnichannel portals, automated case management, and accessibility-first digital services that increase public engagement and streamline constituent workflows.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "GovCloud & Zero Trust Architecture",
          description:
            "Secure enclave engineering adhering to DoD IL4/IL5, FedRAMP High, and Zero Trust mandate requirements with continuous authorization monitoring.",
          image: "/images/verticals/public.jpg",
        },
        {
          title: "Public Safety & IoT Telemetry",
          description:
            "High-availability telemetry, real-time command-and-control operations, and low-latency edge compute for first responders and emergency management.",
          image: "/images/verticals/country2.png",
        },
        {
          title: "County & Municipal Digital Mesh",
          description:
            "Scalable modernization blueprints designed specifically for regional and local governments seeking agile IT without massive capital outlays.",
          image: "/images/verticals/tabs.jpg",
        },
      ],
    },
    section3: {
      title: "Enterprise Public Sector Reference Architecture",
      subtitle: "SECURE COMPLIANCE & CONTINUOUS DELIVERY",
      description:
        "Our modular public sector architecture isolates sensitive constituent PII in encrypted enclaves while offering resilient API gateways for rapid cross-department collaboration.",
      image: "/images/verticals/government1.jpg",
      bulletPoints: [
        "Hardware Security Modules (HSM) with FIPS 140-3 cryptography",
        "Automated continuous authority-to-operate (cATO) pipelines",
        "Microservices-based service delivery with automated failover",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Compliance Benchmark" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "GovCloud Enclaves",
          sla: "FedRAMP High / NIST 800-53",
          deployment: "AWS GovCloud / Azure Gov",
          impact: "99.999% availability for critical federal missions",
        },
        {
          service: "Citizen Identity & Access",
          sla: "FIDO2 / NIST 800-63 IAL2",
          deployment: "Hybrid & Multi-Cloud",
          impact: "Eliminates fraudulent benefit filings by over 94%",
        },
        {
          service: "Emergency Dispatch Mesh",
          sla: "< 50ms Real-Time Latency",
          deployment: "Distributed Edge",
          impact: "Sub-second response coordination across regional squads",
        },
      ],
    },
    section4: {
      title: "Public Sector Focus Areas",
      description: "Proven engagement packages designed for rapid government procurement.",
      solutions: [
        { name: "Federal Agencies", description: "Complex cloud transformations adhering to strict DoD and executive security directives.", tag: "Federal" },
        { name: "State & County", description: "Affordable, scalable digital service desks, permitting portals, and tax modernization.", tag: "Regional" },
        { name: "Public Safety", description: "Ruggedized CAD, GIS dispatch tools, and real-time situational awareness dashboards.", tag: "Critical" },
        { name: "Higher Education", description: "Secure campus identity, research cloud computing clusters, and student data privacy.", tag: "Education" },
      ],
    },
  },

  industrials: {
    id: "industrials",
    title: "Industrial & Manufacturing",
    tagline: "Industry 4.0, Predictive Operations & Smart Factory Automation",
    hero: {
      title: "Smart Manufacturing & Industrial IoT",
      subtitle:
        "Bridging operational technology (OT) and enterprise IT to drive operational efficiency, zero-unplanned downtime, and automated supply chains.",
      breadcrumb: "Industrials",
    },
    section1: {
      title: "Autonomous Manufacturing & Smart Factory",
      subtitle: "About Industrial Solutions",
      description:
        "Modern industrial enterprises operate in volatile environments with high energy costs, supply chain bottlenecks, and legacy machinery. SPS provides unified digital manufacturing solutions that connect assembly floor sensors, PLC controllers, and ERP systems into intelligent real-time data loops.",
      description2:
        "With predictive asset maintenance, computer vision QA, and closed-loop process automation, our platforms convert traditional production plants into agile smart factories.",
      singleImage: "/images/verticals/industrial.jpg",
      checklists: [
        "Industrial IoT (IIoT) telemetry and edge sensor ingestion",
        "Predictive maintenance models cutting machine downtime",
        "Real-time Overall Equipment Effectiveness (OEE) analytics",
        "Air-gapped SCADA and OT cybersecurity protection",
        "Automated optical inspection (AOI) utilizing edge computer vision",
      ],
    },
    section2: {
      title: "Manufacturing 4.0 Solutions",
      subtitle: "INTELLIGENT PRODUCTION SYSTEMS",
      image: "/images/verticals/industrial.jpg",
      highlights: [
        {
          title: "Predictive Equipment Maintenance",
          description:
            "Vibration, acoustic, and thermal telemetry algorithms detect component wear days before catastrophic failure, drastically lowering unplanned downtime.",
          image: "/images/verticals/industrial.jpg",
        },
        {
          title: "Connected Factory Data Fabric",
          description:
            "Unified namespace (UNS) architecture that connects disparate machines via MQTT and OPC-UA protocols into a single operational telemetry backbone.",
          image: "/images/verticals/country2.png",
        },
        {
          title: "Automated Quality Inspection",
          description:
            "Edge AI camera systems scanning assembly lines at 1,000+ parts per minute, spotting micro-defects invisible to human operators.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Supply Chain Digital Twin",
          description:
            "Dynamic modeling of supplier lead times, buffer inventory, and logistics routes to absorb macro supply chain volatility.",
          image: "/images/verticals/country1.jpg",
        },
      ],
    },
    section3: {
      title: "OT/IT Convergence Reference Framework",
      subtitle: "ISA-95 COMPLIANT DIGITAL ARCHITECTURE",
      description:
        "Our industrial blueprint isolates Level 1/2 control networks while securely streaming aggregated operational telemetry to enterprise cloud data lakes.",
      image: "/images/verticals/industrial.jpg",
      bulletPoints: [
        "Unidirectional data diodes for air-gapped protection",
        "Kubernetes at the factory edge for local low-latency control",
        "Standardized OPC-UA and MQTT publish-subscribe messaging",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Performance Benchmark" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "Predictive Maintenance",
          sla: "98.2% Failure Prediction Accuracy",
          deployment: "Factory Edge & Cloud",
          impact: "Reduces unscheduled plant downtime by up to 45%",
        },
        {
          service: "Industrial Data Fabric",
          sla: "< 10ms Ingestion Latency",
          deployment: "On-Premises Edge Clusters",
          impact: "Unlocks enterprise-wide real-time OEE visibility",
        },
        {
          service: "Computer Vision QA",
          sla: "99.97% Defect Detection",
          deployment: "Inline High-Speed Cameras",
          impact: "Eliminates manual rework costs and scrap waste",
        },
      ],
    },
    section4: {
      title: "Manufacturing Sectors We Serve",
      description: "Tailored implementations across complex heavy and discrete industries.",
      solutions: [
        { name: "Automotive & Aerospace", description: "High-precision assembly verification, battery cell QA, and supplier integration.", tag: "Automotive" },
        { name: "Heavy Machinery & Equipment", description: "Telematics telemetry for connected fleets, field service IoT, and remote diagnostics.", tag: "Machinery" },
        { name: "Textiles & Materials", description: "High-speed optical inspection, yield optimization, and inventory cycle automation.", tag: "Materials" },
        { name: "Chemical & Process", description: "Batch reactor monitoring, pressure/thermal compliance, and hazardous environment IoT.", tag: "Process" },
      ],
    },
  },

  healthcare: {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "HIPAA-Compliant Cloud, Interoperability & Intelligent Patient Care",
    hero: {
      title: "Next-Gen Healthcare Technology & Clinical Data",
      subtitle:
        "Transforming clinical workflows, patient engagement, and medical data interoperability with secure, compliant healthcare ecosystems.",
      breadcrumb: "Healthcare",
    },
    section1: {
      title: "Modernizing Clinical Systems & Patient Outcomes",
      subtitle: "About Healthcare Solutions",
      description:
        "Healthcare systems struggle with fragmented EHR systems, strict regulatory compliance (HIPAA, HITECH), and rising clinician burnout. SPS delivers modern digital health solutions that streamline patient journeys and provide caregivers with real-time, actionable insights.",
      description2:
        "By implementing FHIR-based interoperability pipelines, secure telehealth platforms, and predictive clinical analytics, we enable health systems to shift from reactive care to proactive health management.",
      singleImage: "/images/verticals/health.jpg",
      checklists: [
        "FHIR and HL7 compliant clinical data integration",
        "HIPAA and HITRUST certified cloud infrastructure",
        "Telehealth platforms with high-definition low-latency video",
        "Clinician workflow optimization and EHR integration",
        "Multi-clinic operational consolidation and unified reporting",
      ],
    },
    section2: {
      title: "Clinical Digital Innovations",
      subtitle: "CONNECTED HEALTHCARE SOLUTIONS",
      image: "/images/verticals/health.jpg",
      highlights: [
        {
          title: "FHIR Interoperability & Data Pipelines",
          description:
            "Seamless data exchange across Cerner, Epic, and legacy systems using modern FHIR APIs and secure healthcare data lakes.",
          image: "/images/verticals/health.jpg",
        },
        {
          title: "Secure Telehealth & Remote Care",
          description:
            "Scalable virtual care platforms with integrated RPM (Remote Patient Monitoring), real-time biometric ingestion, and automated charting.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Multi-Clinic Practice Modernization",
          description:
            "Centralized scheduling, billing harmonization, and multi-tenant EHR management for growing healthcare provider networks.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "AI Clinical Decision Support",
          description:
            "Predictive algorithms for patient readmission risks, ICU deterioration alerts, and intelligent diagnostic image triage.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    section3: {
      title: "HIPAA-Compliant Healthcare Reference Architecture",
      subtitle: "ZERO-TRUST PATIENT PRIVACY",
      description:
        "Comprehensive health data architecture with automated anonymization, audit trails, and end-to-end cryptographic protection for PHI data.",
      image: "/images/verticals/health.jpg",
      bulletPoints: [
        "Automated BAA-compliant cloud resource provisioning",
        "Zero-trust microsegmentation between clinical and administrative networks",
        "Real-time FHIR transformation engine with sub-second response times",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Compliance Standard" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "FHIR Data Exchange",
          sla: "HL7 FHIR v4.0.1 / USCDI",
          deployment: "HIPAA Cloud Enclave",
          impact: "Enables unified longitudinal patient record views",
        },
        {
          service: "Remote Patient Monitoring",
          sla: "99.99% Telemetry Uptime",
          deployment: "Mobile & Edge Gateways",
          impact: "Reduces emergency department readmissions by 32%",
        },
        {
          service: "Clinical AI Diagnostics",
          sla: "FDA SaMD Guidance Ready",
          deployment: "Secure GPU Compute",
          impact: "Triages emergency radiology scans 4x faster",
        },
      ],
    },
    section4: {
      title: "Healthcare Ecosystems",
      description: "Solutions tailored for every facet of modern medical care delivery.",
      solutions: [
        { name: "Hospital Systems & IDNs", description: "Large-scale EHR integration, clinic consolidation, and patient engagement portals.", tag: "Enterprises" },
        { name: "Telehealth Providers", description: "Low-latency streaming, asynchronous triage, and automated pharmacy integrations.", tag: "Digital Health" },
        { name: "Medical Device OEMs", description: "IoMT device connectivity, secure firmware update over-the-air, and telemetry pipelines.", tag: "IoMT" },
        { name: "Payer & Life Sciences", description: "Automated prior-authorization workflows, claims analytics, and clinical trial management.", tag: "Insurers" },
      ],
    },
  },

  retail: {
    id: "retail",
    title: "Retail & Consumer Goods",
    tagline: "Omnichannel Commerce, AI Personalization & Supply Chain Optimization",
    hero: {
      title: "Omnichannel Retail & Intelligent Commerce",
      subtitle:
        "Unifying in-store experiences, digital commerce, and agile inventory systems to maximize lifetime customer value.",
      breadcrumb: "Retail",
    },
    section1: {
      title: "Next-Generation Consumer Engagement",
      subtitle: "About Retail Solutions",
      description:
        "Modern retail requires frictionless transitions between digital shopping, mobile apps, and brick-and-mortar storefronts. SPS engineers high-performing omnichannel architectures that synchronize inventory, customer profiles, and pricing across every sales channel in real time.",
      description2:
        "From headless e-commerce and POS cloud modernization to computer vision smart checkouts, our solutions empower retailers to deliver memorable customer journeys.",
      singleImage: "/images/verticals/retail.jpg",
      checklists: [
        "Headless commerce and microservices API architectures",
        "Real-time unified inventory tracking across stores and warehouses",
        "AI-driven personalization and dynamic pricing engines",
        "Next-generation POS modernization and contactless mobile checkout",
        "Customer Data Platform (CDP) for 360-degree consumer insights",
      ],
    },
    section2: {
      title: "Retail Innovation Highlights",
      subtitle: "OMNICHANNEL EXCELLENCE",
      image: "/images/verticals/retail.jpg",
      highlights: [
        {
          title: "Unified Omnichannel POS",
          description:
            "Cloud-native point-of-sale systems that empower store associates with live customer purchasing history and cross-store inventory lookup.",
          image: "/images/verticals/retail.jpg",
        },
        {
          title: "AI Personalization & Recommendation",
          description:
            "Real-time recommendation engines processing browser intent, geographic weather, and purchase history to lift cart conversion rates.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Dynamic Smart Inventory",
          description:
            "RFID and sensor-backed warehouse tracking providing millisecond-accurate stock counts, slashing out-of-stock lost sales.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Autonomous & Frictionless Checkout",
          description:
            "Edge computer vision and sensor fusion architectures that enable grab-and-go frictionless shopping in high-traffic convenience stores.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    section3: {
      title: "Modern Composable Commerce Architecture",
      subtitle: "MACH-COMPLIANT (MICROSERVICES, API, CLOUD, HEADLESS)",
      description:
        "A composable retail framework that decouples your frontend storefront from backend transaction engines, allowing instant merchandising updates.",
      image: "/images/verticals/retail.jpg",
      bulletPoints: [
        "Global CDN edge caching for sub-100ms storefront render speeds",
        "PCI-DSS Level 1 compliant tokenized payment orchestration",
        "GraphQL aggregation layer connecting ERP, CRM, and PIM systems",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Performance Benchmark" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "Headless E-Commerce",
          sla: "< 200ms API Response",
          deployment: "Global Edge Network",
          impact: "Increases mobile checkout conversion by 28%",
        },
        {
          service: "Omnichannel Inventory Sync",
          sla: "Sub-Second State Updates",
          deployment: "Distributed Cloud Mesh",
          impact: "Eliminates phantom inventory and overselling",
        },
        {
          service: "AI Dynamic Recommendation",
          sla: "< 35ms Inference Time",
          deployment: "Edge In-Memory Cache",
          impact: "Boosts average order value (AOV) by 18.5%",
        },
      ],
    },
    section4: {
      title: "Retail Sectors We Modernize",
      description: "End-to-end commerce frameworks engineered for rapid rollout.",
      solutions: [
        { name: "Apparel & Luxury", description: "Visual virtual try-on, VIP concierge digital apps, and omnichannel fulfillment.", tag: "Fashion" },
        { name: "Grocery & Convenience", description: "Curbside pickup optimization, perishable freshness monitoring, and rapid checkout.", tag: "Grocery" },
        { name: "Big-Box & Department Stores", description: "Enterprise warehouse logistics, RFID tracking, and supply chain automation.", tag: "Enterprise" },
        { name: "Direct-to-Consumer (D2C)", description: "High-velocity headless storefronts, subscription billing, and social commerce integrations.", tag: "D2C" },
      ],
    },
  },

  energy: {
    id: "energy",
    title: "Energy & Utilities",
    tagline: "Smart Grid Modernization, Renewable Integration & Asset Resiliency",
    hero: {
      title: "Energy Transition & Smart Grid Analytics",
      subtitle:
        "Modernizing transmission grids, renewable generation facilities, and utility infrastructure with real-time operational intelligence.",
      breadcrumb: "Energy",
    },
    section1: {
      title: "Agile, Resilient Energy Infrastructure",
      subtitle: "About Energy Solutions",
      description:
        "The global energy transition demands unprecedented visibility across distributed energy resources (DERs), aging transmission infrastructure, and fluctuating renewable generation. SPS designs industrial-grade digital architectures that ensure grid reliability and cybersecurity.",
      description2:
        "From smart metering telemetry and automated fault isolation to NERC-CIP compliant security operations, our engineers help utilities navigate decarbonization while maintaining uninterrupted power delivery.",
      singleImage: "/images/verticals/energy.jpg",
      checklists: [
        "Advanced Metering Infrastructure (AMI) data ingestion",
        "NERC-CIP compliance and critical infrastructure protection",
        "Renewable energy forecasting and battery storage optimization",
        "Outage Management System (OMS) and mobile workforce dispatch",
        "Predictive asset analytics for turbines, transformers, and pipelines",
      ],
    },
    section2: {
      title: "Smart Grid Innovations",
      subtitle: "UTILITY INTELLIGENCE SYSTEMS",
      image: "/images/verticals/energy.jpg",
      highlights: [
        {
          title: "Grid Telemetry & AMI Mesh",
          description:
            "Scalable ingestion pipelines processing tens of millions of smart meter data points every 15 minutes for accurate load balancing.",
          image: "/images/verticals/energy.jpg",
        },
        {
          title: "Renewable Generation Analytics",
          description:
            "Machine learning models synthesizing weather forecasts, historical solar/wind output, and market demand for optimal battery dispatch.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Critical Infrastructure Cybersecurity",
          description:
            "NERC-CIP certified security monitoring protecting OT substations, SCADA telemetry, and remote terminal units from advanced threats.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Predictive Transformer Monitoring",
          description:
            "Acoustic and dissolved gas analysis (DGA) algorithms flagging transformer anomalies before costly substation blackouts occur.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    section3: {
      title: "Smart Utility Reference Architecture",
      subtitle: "HIGH-AVAILABILITY INDUSTRIAL SCADA",
      description:
        "Decoupled telemetry framework featuring edge aggregation at substations, redundant communications links, and cloud analytics.",
      image: "/images/verticals/energy.jpg",
      bulletPoints: [
        "Zero-downtime distributed failover for utility operations centers",
        "Microservices streaming engine handling 100k+ events/sec",
        "Air-gapped security boundary with certified data diodes",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Performance Benchmark" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "AMI Meter Telemetry",
          sla: "99.999% Data Delivery",
          deployment: "Hybrid Edge-Cloud",
          impact: "Enables dynamic time-of-use pricing and accurate billing",
        },
        {
          service: "NERC-CIP Security",
          sla: "Continuous Real-Time Auditing",
          deployment: "Air-Gapped Substations",
          impact: "Protects critical power delivery against zero-day exploits",
        },
        {
          service: "Renewable Dispatch Engine",
          sla: "< 100ms Optimization Loop",
          deployment: "Distributed Edge Controllers",
          impact: "Maximizes clean energy revenue and reduces grid curtailment",
        },
      ],
    },
    section4: {
      title: "Energy Verticals Supported",
      description: "Proven deployments across the power generation and delivery lifecycle.",
      solutions: [
        { name: "Electric Utilities", description: "Smart grid modernization, substation automation, and automated fault location.", tag: "Power" },
        { name: "Oil & Gas Upstream/Midstream", description: "Pipeline leak detection, remote wellhead telemetry, and refinery safety systems.", tag: "O&G" },
        { name: "Renewables & Battery Storage", description: "Solar farm optimization, wind turbine monitoring, and BESS charging cycles.", tag: "CleanTech" },
        { name: "Water & Municipal Utilities", description: "Smart water meter networks, leak acoustic detection, and pump station telemetry.", tag: "Water" },
      ],
    },
  },

  financial: {
    id: "financial",
    title: "Financial Services & Banking",
    tagline: "Zero-Trust Core Banking, Real-Time Fraud Telemetry & FinTech Innovation",
    hero: {
      title: "Digital Banking Modernization & FinTech Systems",
      subtitle:
        "Building resilient, low-latency, and compliant banking architectures for modern wealth management, fintech, and banking institutions.",
      breadcrumb: "Financial",
    },
    section1: {
      title: "Ultra-Secure, High-Velocity Financial Systems",
      subtitle: "About Financial Solutions",
      description:
        "Financial institutions operate under intense regulatory scrutiny, heightened cyber risks, and increasing consumer demand for instant digital payments. SPS engineers modern financial technology ecosystems that balance uncompromising security with lightning-fast transaction throughput.",
      description2:
        "Our financial engineering practice specializes in zero-trust core modernization, real-time AI fraud detection, open banking APIs, and automated compliance pipelines that meet PCI-DSS, SEC, and GLBA standards.",
      singleImage: "/images/verticals/financial.jpg",
      checklists: [
        "Zero-Trust banking enclaves and cryptographic data protection",
        "PCI-DSS Level 1 and SOC2 Type II certified cloud frameworks",
        "Real-time streaming fraud detection with machine learning",
        "Open Banking (PSD2) API gateways with microservices architectures",
        "Automated lending underwriting and intelligent document processing",
      ],
    },
    section2: {
      title: "FinTech & Banking Innovations",
      subtitle: "NEXT-GEN FINANCIAL SYSTEMS",
      image: "/images/verticals/financial.jpg",
      highlights: [
        {
          title: "Real-Time AI Fraud Prevention",
          description:
            "Streaming graph neural networks evaluating transaction risk in under 15 milliseconds, stopping account takeover and payment fraud cold.",
          image: "/images/verticals/financial.jpg",
        },
        {
          title: "Core Banking Modernization",
          description:
            "Migrating legacy mainframe ledger systems to event-driven cloud microservices without risking transaction data integrity.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Open Banking & API Gateways",
          description:
            "Secure developer portals and PSD2-compliant APIs enabling frictionless integration with third-party payment apps and fintech aggregators.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "Automated Lending Underwriting",
          description:
            "AI decision engines reviewing income, credit bureau feeds, and bank statements to deliver loan approvals in minutes instead of days.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    section3: {
      title: "Bank-Grade Zero-Trust Reference Architecture",
      subtitle: "CRYPTOGRAPHIC INTEGRITY & RESILIENCY",
      description:
        "Multi-region active-active deployment model ensuring 99.999% uptime with end-to-end envelope encryption and automated regulatory compliance logging.",
      image: "/images/verticals/financial.jpg",
      bulletPoints: [
        "FIPS 140-3 Hardware Security Modules (HSM) for key management",
        "Kafka and Apache Flink event streaming for real-time risk scoring",
        "Immutable WORM storage for SEC Rule 17a-4 compliance archives",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Regulatory Standard" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "Real-Time Fraud Prevention",
          sla: "< 15ms Inference Latency",
          deployment: "Low-Latency Edge Cloud",
          impact: "Reduces false-positive fraud declines by 42%",
        },
        {
          service: "Core Ledger Synchronization",
          sla: "ACID Consistency / 99.999%",
          deployment: "Multi-Region Distributed DB",
          impact: "Enables 24/7 instant cross-border payments",
        },
        {
          service: "Automated Underwriting",
          sla: "< 3 Minute Decisioning",
          deployment: "Secure Private Cloud",
          impact: "Increases qualified loan origination volume by 35%",
        },
      ],
    },
    section4: {
      title: "Financial Domains We Empower",
      description: "Robust solutions tailored for diverse financial organizations.",
      solutions: [
        { name: "Commercial & Retail Banks", description: "Mobile banking app re-architecture, core ledger modernization, and branch digitalization.", tag: "Banking" },
        { name: "Wealth Management & Advisory", description: "Client wealth portals, algorithmic portfolio balancing, and automated reporting.", tag: "Wealth" },
        { name: "FinTech & Neobanks", description: "Rapid BaaS integration, virtual cards issuance, and lightning-fast onboarding.", tag: "FinTech" },
        { name: "Insurance (InsurTech)", description: "Claims automated image processing, dynamic policy underwriting, and fraud detection.", tag: "Insurance" },
      ],
    },
  },

  telecom: {
    id: "telecom",
    title: "Telecommunications",
    tagline: "5G Open RAN, Edge Virtualization & Automated Telco Cloud",
    hero: {
      title: "Next-Gen 5G Infrastructure & Edge Networking",
      subtitle:
        "Empowering telecommunications operators with cloud-native Open RAN, edge computing clusters, and automated OSS/BSS platforms.",
      breadcrumb: "Telecommunications",
    },
    section1: {
      title: "Pioneering the Future of Connected Networks",
      subtitle: "About Telecom Solutions",
      description:
        "Telecommunications operators are transforming from traditional connectivity providers into agile digital service platforms. SPS helps carriers modernize their infrastructure with disaggregated Open RAN, cloud-native 5G standalone (SA) cores, and multi-access edge computing (MEC).",
      description2:
        "With intelligent network slicing, automated zero-touch provisioning, and AI-driven predictive ops, our telecom engineering frameworks maximize spectrum efficiency and open new enterprise revenue streams.",
      singleImage: "/images/verticals/telecom.jpg",
      checklists: [
        "Cloud-native 5G core and disaggregated Open RAN integration",
        "Multi-Access Edge Computing (MEC) workload orchestration",
        "AI-driven self-healing radio access networks (Self-Organizing Networks)",
        "End-to-end network slicing with guaranteed SLA isolation",
        "OSS/BSS digital transformation and real-time billing convergence",
      ],
    },
    section2: {
      title: "Telecom 5G Innovations",
      subtitle: "NEXT-GEN NETWORK CAPABILITIES",
      image: "/images/verticals/telecom.jpg",
      highlights: [
        {
          title: "Open RAN & Disaggregated Radios",
          description:
            "Interoperable O-DU and O-CU software stacks deployed on commercial off-the-shelf hardware, freeing carriers from vendor lock-in.",
          image: "/images/verticals/telecom.jpg",
        },
        {
          title: "Multi-Access Edge Computing (MEC)",
          description:
            "Ultra-low latency micro-datacenters deployed at cell tower bases, enabling AR/VR, autonomous driving, and industrial robotics.",
          image: "/images/verticals/country1.jpg",
        },
        {
          title: "Automated Network Slicing",
          description:
            "Dynamic provisioning of dedicated network slices for enterprise private 5G, emergency services, and consumer mobile streaming.",
          image: "/images/verticals/tabs.jpg",
        },
        {
          title: "AI-Powered Predictive Operations",
          description:
            "Anomaly detection models analyzing antenna RF metrics in real time to reroute cell traffic before congestive drops happen.",
          image: "/images/verticals/country2.png",
        },
      ],
    },
    section3: {
      title: "Carrier-Grade Telco Cloud Reference Architecture",
      subtitle: "CLOUD-NATIVE NETWORK FUNCTIONS (CNF)",
      description:
        "Hardened Kubernetes carrier architecture with SR-IOV, DPDK data planes, and zero-touch continuous deployment pipelines.",
      image: "/images/verticals/telecom.jpg",
      bulletPoints: [
        "Sub-millisecond packet processing with hardware acceleration",
        "Zero-touch provisioning (ZTP) for thousands of remote cell sites",
        "O-RAN compliant Service Management and Orchestration (SMO)",
      ],
    },
    tableData: {
      columns: [
        { key: "service", label: "Capability Area" },
        { key: "sla", label: "Performance Benchmark" },
        { key: "deployment", label: "Target Environment" },
        { key: "impact", label: "Strategic Value" },
      ],
      rows: [
        {
          service: "Open RAN Integration",
          sla: "3GPP Rel 17 / O-RAN Alliance",
          deployment: "COTS Edge Servers",
          impact: "Reduces radio network CAPEX & OPEX by up to 30%",
        },
        {
          service: "Enterprise Network Slicing",
          sla: "< 5ms Radio Latency Guarantee",
          deployment: "Carrier Cloud & MEC",
          impact: "Unlocks recurring B2B private 5G enterprise revenue",
        },
        {
          service: "Autonomous Self-Healing RAN",
          sla: "Sub-Second Fault Remediations",
          deployment: "Near-Real-Time RIC",
          impact: "Eliminates over 65% of field dispatch service calls",
        },
      ],
    },
    section4: {
      title: "Telecom Operational Domains",
      description: "Comprehensive software and systems engineering for carrier ecosystems.",
      solutions: [
        { name: "Mobile Network Operators (MNO)", description: "5G SA core rollout, RAN virtualization, and spectrum monetization.", tag: "MNO" },
        { name: "Tower Companies & Neutral Hosts", description: "Multi-tenant edge compute, shared fiber backhaul, and infrastructure monitoring.", tag: "TowerCo" },
        { name: "Enterprise Private 5G", description: "Turnkey private cellular networks for factories, mining sites, and logistics ports.", tag: "Private 5G" },
        { name: "Broadband & Fiber (FTTH)", description: "GPON modernization, subscriber self-service apps, and smart Wi-Fi management.", tag: "Broadband" },
      ],
    },
  },
};

export function getDetailedVertical(id: string): DetailedVerticalData | undefined {
  return DETAILED_VERTICALS[id];
}
