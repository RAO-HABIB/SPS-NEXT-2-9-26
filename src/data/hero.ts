export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  bullets?: string[];
  description?: string;
  video: string;
  webmVideo: string;
  poster: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "what-if",
    eyebrow: "What If",
    title: "Your Business",
    highlight: "Could Do More?",
    description:
      "Modernize legacy systems, enhance identity management, and secure your environment with a managed 24x7 SOC and automated compliance artifacts.",
    primaryCta: { label: "Request Consultation", href: "/" },
    secondaryCta: { label: "How can we help you today", href: "/" },
    video: "/videos/hero-bg3-hero.mp4",
    webmVideo: "/videos/hero-bg3-hero.webm",
    poster: "/images/posters/hero-bg3.webp",
  },
  {
    id: "cybersecurity",
    eyebrow: "Cybersecurity",
    title: "Defend. Detect.",
    highlight: "Respond.",
    description:
      "End-to-end protection across networks, identities & data — powered by 24x7 SOC, GRC and Threat Management.",
    primaryCta: { label: "Explore Security", href: "/" },
    secondaryCta: { label: "View Solutions", href: "/" },
    video: "/videos/cybersecurity2-720.mp4",
    webmVideo: "/videos/cybersecurity2.webm",
    poster: "/images/posters/cybersecurity2.webp",
  },
  {
    id: "ai",
    eyebrow: "Artificial Intelligence",
    title: "Smarter Decisions,",
    highlight: "Faster Outcomes.",
    description:
      "Harness AI, Data Science & Automation to unlock insights and accelerate business growth at scale.",
    primaryCta: { label: "Discover AI", href: "/" },
    secondaryCta: { label: "Learn More", href: "/" },
    video: "/videos/ai1-720.mp4",
    webmVideo: "/videos/ai1.webm",
    poster: "/images/posters/ai1.webp",
  },
  {
    id: "cloud",
    eyebrow: "Cloud Solutions",
    title: "Scale Without",
    highlight: "Limits.",
    description:
      "Cloud migration, DevOps & modernization services designed for performance, security and cost efficiency.",
    primaryCta: { label: "View Cloud Services", href: "/" },
    secondaryCta: { label: "Learn More", href: "/" },
    video: "/videos/cloud1-720.mp4",
    webmVideo: "/videos/cloud1.webm",
    poster: "/images/posters/cloud1.webp",
  },
];
