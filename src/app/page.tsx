import Navbar from "@/components/layout/Navbar/navbar";
import Hero from "@/features/Hero/hero";
import Services from "@/features/Services/services";
import Products from "@/features/Products/products";
import HowItWorks from "@/features/HowItWorks/HowItWorks";
import Partners from "@/features/Partners/partners";
import Customers from "@/features/Customers/customers";
import NewsInsights from "@/features/NewsInsights/newsinsights";
import Verticals from "@/features/Verticals/verticals";
import Footer from "@/components/layout/Footer/footer";
import Startups from "@/features/Startups/startups";

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
