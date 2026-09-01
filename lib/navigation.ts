export type SubItem = { label: string; href: string };
export type SubGroup = { label: string; href?: string; items: SubItem[] };
export type NavPromo = {
  title?: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};
export type NavItem = {
  label: string;
  href: string;
  groups?: SubGroup[];
  items?: SubItem[];
  promo?: NavPromo; // sirf mega menu wale items pe
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },

  // ===== MEGA MENU =====
  {
    label: "Products",
    href: "/",
    promo: {
      description:
        "SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions designed to scale and secure digital transformation.",
      image: "/products/products.webp",
      ctaLabel: "View All Products",
      ctaHref: "/products",
    },
    groups: [
      {
        label: "SPS",
        items: [
          { label: "MYID Self Verify", href: "#" },
          { label: "Azalio", href: "#" },
          { label: "Fabrico", href: "#" },
          { label: "BMS", href: "#" },
          { label: "CSM", href: "#" },
        ],
      },
      {
        label: "IBM",
        items: [
          { label: "Automation", href: "#" },
          { label: "Data & AI", href: "#" },
          { label: "Security", href: "#" },
          { label: "Sustainability", href: "#" },
        ],
      },
      {
        label: "Others",
        items: [
          { label: "Cloud Management", href: "#" },
          { label: "Analytics Tools", href: "#" },
          { label: "IoT Solutions", href: "#" },
          { label: "Blockchain", href: "#" },
        ],
      },
    ],
  },

  // ===== MEGA MENU =====
  {
    label: "Services",
    href: "/",
    promo: {
      description:
        "From Cybersecurity to Cloud, AI & Training  we deliver scalable services that drive measurable business outcomes.",
      image: "/products/services.webp",
      ctaLabel: "Explore Services",
      ctaHref: "/Services",
    },
    groups: [
      {
        label: "Cybersecurity",
        items: [
          { label: "Network Security", href: "#" },
          { label: "SMaaS", href: "#" },
          { label: "GRC", href: "#" },
          { label: "Identity & Access", href: "#" },
          { label: "Threat Management", href: "#" },
          { label: "Data Security", href: "#" },
        ],
      },
      {
        label: "Cloud",
        items: [
          { label: "DevOps", href: "#" },
          { label: "Migration Services", href: "#" },
        ],
      },
      {
        label: "AI & Automation",
        items: [
          { label: "Data Science", href: "#" },
          { label: "Automation", href: "#" },
        ],
      },
      {
        label: "Collaboration",
        items: [
          { label: "Training", href: "#" },
          { label: "Events", href: "#" },
        ],
      },
      {
        label: "Training",
        items: [
          { label: "SPS Oil & Gas", href: "#" },
          { label: "IBM", href: "#" },
          { label: "Google", href: "#" },
          { label: "AWS", href: "#" },
          { label: "See More", href: "#" },
        ],
      },
    ],
  },

  // ===== MEGA MENU =====
  {
    label: "Verticals",
    href: "/",
    promo: {
      description:
        "Tailored solutions for Public Sector, Healthcare, Energy, Retail, Finance & more — built for your industry's unique needs.",
      image: "/products/head.webp",
      ctaLabel: "All Verticals",
      ctaHref: "/Verticals",
    },
    groups: [
      {
        label: "Public Sector",
        items: [
          { label: "Government", href: "#" },
          { label: "Public Safety", href: "#" },
          { label: "Education", href: "#" },
          { label: "Healthcare - Mid Atl", href: "#" },
          { label: "County Government", href: "#" },
        ],
      },
      {
        label: "Industrials",
        items: [
          { label: "Manufacturing", href: "#" },
          { label: "Textile", href: "#" },
          { label: "Utilities", href: "#" },
        ],
      },
      {
        label: "Healthcare",
        items: [
          { label: "Compliance", href: "#" },
          { label: "Interoperability", href: "#" },
          { label: "Multi-Clinic", href: "#" },
          { label: "Patient Experience", href: "#" },
          { label: "Telehealth", href: "#" },
        ],
      },
      {
        label: "Retail",
        items: [
          { label: "Convenience Store", href: "#" },
          { label: "Marketing", href: "#" },
          { label: "Omni-channel", href: "#" },
          { label: "Personalization", href: "#" },
          { label: "Supply Chain", href: "#" },
        ],
      },
      {
        label: "Energy",
        items: [
          { label: "Electric", href: "#" },
          { label: "Oil & Gas", href: "#" },
        ],
      },
      {
        label: "Financial",
        items: [
          { label: "Banking", href: "#" },
          { label: "Insurance", href: "#" },
        ],
      },
      {
        label: "Telecommunications",
        items: [
          { label: "Telcos", href: "#" },
        ],
      },
    ],
  },

  {
    label: "SpinnLabs",
    href: "#",
    items: [
      { label: "Overview", href: "#" },
      { label: "Academia", href: "#" },
      { label: "Industry", href: "#" },
      { label: "Centers of Expertise", href: "#" },
      { label: "Startups", href: "#" },
    ],
  },
  {
    label: "Activities",
    href: "#",
    groups: [
      {
        label: "Roundtables",
        href: "#",
        items: [
          {
            label: "VISO Roundtable Series",
            href: "#",
          },
        ],
      },
      {
        label: "Webinars",
        href: "#",
        items: [
          { label: "Upcoming Webinars", href: "#" },
          { label: "Past Webinars", href: "#" },
        ],
      },
      {
        label: "Workshops",
        href: "#",
        items: [
          { label: "Upcoming Workshops", href: "#" },
          { label: "Past Workshops", href: "#" },
        ],
      },
      {
        label: "Special Interest Groups",
        href: "#",
        items: [
          { label: "AI SIG", href: "#" },
          { label: "Cybersecurity SIG", href: "#" },
        ],
      },
      {
        label: "Training",
        href: "#",
        items: [],
      },
      {
        label: "Internship Program 2026",
        href: "#",
        items: [],
      },
    ],
  },
  {
    label: "About Us",
    href: "#",
    items: [
      { label: "Our Story", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    label: "Contracts",
    href: "#",
    groups: [
      {
        label: "VITA",
        href: "#", // Click karne par kahin navigate na ho
        items: [
          {
            label: "Pricing",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
  },
];