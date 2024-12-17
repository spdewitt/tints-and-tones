import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import { cx } from "@/utils/all";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "@/components/footer";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props) {
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
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
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
      />

      <div
        className={cx(
          props?.fontStyle,
          "text-gray-800 antialiased dark:bg-black dark:text-gray-400"
        )}>
        {props.alternate ? (
          <NavbarAlt {...props} />
        ) : (
          <Navbar {...props} />
        )}

        <div>{children}</div>

        <Footer {...props} />
      </div>
    </>
  );
}
