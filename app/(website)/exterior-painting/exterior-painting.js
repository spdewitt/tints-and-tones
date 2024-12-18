"use client";

import Container from "@/components/container";

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

export default function ExteriorPainting({ data }) {
  const { title, introParagraph, secondParagraph, thirdParagraph } =
    data;
  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {title}
      </h1>
      <p>{introParagraph}</p>
      <p className="mt-2">{secondParagraph}</p>
      <p className="mt-2">{thirdParagraph}</p>
    </Container>
  );
}
