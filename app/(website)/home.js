import Head from "next/head";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage({ data }) {
  const {
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,

    services,
    aboutTitle,
    aboutDescription,
    aboutQuote,
    contactTitle,
    contactDescription,
    workDirectlyTitle,
    workDirectlyDescription,
    servingTitle,
    servingDescription,
    servingButtonText,
    servingButtonLink,
    propertyManagersTitle,
    propertyManagersDescription
  } = data;
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: "Tints and Tones Painting",
    description:
      "Affordable, professional interior and exterior painting, cabinet staining, and fine art commissions in Evansville, Indiana.",
    image: "https://www.tintsandtonespainting.com/img/rich.jpg",
    url: "https://www.tintsandtonespainting.com/",
    telephone: "(812)604-9289",
    priceRange: "$$",
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "1234 West Side Blvd",
    //   addressLocality: "Evansville",
    //   addressRegion: "IN",
    //   postalCode: "47712",
    //   addressCountry: "US"
    // },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.9716",
      longitude: "-87.5711"
    },
    areaServed: {
      "@type": "Place",
      name: "Evansville and Surrounding Southern Indiana Communities"
    },
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-14:00"],
    sameAs: [
      "https://www.facebook.com/TintsandTonesPainting",
      "https://www.instagram.com/TintsandTonesPainting"
    ]
  };
  return (
    <>
      <Head>
        <title>
          Residential Interior and Exterior Painting in Evansville
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

      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg)
          }}
        />
      </section>
      <Container>
        {/* Hero Section */}
        <span className="text-xl font-bold">
          Tints & Tones Painting
        </span>
        <section className="mt-2 flex flex-col items-center text-center">
          <HeroSlider />

          <h1 className="mt-6 text-2xl font-bold">{heroTitle}</h1>
          <p className="mt-4 max-w-3xl text-gray-700">
            {heroDescription}
          </p>
          <Link
            href={heroButtonLink}
            className="my-6 mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            {heroButtonText}
          </Link>
        </section>
        {/* Three Service Cards Section */}
        <section className="mt-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services &&
              services.map((service, i) => (
                <Link
                  href={service.link}
                  key={i}
                  className="group block">
                  <div className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
                    {service.imageUrl && (
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                        {service.title}
                      </h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
        {/* About Rich Bennett */}
        <section className="mx-auto mt-10 max-w-4xl rounded-lg bg-blue-50 p-6">
          <h3 className="mb-4 text-2xl font-semibold">
            {aboutTitle}
          </h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            {aboutDescription}
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            {aboutQuote}
          </blockquote>
        </section>
        <section className="mt-10 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            {workDirectlyTitle}
          </h2>
          <p className="mx-auto max-w-4xl leading-relaxed text-gray-700">
            {workDirectlyDescription}
          </p>
        </section>
        {/* Contact Form Section */}
        <div
          id="contact-form"
          className="mt-10 rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            {contactTitle}
          </h3>
          <p className="mb-6 text-gray-700">{contactDescription}</p>
          <form
            action="/api/contact"
            method="POST"
            className="space-y-4">
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

        <section className="mt-10 max-w-4xl p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            {servingTitle}
          </h2>
          <p className="text-gray-700">{servingDescription}</p>
          <Link
            href={servingButtonLink}
            className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            {servingButtonText}
          </Link>
        </section>
        <section className="mt-10 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            {propertyManagersTitle}
          </h2>
          <p className="text-gray-700">
            {propertyManagersDescription}
          </p>
        </section>
      </Container>
    </>
  );
}
