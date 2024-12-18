import { sanityClient } from "@/lib/sanity.client";
import { fineArtsQuery } from "@/lib/queries";
import FineArt from "./fine-art";

export const metadata = {
  title:
    "Fine Art Commissions by Rich Bennett | Evansville Fine Artist",
  description:
    "Commission custom fine art from Rich Bennett, an academically-trained fine artist in Evansville. Portraits, landscapes, and unique artworks tailored to you.",
  keywords: [
    "fine art commissions",
    "Evansville artist",
    "custom portraits",
    "custom art",
    "landscapes",
    "art commissions"
  ],
  alternates: {
    canonical: "https://www.tintsandtonespainting.com/fine-art"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function Page() {
  const data = await sanityClient.fetch(fineArtsQuery);
  return <FineArt data={data} />;
}
