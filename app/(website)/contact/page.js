import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export const metadata = {
  title:
    "Contact Tints and Tones Painting | Evansville Residential Painter",
  description:
    "Get in touch with Rich Bennett at Tints and Tones Painting. Schedule a consultation or request a free quote for professional residential painting, staining, and fine art services in Evansville.",
  keywords: [
    "contact",
    "Evansville painter",
    "residential painting",
    "interior painting",
    "exterior painting",
    "fine art commissions"
  ],
  alternates: {
    canonical: "https://www.tintsandtonespainting.com/contact"
  }
};

// If you need ISR (Incremental Static Regeneration):
// export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}
