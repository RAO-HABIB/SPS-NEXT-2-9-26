// lib/webinars-data.ts

export interface WebinarSpeaker {
  name: string;
  title: string;
  organization?: string;
  image: string;
  linkedIn?: string;
  bio?: string;
}

export interface WebinarAgendaItem {
  time?: string;
  title: string;
  description?: string;
}

export interface Webinar {
  slug: string;
  id: string;
  title: string;
  description: string;
  boldPhrase?: string;
  subheading?: string;
  time: string;
  date: string;
  year: number;
  speaker: WebinarSpeaker;
  status: "upcoming" | "past";
  fullDescription?: string;
  eventDate?: string;
  duration?: string;
  format?: string;
  thumbnail?: string;
  videoUrl?: string;
  keyHighlights?: string[];
  learningOutcomes?: string[];
  agenda?: WebinarAgendaItem[];
  targetAudience?: string[];
  additionalSpeakers?: WebinarSpeaker[];
  registrationLink?: string;
  recordingLink?: string;
  slidesLink?: string;
}

// ============ DATA ============
export const webinars: Webinar[] = [

  // ==================== 2026 ====================
  {
    slug: "agentic-security-2026",
    id: "agentic-security-2026",
    title: "Agentic Security",
    description:
      'The combined value proposition of IBM Verify and HashiCorp Vault centers on creating a unified "identity fabric" that bridges human and machine identity management. This integration secures modern hybrid-cloud environments by centralizing trust across workforce users and automated workloads.',
    subheading: "Unified Value Proposition",
    time: "11:00 - 12:00",
    date: "2026-03-15",
    year: 2026,
    speaker: {
      name: "Jay Kozireski",
      title: "Vice President, SPS",
      organization: "Software Productivity Strategists, Inc.",
      image: "/webinars/speakers/jay-kozireski.jpg",
      linkedIn: "https://linkedin.com/in/jaykozireski",
      bio: "Jay is a senior technology leader with 20+ years of experience in identity management and cybersecurity.",
    },
    status: "past",
    fullDescription:
      'The combined value proposition of IBM Verify and HashiCorp Vault centers on creating a unified "identity fabric" that bridges human and machine identity management.',
    eventDate: "2026-03-15T11:00:00-04:00",
    duration: "1 hour",
    format: "Virtual (Microsoft Teams)",
    thumbnail: "/webinars/thumbnails/agentic-security.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    keyHighlights: [
      "Unified identity management for humans and machines",
      "Zero-trust security architecture implementation",
      "IBM Verify and HashiCorp Vault integration",
      "Hybrid-cloud security best practices",
    ],
    recordingLink: "#",
    slidesLink: "#",
  },

  // ==================== 2025 ====================
  {
    slug: "cloud-security-2025",
    id: "cloud-security-2025",
    title: "Cloud Security Best Practices",
    description:
      "Explore the essential cloud security best practices for modern enterprises. Learn how to secure your multi-cloud environments, implement zero-trust architecture, and protect sensitive workloads across AWS, Azure, and GCP.",
    subheading: "Multi-Cloud Security",
    time: "14:00 - 15:30",
    date: "2025-08-20",
    year: 2025,
    speaker: {
      name: "Sarah Mitchell",
      title: "Cloud Security Architect",
      organization: "SPS Digital Solutions",
      image: "/webinars/speakers/sarah-mitchell.jpg",
      linkedIn: "https://linkedin.com/in/sarahmitchell",
      bio: "Sarah is a cloud security expert with expertise in AWS, Azure, and GCP security architectures.",
    },
    status: "past",
    duration: "1.5 hours",
    format: "Virtual (Zoom)",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    slug: "devops-automation-2025",
    id: "devops-automation-2025",
    title: "DevOps Automation at Scale",
    description:
      "Discover how leading enterprises are scaling their DevOps automation to accelerate delivery, improve quality, and reduce operational overhead through modern CI/CD pipelines and infrastructure-as-code.",
    subheading: "CI/CD Pipeline Excellence",
    time: "10:00 - 11:00",
    date: "2025-05-15",
    year: 2025,
    speaker: {
      name: "Michael Chen",
      title: "DevOps Lead",
      organization: "SPS Digital Solutions",
      image: "/webinars/speakers/michael-chen.jpg",
      linkedIn: "https://linkedin.com/in/michaelchen",
      bio: "Michael leads DevOps practice at SPS with 15+ years of automation experience.",
    },
    status: "past",
    duration: "1 hour",
    format: "Virtual (Microsoft Teams)",
    recordingLink: "#",
    slidesLink: "#",
  },

  // ==================== 2024 ====================
  {
    slug: "ai-in-cybersecurity-2024",
    id: "ai-in-cybersecurity-2024",
    title: "AI in Cybersecurity",
    description:
      "Explore how artificial intelligence is revolutionizing cybersecurity operations, from threat detection to automated incident response. Learn about real-world AI implementations and the future of security operations.",
    subheading: "AI-Powered Defense",
    time: "13:00 - 14:00",
    date: "2024-11-10",
    year: 2024,
    speaker: {
      name: "Dr. Emma Rodriguez",
      title: "AI Research Director",
      organization: "SPS Digital Solutions",
      image: "/webinars/speakers/emma-rodriguez.jpg",
      linkedIn: "https://linkedin.com/in/emmarodriguez",
      bio: "Dr. Rodriguez has led AI research initiatives at leading cybersecurity firms for over a decade.",
    },
    status: "past",
    duration: "1 hour",
    format: "Virtual (Zoom)",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    slug: "zero-trust-architecture-2024",
    id: "zero-trust-architecture-2024",
    title: "Zero Trust Architecture",
    description:
      "Understand the fundamentals of Zero Trust Architecture and how to implement it in your organization. This session covers principles, technologies, and practical migration strategies from traditional perimeter-based security.",
    subheading: "Never Trust, Always Verify",
    time: "15:00 - 16:00",
    date: "2024-07-25",
    year: 2024,
    speaker: {
      name: "Robert Anderson",
      title: "Security Architect",
      organization: "SPS Digital Solutions",
      image: "/webinars/speakers/robert-anderson.jpg",
      linkedIn: "https://linkedin.com/in/robertanderson",
      bio: "Robert is a certified security architect specializing in Zero Trust implementations.",
    },
    status: "past",
    duration: "1 hour",
    format: "Virtual (Microsoft Teams)",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    slug: "compliance-frameworks-2024",
    id: "compliance-frameworks-2024",
    title: "Navigating Compliance Frameworks",
    description:
      "A comprehensive overview of major compliance frameworks including SOC 2, ISO 27001, HIPAA, and NIST. Learn how to build a unified compliance strategy that scales with your organization.",
    time: "11:00 - 12:00",
    date: "2024-04-18",
    year: 2024,
    speaker: {
      name: "Jennifer Walsh",
      title: "GRC Manager",
      organization: "SPS Digital Solutions",
      image: "/webinars/speakers/jennifer-walsh.jpg",
      linkedIn: "https://linkedin.com/in/jenniferwalsh",
      bio: "Jennifer has helped 100+ enterprises achieve compliance across multiple frameworks.",
    },
    status: "past",
    duration: "1 hour",
    format: "Virtual (Zoom)",
    recordingLink: "#",
    slidesLink: "#",
  },
];

// ============ HELPERS ============
export function getPastWebinars() {
  return webinars.filter((w) => w.status === "past");
}

export function getUpcomingWebinars() {
  return webinars.filter((w) => w.status === "upcoming");
}

export function getWebinarBySlug(slug: string) {
  return webinars.find((w) => w.slug === slug);
}

export function getAvailableYears(status: "past" | "upcoming"): number[] {
  const years = webinars
    .filter((w) => w.status === status)
    .map((w) => w.year);
  return Array.from(new Set(years)).sort((a, b) => b - a); // Descending
}

export function getAllWebinarSlugs() {
  return webinars.map((w) => ({ slug: w.slug }));
}