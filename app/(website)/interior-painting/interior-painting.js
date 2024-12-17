"use client";

import Container from "@/components/container";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import before1 from "../../../public/img/before1.webp";
import before2 from "../../../public/img/before2.webp";
import before3 from "../../../public/img/before3.webp";
import before4 from "../../../public/img/before4.webp";
import after1 from "../../../public/img/after4.webp";
import after2 from "../../../public/img/after3.webp";
import after3 from "../../../public/img/after2.webp";
import after4 from "../../../public/img/after1.webp";
import cabinetStaining from "../../../public/img/cabinetStaining.webp";

const pairs = [
  {
    beforeImg: before1,
    afterImg: after1,
    beforeText:
      "Low Quality Paint Does Not Cover Previous Color in Two Coats.",
    afterText:
      "High Quality Paint leaves a smooth finish in two coats."
  },
  {
    beforeImg: before2,
    afterImg: after2,
    beforeText:
      "Switch Cover Not Removed When Painted Previously, White Trim Paint on Walls, Outlet Cover Not Removed.",
    afterText: "Clean cutting makes the window and trim pop."
  },
  {
    beforeImg: before3,
    afterImg: after3,
    beforeText:
      "Poor Cutting, Outlet Covers Not Removed when Painted",
    afterText:
      "The correct paint color on the correct surface, every time."
  },
  {
    beforeImg: before4,
    afterImg: after4,
    beforeText:
      "Poor Paint Quality is noticeable, especially cutting in.",
    afterText: "Proper Paint and Technique make a huge difference."
  }
];

export default function InteriorPainting() {
  return (
    <Container className="mx-auto max-w-screen-lg px-4">
      <h1 className="text-brand-primary mb-8 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Interior Residential Painting and Staining
      </h1>
      <p className="mb-8 text-base leading-relaxed text-gray-700">
        Rich offers professional, affordable interior residential
        painting that can bring new life to your home. While he would
        love to be painting an intricate mural on your wall, he also
        takes enormous pride in the way a well-executed, professional
        coat of paint can instantly elevate a room’s atmosphere.
      </p>
      <div className="grid grid-cols-12 gap-6">
        {pairs.map((pair, index) => (
          <div key={index} className="col-span-12">
            {/* On large screens show both images side by side */}
            <div className="hidden lg:flex lg:space-x-4">
              <div className="flex-1">
                <Image
                  src={pair.beforeImg}
                  alt={`Before image ${index + 1}`}
                  className="h-auto w-full rounded"
                />
                <p className="mt-2 text-center text-sm text-gray-700">
                  {pair.beforeText}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={pair.afterImg}
                  alt={`After image ${index + 1}`}
                  className="h-auto w-full rounded"
                />
                <p className="mt-2 text-center text-sm text-gray-700">
                  {pair.afterText}
                </p>
              </div>
            </div>

            {/* On mobile use tabs to switch between before/after */}
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
                      src={pair.beforeImg}
                      alt={`Before image ${index + 1}`}
                      className="h-auto w-full rounded"
                    />
                    <p className="mt-2 text-center text-sm text-gray-700">
                      {pair.beforeText}
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <Image
                      src={pair.afterImg}
                      alt={`After image ${index + 1}`}
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
          Cabinet Staining Services
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
          In addition to offering top-quality interior painting, Rich
          Bennett also specializes in cabinet staining—an ideal
          solution for homeowners looking to refresh the heart of
          their home without a full kitchen remodel. By carefully
          stripping, preparing, and staining your cabinets, Rich
          transforms dull or worn surfaces into elegant, durable
          finishes that complement your décor. Experience how a
          professionally stained cabinet can brighten your kitchen,
          enhance the value of your home, and harmonize with any
          interior style, all while reflecting the artistry and
          meticulous craftsmanship that Rich brings to every project.
        </p>
        <Image
          src={cabinetStaining}
          alt={`Evansville Cabinet Staining Can Update your Kitchen`}
          className="h-auto w-full rounded"
        />
      </section>
    </Container>
  );
}
