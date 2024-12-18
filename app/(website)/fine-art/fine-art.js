"use client";

import Container from "@/components/container";

export default function FineArt({ data }) {
  const { title, introParagraph } = data;

  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {title}
      </h1>

      <p>{introParagraph}</p>
    </Container>
  );
}
