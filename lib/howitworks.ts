export type Step = {
  number: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
};

export const HOW_INTRO = {
  title: "How It Works",
  description:
    "SPS helps organizations accelerate their Digital Transformation journey by adopting Cloud, AI, Cybersecurity, and other emerging technologies through a structured, scalable approach.",
  image: "/Hero/we-img1.webp",
  cta: { label: "Book Appointment", href: "/" },
  stats: [
    { value: 180, suffix: "+", label: "Expert Specialists" },
    { value: 45, suffix: "K", label: "Happy Clients" },
  ],
};

export const STEPS: Step[] = [
  {
    number: "01",
    icon: "lucide:calendar-clock",
    title: "Schedule Consultation",
    description:
      "Book a free discovery call with our experts to discuss your goals.",
    image: "/Hero/we-img2.webp",
  },
  {
    number: "02",
    icon: "lucide:clipboard-list",
    title: "Plan & Strategize",
    description:
      "We craft a tailored roadmap aligned to your business outcomes.",
    image: "/products/strategy.jpeg",
  },
  {
    number: "03",
    icon: "lucide:rocket",
    title: "Execute Solutions",
    description:
      "Our specialists deliver, integrate and optimize the right technology.",
    image: "/products/ai.jpeg",
  },
  {
    number: "04",
    icon: "lucide:hand-coins",
    title: "Deliver Results & Payment",
    description:
      "Measure outcomes, hand over deliverables and transparent billing.",
    image: "/products/results.jpeg",
  },
];