import { sanityClient } from "@/lib/sanity.client";
import { exteriorPaintingQuery } from "@/lib/queries";
import ExteriorPainting from "./exterior-painting";

export const metadata = {
  title: "Affordable Residential Exterior Painting in Evansville",
  description:
    "Residential painting services in Evansville, Indiana. Affordable Exterior painting and fence staining.",
  keywords: [
    "Evansville exterior painting",
    "affordable painter",
    "affordable home painter"
  ],
  alternates: {
    canonical:
      "https://www.tintsandtonespainting.com/exterior-painting"
  }
};

export default async function ExteriorPaintingPage() {
  const data = await sanityClient.fetch(exteriorPaintingQuery);
  return <ExteriorPainting data={data} />;
}
