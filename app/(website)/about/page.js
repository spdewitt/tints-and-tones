import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export const metadata = {
  title: "About Tints and Tones Painting and Rich Bennett",
  description:
    "Learn about Tints and Tones Painting and Rich Bennett, an academically-trained fine artist and experienced painter offering professional interior and exterior painting, cabinet staining, and more in Evansville, Indiana.",
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
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}
