// lib/about-data.ts
// ==============================
// Careers
// ==============================
export interface Value {
  title: string;
  description: string;
}

export interface CareerHero {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface WhyJoinItem {
  title: string;
  description: string;
}

export interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export interface HiringStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Diversity {
  title: string;
  description: string;
}

export interface CareersSection {
  hero: CareerHero;
  values: Value[];
  jobs: Job[];
  hiringProcess: HiringStep[];
  benefits: Benefit[];
  diversity: Diversity[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface ContentSection {
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface AwardItem {
  title: string;
  subtitle: string;
  image: string;
  description?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  animation: string;
}

export interface ProcessSection {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface TrainingSection {
  title: string;
  description: string;
  images: string[];
  points: string[];
}

export interface CareerCTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface AboutData {
  missionVision: ContentSection;

  aboutCompany: ContentSection;

  whoWeAre: ContentSection & {
    image: string;
  };

  timeline: TimelineItem[];

  awards: AwardItem[];

  process: ProcessSection;

  training: TrainingSection;

  careersCTA: CareerCTASection;

  careers: CareersSection;
}
export const aboutData: AboutData = {
  missionVision: {
    title: "Our Mission & Vision",
    description:
      "Software Productivity Strategists (SPS) is committed to delivering innovative software, AI, cloud, and enterprise solutions that empower organizations. Our mission is to create meaningful technology that improves efficiency, enables growth, and helps businesses embrace digital transformation with confidence.",
  },

  aboutCompany: {
    title: "About SPS",
    description:
      "For more than two decades, SPS has delivered secure, scalable, and modern technology solutions across government, education, healthcare, and commercial sectors. Our expertise includes Artificial Intelligence, Cloud Infrastructure, Cybersecurity, Enterprise Applications, Data Analytics, and Digital Transformation.",
  },

  whoWeAre: {
    title: "Who We Are",
    description:
      "At Software Productivity Strategists (SPS), we identify ourselves as an AI-first company where our experienced experts have spent decades building software that transforms businesses. Our expertise includes Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing, Cloud Infrastructure, Enterprise Development, and Cybersecurity.",
    image: "/images/about/story/whoweare.png",
  },

  timeline: [
    {
      year: "Early 90s",
      title: "Application Development",
      description:
        "Started software application development and CASE tools.",
      image: "/images/products/head.webp",
    },
    {
      year: "Mid 90s",
      title: "Internet Security",
      description:
        "Expanded into Internet Security and Web Infrastructure.",
      image: "/images/products/products.webp",
    },
    {
      year: "Late 90s",
      title: "Education",
      description:
        "Focused on K–12 educational solutions and public schools.",
      image: "/images/products/product.webp",
    },
    {
      year: "Early 2000s",
      title: "Virtual Learning",
      description:
        "Started virtual learning initiatives and digital education.",
      image: "/images/products/Vertical.webp",
    },
    {
      year: "Mid 2000s",
      title: "Cyber Security",
      description:
        "Expanded into Cyber Security and Information Assurance.",
      image: "/images/products/services.webp",
    },
    {
      year: "Late 2000s",
      title: "AI Services",
      description:
        "Started AI engineering, enterprise training, and consulting.",
      image: "/images/products/products.webp",
    },
    {
      year: "2015",
      title: "SMILE",
      description:
        "Security Mobile Infrastructure Learning Events launched.",
      image: "/images/products/services.webp",
    },
    {
      year: "2018",
      title: "SCALE",
      description:
        "Security, Cloud, Artificial Intelligence, and Learning Events.",
      image: "/images/products/Vertical.webp",
    },
  ],

  awards: [
    {
      title: "AVNET Bluemix with IBM",
      subtitle: "Winner",
      image: "/images/about/story/award1.png",
      description: "First Prize Winner at the AVNET Bluemix with IBM Watson Hackathon, recognized for architecting innovative cloud-native cognitive solutions.",
    },
    {
      title: "IBM Watson Challenge",
      subtitle: "Winner",
      image: "/images/about/story/award2.png",
      description: "Awarded Winner in the global IBM Watson Challenge, demonstrating cutting-edge cognitive computing and enterprise artificial intelligence capabilities.",
    },
    {
      title: "IBM Cognitive Build Challenge",
      subtitle: "Finalist",
      image: "/images/about/story/award3.png",
      description: "Honored as a Global Finalist in the IBM Cognitive Build Challenge, pioneering transformative cognitive solutions for modern enterprise ecosystems.",
    },
  ],

  process: {
    title: "Our Process",
    description:
      "We follow a proven software development lifecycle that combines innovation, agile methodology, and technical excellence to deliver secure, scalable, and user-centric digital solutions.",

    steps: [
      {
        title: "Problem Idea",
        description:
          "Understanding business challenges, gathering requirements, and identifying opportunities for innovation.",
        animation: "/images/lottie/idea.json",
      },
      {
        title: "Discovery",
        description:
          "Research, business analysis, technical planning, and defining the project scope.",
        animation: "/images/lottie/discovery.json",
      },
      {
        title: "Prototype",
        description:
          "Creating wireframes, UI/UX concepts, and validating ideas before development.",
        animation: "/images/lottie/prototype.json",
      },
      {
        title: "MVP Development",
        description:
          "Building the first functional version using agile development practices.",
        animation: "/images/lottie/mvp.json",
      },
      {
        title: "Agile Delivery",
        description:
          "Continuous sprint planning, implementation, testing, and stakeholder feedback.",
        animation: "/images/lottie/agile.json",
      },
      {
        title: "Technical Excellence",
        description:
          "Code reviews, automation, DevOps, cloud deployment, performance, and security.",
        animation: "/images/lottie/technical.json",
      },
      {
        title: "Launch & Support",
        description:
          "Deployment, monitoring, optimization, and long-term maintenance.",
        animation: "/images/lottie/launch.json",
      },
    ],
  },

  training: {
    title: "Knowledge Sharing & Innovation",
    description:
      "Sharing knowledge and inspiring innovation are important parts of our culture. We regularly conduct workshops, seminars, hackathons, and technical sessions to strengthen our team's expertise and encourage continuous learning.",
    images: [
      "/images/lottie/Training1.json",
      "/images/lottie/Training2.json",
      "/images/lottie/idea.json",
    ],
    points: [
      "AI & Machine Learning Workshops",
      "Cloud Infrastructure Training",
      "Cybersecurity Awareness Sessions",
      "Internal Technical Bootcamps",
      "Weekly Knowledge Sharing Events",
    ],
  },

  careersCTA: {
    title: "Careers at Software Productivity Strategists",
    description:
      "Interested in building innovative software and AI solutions? Join our talented team and help shape the future of technology.",
    buttonText: "See Careers",
    buttonLink: "/About/Careers",
  },
  careers: {
    hero: {
      badge: "WE'RE HIRING",
      title: "Build Your Career at SPS",
      description:
        "Join our passionate team and help us create innovative AI, cloud, and enterprise solutions for clients around the globe.",
      buttonText: "View Open Positions",
      buttonLink: "#open-positions",
      image: "/about/careers/careers-banner.png",
    },

    jobs: [
      {
        title: "Senior AI Engineer",

        department: "Engineering",

        location: "Lahore, Pakistan",

        type: "Full Time",

        experience: "5+ Years",

        description:
          "Design and develop enterprise AI applications using Large Language Models, Azure AI, and cloud-native technologies.",

        skills: [
          "Python",
          "Azure AI",
          "OpenAI",
          "FastAPI",
        ],
      },

      {
        title: "Cloud Engineer",

        department: "Cloud Infrastructure",

        location: "Remote",

        type: "Full Time",

        experience: "3+ Years",

        description:
          "Build secure cloud infrastructure, automate deployments, and manage scalable enterprise environments.",

        skills: [
          "Azure",
          "Docker",
          "Terraform",
          "Kubernetes",
        ],
      },

      {
        title: "Frontend Developer",

        department: "Engineering",

        location: "Hybrid",

        type: "Full Time",

        experience: "2+ Years",

        description:
          "Create modern web applications using React, Next.js, Tailwind CSS, and TypeScript.",

        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
    ],

    hiringProcess: [
      {
        title: "Apply",

        description:
          "Submit your application online with your updated resume.",
      },
      {
        title: "HR Interview",

        description:
          "A conversation to understand your background and career goals.",
      },
      {
        title: "Technical Assessment",

        description:
          "Complete a practical assessment to demonstrate your technical expertise.",
      },
      {
        title: "Final Interview",

        description:
          "Meet our engineering leaders and discuss your future at SPS.",
      },
      {
        title: "Offer",

        description:
          "Receive your offer and start your journey with SPS.",
      },
    ],

    benefits: [
      {
        title: "Health Care",
        description:
          "Comprehensive medical, dental, vision, disability, and life insurance plans to support you and your family.",
      },
      {
        title: "Financial Future",
        description:
          "Retirement planning, savings programs, and financial guidance to help secure your future.",
      },
      {
        title: "Paid Time Off",
        description:
          "Generous paid leave, public holidays, and wellness days so you can recharge and spend time with loved ones.",
      },
      {
        title: "Parental Leave",
        description:
          "Paid parental leave and family support policies designed to help you during life's biggest moments.",
      },
      {
        title: "Flexibility at Work",
        description:
          "Hybrid and remote-friendly work options with flexible schedules that promote work-life balance.",
      },
    ],

    diversity: [
      {
        title: "Inclusive Workplace",

        description:
          "Innovation thrives when diverse perspectives come together.",
      },
      {
        title: "Equal Opportunity",

        description:
          "Every candidate is evaluated fairly based on skills and experience.",
      },
      {
        title: "Continuous Learning",

        description:
          "Everyone has opportunities to grow regardless of background.",
      },
      {
        title: "Respect & Collaboration",

        description:
          "We build trust through teamwork, transparency, and mutual respect.",
      },
    ],

    values: [
      {
        title: "Honesty",
        description:
          "To be truthful in all our endeavors; to be honest and forthright with one another and with our customers and partners.",
      },
      {
        title: "Integrity",
        description:
          "To say what we mean, deliver what we promise, and always stand for what is right.",
      },
      {
        title: "Respect",
        description:
          "To treat one another with dignity and fairness while appreciating the uniqueness of every individual.",
      },
      {
        title: "Trust",
        description:
          "To build confidence through teamwork, transparency, and open communication.",
      },
      {
        title: "Responsibility",
        description:
          "To take ownership of our actions, encourage accountability, and make ethical decisions.",
      },
      {
        title: "Citizenship",
        description:
          "To positively contribute to our communities and conduct business responsibly.",
      },
    ],
    cta: {
      title: "Didn't Find the Right Role?",

      description:
        "We're always looking for talented people. Send us your resume and we'll contact you when a suitable opportunity becomes available.",

      buttonText: "Send Your Resume",

      buttonLink: "/contact",
    },
  },
};