export type SubSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type ServiceTab = {
  id: string;
  icon: string;
  title: string;
  description: string;
  slides: SubSlide[];
};

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "cybersecurity",
    icon: "lucide:shield",
    title: "Cybersecurity",
    description:
      "SPS Cybersecurity team has the following practices: Digital Trust (User Security, Data Security, Mobile Device Management), Threat Management (Cybersecurity Program, SIEM systems, Application Security, Network Security), Keysight (Professional Services, Help Desk Services, Security Operations), and SAP Security.",
    slides: [
      {
        id: "network-security",
        icon: "lucide:network",
        title: "Network Security",
        description:
          "Network Visibility Operations Services, Network Visibility Design & Implementation Services, and Keysight IxNetwork Training.",
        href: "/",
      },
      {
        id: "smaas",
        icon: "lucide:server",
        title: "SMaaS",
        description:
          "Service Management as a Service, including cloud monitoring and operations solutions.",
        href: "/",
      },
      {
        id: "grc",
        icon: "lucide:shield-check",
        title: "GRC",
        description:
          "Governance, Risk & Compliance solutions for enterprise-wide policies and controls.",
        href: "/",
      },
      {
        id: "iam",
        icon: "lucide:user-check",
        title: "Identity & Access",
        description:
          "Identity & Access Management solutions for secure authentication and authorization.",
        href: "/",
      },
      {
        id: "threat-management",
        icon: "lucide:shield-alert",
        title: "Threat Management",
        description:
          "Threat Management solutions for proactive detection and mitigation of cyber threats.",
        href: "/",
      },
    ],
  },
  {
    id: "cloud",
    icon: "lucide:cloud",
    title: "Cloud",
    description:
      "SPS Cloud team offers services in DevOps (CI/CD Pipelines, Automation, Containerization) and Migration Services (Cloud Strategy, Application Migration, Data Migration, Multi-cloud Solutions).",
    slides: [
      {
        id: "devops",
        icon: "lucide:git-branch",
        title: "DevOps",
        description:
          "CI/CD pipelines, infrastructure-as-code, and automated release management for faster delivery.",
        href: "/",
      },
      {
        id: "migration",
        icon: "lucide:move",
        title: "Migration Services",
        description:
          "Seamless workload migration to AWS, Azure, GCP, and IBM Cloud with minimal downtime.",
        href: "/",
      },
      {
        id: "cloud-ops",
        icon: "lucide:layers",
        title: "Cloud Operations",
        description:
          "24/7 cloud infrastructure monitoring, cost optimization, and multi-cloud management solutions.",
        href: "/",
      },
    ],
  },
  {
    id: "ai",
    icon: "lucide:sparkles",
    title: "AI & Automation",
    description:
      "SPS AI & Automation team offers solutions in Automation (Robotic Process Automation, Workflow Automation) and Data Science (Machine Learning, Predictive Analytics, AI Model Development).",
    slides: [
      {
        id: "automation",
        icon: "lucide:zap",
        title: "Automation",
        description:
          "RPA and AI-agent driven automation for repetitive enterprise business workflows at scale.",
        href: "/",
      },
      {
        id: "data-science",
        icon: "lucide:bar-chart-3",
        title: "Data Science",
        description:
          "Predictive analytics, machine learning models, and big data engineering for enterprise insights.",
        href: "/",
      },
      {
        id: "gen-ai",
        icon: "lucide:bot",
        title: "Generative AI",
        description:
          "Custom LLM integrations, retrieval-augmented generation (RAG), and intelligent virtual assistants.",
        href: "/",
      },
    ],
  },
  {
    id: "collaboration",
    icon: "lucide:users",
    title: "Collaboration",
    description:
      "Empower distributed teams with unified communication, corporate training, and virtual event platforms for seamless productivity.",
    slides: [
      {
        id: "events",
        icon: "lucide:calendar",
        title: "Events",
        description:
          "Virtual, hybrid, and in-person events for product launches, conferences, and customer engagement.",
        href: "/",
      },
      {
        id: "training",
        icon: "lucide:graduation-cap",
        title: "Training",
        description:
          "Enterprise learning and certification programs covering modern cloud and cybersecurity tracks.",
        href: "/",
      },
    ],
  },
];