import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Rich from "../../../public/img/rich.webp";
import familyShot from "../../../public/img/artExpoFamilyShot.webp";
import fishing from "../../../public/img/RichFishing.webp";
import paris from "../../../public/img/richInParis.webp";

export default function About({ authors, settings }) {
  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Tints and Tones Painting and Rich Bennett
      </h1>

      <div className="grid grid-cols-12 gap-6">
        {/* Image 1: Anniversary trip to Europe */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={Rich}
            alt="Rich Bennett and Wife Michelle in Europe"
            className="h-auto w-full max-w-full rounded"
          />
          <p className="mt-2 text-sm text-gray-700">
            After Graduating with a Fine Arts degree in 2023, Rich and
            Michelle took an Anniversary trip to Europe. Traveling
            abroad after years of dedicated study was a meaningful way
            for Rich to immerse himself in the art, architecture, and
            culture that have inspired countless painters for
            centuries. Experiencing European masterworks firsthand and
            strolling through historic cityscapes served as a catalyst
            for Rich’s own artistic vision, informing his approach to
            color, composition, and technique.
          </p>
        </div>

        {/* Image 2: Fine Arts Graduation Night at USI */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={familyShot}
            alt="Rich Bennett at his USI Fine Arts Graduation with Family"
            className="h-auto w-full max-w-full rounded"
          />
          <p className="mt-2 text-sm text-gray-700">
            Here, Rich stands proudly with family members at the USI
            Fine Arts Graduation Night—a moment that symbolizes the
            culmination of years spent honing his craft and broadening
            his artistic perspective. Under the guidance of
            experienced professors and through hours of studio
            practice, Rich developed a refined sense of style, mastery
            of painting techniques, and a deep understanding of the
            interplay between light, texture, and color. This
            educational foundation continues to shape Rich’s work,
            enabling him to deliver high-quality, artful painting
            services that go beyond standard home improvement.
          </p>
        </div>

        {/* Image 3: Born and raised on the West Side of Evansville */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={fishing}
            alt="Rich Bennett Born and Raised in Evansville"
            className="h-auto w-full max-w-full rounded"
          />
          <p className="mt-2 text-sm text-gray-700">
            Rich was born and raised on the West Side of Evansville,
            Indiana, where he developed an early appreciation for the
            region’s landscapes, neighborhoods, and people. Today, as
            a professional painter and artist, Rich brings that sense
            of place, authenticity, and familiarity into each project.
            Working in the same community where he grew up and now
            raises his own family, Rich is committed to providing
            services that respect local heritage, enhance property
            values, and bring joy to Southern Indiana homeowners.
          </p>
        </div>

        {/* Image 4: Louvre in Paris */}
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={paris}
            alt="Rich Bennett in Paris at the Louvre"
            className="h-auto w-full max-w-full rounded"
          />
          <p className="mt-2 text-sm text-gray-700">
            Visiting the Louvre in Paris was a particularly profound
            experience for Rich, one that further expanded the
            horizons of his artistic practice. Ultimately, the
            Louvre’s unparalleled collection reinforced his belief
            that continual learning and exposure to the great
            traditions of art can spark new ideas and refine one’s
            approach, elevating his work for the clients he serves in
            Southern Indiana.
          </p>
        </div>
      </div>
    </Container>
  );
}
