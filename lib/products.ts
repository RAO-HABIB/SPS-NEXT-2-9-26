export type Product = {
  id: string;
  name: string;
  description: string;
  icon: string;
  accentColor: string;
  href: string;
};

export const PRODUCTS_INTRO = {
  eyebrow: "Trusted Innovation",
  title: "Organization Trusted",
  highlight: "SPS Products",
  description:
    "Enterprise-grade products built on 20+ years of innovation — empowering organizations to secure, automate and accelerate their digital journey.",
  stat: {
    value: 20,
    suffix: "+",
    label: "Years Driving Innovation",
  },
  image: "/products/product.webp",
};

export const PRODUCTS: Product[] = [
  {
    id: "azalio",
    name: "Azalio",
    description:
      "Keep your frontline employees happy. Reward employees, track engagement, manage workforce operations.",
    icon: "lucide:users-round",
    accentColor: "from-blue-500 to-cyan-400",
    href: "/",
  },
  {
    id: "myid",
    name: "MYID Self Verify",
    description:
      "MYID helps organizations allow their employees to manage their corporate identity through secure and easy-to-use mobile application.",
    icon: "lucide:fingerprint",
    accentColor: "from-cyan-500 to-teal-400",
    href: "/",
  },
  {
    id: "csm",
    name: "CSM",
    description:
      "Protect your business with SOC services, zero-trust security, endpoint defense, and SIEM/SOAR solutions.",
    icon: "lucide:shield-check",
    accentColor: "from-indigo-500 to-blue-400",
    href: "/",
  },
  {
    id: "bms",
    name: "BMS",
    description:
      "Get real-time insights into every aspect of your company's performance. Optimize processes and streamline business with our Business Management System.",
    icon: "lucide:bar-chart-3",
    accentColor: "from-sky-500 to-blue-400",
    href: "/",
  },
];