import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar/navbar";
import Hero from "@/features/Hero/hero";

const Services = dynamic(() => import("@/features/Services/services"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white" />,
});

const Startups = dynamic(() => import("@/features/Startups/startups"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-[#03122F]" />,
});

const Products = dynamic(() => import("@/features/Products/products"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-[#03122F]" />,
});

const HowItWorks = dynamic(() => import("@/features/HowItWorks/HowItWorks"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white" />,
});

const Partners = dynamic(() => import("@/features/Partners/partners"), {
  loading: () => <div className="h-[300px] w-full animate-pulse bg-slate-950/20" />,
});

const NewsInsights = dynamic(() => import("@/features/NewsInsights/newsinsights"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-slate-100" />,
});

const Customers = dynamic(() => import("@/features/Customers/customers"), {
  loading: () => <div className="h-[200px] w-full animate-pulse bg-slate-100" />,
});

const Verticals = dynamic(() => import("@/features/Verticals/verticals"), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-blue-50/60" />,
});

const Footer = dynamic(() => import("@/components/layout/Footer/footer"), {
  loading: () => <div className="h-[300px] w-full animate-pulse bg-[#03122F]" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Startups />
      <Products />
      <HowItWorks />
      <Partners />
      <NewsInsights />
      <Customers />
      <Verticals />
      <Footer />
    </>
  );
}
