import { notFound, redirect } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products-data";
import ProductDetailRenderer from "@/features/Products/components/ProductDetailRenderer";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

const SPS_EXTERNAL_REDIRECTS: Record<string, string> = {
  "myid-self-verify": "https://www.myidselfverify.com/",
  "azalio": "https://www.azal.io/",
  "fabrico": "https://fabrico.spsnet.com/",
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  if (category === "sps" && SPS_EXTERNAL_REDIRECTS[slug]) {
    redirect(SPS_EXTERNAL_REDIRECTS[slug]);
  }

  const categoryData = PRODUCTS_DATA[category];
  if (!categoryData) {
    notFound();
  }

  const productData = categoryData[slug];
  if (!productData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ProductDetailRenderer category={category} slug={slug} data={productData} />
      <Footer />
    </>
  );
}
