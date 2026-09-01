export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  bullets?: string[];
  description?: string;
  video: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "what-if",
    eyebrow: "What If",
    title: "Your Business",
    highlight: "Could Do More?",
    bullets: [
      "You could enhance your Identity Management.",
      "You could modernize your legacy enterprise information systems.",
      "You could have Security Operations Center 24x7.",
      "You could have your Cyber Security environment managed for you.",
      "You could have Compliance Artifacts for your Auditors at click of a button.",
    ],
    primaryCta: { label: "Request Consultation", href: "/" },
    secondaryCta: { label: "How can we help you today", href: "/" },
    video: "/videos/hero-bg3.mp4",
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
    video: "/videos/cybersecurity2.mp4",
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
    video: "/videos/ai1.mp4",
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
    video: "/videos/cloud1.mp4",
  },
];
