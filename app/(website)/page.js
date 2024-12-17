import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export const metadata = {
  title: "Tints and Tones Painting | Evansville Residential Painter",
  description:
    "Professional residential painting services in Evansville, Indiana. Interior and exterior painting, cabinet staining, fine art commissions, and more.",
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
