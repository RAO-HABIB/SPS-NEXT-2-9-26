import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailRenderer from "@/features/Services/components/ServiceDetailRenderer";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import { getServiceBySlug } from "@/data/services-data";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  if (category === "cybersecurity" && slug === "network-security") {
    return {
      title: "Network Security | Enterprise Cybersecurity Services | SPS",
      description:
        "Achieve total visibility, resilient architecture design, and automated packet-level testing across physical, virtualized, and hybrid cloud networks.",
      openGraph: {
        title: "Network Security | SPS Enterprise Services",
        description:
          "Achieve total visibility, resilient architecture design, and automated packet-level testing.",
        type: "website",
      },
    };
  }

  if (category === "cybersecurity" && slug === "smaas") {
    return {
      title: "SMaaS (Service Management as a Service) | SPS Enterprise Services",
      description:
        "24/7 cloud monitoring, proactive incident remediation, and SRE operations tailored for mission-critical enterprise environments.",
      openGraph: {
        title: "SMaaS | SPS Enterprise Services",
        description:
          "24/7 cloud monitoring, proactive incident remediation, and SRE operations.",
        type: "website",
      },
    };
  }

  const service = getServiceBySlug(slug);
  if (service) {
    return {
      title: `${service.hero.title} | SPS Enterprise Services`,
      description: service.hero.subtitle,
    };
  }

  return {
    title: "Service | SPS",
  };
}

export default async function ServiceCategoryDetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  // Known sub-items or dynamic services
  const isSpecialSubItem =
    category === "cybersecurity" &&
    ["network-security", "smaas", "grc", "identity-access", "iam", "threat-management", "data-security"].includes(slug);

  const service = getServiceBySlug(slug);

  if (!isSpecialSubItem && !service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailRenderer category={category} slug={slug} data={service} />
      <Footer />
    </>
  );
}
