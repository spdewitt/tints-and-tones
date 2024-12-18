import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";
import { sanityClient } from "@/lib/sanity.client";
import { homePageQuery } from "@/lib/queries";

export const metadata = {
  title: "Residential Interior and Exterior Painting in Evansville",
  description:
    "Transform your home or property with trusted and affordable interior & exterior painting and fine art commissions in Evansville, Newburgh, and more.",
  keywords: [
    "Evansville painter",
    "residential painting",
    "interior painting",
    "exterior painting",
    "cabinet staining",
    "fine art commissions"
  ],
  alternates: {
    canonical: "https://www.tintsandtonespainting.com/"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function Page() {
  const data = await sanityClient.fetch(homePageQuery);
  return <HomePage data={data} />;
}
