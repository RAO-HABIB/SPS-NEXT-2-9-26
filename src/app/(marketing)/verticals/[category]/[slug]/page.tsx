import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import VerticalDetailRenderer from "@/features/Verticals/components/VerticalDetailRenderer";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "government") {
    return {
      title: "Government Solutions | SPS Verticals",
      description:
        "Comprehensive cybersecurity, modern cloud architecture, AI automation, and resilient infrastructure for public sector institutions.",
    };
  }

  if (slug === "county-government") {
    return {
      title: "County Government Solutions | SPS Verticals",
      description:
        "Accelerate your county's digital transformation with executive-led strategy, cyber range simulations, cloud migration, and AI readiness.",
    };
  }

  if (slug === "public-safety") {
    return {
      title: "Public Safety Solutions | SPS Verticals",
      description:
        "Advanced public safety analytics, access control, body-worn camera solutions, and resilient 911 dispatch networks for public sector agencies.",
    };
  }

  if (slug === "education") {
    return {
      title: "Education Solutions | SPS Verticals",
      description:
        "Cognitive campus infrastructure, Fischer Identity governance, single sign-on, and secure collaborative learning environments.",
    };
  }

  if (slug === "healthcare-mid-atl" || slug === "healthcare-mid-at") {
    return {
      title: "Healthcare - Mid Atl Solutions | SPS Verticals",
      description:
        "Clinical system interoperability, HIPAA compliance, telehealth security, and patient-centric public healthcare modernization.",
    };
  }

  return {
    title: "Vertical Solutions | SPS",
  };
}

export default async function VerticalSubItemPage({ params }: PageProps) {
  const { category, slug } = await params;

  return (
    <>
      <Navbar />
      <VerticalDetailRenderer category={category} slug={slug} />
      <Footer />
    </>
  );
}
