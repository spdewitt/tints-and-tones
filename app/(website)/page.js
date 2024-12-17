import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export const metadata = {
  title:
    "Affordable Residential Interior and Exterior Painting in Evansville",
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

export default async function IndexPage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}
