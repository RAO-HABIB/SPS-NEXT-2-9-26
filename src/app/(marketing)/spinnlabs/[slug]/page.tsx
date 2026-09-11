import { Metadata } from "next";
import { notFound } from "next/navigation";
import SpinnlabsDetailRenderer from "@/features/spinnlabs/components/SpinnlabsDetailRenderer";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";
import { getSpinnLabBySlug } from "@/data/spinnlabs-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getSpinnLabBySlug(slug);

  if (!data) {
    return {
      title: "Page Not Found | SpinnLabs",
      description: "The requested SpinnLabs page could not be found.",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: data.openGraphImage ? [{ url: data.openGraphImage }] : [],
    },
  };
}

export default async function SpinnlabsPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getSpinnLabBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white">
        <SpinnlabsDetailRenderer slug={slug} data={data} />
      </div>
      <Footer />
    </>
  );
}
