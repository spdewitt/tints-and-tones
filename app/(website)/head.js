export default function Head() {
  return (
    <>
      <title>
        Tints and Tones Painting | Evansville Residential Painter
      </title>
      <meta
        name="description"
        content="Professional residential painting services in Evansville, Indiana. Interior and exterior painting, cabinet staining, fine art commissions, and more."
      />
      <link
        rel="canonical"
        href="https://www.tintsandtonespainting.com/"
      />
      <meta
        name="keywords"
        content="Evansville painter, residential painting, interior painting, exterior painting, cabinet staining, fine art commissions"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "HousePainter",
              name: "Tints and Tones Painting",
              description:
                "Affordable, professional interior and exterior painting, cabinet staining, and fine art commissions in Evansville, Indiana.",
              image:
                "https://www.tintsandtonespainting.com/img/rich.jpg",
              url: "https://www.tintsandtonespainting.com/",
              telephone: "+1-812-555-1234",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 West Side Blvd",
                addressLocality: "Evansville",
                addressRegion: "IN",
                postalCode: "47712",
                addressCountry: "US"
              },
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
            },
            null,
            2
          )
        }}
      />
    </>
  );
}
