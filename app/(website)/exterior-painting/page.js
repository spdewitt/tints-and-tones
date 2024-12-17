import { getAllAuthors, getSettings } from "@/lib/sanity/client";
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

// If you need ISR (Incremental Static Regeneration), you can uncomment this:
// export const revalidate = 60;

export default async function ExteriorPaintingPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <ExteriorPainting settings={settings} authors={authors} />;
}
