export type Vertical = {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
  href: string;
  image: string; 
};

export const VERTICALS_INTRO = {
  eyebrow: "SPS Verticals",
  title: "Comprehensive Industry Solutions",
  highlight: "& Digital Transformation",
  description:
    "Tailored, industry-specific solutions built on deep domain expertise — empowering organizations across every sector to lead their digital transformation.",
};

export const VERTICALS: Vertical[] = [
  {
    id: "public-sector",
    icon: "lucide:landmark",
    title: "Public Sector",
    description:
      "Now more than ever, governments need to adapt with secure, citizen-centric digital services.",
    items: [
      "Government",
      "Public Safety",
      "Education",
      "Healthcare – Mid Atl",
      "County Government",
    ],
    href: "/",
    image: "/verticals/public.jpg",
  },
  {
    id: "industrials",
    icon: "lucide:factory",
    title: "Industrials",
    description:
      "Many industrial enterprises are prime for analytics and automation to drive efficiency.",
    items: ["Manufacturing", "Textile", "Utilities"],
    href: "/",
    image: "/verticals/industrial.jpg",
  },
  {
    id: "healthcare",
    icon: "lucide:heart-pulse",
    title: "Healthcare",
    description:
      "We support healthcare providers transforming patient experience with secure digital systems.",
    items: [
      "Telehealth & Remote Monitoring",
      "Multi-Clinic Consolidation",
      "Compliance Requirements",
      "Patient Experience",
      "Health Systems Interoperability",
      "Retail",
    ],
    href: "/",
    image: "/verticals/health.jpg",
  },
  {
    id: "retail",
    icon: "lucide:shopping-bag",
    title: "Retail",
    description:
      "The challenges facing retailers can be overwhelming — we simplify omnichannel transformation.",
    items: [
      "Supply Chain",
      "Marketing / Merchandising",
      "Personalization & Localization",
      "Omni-channel Operations",
      "Convenience Stores",
    ],
    href: "/",
    image: "/verticals/retail.jpg",
  },
  {
    id: "energy",
    icon: "lucide:bolt",
    title: "Energy",
    description:
      "In today's changing energy landscape, business leaders need agile, data-driven operations.",
    items: ["Electric", "Oil & Gas"],
    href: "/",
    image: "/verticals/energy.jpg",
  },
  {
    id: "financial",
    icon: "lucide:banknote",
    title: "Financial",
    description:
      "Financial services firms require real-time modernization to stay competitive and secure.",
    items: ["Insurance", "Banking"],
    href: "/",
    image: "/verticals/financial.jpg",
  },
  {
    id: "telecom",
    icon: "lucide:radio-tower",
    title: "Telecommunications",
    description:
      "Telecommunications is experiencing a seismic shift — we power next-gen network transformation.",
    items: ["Telcos"],
    href: "/",
    image: "/verticals/telecom.jpg",
  },
];