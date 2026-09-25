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

// ✅ Env-based backend URL — dev mein localhost, prod mein Render URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

export default async function Home() {
  // Fetch all sections in parallel
  const fetchSection = async (endpoint: string) => {
    try {
      const res = await fetch(`${API_URL}/api/${endpoint}`, { cache: 'no-store' });
      if (!res.ok) return null;
      return res.json();
    } catch (e) {
      console.error(`Failed to fetch ${endpoint}:`, e);
      return null;
    }
  };

  const [
    heroData,
    servicesData,
    startupsData,
    productsData,
    howItWorksData,
    partnersData,
    newsInsightsData,
    customersData,
    verticalsData,
  ] = await Promise.all([
    fetchSection('hero'),
    fetchSection('services'),
    fetchSection('startups'),
    fetchSection('products'),
    fetchSection('howitworks'),
    fetchSection('partners'),
    fetchSection('newsinsights'),
    fetchSection('customers'),
    fetchSection('verticals'),
  ]);

  return (
    <>
      <Navbar />
      <Hero data={heroData} />
      <Services data={servicesData} />
      <Startups data={startupsData} />
      <Products data={productsData} />
      <HowItWorks data={howItWorksData} />
      <Partners data={partnersData} />
      <NewsInsights data={newsInsightsData} />
      <Customers data={customersData} />
      <Verticals data={verticalsData} />
      <Footer />
    </>
  );
}