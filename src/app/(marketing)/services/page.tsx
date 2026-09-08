import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services-data";
import ServiceDetailView from "@/features/Services/components/ServiceDetailView";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

export const metadata: Metadata = {
  title: "Enterprise Services | SPS - Software Productivity Strategists",
  description:
    "Explore enterprise technology services across Cybersecurity, Multi-Cloud Infrastructure, AI & Automation, and Strategic Consulting.",
};

export default function AllServicesPage() {
  const serviceData = getServiceBySlug("all");
  if (!serviceData) notFound();

  return (
    <>
      <Navbar />
      <ServiceDetailView data={serviceData} />
      <Footer />
    </>
  );
}
