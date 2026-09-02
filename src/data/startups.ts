export type Startup = {
  id: string;
  name: string;
  description: string;
  image: string;           // Image path
  href: string;
};

export const STARTUPS_INTRO = {
  eyebrow: "Our Startups",
  title: "Digital solutions we have built for ourselves and our customers",
  description:
    "We develop AI-based solutions for corporate & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT.",
};

export const STARTUPS: Startup[] = [
  {
    id: "gatekeyper",
    name: "GateKeyper",
    description:
      "Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build an app to ensure safety of professional operators.",
    image: "/images/startups/gatekeeper.webp",
    href: "/",
  },
  {
    id: "creyield",
    name: "CREyield",
    description:
      "CREyield streamlines real estate investment analytics and reporting for better decision-making.",
    image: "/images/startups/creyield.webp",
    href: "/",
  },
  {
    id: "csm",
    name: "CSM",
    description:
      "CSM enables efficient customer service management with AI-driven insights and automation.",
    image: "/images/startups/csm.webp",
    href: "/",
  },
  {
    id: "myhealthchart",
    name: "MyHealthChart",
    description:
      "MyHealthChart provides patients with an integrated view of their health records and insights.",
    image: "/images/startups/myhealthcard.webp",
    href: "/",
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description:
      "Analytics Dashboard provides actionable insights and visualizations for business decision-making.",
    image: "/images/startups/dashboard.webp",
    href: "/",
  },
  {
    id: "aimy",
    name: "AIMY",
    description:
      "AIMY is an AI-driven personal assistant that helps businesses automate routine tasks efficiently.",
    image: "/images/startups/aimy.webp",
    href: "/",
  },
  {
    id: "herdomain",
    name: "HerDomain",
    description:
      "HerDomain is a platform empowering women entrepreneurs with digital tools and resources.",
    image: "/images/startups/herdomain.webp",
    href: "/",
  },
  {
    id: "watchover",
    name: "Watch Over",
    description:
      "Watch Over monitors critical systems and processes, providing real-time alerts and insights.",
    image: "/images/startups/watchover.webp",
    href: "/",
  },
];