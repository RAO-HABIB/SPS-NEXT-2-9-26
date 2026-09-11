export type Partner = {
  id: string;
  name: string;
  logo: string;             // path in /public/partners/
  tagline: string;
  description: string;
  category: string;
  href: string;
};

export const PARTNERS_INTRO = {
  eyebrow: "Strategic Alliances",
  title: "Our Technology",
  highlight: "Partners",
  description:
    "We work with world-class technology vendors to deliver secure, scalable, and innovative solutions across Cloud, AI, Cybersecurity, and Enterprise IT.",
};

export const PARTNERS: Partner[] = [
  {
    id: "ibm",
    name: "IBM Security",
    logo: "/images/partners/ibm.webp",
    tagline: "Identity • Access • Zero Trust",
    description:
      "Enterprise-grade identity, access management and zero trust security solutions for the modern hybrid workforce.",
    category: "Cybersecurity",
    href: "/",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/partners/microsoft.webp",
    tagline: "Cloud • Security • Productivity",
    description:
      "Azure cloud infrastructure, Microsoft 365 productivity and Defender security suite for end-to-end enterprise needs.",
    category: "Cloud & Productivity",
    href: "/",
  },
  {
    id: "redhat",
    name: "Red Hat",
    logo: "/images/partners/redhat.webp",
    tagline: "Open Source Cloud",
    description:
      "OpenShift, RHEL and Ansible — open source platforms powering hybrid cloud and automation at scale.",
    category: "Open Source",
    href: "/",
  },
  {
    id: "sap",
    name: "SAP",
    logo: "/images/partners/sap.webp",
    tagline: "Enterprise Resource Planning",
    description:
      "S/4HANA, SuccessFactors and Ariba — intelligent enterprise applications unifying finance, HR and supply chain.",
    category: "ERP",
    href: "/",
  },
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "/images/partners/lenovo.webp",
    tagline: "Devices • Infrastructure • Computing",
    description:
      "ThinkPad, ThinkSystem servers and edge computing devices powering the modern workplace.",
    category: "Hardware",
    href: "/",
  },
  {
    id: "google",
    name: "Google Cloud",
    logo: "/images/partners/google.webp",
    tagline: "Cloud • AI • Data Analytics",
    description:
      "GCP, Vertex AI and BigQuery — accelerating cloud-native development and AI-driven analytics.",
    category: "Cloud & AI",
    href: "/",
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/images/partners/aws.webp",
    tagline: "Scalable Cloud Infrastructure",
    description:
      "Amazon Web Services — the world's most comprehensive and broadly adopted cloud platform.",
    category: "Cloud",
    href: "/",
  },
  {
    id: "cisco",
    name: "Cisco",
    logo: "/images/partners/cisco.webp",
    tagline: "Networking & Security",
    description:
      "Networking, collaboration and security solutions for connecting and protecting enterprises globally.",
    category: "Networking",
    href: "/",
  },
];