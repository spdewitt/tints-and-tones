import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import InteriorPainting from "./interior-painting";

export const metadata = {
  title: "Professional Interior Residential Painting and Staining",
  description:
    "Professional, affordable interior residential painting services in Evansville, Indiana. Experience the difference a quality coat of paint can make.",
  keywords: [
    "interior painting",
    "residential painting",
    "affordable painting",
    "Evansville painter",
    "cabinet staining"
  ],
  alternates: {
    canonical:
      "https://www.tintsandtonespainting.com/interior-painting"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function InteriorPaintingPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <InteriorPainting settings={settings} authors={authors} />;
}