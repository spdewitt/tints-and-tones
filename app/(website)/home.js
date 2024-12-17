import Head from "next/head";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

import HeroSlider from "@/components/HeroSlider"; // Assuming you saved the slider as HeroSlider.js in components

// Example images for the cards (replace with your actual images if available)
import interiorImage from "../../public/img/interior.webp";
import exteriorImage from "../../public/img/exterior.webp";
import muralsImage from "../../public/img/murals.webp";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Affordable Residential Interior and Exterior Painting in
          Evansville
        </title>
        <meta
          name="description"
          content="Transform your home or property with trusted and affordable interior & exterior painting and fine art commissions in Evansville, Newburgh, and more."
        />
        <link
          rel="canonical"
          href="https://www.tintsandtonespainting.com/"
        />
        <meta
          name="keywords"
          content="Evansville painting, Southern Indiana painter, Haubstadt residential painter, Newburgh painting, Daylight painter, Elberfeld painter, McCutchanville painter, Cynthiana painter, Darmstadt painter, Fort Branch painter, Owensville painter, Mt. Vernon painter, Princeton painter, Poseyville painter, Chandler painter, interior painting, exterior painting, cabinet staining, murals, fine art commissions, property management painting"
        />
      </Head>

      <Container>
        {/* Hero Section */}
        <section className="mt-2 flex flex-col items-center text-center">
          <HeroSlider />

          <h1 className="mt-6 text-3xl font-bold">
            Trusted Residential Interior and Exterior Painting in
            Evansville at Affordable Rates
          </h1>
          <p className="mt-4 max-w-3xl text-gray-700">
            Elevate your home’s look and feel with expert interior and
            exterior painting, cabinet and fence staining, custom
            murals, and fine art commissions. Serving Evansville,
            Newburgh, and the surrounding Southern Indiana
            communities, Rich Bennett brings artistry,
            professionalism, and reliability to every project.
          </p>
          {/* Updated link to scroll to contact form */}
          <Link
            href="#contact-form"
            className="my-6 mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            Get a Free Quote
          </Link>
        </section>

        {/* Three Service Cards Section */}
        <section className="mt-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Interior Painting Card */}
            <Link href="/interior-painting" className="group block">
              <div className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
                <Image
                  src={interiorImage}
                  alt="Interior Painting Example"
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    Interior Painting
                  </h3>
                  Refresh your living spaces with modern colors or
                  restore the natural beauty of your wooden cabinets.
                  From bedrooms and kitchens to bathrooms and living
                  areas, Rich provides high-quality finishes tailored
                  to your vision.
                </div>
              </div>
            </Link>

            {/* Exterior Painting Card */}
            <Link href="/exterior-painting" className="group block">
              <div className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
                <Image
                  src={exteriorImage}
                  alt="Exterior Painting Example"
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    Exterior Painting
                  </h3>
                  Enhance your home’s curb appeal with
                  weather-resistant exterior painting and staining.
                  Protect and beautify your siding, trim, decks, and
                  fences and improve the longevity of your home
                  improvements.
                </div>
              </div>
            </Link>

            {/* Murals and Fine Art Card */}
            <Link href="/fine-art" className="group block">
              <div className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
                <Image
                  src={muralsImage}
                  alt="Murals and Fine Art Example"
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    Murals &amp; Fine Art
                  </h3>
                  Create a statement wall or a unique mural that
                  reflects your personality. With Rich’s fine art
                  background, you’ll get specialty finishes, intricate
                  patterns, and custom designs that stand out, no
                  matter if it’s in your home, office, or local
                  business.
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* About Rich Bennett */}
        <section className="mx-auto mt-10 max-w-4xl rounded-lg bg-blue-50 p-6">
          <h3 className="mb-4 text-2xl font-semibold">
            Meet Rich Bennett, Your Evansville-Area Painting Expert
          </h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            Rich Bennett is a current college professor of cell
            biology and has used his years as a professor to earn
            additional advanced degrees in Business and Fine Art. His
            academic background ensures exceptional communication,
            punctuality, and a well-structured approach to every
            project.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            “Not only do I offer services to meet all of your home
            painting needs, I am also an academically-trained fine
            artist. It’s my goal to bring the same amount of care and
            detail I use when painting a landscape or a portrait to
            your walls, cabinets, furniture, doors, and even
            bathtubs!”
            <br />– Rich Bennett
          </blockquote>
        </section>

        {/* Contact Form Section (Add an ID to scroll to) */}
        <div
          id="contact-form"
          className="mt-10 rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Get in Touch with Rich
          </h3>
          <p className="mb-6 text-gray-700">
            Have a question, want a free quote, or ready to start your
            next project? Fill out the form below and Rich will get
            back to you soon.
          </p>
          <form
            action="/api/contact"
            method="POST"
            className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Preferred Method of Contact */}
            <div>
              <span className="mb-2 block font-medium text-gray-700">
                Preferred Method of Contact
              </span>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactEmail"
                  name="preferredContact"
                  value="Email"
                  required
                  className="mr-2"
                />
                <label htmlFor="contactEmail">Email</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactCall"
                  name="preferredContact"
                  value="Call"
                  className="mr-2"
                />
                <label htmlFor="contactCall">Call</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactText"
                  name="preferredContact"
                  value="Text"
                  className="mr-2"
                />
                <label htmlFor="contactText">Text</label>
              </div>
            </div>

            {/* Services Interested In */}
            <div>
              <span className="mb-2 block font-medium text-gray-700">
                Which services are you interested in?
              </span>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="interior"
                  name="services"
                  value="Interior Painting & Cabinet Staining"
                  className="mr-2"
                />
                <label htmlFor="interior">
                  Interior Painting & Cabinet Staining
                </label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="exterior"
                  name="services"
                  value="Exterior Painting & Fence Staining"
                  className="mr-2"
                />
                <label htmlFor="exterior">
                  Exterior Painting & Fence Staining
                </label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="murals"
                  name="services"
                  value="Custom Murals & Artistic Finishes"
                  className="mr-2"
                />
                <label htmlFor="murals">
                  Custom Murals & Artistic Finishes
                </label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="fineArt"
                  name="services"
                  value="Fine Art Commissions"
                  className="mr-2"
                />
                <label htmlFor="fineArt">Fine Art Commissions</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="other"
                  name="services"
                  value="Other"
                  className="mr-2"
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700">
                Describe Your Project or Ask a Question
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"></textarea>
            </div>

            <button
              type="submit"
              className="rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        <section className="mt-10 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Work Directly with Rich Every Step of the Way
          </h2>
          <p className="mx-auto max-w-4xl leading-relaxed text-gray-700">
            When you reach out, you won’t be shuffled between
            different contractors or teams. Rich Bennett personally
            handles every aspect of your project, from the initial
            consultation and quote to the final brushstroke. You can
            trust that the same dedicated, skilled professional who
            answers your inquiry will be the one transforming your
            home’s interior or exterior, ensuring consistent quality,
            communication, and craftsmanship.
          </p>
        </section>

        <section className="mt-10 max-w-4xl p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Serving Evansville & Surrounding Southern Indiana
            Communities
          </h2>
          <p className="text-gray-700">
            Based in Evansville, Rich Bennett specializes in
            top-quality residential interior and exterior painting
            services that elevate your home’s appearance and value.
            Whether you need a fresh interior color scheme to update
            your living spaces or a durable exterior paint job to
            enhance curb appeal, Rich provides professional
            craftsmanship, personalized color consultations, and
            meticulous attention to detail. From refining the warmth
            of your family room to protecting siding against the
            elements, Rich’s painting expertise ensures your home
            looks its best, inside and out, across Evansville,
            Newburgh, Haubstadt, and the surrounding Southern Indiana
            communities. If you’re searching for a skilled residential
            painter who combines artistry with reliability, look no
            further.
          </p>
          {/* Updated link to scroll to contact form */}
          <Link
            href="#contact-form"
            className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            Schedule a Consultation
          </Link>
        </section>

        {/* Property Managers Section with a background color */}
        <section className="mt-10 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Partnering with Property Managers
          </h2>
          <p className="text-gray-700">
            Property managers across Southern Indiana rely on Rich
            Bennett’s professionalism, timely service, and transparent
            pricing to keep their rental units looking their best.
            When you partner with Rich, you’ll work directly with a
            punctual, dependable painter who communicates clearly,
            adheres to agreed-upon timelines, and delivers
            high-quality interior painting results. Whether you’re
            coordinating a quick turnaround for a single apartment or
            regularly refreshing multiple units, Rich ensures a smooth
            process every step of the way—so you can maintain
            appealing, move-in-ready properties that attract and
            retain great tenants. Let’s work together.
          </p>
        </section>
      </Container>
    </>
  );
}
