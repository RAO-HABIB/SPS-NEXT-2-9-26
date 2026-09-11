import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import { getVerticalDetail, VERTICALS_DETAIL_DATA } from "@/data/verticals-detail-data";
import VerticalDetailRenderer from "@/features/Verticals/components/VerticalDetailRenderer";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(VERTICALS_DETAIL_DATA)
    .filter((category) => category !== "all")
    .map((category) => ({
      category,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const data = getVerticalDetail(category);

  if (data) {
    return {
      title: `${data.hero.title} | SPS Verticals`,
      description: data.hero.subtitle,
    };
  }

  return {
    title: "Industry Vertical | SPS",
  };
}

export default async function VerticalCategoryOverviewPage({ params }: PageProps) {
  const { category } = await params;
  const verticalData = getVerticalDetail(category);

  if (!verticalData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <VerticalDetailRenderer slug={category} data={verticalData} />
      <Footer />
    </>
  );
}
