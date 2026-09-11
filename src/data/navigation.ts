import { spinnLabsSubItems } from "./spinnlabs-data";

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
      image: "/images/products/products.webp",
      ctaLabel: "View All Products",
      ctaHref: "/products",
    },
    groups: [
      {
        label: "SPS",
        items: [
          { label: "MYID Self Verify", href: "https://www.myidselfverify.com/" },
          { label: "Azalio", href: "https://www.azal.io/" },
          { label: "Fabrico", href: "https://fabrico.spsnet.com/" },
          { label: "BMS", href: "/products/sps/bms" },
          { label: "CSM", href: "/products/sps/csm" },
        ],
      },
      {
        label: "IBM",
        items: [
          { label: "Automation", href: "/products/ibm/automation" },
          { label: "Data & AI", href: "/products/ibm/data-ai" },
          { label: "Security", href: "/products/ibm/security" },
          { label: "Sustainability", href: "/products/ibm/sustainability" },
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
    href: "/services",
    promo: {
      description:
        "From Cybersecurity to Cloud, AI & Training  we deliver scalable services that drive measurable business outcomes.",
      image: "/images/products/services.webp",
      ctaLabel: "Explore Services",
      ctaHref: "/services",
    },
    groups: [
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        items: [
          { label: "Network Security", href: "/services/cybersecurity/network-security" },
          { label: "SMaaS", href: "/services/cybersecurity/smaas" },
          { label: "GRC", href: "/services/cybersecurity/grc" },
          { label: "Identity & Access", href: "/services/cybersecurity/iam" },
          { label: "Threat Management", href: "/services/cybersecurity/threat-management" },
          { label: "Data Security", href: "/services/cybersecurity/data-security" },
        ],
      },
      {
        label: "Cloud",
        href: "/services/cloud",
        items: [
          { label: "DevOps", href: "/services/cloud" },
          { label: "Migration Services", href: "/services/cloud" },
        ],
      },
      {
        label: "AI & Automation",
        href: "/services/ai-automation",
        items: [
          { label: "Data Science", href: "/services/ai-automation" },
          { label: "Automation", href: "/services/ai-automation" },
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
    href: "/verticals",
    promo: {
      description:
        "Tailored solutions for Public Sector, Healthcare, Energy, Retail, Finance & more — built for your industry's unique needs.",
      image: "/images/products/head.webp",
      ctaLabel: "All Verticals",
      ctaHref: "/verticals",
    },
    groups: [
      {
        label: "Public Sector",
        href: "/verticals/public-sector",
        items: [
          { label: "Government", href: "/verticals/public-sector/government" },
          { label: "Public Safety", href: "/verticals/public-sector/public-safety" },
          { label: "Education", href: "/verticals/public-sector/education" },
          { label: "Healthcare - Mid Atl", href: "/verticals/public-sector/healthcare-mid-atl" },
          { label: "County Government", href: "/verticals/public-sector/county-government" },
        ],
      },
      {
        label: "Industrials",
        href: "/verticals/industrials",
        items: [
          { label: "Manufacturing", href: "/verticals/industrials" },
          { label: "Textile", href: "/verticals/industrials" },
          { label: "Utilities", href: "/verticals/industrials" },
        ],
      },
      {
        label: "Healthcare",
        href: "/verticals/healthcare",
        items: [
          { label: "Compliance", href: "/verticals/healthcare" },
          { label: "Interoperability", href: "/verticals/healthcare" },
          { label: "Multi-Clinic", href: "/verticals/healthcare" },
          { label: "Patient Experience", href: "/verticals/healthcare" },
          { label: "Telehealth", href: "/verticals/healthcare" },
        ],
      },
      {
        label: "Retail",
        href: "/verticals/retail",
        items: [
          { label: "Convenience Store", href: "/verticals/retail" },
          { label: "Marketing", href: "/verticals/retail" },
          { label: "Omni-channel", href: "/verticals/retail" },
          { label: "Personalization", href: "/verticals/retail" },
          { label: "Supply Chain", href: "/verticals/retail" },
        ],
      },
      {
        label: "Energy",
        href: "/verticals/energy",
        items: [
          { label: "Electric", href: "/verticals/energy" },
          { label: "Oil & Gas", href: "/verticals/energy" },
        ],
      },
      {
        label: "Financial",
        href: "/verticals/financial",
        items: [
          { label: "Banking", href: "/verticals/financial" },
          { label: "Insurance", href: "/verticals/financial" },
        ],
      },
      {
        label: "Telecommunications",
        href: "/verticals/telecom",
        items: [
          { label: "Telcos", href: "/verticals/telecom" },
        ],
      },
    ],
  },

  {
    label: "SpinnLabs",
    href: "/spinnlabs/overview",
    items: spinnLabsSubItems.map((item) => ({
      label: item.title,
      href: item.href,
    })),
  },
  {
    label: "Activities",
    href: "/Activities",
    groups: [
      {
        label: "Roundtables",
        href: "/Activities/Rountable",
        items: [
          {
            label: "VISO Roundtable Series",
            href: "/Activities/Rountable/viso-virginia",
          },
        ],
      },
      {
        label: "Webinars",
        href: "/Activities/Webinars",
        items: [
          { label: "Upcoming Webinars", href: "/Activities/Webinars/upcoming" },
          { label: "Past Webinars", href: "/Activities/Webinars/past" },
        ],
      },
      {
        label: "Workshops",
        href: "/Activities/workshops",
        items: [
          { label: "Upcoming Workshops", href: "/Activities/workshops/upcoming" },
          { label: "Past Workshops", href: "/Activities/workshops/past" },
        ],
      },
      {
        label: "Special Interest Groups",
        href: "/Activities/special-interest-groups",
        items: [
          { label: "AI SIG", href: "/Activities/special-interest-groups/ai" },
          { label: "Cybersecurity SIG", href: "/Activities/special-interest-groups/cybersecurity" },
        ],
      },
      {
        label: "Training",
        href: "/Activities/training",
        items: [],
      },
      {
        label: "Internship Program 2026",
        href: "/Activities/Internship",
        items: [],
      },
    ],
  },
  {
    label: "About Us",
    href: "/About",
    items: [
      { label: "Our Story", href: "/About/Story" },
      { label: "Careers", href: "/About/Careers" },
    ],
  },
  {
    label: "Contracts",
    href: "/Contracts/VITA/pricing",
    groups: [
      {
        label: "VITA",
        href: "/Contracts/VITA/pricing",
        items: [
          {
            label: "Pricing",
            href: "/Contracts/VITA/pricing",
          },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/Contact",
  },
];