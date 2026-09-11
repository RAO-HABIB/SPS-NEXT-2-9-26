import { VerticalDetailData, getVerticalDetail } from "@/data/verticals-detail-data";
import VerticalDetailView from "./VerticalDetailView";
import GovernmentLayout from "./layouts/GovernmentLayout";
import CountyGovernmentLayout from "./layouts/CountyGovernmentLayout";
import PublicSafetyLayout from "./layouts/PublicSafetyLayout";
import EducationLayout from "./layouts/EducationLayout";
import HealthcareMidAtlLayout from "./layouts/HealthcareMidAtlLayout";

export interface VerticalDetailRendererProps {
  slug: string;
  category?: string;
  data?: VerticalDetailData;
}

export default function VerticalDetailRenderer({
  slug,
  category,
  data,
}: VerticalDetailRendererProps) {
  const normalizedSlug = slug.toLowerCase().trim();
  const normalizedCategory = category?.toLowerCase().trim();

  // County Government Detail Page
  if (
    normalizedSlug === "county-government" ||
    (normalizedCategory === "public-sector" && normalizedSlug === "county-government")
  ) {
    return <CountyGovernmentLayout />;
  }

  // Government Detail Page (Matching user screenshot)
  if (
    normalizedSlug === "government" ||
    (normalizedCategory === "public-sector" && normalizedSlug === "government")
  ) {
    return <GovernmentLayout />;
  }

  // Public Safety Detail Page
  if (
    normalizedSlug === "public-safety" ||
    (normalizedCategory === "public-sector" && normalizedSlug === "public-safety")
  ) {
    return <PublicSafetyLayout />;
  }

  // Education Detail Page
  if (
    normalizedSlug === "education" ||
    (normalizedCategory === "public-sector" && normalizedSlug === "education")
  ) {
    return <EducationLayout />;
  }

  // Healthcare - Mid Atl Detail Page
  if (
    normalizedSlug === "healthcare-mid-atl" ||
    normalizedSlug === "healthcare-mid-at" ||
    (normalizedCategory === "public-sector" && normalizedSlug === "healthcare")
  ) {
    return <HealthcareMidAtlLayout />;
  }

  const verticalData = data || getVerticalDetail(slug) || getVerticalDetail(normalizedCategory || "all");

  if (!verticalData) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-slate-500">
        Vertical details coming soon.
      </div>
    );
  }

  return <VerticalDetailView data={verticalData} />;
}
