import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import { getDetailedService } from "@/data/detailed-services";
import ServiceDetailTemplate from "@/features/Services/components/ServiceDetailTemplate";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
    serviceId: string;
  }>;
};

export function generateStaticParams() {
  return [
    { category: "cybersecurity", slug: "network-security", serviceId: "network-visibility-ops" },
    { category: "cybersecurity", slug: "network-security", serviceId: "network-visibility-design" },
    { category: "cybersecurity", slug: "network-security", serviceId: "keysight-training" },
  ];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const data = getDetailedService(serviceId);

  if (data) {
    return {
      title: `${data.hero.title} | SPS Enterprise Services`,
      description: data.hero.subtitle,
    };
  }

  return {
    title: "Service Detail | SPS",
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, slug, serviceId } = await params;

  // We only support deep feature pages under cybersecurity right now
  if (category !== "cybersecurity") {
    notFound();
  }

  const detailedService = getDetailedService(serviceId);

  if (!detailedService) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailTemplate 
        data={detailedService} 
        category={category} 
        slug={slug} 
      />
      <Footer />
    </>
  );
}
