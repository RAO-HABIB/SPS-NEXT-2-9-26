export type FeaturedSolution = {
  title: string;
  description: string;
  image: string;
};

export type WhyChoosePoint = {
  title: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  date?: string;
  company?: string;
  category?: "Cognitive AI" | "Cloud Infrastructure" | "Cybersecurity";
  categoryTag?: string;
  metric?: string;
  metricLabel?: string;
  title?: string;
  rating?: number;
};

export type PricingFeature = {
  name: string;
  included: boolean;
};

export type PricingPlan = {
  name: string;
  price: string;
  isPopular?: boolean;
  features: PricingFeature[];
};

export type ProductDetailData = {
  id: string;
  category: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  featuredSolutions: {
    title: string;
    items: FeaturedSolution[];
  };
  whyChoose: {
    title: string;
    image: string;
    badgeText: string;
    points: WhyChoosePoint[];
  };
  metrics: Metric[];
  testimonials: {
    title: string;
    image: string;
    subtitle?: string;
    badge?: string;
    items: Testimonial[];
  };
  pricing: {
    title: string;
    plans: PricingPlan[];
  };
  cta: {
    title: string;
    image: string;
  };
};

export const PRODUCTS_DATA: Record<string, Record<string, ProductDetailData>> = {
  sps: {
    bms: {
      id: "sps-bms",
      category: "sps",
      slug: "bms",
      hero: {
        title: "BMS - Business Management System",
        subtitle: "SPS products, solutions, and cognitive AI services are designed to address the dynamic challenges of modern enterprises.",
      },
      featuredSolutions: {
        title: "Our Featured Technology Solution",
        items: [
          {
            title: "GPS Tracking",
            description: "Advanced tracking systems for real-time fleet management and insights.",
            image: "/images/products/product.webp",
          },
          {
            title: "IoT Tech",
            description: "Smart interconnected devices to streamline operations and gather data.",
            image: "/images/products/product.webp",
          },
          {
            title: "Network Security",
            description: "Robust defense mechanisms to protect your enterprise network.",
            image: "/images/products/product.webp",
          },
          {
            title: "Cloud Infrastructure",
            description: "Scalable cloud solutions built for modern dynamic enterprises.",
            image: "/images/products/product.webp",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose Our Products & Solutions",
        image: "/images/products/head.webp",
        badgeText: "20+\nYears of Experience",
        points: [
          { title: "Enterprise-Grade Products", description: "Built to scale with your growing business needs." },
          { title: "Decades of Expertise", description: "Over 20 years of delivering innovative technology." },
          { title: "Secure by Design", description: "Security is embedded into everything we build." },
          { title: "Open Support", description: "Dedicated 24/7 support team at your service." },
        ],
      },
      metrics: [
        { value: "5K", label: "Happy Customers" },
        { value: "70", label: "Products Launched" },
        { value: "18", label: "Global Partners" },
        { value: "24", label: "Years in Business" },
      ],
      testimonials: {
        title: "Real Teams. Real Innovation. And Our Impact.",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Unbelievably good UI and experience. The product exceeded our expectations and the team was wonderful.",
            author: "Sarah Adams",
            role: "Product Manager",
            avatar: "/images/products/head.webp",
          },
          {
            quote: "This transformed how we operate our daily business. The efficiency gains are massive.",
            author: "John Doe",
            role: "CTO",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "Choose The Right Product Plan",
        plans: [
          {
            name: "Free",
            price: "Free",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: false },
              { name: "Analytics", included: false },
              { name: "Custom Reporting", included: false },
              { name: "Priority SLA", included: false },
            ],
          },
          {
            name: "Pro",
            price: "$25",
            isPopular: true,
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
              { name: "Custom Reporting", included: false },
              { name: "Priority SLA", included: false },
            ],
          },
          {
            name: "Enterprise",
            price: "$40",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
              { name: "Custom Reporting", included: true },
              { name: "Priority SLA", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Powering Businesses With AI, Cloud & Security Solutions",
        image: "/images/products/products.webp",
      },
    },
    csm: {
      id: "sps-csm",
      category: "sps",
      slug: "csm",
      hero: {
        title: "Cognitive Security Management (CSM)",
        subtitle: "CSM helps organizations augment security management by standardizing it around NIST. It helps Identify, Protect, Detect, Respond, Recover maturity of People, Processes & Technology of an organization; conduct risk assessment, create System Security Plan (SSP) and update Plan of Actions and Milestones on a quarterly basis.",
      },
      featuredSolutions: {
        title: "Key Features of Our CSM Services",
        items: [
          {
            title: "Maturity Augmentation",
            description: "Enhance maturity levels across People, Processes, and Technology, ensuring a holistic cybersecurity approach.",
            image: "/images/products/product.webp",
          },
          {
            title: "NIST Framework Alignment",
            description: "Adhere to the NIST framework, offering a standardized and robust foundation for security management.",
            image: "/images/products/product.webp",
          },
          {
            title: "Risk Assessment",
            description: "Conduct comprehensive risk assessments to proactively address threats and prioritize mitigation.",
            image: "/images/products/product.webp",
          },
          {
            title: "System Security Plan (SSP)",
            description: "Create a detailed roadmap for securing systems, networks, and enterprise data assets.",
            image: "/images/products/product.webp",
          },
        ],
      },
      whyChoose: {
        title: "Benefits of Cognitive Security Management",
        image: "/images/products/head.webp",
        badgeText: "NIST\nAligned",
        points: [
          { title: "Comprehensive Security Management", description: "Addressing People, Processes, and Technology across all operational layers." },
          { title: "Strategic NIST Alignment", description: "Structured compliance ensuring adherence to industry cybersecurity resilience standards." },
          { title: "Proactive Risk Mitigation", description: "Identify and neutralize potential vulnerabilities before they escalate." },
          { title: "Agile Response & Quarterly Updates", description: "Continuously adaptive security posture with regular POA&M milestone reviews." },
        ],
      },
      metrics: [
        { value: "5/5", label: "NIST CSF Domains" },
        { value: "100%", label: "SSP & POA&M Compliance" },
        { value: "4.9/5", label: "Security Maturity Score" },
        { value: "24/7", label: "Continuous Threat Oversight" },
      ],
      testimonials: {
        title: "Trusted by Enterprise Leaders for Cybersecurity",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "CSM provided our team with an unambiguous roadmap for NIST compliance and continuous POA&M tracking. Our security posture has never been stronger.",
            author: "Marcus Vance",
            role: "Chief Information Security Officer",
            avatar: "/images/products/head.webp",
          },
          {
            quote: "The proactive risk mitigation and SSP development transformed our audit readiness. An indispensable enterprise security platform.",
            author: "Elena Rostova",
            role: "VP of Enterprise Infrastructure",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "CSM Governance & Implementation Tiers",
        plans: [
          {
            name: "Assessment",
            price: "Custom",
            features: [
              { name: "NIST CSF Maturity Review", included: true },
              { name: "Gap Analysis & Risk Audit", included: true },
              { name: "Initial SSP Drafting", included: true },
              { name: "Quarterly Reviews", included: false },
            ],
          },
          {
            name: "Enterprise Managed",
            price: "Custom",
            isPopular: true,
            features: [
              { name: "Full 5-Domain Governance", included: true },
              { name: "Automated SSP & POA&M Updates", included: true },
              { name: "Quarterly Risk & Milestones Reviews", included: true },
              { name: "People & Process Training", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Fortify Your Organization with Cognitive Security Management",
        image: "/images/products/products.webp",
      },
    },
  },
  generic: {
    all: {
      id: "all-products",
      category: "generic",
      slug: "all",
      hero: {
        title: "Our Products",
        subtitle: "SPS products, solutions, and cognitive AI services are designed to address the dynamic challenges of modern enterprises.",
      },
      featuredSolutions: {
        title: "Our Featured Technology Solution",
        items: [
          {
            title: "GPS Tracking",
            description: "Advanced tracking systems for real-time fleet management and insights.",
            image: "/images/products/product.webp",
          },
          {
            title: "IoT Tech",
            description: "Smart interconnected devices to streamline operations and gather data.",
            image: "/images/products/product.webp",
          },
          {
            title: "Network Security",
            description: "Robust defense mechanisms to protect your enterprise network.",
            image: "/images/products/product.webp",
          },
          {
            title: "Cloud Infrastructure",
            description: "Scalable cloud solutions built for modern dynamic enterprises.",
            image: "/images/products/product.webp",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose Our Products & Solutions",
        image: "/images/products/head.webp",
        badgeText: "20+\nYears of Experience",
        points: [
          { title: "Enterprise-Grade Products", description: "Built to scale with your growing business needs." },
          { title: "Decades of Expertise", description: "Over 20 years of delivering innovative technology." },
          { title: "Secure by Design", description: "Security is embedded into everything we build." },
          { title: "Open Support", description: "Dedicated 24/7 support team at your service." },
        ],
      },
      metrics: [
        { value: "5K", label: "Happy Customers" },
        { value: "70", label: "Products Launched" },
        { value: "18", label: "Global Partners" },
        { value: "24", label: "Years in Business" },
      ],
      testimonials: {
        title: "Real Teams. Real Innovation. And Our Impact.",
        subtitle: "How enterprise leaders accelerate with SPS Cognitive AI, scalable cloud systems, and zero-trust cybersecurity.",
        badge: "Cognitive AI • Cloud • Cybersecurity",
        image: "/images/products/ai-mesh-face.jpg",
        items: [
          {
            category: "Cognitive AI",
            categoryTag: "Cognitive AI & Automation",
            metric: "+200%",
            metricLabel: "AI Inference & Workflow Velocity",
            title: "Autonomous Workflow Intelligence",
            quote: "Overall pleasurable and transformative experience. SPS Cognitive AI helped us automate our core inference pipeline and deploy neural models in record time. It made our engineering teams feel very confident and comfortable. Seamless and easy process.",
            author: "Kenneth Fong",
            role: "Lead AI Engineer",
            company: "Nexura AI Systems",
            avatar: "/images/products/kenneth-fong.jpg",
            rating: 4.9,
            date: "29 Aug, 2026",
          },
          {
            category: "Cloud Infrastructure",
            categoryTag: "Cloud Infrastructure & Scale",
            metric: "99.99%",
            metricLabel: "Uptime & 40% Lower Infra Cost",
            title: "Cloud Scalability & Resilience",
            quote: "From multi-region cloud migration to full production rollout, everything was smooth. Pay as milestones are achieved, which made us feel completely secure. Zero downtime, near-instant failover, and massive cost savings.",
            author: "Sarah Liu",
            role: "VP of Cloud Architecture",
            company: "Aether Global Networks",
            avatar: "/images/products/sarah-liu.jpg",
            rating: 5.0,
            date: "14 Jul, 2026",
          },
          {
            category: "Cybersecurity",
            categoryTag: "Zero-Trust Cyber Defense",
            metric: "99.8%",
            metricLabel: "Threat Mitigation Rate",
            title: "Autonomous Zero-Trust Defense",
            quote: "We needed uncompromising security to protect our sensitive enterprise networks and SPS delivered. Autonomous threat response blocked 99.8% of attacks instantly. The team is super responsive and the security posture is unmatched.",
            author: "Farhan Akmal",
            role: "Chief Information Security Officer",
            company: "Vanguard Defense Group",
            avatar: "/images/avatar/memoji3.jpg",
            rating: 4.9,
            date: "02 Jun, 2026",
          },
          {
            category: "Cloud Infrastructure",
            categoryTag: "Enterprise Cloud Systems",
            metric: "4x",
            metricLabel: "Deployment Speed",
            title: "Multi-Cloud Agility & Reliability",
            quote: "SPS gave us an ultra-reliable foundation across our hybrid cloud environments. Continuous monitoring and automated scaling kept our customer services resilient even during 10x traffic surges.",
            author: "Diana Johnston",
            role: "VP of Enterprise Solutions",
            company: "Meridian Core Technologies",
            avatar: "/images/avatar/memoji2.jpg",
            rating: 4.9,
            date: "18 May, 2026",
          },
          {
            category: "Cognitive AI",
            categoryTag: "Intelligent Operations",
            metric: "85%",
            metricLabel: "Reduction in Manual Workflows",
            title: "Enterprise AI Orchestration",
            quote: "The cognitive intelligence suite integrated effortlessly with our existing legacy systems. Our operations are running faster and smarter with zero friction. Highly recommend SPS to any scaling enterprise.",
            author: "Edward Alexander",
            role: "Head of Cognitive Engineering",
            company: "Cortex Labs",
            avatar: "/images/avatar/memoji1.jpg",
            rating: 4.8,
            date: "04 Apr, 2026",
          },
        ],
      },
      pricing: {
        title: "Choose The Right Product Plan",
        plans: [
          {
            name: "Free",
            price: "Free",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: false },
              { name: "Analytics", included: false },
            ],
          },
          {
            name: "Pro",
            price: "$25",
            isPopular: true,
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
            ],
          },
          {
            name: "Enterprise",
            price: "$40",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Powering Businesses With AI, Cloud & Security Solutions",
        image: "/images/products/products.webp",
      },
    },
  },
  ibm: {
    automation: {
      id: "ibm-automation",
      category: "ibm",
      slug: "automation",
      hero: {
        title: "Automation",
        subtitle: "Accelerate enterprise operations, eliminate manual bottlenecks, and empower teams with IBM's AI-driven automation suite.",
      },
      featuredSolutions: {
        title: "IBM Automation Products",
        items: [
          {
            title: "IBM Watsonx Orchestrate",
            description: "IBM watsonx Orchestrate is an AI-powered automation platform designed to transform enterprise workflows by integrating generative AI, predictive analytics, and seamless system orchestration. It empowers teams to automate complex tasks, accelerate decision-making, and enhance productivity through intuitive natural language interactions—turning manual processes into agile, intelligent operations.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Watsonx Assistant",
            description: "IBM watsonx Assistant is an enterprise-grade AI assistant platform that delivers seamless, natural language interactions across customer and employee touchpoints. Powered by watsonx's generative AI and machine learning, it understands complex queries, provides accurate responses, and continuously improves—helping businesses enhance self-service, reduce support costs, and deliver 24/7 personalized engagement at scale.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Watson Discovery",
            description: "IBM Watson Discovery is an AI-powered enterprise search and text analytics platform that transforms unstructured data into actionable insights. Using natural language processing and machine learning, it uncovers hidden patterns, relationships, and answers across documents, websites, and databases - helping organizations make data-driven decisions faster while reducing manual research time by up to 75%.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM watsonx Code Assistant",
            description: "IBM watsonx Code Assistant is an AI-powered coding companion that accelerates software development by generating high-quality code, automating repetitive tasks, and providing intelligent recommendations. Built on IBM's watsonx AI foundation models, it helps developers write cleaner code faster, reduce errors, and maintain consistency across projects—transforming how teams build, test, and deploy enterprise applications.",
            image: "/images/products/powering_ibm.jpg",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose IBM Automation with SPS",
        image: "/images/products/powering_ibm.jpg",
        badgeText: "IBM\nPartner",
        points: [
          { title: "Certified IBM Architects", description: "Deep architectural mastery in deploying watsonx, OpenShift, and enterprise automation." },
          { title: "Turnkey Enterprise Integration", description: "Seamlessly integrate generative AI agents with existing ERP, CRM, and cloud infrastructures." },
          { title: "Measurable ROI & Speed", description: "Reduce manual processing time by up to 75% and accelerate software development cycles." },
          { title: "Enterprise-Grade Security", description: "Built with rigorous data privacy, governance, and zero-data-retention compliance." },
        ],
      },
      metrics: [
        { value: "75%", label: "Research Time Reduction" },
        { value: "2x+", label: "Developer Productivity" },
        { value: "24/7", label: "Automated Self-Service" },
        { value: "100%", label: "Enterprise Data Privacy" },
      ],
      testimonials: {
        title: "Client Success with IBM Automation",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Deploying IBM watsonx Orchestrate through SPS transformed how our operations team executes cross-platform workflows. Routine tasks that took days are now executed in minutes.",
            author: "David Vance",
            role: "Chief Digital Officer",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "IBM Automation Deployment Models",
        plans: [
          {
            name: "Pilot & Proof-of-Concept",
            price: "Custom",
            features: [
              { name: "Single Workflow Automation", included: true },
              { name: "Model Fine-Tuning & Evaluation", included: true },
              { name: "Architecture Assessment", included: true },
              { name: "Production Rollout", included: false },
            ],
          },
          {
            name: "Enterprise Scale",
            price: "Custom",
            isPopular: true,
            features: [
              { name: "Multi-Department Automation", included: true },
              { name: "Custom watsonx Agent Orchestration", included: true },
              { name: "Full API & Legacy Integration", included: true },
              { name: "24/7 Dedicated SPS Engineering Support", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Ready to Transform Your Enterprise with IBM Automation?",
        image: "/images/products/products.webp",
      },
    },
    "data-ai": {
      id: "ibm-data-ai",
      category: "ibm",
      slug: "data-ai",
      hero: {
        title: "Data & AI",
        subtitle: "Unify data governance, scale generative AI models, and deploy FedRAMP-grade government analytics across hybrid cloud infrastructures.",
      },
      featuredSolutions: {
        title: "IBM Data & AI Products",
        items: [
          {
            title: "IBM Data & AI Watsonx.data",
            description:
              "IBM watsonx.data is a next-generation data store built for the AI era, enabling enterprises to unify and govern distributed data across hybrid cloud environments. Powered by an open data lakehouse architecture, it provides high-performance analytics and AI-ready data infrastructure while significantly reducing costs through intelligent workload optimization and open data formats.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Data & AI Watsonx.ai",
            description:
              "IBM watsonx.ai is an enterprise-ready AI and data platform that accelerates the development, deployment, and governance of AI models at scale. Combining IBM's cutting-edge foundation models with robust machine learning capabilities, it empowers organizations to build, customize, and operationalize AI solutions while maintaining full control over data security, model transparency, and compliance.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Data & AI Watsonx.gov",
            description:
              "IBM watsonx.gov is a secure, AI-powered data and analytics platform designed specifically for government agencies, providing FedRAMP-authorized AI tools to transform public sector decision-making. This specialized solution enables agencies to harness sensitive data responsibly—delivering mission-critical insights while meeting strict compliance requirements for data sovereignty, auditability, and ethical AI deployment in government operations.",
            image: "/images/products/powering_ibm.jpg",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose IBM Data & AI with SPS",
        image: "/images/products/powering_ibm.jpg",
        badgeText: "IBM\nPartner",
        points: [
          { title: "Open Lakehouse Architecture", description: "Optimize data query performance and reduce cloud storage expenses across hybrid multi-cloud environments." },
          { title: "Governed Enterprise AI Models", description: "Train, tune, and operationalize custom generative AI foundation models with full transparency and zero IP leaks." },
          { title: "FedRAMP Government Ready", description: "Specialized architectures meeting federal public-sector security, auditability, and data sovereignty mandates." },
          { title: "Integrated Data Pipeline Mastery", description: "Seamlessly unify disparate data silos without duplicating or moving massive enterprise databases." },
        ],
      },
      metrics: [
        { value: "60%", label: "Lower Lakehouse Costs" },
        { value: "10x", label: "Faster AI Model Tuning" },
        { value: "100%", label: "Data Governance & Audit" },
        { value: "FedRAMP", label: "Authorized Ready" },
      ],
      testimonials: {
        title: "Enterprise Transformation with IBM Data & AI",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "watsonx.data allowed us to query vast enterprise data lakes without escalating compute bills. Pairing it with SPS engineering delivered instant analytical returns.",
            author: "Marcus Chen",
            role: "Chief Analytics Officer",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "IBM Data & AI Deployment Tiers",
        plans: [
          {
            name: "Data Lakehouse Starter",
            price: "Custom",
            features: [
              { name: "Single Multi-Cloud Region", included: true },
              { name: "Lakehouse Storage Optimization", included: true },
              { name: "Basic Model Evaluation", included: true },
              { name: "Full watsonx.gov Compliance", included: false },
            ],
          },
          {
            name: "Enterprise Cognitive Suite",
            price: "Custom",
            isPopular: true,
            features: [
              { name: "Global Distributed Lakehouse", included: true },
              { name: "Custom watsonx.ai Foundation Tuning", included: true },
              { name: "Complete watsonx.gov Governance", included: true },
              { name: "24/7 Dedicated SPS Architecture Support", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Ready to Supercharge Your Data & AI Infrastructure?",
        image: "/images/products/products.webp",
      },
    },
    security: {
      id: "ibm-security",
      category: "ibm",
      slug: "security",
      hero: {
        title: "Security",
        subtitle: "Safeguard sensitive assets, proactively protect privileged access, streamline threat response with SOAR, and expose external attack surface vulnerabilities.",
      },
      featuredSolutions: {
        title: "IBM Security Products",
        items: [
          {
            title: "IBM Security Verify Privilege",
            description:
              "Proactive protection for privileged accounts. IBM Security Verify Privilege Vault helps organizations manage, automate, and track the use of shared privileged identities from a scalable, multi-tenant cloud platform. Security Verify Access supports authentication, authorization, data security, and resource management capabilities. You use Security Verify Access in conjunction with standard internet-based applications to build highly secure and well-managed intranets.",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Security QRadar SOAR",
            description:
              "IBM Security QRadar SOAR is built on a platform that automatically enriches and correlates alerts. The QRadar platform ingests alerts from multiple sources, enriches the alerts with context that is used to prioritize those alerts, and correlates the alerts together into a case",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Security Verify",
            description:
              "Safeguard sensitive data, applications, and systems from unauthorized access, ensuring the confidentiality, integrity, and availability of resources",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Security QRadar",
            description:
              "Protect Your Critical Attack Surface! Streamline security operations with simple deployment, effortless integrations, and regular app and security content updates",
            image: "/images/products/powering_ibm.jpg",
          },
          {
            title: "IBM Randori",
            description:
              "Uncover your external attack surface risks, before attackers do! Enterprise attack surface continues to expand with digital transformation. While organizations have succeeded in fixing known vulnerabilities on managed organizational assets: the rapid adoption of hybrid cloud models and an increasingly remote workforce have made it near impossible for security teams to manage an expanding attack surface.",
            image: "/images/products/powering_ibm.jpg",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose IBM Security with SPS",
        image: "/images/products/powering_ibm.jpg",
        badgeText: "IBM\nPartner",
        points: [
          { title: "Zero-Trust Privilege Governance", description: "Enforce strict least-privilege policies, session monitoring, and automated credential rotation." },
          { title: "Autonomous Incident Orchestration", description: "Accelerate response times from days to seconds with QRadar SOAR playbooks and dynamic enrichment." },
          { title: "Continuous ASM Risk Discovery", description: "See your perimeter through an attacker's lens with Randori external attack surface reconnaissance." },
          { title: "24/7 Threat Oversight & Compliance", description: "Deep alignment with NIST CSF 2.0, ISO 27001, and federal regulatory mandates." },
        ],
      },
      metrics: [
        { value: "85%", label: "Faster MTTR Response" },
        { value: "99.9%", label: "Privilege Security Score" },
        { value: "100%", label: "External ASM Discovery" },
        { value: "24/7", label: "Automated Correlation" },
      ],
      testimonials: {
        title: "Enterprise Defense with IBM Security",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Integrating IBM QRadar SOAR and Verify Privilege with SPS engineering reduced our security incident triage time by over 80%. An ironclad security ecosystem.",
            author: "Rachel Sterling",
            role: "Chief Information Security Officer",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "IBM Security Deployment Options",
        plans: [
          {
            name: "Threat Defense Starter",
            price: "Custom",
            features: [
              { name: "IBM Security Verify Essentials", included: true },
              { name: "Single Cloud Tenant Monitoring", included: true },
              { name: "Privilege Access Vault", included: true },
              { name: "Randori ASM Ingestion", included: false },
            ],
          },
          {
            name: "Enterprise Defense Shield",
            price: "Custom",
            isPopular: true,
            features: [
              { name: "Full Verify & Privileged Identity Suite", included: true },
              { name: "QRadar SOAR Automated Playbooks", included: true },
              { name: "Continuous Randori ASM Perimeter Scanning", included: true },
              { name: "24/7 Dedicated SPS Security Engineers", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Fortify Your Organization with IBM Enterprise Security",
        image: "/images/products/products.webp",
      },
    },
    sustainability: {
      id: "ibm-sustainability",
      category: "ibm",
      slug: "sustainability",
      hero: {
        title: "Sustainability",
        subtitle: "Optimize physical enterprise assets, reduce operational emissions, and drive intelligent maintenance workflows with IBM Maximo.",
      },
      featuredSolutions: {
        title: "IBM Sustainability Products",
        items: [
          {
            title: "IBM Maximo",
            description:
              "IBM Maximo is a comprehensive Enterprise Asset Management (EAM) and Computerized Maintenance Management System (CMMS) software solution developed by IBM. It helps organizations manage, monitor, and optimize their physical assets, maintenance operations, and workflows efficiently.",
            image: "/images/products/powering_ibm.jpg",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose IBM Sustainability with SPS",
        image: "/images/products/powering_ibm.jpg",
        badgeText: "IBM\nPartner",
        points: [
          { title: "Predictive Asset Health Monitoring", description: "Leverage AI-driven telemetry to anticipate failures, schedule maintenance, and extend asset longevity." },
          { title: "Operational Emission Reduction", description: "Align facility workflows and equipment efficiency to meet strict global ESG compliance standards." },
          { title: "Mobile Field Technician Workflows", description: "Empower ground teams with real-time digital checklists, schematics, and inventory sync." },
          { title: "Lifecycle ROI Optimization", description: "Dramatically lower capital expenditure by preventing catastrophic equipment downtime." },
        ],
      },
      metrics: [
        { value: "43%", label: "Lower Unplanned Downtime" },
        { value: "28%", label: "Reduced Maintenance Costs" },
        { value: "3x", label: "Extended Asset Lifespan" },
        { value: "100%", label: "ESG Reporting Compliance" },
      ],
      testimonials: {
        title: "Client Outcomes with IBM Maximo",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Deploying IBM Maximo through SPS transformed our facility operations. We moved from reactive fire-fighting to predictable, continuous asset optimization.",
            author: "Julian Briggs",
            role: "VP of Global Asset Infrastructure",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "IBM Sustainability Implementation Plans",
        plans: [
          {
            name: "Facility Asset Core",
            price: "Custom",
            features: [
              { name: "IBM Maximo CMMS Core Setup", included: true },
              { name: "Digital Work Order Management", included: true },
              { name: "Preventative Maintenance Scheduling", included: true },
              { name: "AI Anomaly Prediction", included: false },
            ],
          },
          {
            name: "Enterprise Intelligent EAM",
            price: "Custom",
            isPopular: true,
            features: [
              { name: "Full IBM Maximo Application Suite (MAS)", included: true },
              { name: "AI Predictive Asset Health & Telemetry", included: true },
              { name: "Mobile Field Workflows & Barcode Scanning", included: true },
              { name: "Custom ESG & Sustainability Dashboards", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Drive Enterprise Asset Reliability & Sustainability",
        image: "/images/products/products.webp",
      },
    },
  },
};

export const OVERVIEW_TESTIMONIALS_DATA = PRODUCTS_DATA.generic.all.testimonials;


