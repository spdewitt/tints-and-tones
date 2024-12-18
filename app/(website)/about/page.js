import { sanityClient } from "@/lib/sanity.client";
import { aboutPageQuery } from "@/lib/queries";
import About from "./about"; // The component file you showed

export const metadata = {
  title: "About Tints and Tones Painting and Rich Bennett",
  description:
    "Learn about Tints and Tones Painting and Rich Bennett, an experienced painter offering professional interior and exterior painting.",
  keywords: [
    "Rich Bennett",
    "Tints and Tones Painting",
    "Evansville painter",
    "interior painting",
    "exterior painting",
    "cabinet staining"
  ],
  alternates: {
    canonical: "https://www.tintsandtonespainting.com/about"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function AboutPage() {
  const data = await sanityClient.fetch(aboutPageQuery);
  return <About data={data} />;
}
