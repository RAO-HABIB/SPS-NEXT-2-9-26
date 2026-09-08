import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services-data";
import ServiceDetailRenderer from "@/features/Services/components/ServiceDetailRenderer";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const service = getServiceBySlug(category);

  if (!service) {
    return {
      title: "Service Not Found | SPS",
    };
  }

  return {
    title: `${service.hero.title} | Enterprise Services | SPS`,
    description: service.hero.subtitle,
    openGraph: {
      title: `${service.hero.title} | SPS Enterprise Services`,
      description: service.hero.subtitle,
      type: "website",
    },
  };
}

export default async function ServiceCategoryOverviewPage({ params }: PageProps) {
  const { category } = await params;
  const service = getServiceBySlug(category);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailRenderer slug={category} data={service} />
      <Footer />
    </>
  );
}
