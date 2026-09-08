import { notFound } from "next/navigation";
import { getDetailedProduct } from "@/data/ibm-detailed-products";
import IbmProductDetailTemplate from "@/features/Products/components/IbmProductDetailTemplate";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
    productId: string;
  }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug, productId } = await params;

  if (category !== "ibm") {
    notFound();
  }

  const detailedProduct = getDetailedProduct(productId);
  if (!detailedProduct) {
    notFound();
  }

  return <IbmProductDetailTemplate product={detailedProduct} />;
}
