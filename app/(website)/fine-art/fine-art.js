import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Rich from "../../../public/img/rich.webp";
import familyShot from "../../../public/img/artExpoFamilyShot.webp";
import fishing from "../../../public/img/RichFishing.webp";
import paris from "../../../public/img/richInParis.webp";

export default function FineArt({ authors, settings }) {
  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Fine Art Commissions by Rich Bennett
      </h1>

      <p>
        I would LOVE the opportunity to bring a room in your home to
        life with a mural or fine art commission.
      </p>
      <p>Here are some examples of work I have done in the past:</p>
    </Container>
  );
}
