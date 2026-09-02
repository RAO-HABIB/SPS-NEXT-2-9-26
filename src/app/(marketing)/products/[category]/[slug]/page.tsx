import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products-data";
import ProductDetailView from "@/features/Products/components/ProductDetailView";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

type PageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export default function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = params;

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
      <ProductDetailView data={productData} />
      <Footer />
    </>
  );
}
