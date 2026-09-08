import { ProductDetailData } from "@/data/products-data";
import BmsLayout from "./layouts/BmsLayout";
import CsmLayout from "./layouts/CsmLayout";
import IbmProductLayout from "./layouts/IbmProductLayout";
import ProductDetailView from "./ProductDetailView";

type ProductDetailRendererProps = {
  slug: string;
  category?: string;
  data: ProductDetailData;
};

export default function ProductDetailRenderer({
  slug,
  category,
  data,
}: ProductDetailRendererProps) {
  // IBM Products Suite Switchboard
  if (category === "ibm") {
    return <IbmProductLayout slug={slug} data={data} />;
  }

  // Generic and SPS Products Switchboard
  switch (slug) {
    case "automation":
    case "data-ai":
    case "data-and-ai":
    case "security":
    case "sustainability":
      return <IbmProductLayout slug={slug} data={data} />;

    case "bms":
      return <BmsLayout data={data} />;

    case "csm":
    case "cms":
      return <CsmLayout data={data} />;

    default:
      return <ProductDetailView data={data} />;
  }
}


