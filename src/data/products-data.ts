export type FeaturedSolution = {
  title: string;
  description: string;
  image: string;
};

export type WhyChoosePoint = {
  title: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type PricingFeature = {
  name: string;
  included: boolean;
};

export type PricingPlan = {
  name: string;
  price: string;
  isPopular?: boolean;
  features: PricingFeature[];
};

export type ProductDetailData = {
  id: string;
  category: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  featuredSolutions: {
    title: string;
    items: FeaturedSolution[];
  };
  whyChoose: {
    title: string;
    image: string;
    badgeText: string;
    points: WhyChoosePoint[];
  };
  metrics: Metric[];
  testimonials: {
    title: string;
    image: string;
    items: Testimonial[];
  };
  pricing: {
    title: string;
    plans: PricingPlan[];
  };
  cta: {
    title: string;
    image: string;
  };
};

export const PRODUCTS_DATA: Record<string, Record<string, ProductDetailData>> = {
  sps: {
    bms: {
      id: "sps-bms",
      category: "sps",
      slug: "bms",
      hero: {
        title: "BMS - Business Management System",
        subtitle: "SPS products, solutions, and cognitive AI services are designed to address the dynamic challenges of modern enterprises.",
      },
      featuredSolutions: {
        title: "Our Featured Technology Solution",
        items: [
          {
            title: "GPS Tracking",
            description: "Advanced tracking systems for real-time fleet management and insights.",
            image: "/images/products/product.webp",
          },
          {
            title: "IoT Tech",
            description: "Smart interconnected devices to streamline operations and gather data.",
            image: "/images/products/product.webp",
          },
          {
            title: "Network Security",
            description: "Robust defense mechanisms to protect your enterprise network.",
            image: "/images/products/product.webp",
          },
          {
            title: "Cloud Infrastructure",
            description: "Scalable cloud solutions built for modern dynamic enterprises.",
            image: "/images/products/product.webp",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose Our Products & Solutions",
        image: "/images/products/head.webp",
        badgeText: "20+\nYears of Experience",
        points: [
          { title: "Enterprise-Grade Products", description: "Built to scale with your growing business needs." },
          { title: "Decades of Expertise", description: "Over 20 years of delivering innovative technology." },
          { title: "Secure by Design", description: "Security is embedded into everything we build." },
          { title: "Open Support", description: "Dedicated 24/7 support team at your service." },
        ],
      },
      metrics: [
        { value: "5K", label: "Happy Customers" },
        { value: "70", label: "Products Launched" },
        { value: "18", label: "Global Partners" },
        { value: "24", label: "Years in Business" },
      ],
      testimonials: {
        title: "Real Teams. Real Innovation. And Our Impact.",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Unbelievably good UI and experience. The product exceeded our expectations and the team was wonderful.",
            author: "Sarah Adams",
            role: "Product Manager",
            avatar: "/images/products/head.webp",
          },
          {
            quote: "This transformed how we operate our daily business. The efficiency gains are massive.",
            author: "John Doe",
            role: "CTO",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "Choose The Right Product Plan",
        plans: [
          {
            name: "Free",
            price: "Free",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: false },
              { name: "Analytics", included: false },
              { name: "Custom Reporting", included: false },
              { name: "Priority SLA", included: false },
            ],
          },
          {
            name: "Pro",
            price: "$25",
            isPopular: true,
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
              { name: "Custom Reporting", included: false },
              { name: "Priority SLA", included: false },
            ],
          },
          {
            name: "Enterprise",
            price: "$40",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
              { name: "Custom Reporting", included: true },
              { name: "Priority SLA", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Powering Businesses With AI, Cloud & Security Solutions",
        image: "/images/products/products.webp",
      },
    },
  },
  generic: {
    all: {
      id: "all-products",
      category: "generic",
      slug: "all",
      hero: {
        title: "Our Products",
        subtitle: "SPS products, solutions, and cognitive AI services are designed to address the dynamic challenges of modern enterprises.",
      },
      featuredSolutions: {
        title: "Our Featured Technology Solution",
        items: [
          {
            title: "GPS Tracking",
            description: "Advanced tracking systems for real-time fleet management and insights.",
            image: "/images/products/product.webp",
          },
          {
            title: "IoT Tech",
            description: "Smart interconnected devices to streamline operations and gather data.",
            image: "/images/products/product.webp",
          },
          {
            title: "Network Security",
            description: "Robust defense mechanisms to protect your enterprise network.",
            image: "/images/products/product.webp",
          },
          {
            title: "Cloud Infrastructure",
            description: "Scalable cloud solutions built for modern dynamic enterprises.",
            image: "/images/products/product.webp",
          },
        ],
      },
      whyChoose: {
        title: "Why Choose Our Products & Solutions",
        image: "/images/products/head.webp",
        badgeText: "20+\nYears of Experience",
        points: [
          { title: "Enterprise-Grade Products", description: "Built to scale with your growing business needs." },
          { title: "Decades of Expertise", description: "Over 20 years of delivering innovative technology." },
          { title: "Secure by Design", description: "Security is embedded into everything we build." },
          { title: "Open Support", description: "Dedicated 24/7 support team at your service." },
        ],
      },
      metrics: [
        { value: "5K", label: "Happy Customers" },
        { value: "70", label: "Products Launched" },
        { value: "18", label: "Global Partners" },
        { value: "24", label: "Years in Business" },
      ],
      testimonials: {
        title: "Real Teams. Real Innovation. And Our Impact.",
        image: "/images/products/head.webp",
        items: [
          {
            quote: "Unbelievably good UI and experience. The product exceeded our expectations and the team was wonderful.",
            author: "Sarah Adams",
            role: "Product Manager",
            avatar: "/images/products/head.webp",
          },
          {
            quote: "This transformed how we operate our daily business. The efficiency gains are massive.",
            author: "John Doe",
            role: "CTO",
            avatar: "/images/products/head.webp",
          },
        ],
      },
      pricing: {
        title: "Choose The Right Product Plan",
        plans: [
          {
            name: "Free",
            price: "Free",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: false },
              { name: "Analytics", included: false },
            ],
          },
          {
            name: "Pro",
            price: "$25",
            isPopular: true,
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
            ],
          },
          {
            name: "Enterprise",
            price: "$40",
            features: [
              { name: "Core Features", included: true },
              { name: "Basic Support", included: true },
              { name: "Advanced Tools", included: true },
              { name: "Analytics", included: true },
            ],
          },
        ],
      },
      cta: {
        title: "Powering Businesses With AI, Cloud & Security Solutions",
        image: "/images/products/products.webp",
      },
    }
  }
};
