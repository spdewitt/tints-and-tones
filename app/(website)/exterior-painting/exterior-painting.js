"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import Rich from "../../../public/img/rich.webp";
import familyShot from "../../../public/img/artExpoFamilyShot.webp";
import fishing from "../../../public/img/RichFishing.webp";
import paris from "../../../public/img/richInParis.webp";

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

export default function ExteriorPainting({ settings }) {
  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Exterior Residential Painting and Staining
      </h1>
      <p>
        Rich Bennett’s approach to fence staining combines thorough
        preparation with expert application, ensuring a durable,
        attractive finish that protects and enhances your property.
        Before even opening the stain can, Rich invests time in
        cleaning the fence, removing dirt, mildew, and any loose wood
        fibers.
      </p>
      <p className="mt-2">
        This meticulous preparation allows the primer and stain to
        bond more effectively, resulting in a smoother, more
        consistent finish. Using a high-quality sprayer, Rich applies
        the stain evenly and efficiently, covering every inch of the
        surface while maintaining a professional, uniform appearance.
      </p>
      <p className="mt-2">
        Whether you’re looking to preserve a new fence or restore an
        older one, Rich’s fence staining process helps ward off
        moisture, UV damage, and everyday wear, leaving you with a
        fence that both looks great and stands the test of time.
      </p>
    </Container>
  );
}
