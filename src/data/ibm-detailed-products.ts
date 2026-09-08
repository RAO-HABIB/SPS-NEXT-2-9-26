export interface DepartmentCard {
  title: string;
  description: string;
  badge?: string;
  gradient?: string;
  iconName?: string;
}

export interface ArchitectureTab {
  id: string;
  label: string;
  headline: string;
  description: string;
  screenshot?: string;
}

export interface ClientResult {
  clientName: string;
  logoText: string;
  description: string;
}

export interface IbmDetailedProduct {
  id: string;
  slug: "automation" | "data-ai" | "security" | "sustainability";
  title: string;
  breadcrumbCategory: string;
  headerTag: string;
  coreSection: {
    heading: string;
    leadParagraph: string;
    outcomeParagraph: string;
    videoTitle: string;
    videoEmbedUrl: string;
  };
  departmentCards: DepartmentCard[];
  capabilitiesSection: {
    heading: string;
    tabs: ArchitectureTab[];
  };
  clientResults: ClientResult[];
}

export const IBM_DETAILED_PRODUCTS: Record<string, IbmDetailedProduct> = {
  // ==========================================
  // AUTOMATION
  // ==========================================
  orchestrate: {
    id: "orchestrate",
    slug: "automation",
    title: "IBM Automation Watsonx Orchestrate",
    breadcrumbCategory: "AUTOMATION",
    headerTag: "AI-Powered Workflow Orchestration",
    coreSection: {
      heading: "Put AI to work",
      leadParagraph:
        "IBM® watsonx™ Orchestrate puts AI to work, helping you build, deploy and manage powerful AI assistants and agents that automate workflows and processes with generative AI. Seamlessly integrate with your existing business systems. Connect to any AI model or automation tool. Enable collaboration between your AI assistants and agents in one unified experience.",
      outcomeParagraph:
        "The outcome? Less manual work. Faster decisions. A more efficient business, at scale.",
      videoTitle: "Configuring a simple Skill in IBM watsonx Orchestrate",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Human resources",
        description:
          "Put the 'human' back in Human Resources. AI can help streamline business processes so your HR professionals have time to onboard and support employees with a personal touch.",
        badge: "HR Tech",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Procurement",
        description:
          "Create a competitive advantage. watsonx Orchestrate can help advance your procurement team to greater efficiency and improved strategic sourcing with seamless integration.",
        badge: "Supply Chain",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Sales",
        description:
          "Boost your sales team's potential. From automated lead qualification to enhanced customer interactions, increase productivity through each stage of the sales cycle.",
        badge: "Revenue Ops",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
      {
        title: "Customer service",
        description:
          "Engage customers with NLP. Natural language processing helps your chatbots understand complex customer queries and deliver conversational self-service.",
        badge: "Support 24/7",
        gradient: "from-sky-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Build, run and manage AI agents",
      tabs: [
        {
          id: "orchestration",
          label: "MULTI-AGENT ORCHESTRATION",
          headline: "Orchestrate a team of AI agents that work together, so you don't have to",
          description:
            "Let AI agents plan, coordinate and take action together. Whether it's one agent handling a task or a team collaborating across tools, our platform intelligently assigns the right agents and resources to get work done, without human micromanagement.",
        },
        {
          id: "builder",
          label: "AGENT BUILDER",
          headline: "Design and customize domain-specific agents in minutes",
          description:
            "Equip your teams with a visual low-code canvas to configure skills, trigger conditions, memory contexts, and role-based permissions without rewriting underlying backend services.",
        },
        {
          id: "catalog",
          label: "AGENT CATALOG",
          headline: "Deploy from hundreds of verified enterprise skills",
          description:
            "Access out-of-the-box connectors for SAP, Salesforce, Workday, ServiceNow, Microsoft 365, and Jira. Pre-built skills accelerate time-to-value across every department.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Avid Solutions",
        logoText: "Avid Solutions",
        description:
          "Avid Solutions cut costly project errors by 10%, streamlining execution and driving precision at scale.",
      },
      {
        clientName: "Dun & Bradstreet",
        logoText: "D&B",
        description:
          "Dun & Bradstreet reduced procurement task time by up to 20% with AI-powered supplier risk evaluation.",
      },
      {
        clientName: "IBM Internal HR",
        logoText: "IBM",
        description:
          "IBM saw 94% of its company-wide HR requests handled using watsonx Orchestrate.",
      },
    ],
  },

  assistant: {
    id: "assistant",
    slug: "automation",
    title: "IBM Watsonx Assistant",
    breadcrumbCategory: "AUTOMATION",
    headerTag: "Conversational Generative AI",
    coreSection: {
      heading: "Deliver frictionless conversational self-service",
      leadParagraph:
        "IBM watsonx Assistant is a market-leading conversational AI platform that delivers prompt, accurate, and personalized customer self-service across channels. Powered by watsonx generative foundation models and retrieval-augmented generation (RAG), it delivers hallucination-free answers grounded in your enterprise knowledge bases.",
      outcomeParagraph:
        "The outcome? Up to 99% intent accuracy and 60% faster resolution of Tier-1 support tickets.",
      videoTitle: "Enterprise Conversational AI with IBM watsonx Assistant",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Omnichannel Support",
        description:
          "Deploy identical conversational experiences across web chat, mobile apps, WhatsApp, telephony (IVR), and SMS with stateful multi-turn memory.",
        badge: "Omnichannel",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Document Grounding",
        description:
          "Connect directly to SharePoint, Box, Zendesk, and ServiceNow to surface verified passages with cited source verification.",
        badge: "RAG Engine",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Agent Assist",
        description:
          "Empower live customer service representatives with real-time AI suggested responses, auto-summarization, and one-click CRM updates.",
        badge: "Agent Assist",
        gradient: "from-teal-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Enterprise Governance",
        description:
          "Full data isolation with zero customer data training, strict role-based access, and certified HIPAA / SOC-2 compliance.",
        badge: "Zero IP Leaks",
        gradient: "from-blue-500/15 via-purple-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Scalable conversational architecture",
      tabs: [
        {
          id: "visual-builder",
          label: "VISUAL DIALOGUE BUILDER",
          headline: "Build fluid conversational flows without writing code",
          description:
            "Design multi-branch dialogues, fallback policies, and human-agent handoffs with context-aware session tracking.",
        },
        {
          id: "enterprise-rag",
          label: "VERIFIED RAG GROUNDING",
          headline: "Answers grounded in factual enterprise documents",
          description:
            "Watsonx Assistant cites direct sources, eliminating hallucinations and ensuring compliant customer-facing interactions.",
        },
        {
          id: "telephony",
          label: "VOICE & IVR INTEGRATION",
          headline: "Intelligent interactive voice response telephony",
          description:
            "Integrate with Genesys, Cisco, and Twilio for natural voice conversations with near-zero latency.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Banking Corp",
        logoText: "Global Bank",
        description: "Handled 15 million automated customer inquiries in Year 1 with 92% first-contact resolution.",
      },
      {
        clientName: "Telecom Leader",
        logoText: "Telco Enterprise",
        description: "Reduced average call handle times by 3.5 minutes with real-time agent assist recommendations.",
      },
      {
        clientName: "Healthcare System",
        logoText: "HealthNet",
        description: "Delivered 24/7 patient scheduling and prescription refill self-service with HIPAA-grade security.",
      },
    ],
  },

  discovery: {
    id: "discovery",
    slug: "automation",
    title: "IBM Watson Discovery",
    breadcrumbCategory: "AUTOMATION",
    headerTag: "Cognitive Enterprise Search & NLP",
    coreSection: {
      heading: "Unlock insights hidden in unstructured documents",
      leadParagraph:
        "IBM Watson Discovery is an enterprise search and text analytics platform that uses natural language processing and machine learning to understand complex documents, contracts, manuals, and reports. It extracts key concepts, relations, and data points so your teams find answers in seconds instead of hours.",
      outcomeParagraph:
        "The outcome? 75% reduction in manual document research and instant regulatory audit readiness.",
      videoTitle: "Transforming Unstructured Data with IBM Watson Discovery",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Smart Document Understanding",
        description: "Visual model training that recognizes headers, tables, footnotes, and diagrams in complex PDFs and scans.",
        badge: "SDU Visual",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Contract Analytics",
        description: "Identify non-standard clauses, liability exposure, and renewal deadlines across thousands of supplier agreements.",
        badge: "Legal Tech",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Technical Manual Search",
        description: "Enable engineers and field technicians to surface exact repair steps from 500-page operational handbooks instantly.",
        badge: "Field Service",
        gradient: "from-cyan-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "Regulatory Intelligence",
        description: "Track changing compliance mandates across financial, environmental, and medical policy frameworks automatically.",
        badge: "Compliance",
        gradient: "from-purple-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Deep cognitive search technology",
      tabs: [
        {
          id: "nlp-enrichment",
          label: "NLP ENRICHMENT",
          headline: "Extract entities, sentiments, and semantic relationships",
          description:
            "Discovery parses grammatical syntax and industry nomenclature to map relationships between organizations, people, and risks.",
        },
        {
          id: "relevance-training",
          label: "RELEVANCE TRAINING",
          headline: "Machine learning ranking that adapts to your team's queries",
          description:
            "Continuous active learning improves retrieval accuracy based on user click-through and positive confirmation feedback.",
        },
        {
          id: "enterprise-connectors",
          label: "NATIVE CONNECTORS",
          headline: "Index enterprise repositories without data migration",
          description:
            "Securely ingest documents from SharePoint, Salesforce, Box, Cloud Object Storage, and relational databases.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Defense & Aerospace",
        logoText: "Aerospace Group",
        description: "Reduced aircraft maintenance troubleshooting time by 68% across 100,000+ technical service bulletins.",
      },
      {
        clientName: "Multinational Insurer",
        logoText: "Global Insurance",
        description: "Accelerated underwriting claims evaluation from 3 days to under 4 hours.",
      },
      {
        clientName: "Pharma Research",
        logoText: "BioPharma",
        description: "Scanned 2 million scientific journals to uncover compound correlations for clinical trials.",
      },
    ],
  },

  "code-assistant": {
    id: "code-assistant",
    slug: "automation",
    title: "IBM watsonx Code Assistant",
    breadcrumbCategory: "AUTOMATION",
    headerTag: "Generative AI Code Companion",
    coreSection: {
      heading: "Accelerate software development with governed AI",
      leadParagraph:
        "IBM watsonx Code Assistant uses purpose-built foundation models to generate syntax-accurate code, translate legacy languages, and automate IT configuration playbooks. Tailored specifically for enterprise use cases like Red Hat Ansible Automation and IBM Z mainframe modernization.",
      outcomeParagraph:
        "The outcome? 2x+ developer throughput, cleaner codebases, and verified code provenance.",
      videoTitle: "Modernizing IT with IBM watsonx Code Assistant",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Ansible Automation",
        description: "Generate production-grade Red Hat Ansible playbooks using plain English natural language requests.",
        badge: "IT Ops",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "COBOL to Java Modernization",
        description: "Deconstruct monolithic mainframe programs and translate critical business logic into modular Java services.",
        badge: "Mainframe",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Automated Unit Tests",
        description: "Generate edge-case test suites and code documentation automatically to maintain high code coverage.",
        badge: "DevOps",
        gradient: "from-teal-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Code Provenance Filter",
        description: "Ensure full intellectual property compliance with attribution filtering against open source repositories.",
        badge: "IP Safe",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Enterprise software modernization",
      tabs: [
        {
          id: "ansible-lightspeed",
          label: "ANSIBLE LIGHTSPEED",
          headline: "Automate IT infrastructure with natural language",
          description: "Generate complex configuration management scripts, cloud deployments, and firewall policies in seconds.",
        },
        {
          id: "z-modernization",
          label: "MAINFRAME REFACTORING",
          headline: "Modernize legacy systems without business disruption",
          description: "Visual dependency mapping isolates business rules from legacy storage routines for risk-free migration.",
        },
        {
          id: "ide-integration",
          label: "IDE EXTENSIONS",
          headline: "Inline developer suggestions in VS Code and Eclipse",
          description: "Real-time context-aware code completions and vulnerability alerts directly inside developer workflows.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Federal Agency",
        logoText: "Gov Tech",
        description: "Modernized 40-year-old COBOL benefit calculation routines into cloud-native Java containers in 6 months.",
      },
      {
        clientName: "Global Logistics",
        logoText: "Logistics Enterprise",
        description: "Reduced Ansible automation script authoring time by 45% across multi-region cloud infrastructure.",
      },
      {
        clientName: "Financial Exchange",
        logoText: "FinTech Hub",
        description: "Automated test coverage generation, reducing pre-release regression defects by 30%.",
      },
    ],
  },

  // ==========================================
  // DATA & AI
  // ==========================================
  data: {
    id: "data",
    slug: "data-ai",
    title: "IBM Watsonx.data",
    breadcrumbCategory: "DATA & AI",
    headerTag: "Open Hybrid Cloud Data Lakehouse",
    coreSection: {
      heading: "Scale analytics and AI with open lakehouse economics",
      leadParagraph:
        "IBM watsonx.data is a fit-for-purpose data store built on an open lakehouse architecture, designed to scale analytics and generative AI workloads across hybrid clouds. Query data wherever it resides using open table formats like Apache Iceberg while slashing storage and compute costs by up to 50%.",
      outcomeParagraph:
        "The outcome? Seamless data democratization, unified metadata governance, and 50% cloud cost reduction.",
      videoTitle: "Open Data Lakehouse with IBM watsonx.data",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Hybrid Data Query",
        description: "Execute high-performance Presto and Spark query engines across AWS, Azure, on-prem, and IBM Cloud.",
        badge: "Presto Engine",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Apache Iceberg Architecture",
        description: "Avoid proprietary vendor lock-in with open table formats, ACID transactions, and automated schema evolution.",
        badge: "Open Formats",
        gradient: "from-cyan-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "Built-in AI Optimization",
        description: "Serve clean, governed feature stores directly to watsonx.ai machine learning pipelines with zero ETL lag.",
        badge: "AI-Ready",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Unified Access Control",
        description: "Centralized role-based access, column-level masking, and cryptographic compliance auditing across all data stores.",
        badge: "Zero-Trust",
        gradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Next-generation data architecture",
      tabs: [
        {
          id: "open-engines",
          label: "QUERY OPTIMIZATION",
          headline: "Smart workload pairing between Spark and Presto",
          description: "Route BI queries to lightweight engines and heavy model training to high-throughput compute clusters.",
        },
        {
          id: "metadata-mesh",
          label: "GLOBAL METADATA",
          headline: "A unified catalog for distributed enterprise datasets",
          description: "Single-pane-of-glass discovery across object stores, relational databases, and streaming Kafka pipelines.",
        },
        {
          id: "cost-controls",
          label: "STORAGE TIERING",
          headline: "Cut warehouse expenses by migrating cold data to S3-compatible object storage",
          description: "Keep query speed identical while paying standard object storage costs.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Energy Leader",
        logoText: "Energy Power",
        description: "Migrated 4 petabytes of telemetry logs to watsonx.data, lowering annual cloud analytics costs by $1.2M.",
      },
      {
        clientName: "Retail Conglomerate",
        logoText: "Global Retail",
        description: "Unified 12 regional ERP database silos for real-time inventory visibility and automated restocking.",
      },
      {
        clientName: "Digital Bank",
        logoText: "FinBank",
        description: "Reduced customer fraud model training data prep time from 2 weeks to 6 hours.",
      },
    ],
  },

  ai: {
    id: "ai",
    slug: "data-ai",
    title: "IBM Watsonx.ai",
    breadcrumbCategory: "DATA & AI",
    headerTag: "Enterprise AI & Foundation Models Studio",
    coreSection: {
      heading: "Build, tune and govern enterprise generative AI",
      leadParagraph:
        "IBM watsonx.ai brings together cutting-edge generative AI capabilities powered by IBM Granite foundation models alongside open-source models from Hugging Face. Train, fine-tune, and deploy models with comprehensive model lineage, hallucination detection, and intellectual property indemnity.",
      outcomeParagraph:
        "The outcome? Enterprise-ready AI with verifiable compliance, high accuracy, and zero IP exposure.",
      videoTitle: "Model Training and Studio Tour in IBM watsonx.ai",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Granite Foundation Models",
        description: "Transparent, trusted foundation models trained on vetted enterprise code and domain-specific knowledge.",
        badge: "Granite Models",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Prompt Lab & Fine-Tuning",
        description: "Visual prompt engineering workspace with automated parameter tuning, LoRA, and temperature optimization.",
        badge: "Prompt Lab",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Model Governance",
        description: "Built-in evaluations monitor for bias, toxicity, drift, and hallucination throughout the production lifecycle.",
        badge: "Guardrails",
        gradient: "from-teal-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "API & SDK Deployment",
        description: "One-click deployment to REST endpoints, Python SDKs, and containerized microservices on Red Hat OpenShift.",
        badge: "OpenShift",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Full-lifecycle AI studio",
      tabs: [
        {
          id: "prompt-engineering",
          label: "PROMPT ENGINEERING",
          headline: "Iterate, benchmark, and deploy system prompts",
          description: "Compare multiple models side-by-side on proprietary datasets to choose the optimal balance of latency, cost, and quality.",
        },
        {
          id: "tuning-studio",
          label: "PARAMETER-EFFICIENT TUNING",
          headline: "Custom domain adaptation with minimal GPU overhead",
          description: "Inject company-specific vernacular and formatting rules without retraining multi-billion parameter foundations.",
        },
        {
          id: "synthetic-data",
          label: "SYNTHETIC DATA GENERATION",
          headline: "Generate privacy-preserving test datasets",
          description: "Synthesize high-fidelity test and training data while strictly preserving GDPR, HIPAA, and customer privacy.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Fortune 50 Manufacturer",
        logoText: "Smart Factory",
        description: "Built custom AI assistant for factory line technicians with 98% technical accuracy.",
      },
      {
        clientName: "Investment Group",
        logoText: "Alpha Capital",
        description: "Automated financial report synthesis, generating portfolio briefings 4x faster.",
      },
      {
        clientName: "Telecommunications",
        logoText: "Global Connect",
        description: "Deployed agent coaching assistant, boosting customer satisfaction scores by 18 points.",
      },
    ],
  },

  gov: {
    id: "gov",
    slug: "data-ai",
    title: "IBM Watsonx.gov",
    breadcrumbCategory: "DATA & AI",
    headerTag: "AI Governance, Risk & Regulatory Compliance",
    coreSection: {
      heading: "Govern your AI with accountability and auditability",
      leadParagraph:
        "IBM watsonx.gov provides the essential governance framework to accelerate responsible, transparent, and explainable AI workflows. Automate AI lifecycle governance, evaluate risks, enforce policies, and simplify compliance with global regulations such as the EU AI Act and NIST AI Risk Management Framework.",
      outcomeParagraph:
        "The outcome? Total model explainability, continuous compliance monitoring, and automated audit documentation.",
      videoTitle: "Automated Enterprise AI Governance with IBM watsonx.gov",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Compliance Automation",
        description: "Automate fact sheets and regulatory documentation required for the EU AI Act, FedRAMP, and NIST standards.",
        badge: "EU AI Act",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Fairness & Bias Detection",
        description: "Continuous telemetry alerts teams if models drift or display demographic, socioeconomic, or gender bias.",
        badge: "Ethical AI",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Model Lineage & Provenance",
        description: "Track every dataset, training run, prompt revision, and deployment environment for full forensic auditability.",
        badge: "Lineage",
        gradient: "from-cyan-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "Policy Enforcement",
        description: "Block models from deployment if performance thresholds or toxicity metrics breach enterprise compliance limits.",
        badge: "Gatekeeping",
        gradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Complete governance lifecycle",
      tabs: [
        {
          id: "factsheets",
          label: "AUTOMATED FACTSHEETS",
          headline: "Auto-generate audit-ready model documentation",
          description: "Capture model purpose, training parameters, evaluation metrics, and approval signoffs automatically.",
        },
        {
          id: "monitoring",
          label: "RUNTIME MONITORING",
          headline: "Real-time alerts for accuracy degradation and drift",
          description: "Continuous evaluations compare production inferences against baseline gold standards to trigger auto-retraining.",
        },
        {
          id: "risk-assessment",
          label: "RISK CLASSIFICATION",
          headline: "Classify AI use cases into regulatory risk tiers",
          description: "Establish risk-adjusted approval workflows based on whether the model impacts hiring, credit, or vital operations.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Tier-1 European Bank",
        logoText: "EuroBank",
        description: "Achieved 100% compliance readiness for the EU AI Act across 250+ machine learning models.",
      },
      {
        clientName: "Healthcare Payer",
        logoText: "HealthCare Plus",
        description: "Eliminated algorithmic bias in patient care authorization models while accelerating audits.",
      },
      {
        clientName: "Insurance Provider",
        logoText: "InsureGuard",
        description: "Cut model validation audit preparation from 8 weeks to under 3 days.",
      },
    ],
  },

  // ==========================================
  // SECURITY
  // ==========================================
  verify: {
    id: "verify",
    slug: "security",
    title: "IBM Security Verify",
    breadcrumbCategory: "SECURITY",
    headerTag: "Identity & Access Management (IAM)",
    coreSection: {
      heading: "Protect every user, device, and API with Zero-Trust identity",
      leadParagraph:
        "IBM Security Verify is an enterprise cloud Identity and Access Management (IAM) platform that provides frictionless, context-based authentication and lifecycle governance. Protect against account takeovers and credential theft with AI-driven adaptive MFA, passwordless login, and decentralized verifiable credentials.",
      outcomeParagraph:
        "The outcome? Zero credential breaches, 90% reduction in password reset tickets, and instant zero-trust compliance.",
      videoTitle: "Adaptive Multi-Factor Authentication with IBM Security Verify",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Adaptive Access & AI MFA",
        description: "Assess user risk signals in real-time to challenge only anomalous login attempts while keeping employees productive.",
        badge: "Adaptive MFA",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Passwordless Authentication",
        description: "FIDO2 biometric authentication and mobile push approvals eliminate the vulnerabilities of shared credentials.",
        badge: "FIDO2",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Identity Governance (IGA)",
        description: "Automate user onboarding, role transitions, and separation-of-duty access certifications across all enterprise SaaS.",
        badge: "IGA Engine",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
      {
        title: "Privileged Access Management",
        description: "Enforce just-in-time access and dynamic session recording for infrastructure administrators and cloud consoles.",
        badge: "PAM Security",
        gradient: "from-teal-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Zero-Trust Identity Infrastructure",
      tabs: [
        {
          id: "sso-federation",
          label: "SINGLE SIGN-ON & FEDERATION",
          headline: "One secure login for thousands of cloud and legacy apps",
          description: "SAML 2.0, OIDC, and WS-Fed support connect employees to Workday, Salesforce, AWS, and legacy internal portals.",
        },
        {
          id: "risk-scoring",
          label: "CONTINUOUS RISK ENGINE",
          headline: "Continuous risk assessment beyond the initial login",
          description: "Evaluate device posture, impossible travel, behavioral keystroke dynamics, and network reputation continuously.",
        },
        {
          id: "verifiable-credentials",
          label: "DECENTRALIZED IDENTITY",
          headline: "Tamper-proof digital employee badges and credentials",
          description: "Issue cryptographic mobile wallet credentials that verify employee permissions without transmitting PII.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "State Health System",
        logoText: "CareHealth",
        description: "Enabled secure biometric passwordless login for 35,000 clinicians across 14 hospital centers.",
      },
      {
        clientName: "Global FinTech",
        logoText: "PaySecure",
        description: "Blocked 100% of credential-stuffing attacks during peak financial trading windows.",
      },
      {
        clientName: "Higher Education Network",
        logoText: "Global University",
        description: "Automated student and faculty semester onboarding, saving 1,200 hours of manual IT admin work.",
      },
    ],
  },

  guardium: {
    id: "guardium",
    slug: "security",
    title: "IBM Security Guardium",
    breadcrumbCategory: "SECURITY",
    headerTag: "Data Security & Compliance Governance",
    coreSection: {
      heading: "Discover, protect, and monitor sensitive data anywhere",
      leadParagraph:
        "IBM Security Guardium is a modern data security platform that discovers sensitive data across hybrid cloud databases, fileshares, and big data lakehouses. It monitors data access in real-time, encrypts sensitive assets, and automates compliance reporting for GDPR, HIPAA, PCI-DSS, and SOX.",
      outcomeParagraph:
        "The outcome? Real-time data leak prevention, automated compliance audits, and total cryptographic protection.",
      videoTitle: "Data Protection and Discovery with IBM Guardium",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Automated Data Discovery",
        description: "Locate shadow databases, unencrypted customer records, and orphaned credentials across multi-cloud environments.",
        badge: "Discovery",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Real-Time Activity Monitoring",
        description: "Inspect privileged database queries and block unauthorized exfiltration attempts before data leaves the network.",
        badge: "DAM Real-Time",
        gradient: "from-cyan-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "Cryptographic Key Management",
        description: "Centralized encryption key lifecycles with hardware security module (HSM) backing and automated key rotation.",
        badge: "Key Lifecycle",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Audit Automation",
        description: "Pre-built compliance audit packs generate signed evidence reports for internal auditors and regulators.",
        badge: "Audit Packs",
        gradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Enterprise data defense framework",
      tabs: [
        {
          id: "vulnerability-assessment",
          label: "VULNERABILITY SCANNING",
          headline: "Identify database misconfigurations and missing patches",
          description: "Continuously scan Oracle, SQL Server, Postgres, MongoDB, and Snowflake against industry security benchmarks.",
        },
        {
          id: "masking-tokenization",
          label: "DYNAMIC MASKING",
          headline: "Redact sensitive customer fields without code changes",
          description: "Mask Social Security numbers, credit cards, and addresses on the fly based on querying user roles.",
        },
        {
          id: "threat-analytics",
          label: "BEHAVIORAL ANOMALIES",
          headline: "Machine learning baseline detects insider threats",
          description: "Identify rogue DBA accounts exporting massive tables outside normal operating hours.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Card Processor",
        logoText: "PayCard International",
        description: "Maintained continuous zero-failure PCI-DSS compliance across 2 billion annual credit transactions.",
      },
      {
        clientName: "National Health Authority",
        logoText: "Health Authority",
        description: "Protected 45 million patient electronic medical records across 12 distributed cloud data warehouses.",
      },
      {
        clientName: "Telecommunications Giant",
        logoText: "Telecom Group",
        description: "Automated audit reporting, reducing compliance audit preparation cycles by 85%.",
      },
    ],
  },

  "qradar-siem": {
    id: "qradar-siem",
    slug: "security",
    title: "IBM Security QRadar SIEM",
    breadcrumbCategory: "SECURITY",
    headerTag: "AI-Powered Threat Detection & SIEM",
    coreSection: {
      heading: "Accelerate threat detection and triage with cognitive security",
      leadParagraph:
        "IBM Security QRadar SIEM applies advanced analytics and generative AI to ingest trillions of network, endpoint, and cloud events, automatically correlating them into prioritized threat incidents. Analysts gain actionable context in seconds, eliminating alert fatigue and reducing dwell time.",
      outcomeParagraph:
        "The outcome? 85% reduction in alert noise and 10x faster mean-time-to-detect (MTTD).",
      videoTitle: "Intelligent Threat Detection with IBM QRadar SIEM",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "AI-Powered Correlation",
        description: "Correlate disparate log events, flow telemetry, and threat intelligence feeds into unified attack storylines.",
        badge: "Smart Correlation",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Network Flow Analytics",
        description: "Deep packet inspection and Layer 7 flow inspection uncover covert command-and-control channels and lateral movement.",
        badge: "NetFlow",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "MITRE ATT&CK Mapping",
        description: "Map detected adversary tactics and techniques against the MITRE ATT&CK matrix in real-time.",
        badge: "MITRE Matrix",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
      {
        title: "Cloud-Native Scalability",
        description: "Unified visibility across hybrid AWS, Azure, Google Cloud, and on-premise security architectures.",
        badge: "Hybrid SOC",
        gradient: "from-teal-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Cognitive SOC operations",
      tabs: [
        {
          id: "alert-reduction",
          label: "ALERT NOISE SUPPRESSION",
          headline: "Eliminate false positives with baseline profiling",
          description: "Intelligent algorithms filter out routine network background noise so security analysts focus on genuine compromises.",
        },
        {
          id: "federated-search",
          label: "FEDERATED LOG SEARCH",
          headline: "Query multi-cloud log repositories in seconds",
          description: "Search distributed data repositories in-place without paying costly data duplication and egress fees.",
        },
        {
          id: "threat-intel",
          label: "X-FORCE THREAT INTEL",
          headline: "Real-time threat feeds from IBM X-Force research",
          description: "Automatic enrichment with current global threat indicator databases and adversary tracking.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Critical Infrastructure Utility",
        logoText: "National Grid",
        description: "Identified and neutralized targeted ransomware attempts in under 8 minutes.",
      },
      {
        clientName: "Commercial Aviation",
        logoText: "Global Airway",
        description: "Consolidated 18 disparate security monitoring consoles into a single global QRadar pane of glass.",
      },
      {
        clientName: "Defense Contractor",
        logoText: "Defense Tech",
        description: "Reduced incident escalation and triage time from 4 hours to 12 minutes.",
      },
    ],
  },

  // ==========================================
  // SUSTAINABILITY
  // ==========================================
  envizi: {
    id: "envizi",
    slug: "sustainability",
    title: "IBM Envizi ESG Suite",
    breadcrumbCategory: "SUSTAINABILITY",
    headerTag: "Enterprise ESG Data & Carbon Accounting",
    coreSection: {
      heading: "Automate Scope 1, 2, and 3 carbon accounting with audit certainty",
      leadParagraph:
        "IBM Envizi ESG Suite is an enterprise software platform that captures, consolidates, and manages 500+ data types across energy, emissions, waste, and social metrics. It automates carbon accounting aligned with GHG Protocol standards and generates disclosure-ready reporting for CSRD, SEC, and TCFD mandates.",
      outcomeParagraph:
        "The outcome? 80% faster ESG audit preparation, automated greenhouse gas reporting, and verifiable net-zero progress.",
      videoTitle: "Carbon Accounting and ESG Reporting with IBM Envizi",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Automated Utility Ingestion",
        description: "Ingest energy, water, gas, and renewable power utility bills across global facilities without manual spreadsheet entry.",
        badge: "Utility Data",
        gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "GHG Protocol Engine",
        description: "Apply up-to-date global emissions factors automatically to compute Scope 1, Scope 2 (market & location), and Scope 3.",
        badge: "GHG Accounting",
        gradient: "from-teal-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Regulatory ESG Frameworks",
        description: "One-click reporting for CSRD, SEC climate rules, CDP disclosures, GRI standards, and SASB metrics.",
        badge: "CSRD Ready",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Decarbonization Pathways",
        description: "Model capital improvement projects, solar investments, and energy efficiency upgrades to track ROI against net-zero targets.",
        badge: "Net-Zero ROI",
        gradient: "from-emerald-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Comprehensive ESG intelligence",
      tabs: [
        {
          id: "data-foundation",
          label: "AUDITABLE DATA FOUNDATION",
          headline: "Single source of environmental truth across global operations",
          description: "Every metric links back to source invoice proof, enabling third-party assurance partners to audit carbon claims effortlessly.",
        },
        {
          id: "scope-3",
          label: "SCOPE 3 SUPPLY CHAIN",
          headline: "Measure supplier carbon intensity and logistics emissions",
          description: "Calculate upstream purchased goods, travel, and logistics footprint using spend-based and activity-based models.",
        },
        {
          id: "building-telemetry",
          label: "SMART METER TELEMETRY",
          headline: "High-frequency interval meter ingestion and peak shaving",
          description: "Identify equipment running during off-hours to instantly eliminate waste and cut operational energy bills.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Commercial Real Estate",
        logoText: "Realty Trust",
        description: "Tracked emissions across 450 commercial skyscrapers, identifying $4.8M in annual energy savings.",
      },
      {
        clientName: "Automotive Manufacturer",
        logoText: "AutoGroup",
        description: "Achieved verified CSRD compliance across 60 global assembly plants in first audit cycle.",
      },
      {
        clientName: "Multinational Retailer",
        logoText: "Retail Giant",
        description: "Automated Scope 1-3 reporting across 3,000 stores, cutting report cycle from 4 months to 2 weeks.",
      },
    ],
  },

  maximo: {
    id: "maximo",
    slug: "sustainability",
    title: "IBM Maximo Application Suite",
    breadcrumbCategory: "SUSTAINABILITY",
    headerTag: "Intelligent Asset Management & CMMS",
    coreSection: {
      heading: "Maximize asset lifecycle, uptime and operational sustainability",
      leadParagraph:
        "IBM Maximo Application Suite unifies asset monitoring, predictive maintenance, and computer vision inspections into a single cloud-native enterprise platform. Powered by AI and IoT sensor telemetry, it extends asset lifespans, lowers unplanned downtime by up to 43%, and drives sustainable operations across manufacturing, utilities, and transport fleets.",
      outcomeParagraph:
        "The outcome? Up to 43% lower downtime, 28% reduced maintenance costs, and 3x extended asset longevity.",
      videoTitle: "Intelligent Asset Management with IBM Maximo Application Suite",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Predictive Asset Health",
        description: "Analyze vibration, temperature, and acoustic sensor telemetry with AI to anticipate equipment breakdowns weeks before they occur.",
        badge: "Predictive AI",
        gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Mobile Field Workflows",
        description: "Empower frontline technicians with offline schematics, barcode asset scanning, and digital step-by-step maintenance checklists.",
        badge: "Field Mobility",
        gradient: "from-cyan-500/15 via-teal-500/10 to-transparent",
      },
      {
        title: "Visual Quality Inspection",
        description: "Deploy edge computer vision models to detect manufacturing flaws, corrosion, and structural anomalies with superhuman precision.",
        badge: "Computer Vision",
        gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Sustainable Asset Optimization",
        description: "Correlate equipment energy consumption with asset wear to optimize carbon emissions and reduce peak-hour utility loads.",
        badge: "ESG Ready",
        gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Full asset lifecycle intelligence",
      tabs: [
        {
          id: "predictive-telemetry",
          label: "PREDICTIVE MAINTENANCE",
          headline: "Shift from reactive repairs to predictive reliability",
          description: "IoT anomaly detection alerts maintenance supervisors to bearing wear, motor imbalances, and pressure loss before line failure.",
        },
        {
          id: "work-order-cmms",
          label: "AUTOMATED CMMS WORK ORDERS",
          headline: "Intelligent dispatch, inventory allocation, and SLA tracking",
          description: "Automatically generate work orders, reserve spare parts in ERP systems, and assign qualified technicians based on certifications.",
        },
        {
          id: "visual-inspection",
          label: "COMPUTER VISION INSPECTIONS",
          headline: "AI defect detection on production assembly lines",
          description: "Inspect manufactured components in milliseconds to catch surface defects, missing bolts, and solder anomalies.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "National Rail Network",
        logoText: "TransRail",
        description: "Reduced locomotive service interruptions by 37% using predictive acoustic bearing monitoring.",
      },
      {
        clientName: "Energy Utility",
        logoText: "PowerGrid Corp",
        description: "Extended transformer asset lifespan by 8 years, saving $24M in deferred capital expenditures.",
      },
      {
        clientName: "Automotive Assembly Plant",
        logoText: "Apex Motors",
        description: "Cut critical assembly line downtime by 43% with mobile-first automated maintenance dispatch.",
      },
    ],
  },

  tririga: {
    id: "tririga",
    slug: "sustainability",
    title: "IBM TRIRIGA Application Suite",
    breadcrumbCategory: "SUSTAINABILITY",
    headerTag: "Integrated Workplace Management (IWMS)",
    coreSection: {
      heading: "Create agile, energy-efficient, and sustainable workplaces",
      leadParagraph:
        "IBM TRIRIGA Application Suite is a market-leading Integrated Workplace Management System (IWMS) that unifies real estate management, space utilization, facility maintenance, and environmental sustainability on a single intelligent platform. Optimize square footage, reduce occupancy costs, and achieve net-zero targets.",
      outcomeParagraph:
        "The outcome? 25% lower real estate overhead, dynamic hybrid workplace agility, and audited building decarbonization.",
      videoTitle: "Smart Facilities and Decarbonization with IBM TRIRIGA",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Real Estate Portfolio Optimization",
        description: "Track global lease obligations, automate ASC 842 / IFRS 16 lease accounting, and right-size building footprints.",
        badge: "Lease Strategy",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Dynamic Space & Occupancy",
        description: "Monitor real-time desk and room utilization with IoT occupancy sensors to eliminate underutilized floor space.",
        badge: "Smart Desking",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Facilities Maintenance & Operations",
        description: "Streamline service requests, manage vendor contracts, and automate scheduled HVAC/lighting maintenance routines.",
        badge: "Operations",
        gradient: "from-teal-500/15 via-cyan-500/10 to-transparent",
      },
      {
        title: "Building Energy Efficiency",
        description: "Integrate with building management systems (BMS) to curb energy waste during low-occupancy hours automatically.",
        badge: "Green Building",
        gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Intelligent workplace architecture",
      tabs: [
        {
          id: "lease-accounting",
          label: "LEASE ACCOUNTING & STRATEGY",
          headline: "Automate compliance with global lease accounting mandates",
          description: "Full compliance with ASC 842 and IFRS 16 rules while optimizing critical lease renewal and termination decision dates.",
        },
        {
          id: "space-planning",
          label: "DYNAMIC SPACE PLANNING",
          headline: "Right-size real estate portfolios with sensor telemetry",
          description: "Identify floors with under 35% utilization to consolidate leased space and slash commercial rent overhead.",
        },
        {
          id: "bms-integration",
          label: "SMART BUILDING CONTROLS",
          headline: "Automate HVAC and lighting schedules to match actual occupancy",
          description: "Dynamically adjust climate control based on live badge swipes and IoT room sensors to eliminate heating/cooling waste.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Tech Headquarters",
        logoText: "Silicon Tech",
        description: "Consolidated 6 leased campus buildings into 4, reducing annual commercial lease expense by $14.5M.",
      },
      {
        clientName: "Financial Services Firm",
        logoText: "Global Capital",
        description: "Automated ASC 842 lease accounting across 320 branch locations with zero audit discrepancies.",
      },
      {
        clientName: "Healthcare Campus",
        logoText: "Metropolitan Health",
        description: "Decreased HVAC energy consumption by 22% by synchronizing building automation with patient occupancy trends.",
      },
    ],
  },

  "verify-privilege": {
    id: "verify-privilege",
    slug: "security",
    title: "IBM Security Verify Privilege",
    breadcrumbCategory: "SECURITY",
    headerTag: "Privileged Access Management (PAM)",
    coreSection: {
      heading: "Proactive, zero-trust protection for privileged accounts and credentials",
      leadParagraph:
        "IBM Security Verify Privilege Vault helps organizations manage, automate, and track the use of shared privileged identities from a scalable, multi-tenant cloud platform. Safeguard administrative root access, rotate credentials dynamically, and eliminate privilege escalation exploits across hybrid cloud environments.",
      outcomeParagraph:
        "The outcome? 99.9% privilege protection, automated credential rotation, and zero administrative credential leaks.",
      videoTitle: "Privileged Access Management with IBM Security Verify Privilege",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Automated Credential Vaulting",
        description: "Discover unmanaged administrative accounts and lock credentials into an encrypted, tamper-evident digital vault.",
        badge: "Vault Security",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Just-in-Time (JIT) Elevation",
        description: "Grant temporary, role-bounded administrative permissions that expire automatically once operational tasks complete.",
        badge: "Zero Standing Privilege",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Session Monitoring & Audit Replay",
        description: "Record full video and keystroke logs of all privileged administrator sessions for undeniable compliance forensics.",
        badge: "Session Replay",
        gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      },
      {
        title: "DevOps Secret Governance",
        description: "Inject API keys, database credentials, and SSL certificates directly into CI/CD pipelines without hardcoding secrets.",
        badge: "DevOps Secrets",
        gradient: "from-teal-500/15 via-blue-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Zero-standing privilege framework",
      tabs: [
        {
          id: "credential-rotation",
          label: "AUTOMATED ROTATION",
          headline: "Continuous, policy-driven password and SSH key rotation",
          description: "Rotate complex administrative passwords across active directories, Unix servers, and cloud consoles every 24 hours automatically.",
        },
        {
          id: "session-protection",
          label: "SESSION ISOLATION & PROXY",
          headline: "Isolate endpoints from sensitive infrastructure during access",
          description: "Air-gap administrative connections so malware on an engineer's laptop cannot traverse into production database networks.",
        },
        {
          id: "threat-analytics",
          label: "BEHAVIORAL PAM ANALYTICS",
          headline: "Detect anomalous command execution and data dumping",
          description: "AI monitors privileged shell commands in real-time, instantly terminating sessions if unauthorized exfiltration occurs.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Multinational Investment Bank",
        logoText: "Tier 1 Bank",
        description: "Secured 45,000 privileged infrastructure credentials across 6 global data centers with automated daily rotation.",
      },
      {
        clientName: "State Government Agency",
        logoText: "Gov Agency",
        description: "Achieved 100% compliance with federal NIST 800-53 privileged access mandates in first audit.",
      },
      {
        clientName: "E-Commerce Cloud Platform",
        logoText: "Cloud Retail",
        description: "Eliminated hardcoded credentials in CI/CD pipelines across 800+ developer microservices.",
      },
    ],
  },

  "qradar-soar": {
    id: "qradar-soar",
    slug: "security",
    title: "IBM Security QRadar SOAR",
    breadcrumbCategory: "SECURITY",
    headerTag: "Security Orchestration, Automation & Response",
    coreSection: {
      heading: "Accelerate incident response with intelligent automated playbooks",
      leadParagraph:
        "IBM Security QRadar SOAR arms security operations centers (SOCs) with automated playbooks, dynamic incident enrichment, and comprehensive privacy breach response guidance. Accelerate triage times from hours to seconds and coordinate defense containment across hundreds of enterprise security tools.",
      outcomeParagraph:
        "The outcome? 85% faster mean-time-to-respond (MTTR), automated threat containment, and audited privacy compliance.",
      videoTitle: "Autonomous Incident Response with IBM QRadar SOAR",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Dynamic Playbook Engine",
        description: "Execute adaptive playbooks that automatically adjust containment actions based on incoming threat telemetry and IOCs.",
        badge: "Dynamic Playbooks",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "300+ Security Integrations",
        description: "Coordinate actions across firewalls, EDR agents, SIEM consoles, and cloud providers from a single orchestrator.",
        badge: "App Ecosystem",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Global Privacy Regulations",
        description: "Built-in knowledge base covers 180+ global breach notification regulations (GDPR, HIPAA, CCPA) with automated timelines.",
        badge: "Breach Privacy",
        gradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Collaborative War Room",
        description: "Shared SOC command center with interactive artifact timelines, integrated chat, and cryptographically signed audit logs.",
        badge: "SOC War Room",
        gradient: "from-teal-500/15 via-cyan-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Modern SOC response orchestration",
      tabs: [
        {
          id: "automated-containment",
          label: "AUTOMATED CONTAINMENT",
          headline: "Neutralize active malware and isolate compromised endpoints in seconds",
          description: "Trigger automated endpoint quarantine, firewall IP blocks, and compromised account lockouts without waiting for manual approval.",
        },
        {
          id: "phishing-triage",
          label: "INTELLIGENT PHISHING TRIAGE",
          headline: "Automate 95% of reported suspicious email triage",
          description: "Detonate suspicious attachments in sandboxes, check URLs against threat intel, and purge matching malicious emails across all mailboxes.",
        },
        {
          id: "breach-notification",
          label: "REGULATORY REPORTING ENGINE",
          headline: "Meet strict 72-hour privacy breach notification deadlines",
          description: "Assess incident severity against relevant data privacy laws and auto-generate legal notification briefs.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Telecommunications Provider",
        logoText: "Telecom SOC",
        description: "Reduced average incident response time from 4.2 hours to 8 minutes across 50,000 security events monthly.",
      },
      {
        clientName: "Hospital Health Network",
        logoText: "HealthNet",
        description: "Automated ransomware containment, successfully isolating infected workstation within 45 seconds.",
      },
      {
        clientName: "FinTech Financial Exchange",
        logoText: "FinTech Hub",
        description: "Automated phishing email triage, saving SOC tier-1 analysts 180 hours of manual investigation weekly.",
      },
    ],
  },

  randori: {
    id: "randori",
    slug: "security",
    title: "IBM Randori Recon",
    breadcrumbCategory: "SECURITY",
    headerTag: "External Attack Surface Management (ASM)",
    coreSection: {
      heading: "See your perimeter through an attacker's lens to neutralize risk first",
      leadParagraph:
        "IBM Randori Recon continuously maps and analyzes your external attack surface through adversary emulation. Without requiring agents or software installations, Randori uncovers shadow IT, forgotten test servers, and exposed cloud assets—ranking them by adversary temptation so defense teams fix what matters most.",
      outcomeParagraph:
        "The outcome? 98% discovered shadow IT assets, prioritized risk remediation, and zero perimeter blind spots.",
      videoTitle: "Continuous Attack Surface Reconnaissance with IBM Randori",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/4y_kX86v1aQ?autoplay=0",
    },
    departmentCards: [
      {
        title: "Zero-Install Outside-In Discovery",
        description: "Continuously discover public-facing IPv4/IPv6 addresses, domains, subdomains, and cloud buckets with zero agent deployment.",
        badge: "Agentless ASM",
        gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Target Temptation Metric",
        description: "Evaluate your assets using an authentic hacker perspective to determine which exposed systems an attacker is most likely to target.",
        badge: "Temptation Score",
        gradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
      },
      {
        title: "Shadow IT & Cloud Sprawl",
        description: "Instantly detect unmanaged SaaS tools, developer staging servers, and orphaned corporate acquisitions before adversaries exploit them.",
        badge: "Shadow IT",
        gradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      },
      {
        title: "Bidirectional SIEM/SOAR Sync",
        description: "Seamlessly feed newly discovered perimeter assets and temptation scores into QRadar, Jira, and ServiceNow ticketing workflows.",
        badge: "SOC Integration",
        gradient: "from-teal-500/15 via-cyan-500/10 to-transparent",
      },
    ],
    capabilitiesSection: {
      heading: "Adversary-driven perimeter reconnaissance",
      tabs: [
        {
          id: "continuous-recon",
          label: "CONTINUOUS RECONNAISSANCE",
          headline: "Real-time mapping of expanding enterprise digital boundaries",
          description: "Detect new subdomains, changed DNS records, and spin-up cloud infrastructure within minutes of exposure.",
        },
        {
          id: "adversary-perspective",
          label: "ADVERSARY RISK PRIORITIZATION",
          headline: "Prioritize patching based on real exploitability, not just CVSS",
          description: "Filter out non-actionable vulnerabilities by prioritizing systems that are internet-facing and genuinely vulnerable to active exploits.",
        },
        {
          id: "ma-due-diligence",
          label: "M&A POSTURE EVALUATION",
          headline: "Audit external risk profile of acquisition targets in 24 hours",
          description: "Assess corporate subsidiaries and potential merger targets without touching internal corporate networks.",
        },
      ],
    },
    clientResults: [
      {
        clientName: "Global Hospitality Chain",
        logoText: "Global Hotels",
        description: "Discovered 420 unknown public cloud assets and shadow IT databases across 85 international franchise entities.",
      },
      {
        clientName: "Energy Infrastructure Leader",
        logoText: "Energy Grid",
        description: "Neutralized exposed remote desktop services (RDP) within 3 hours of public exposure, preventing perimeter breach.",
      },
      {
        clientName: "Aerospace Defense Contractor",
        logoText: "AeroDefense",
        description: "Reduced attack surface vulnerability backlog by 70% by focusing only on high-temptation adversary targets.",
      },
    ],
  },
};

const PRODUCT_ALIASES: Record<string, string> = {
  // Data & AI
  "watsonx-data": "data",
  "watsonx-ai": "ai",
  "watsonx-gov": "gov",
  // Security
  qradar: "qradar-siem",
  "qradar-siem": "qradar-siem",
  "qradar-soar": "qradar-soar",
  "verify-privilege": "verify-privilege",
  verify: "verify",
  guardium: "guardium",
  randori: "randori",
  // Automation
  orchestrate: "orchestrate",
  assistant: "assistant",
  discovery: "discovery",
  "code-assistant": "code-assistant",
  // Sustainability
  maximo: "maximo",
  envizi: "envizi",
  tririga: "tririga",
};

export function getDetailedProduct(productId: string): IbmDetailedProduct {
  const normalizedId = PRODUCT_ALIASES[productId] || productId;
  if (IBM_DETAILED_PRODUCTS[normalizedId]) {
    return IBM_DETAILED_PRODUCTS[normalizedId];
  }
  // Default fallback to orchestrate
  return IBM_DETAILED_PRODUCTS.orchestrate;
}

