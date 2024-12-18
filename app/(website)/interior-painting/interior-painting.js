"use client"; // Needed if you rely on the Tab UI client-side interactivity

import Container from "@/components/container";
import Image from "next/image";
import { Tab } from "@headlessui/react";

export default function InteriorPainting({ data }) {
  const { title, introParagraph, pairs, cabinetStainingSection } =
    data;

  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {title}
      </h1>

      <p className="mb-8 text-base leading-relaxed text-gray-700">
        {introParagraph}
      </p>

      <div className="grid grid-cols-12 gap-6">
        {pairs.map((pair, index) => (
          <div key={index} className="col-span-12">
            {/* Desktop layout: side by side images */}
            <div className="hidden lg:flex lg:space-x-4">
              <div className="flex-1">
                <Image
                  src={pair.beforeImage.asset.url}
                  alt={`Before image ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full rounded"
                />
                <p className="mt-2 text-center text-sm text-gray-700">
                  {pair.beforeText}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={pair.afterImage.asset.url}
                  alt={`After image ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full rounded"
                />
                <p className="mt-2 text-center text-sm text-gray-700">
                  {pair.afterText}
                </p>
              </div>
            </div>

            {/* Mobile layout: Tabs to switch between before/after */}
            <div className="lg:hidden">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded bg-gray-100 p-1">
                  <Tab
                    className={({ selected }) =>
                      `w-full py-2 text-sm font-medium leading-5 ${
                        selected
                          ? "rounded bg-white text-blue-600"
                          : "text-gray-600"
                      }`
                    }>
                    Before
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full py-2 text-sm font-medium leading-5 ${
                        selected
                          ? "rounded bg-white text-blue-600"
                          : "text-gray-600"
                      }`
                    }>
                    After
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-4">
                  <Tab.Panel>
                    <Image
                      src={pair.beforeImage.asset.url}
                      alt={`Before image ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-auto w-full rounded"
                    />
                    <p className="mt-2 text-center text-sm text-gray-700">
                      {pair.beforeText}
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <Image
                      src={pair.afterImage.asset.url}
                      alt={`After image ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-auto w-full rounded"
                    />
                    <p className="mt-2 text-center text-sm text-gray-700">
                      {pair.afterText}
                    </p>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-4 text-center text-2xl font-semibold text-blue-600">
          {cabinetStainingSection.title}
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
          {cabinetStainingSection.description}
        </p>
        <Image
          src={cabinetStainingSection.image.asset.url}
          alt="Evansville Cabinet Staining"
          width={800}
          height={600}
          className="h-auto w-full rounded"
        />
      </section>
    </Container>
  );
}
