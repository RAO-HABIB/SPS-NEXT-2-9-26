import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products-data";
import ProductDetailView from "@/features/Products/components/ProductDetailView";
import Navbar from "@/components/layout/Navbar/navbar";
import Footer from "@/components/layout/Footer/footer";

export default function AllProductsPage() {
  const genericData = PRODUCTS_DATA["generic"];
  if (!genericData) notFound();
  
  const productData = genericData["all"];
  if (!productData) notFound();

  return (
    <>
      <Navbar />
      <ProductDetailView data={productData} />
      <Footer />
    </>
  );
}
