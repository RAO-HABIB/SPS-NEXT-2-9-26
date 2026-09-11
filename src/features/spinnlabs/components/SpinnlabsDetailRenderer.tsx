import React from "react";
import { SpinnLabDetail } from "@/data/spinnlabs-data";
import SpinnlabsOverviewLayout from "./layouts/SpinnlabsOverviewLayout";
import AcademiaLayout from "./layouts/AcademiaLayout";
import IndustryLayout from "./layouts/IndustryLayout";
import CenterOfExpertiseLayout from "./layouts/CenterOfExpertiseLayout";
import StartupsLayout from "./layouts/StartupsLayout";

interface Props {
  slug: string;
  data: SpinnLabDetail;
}

export default function SpinnlabsDetailRenderer({ slug, data }: Props) {
  switch (slug) {
    case "overview":
      return <SpinnlabsOverviewLayout data={data} />;
    case "academia":
      return <AcademiaLayout data={data} />;
    case "industry":
      return <IndustryLayout data={data} />;
    case "centers-of-expertise":
      return <CenterOfExpertiseLayout data={data} />;
    case "startups":
      return <StartupsLayout data={data} />;
    default:
      return null;
  }
}
