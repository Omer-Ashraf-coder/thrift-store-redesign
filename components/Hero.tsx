"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";

export default function Hero() {
  const images = siteData.hero.images;
  const [currentIndex, setCurrentIndex] = useState(1);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {siteData.hero.eyebrow}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl xl:text-[78px]">
            {siteData.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
            {siteData.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/locations"
              className="inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 sm:px-7 sm:py-3.5"
            >
              View Locations
            </a>

            <a
              href="/donate"
              className="inline-block rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 sm:px-7 sm:py-3.5"
            >
              Donation Info
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-[#d8d0c1] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
            <div className="relative h-[300px] overflow-hidden rounded-[1.6rem] bg-[#f3efe8] sm:h-[380px] lg:h-[420px]">
              <Image
                src={images[currentIndex]}
                alt={`Store photo ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {currentIndex === 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white/95 text-neutral-900 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white sm:left-4 sm:h-14 sm:w-14"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {currentIndex === 0 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white/95 text-neutral-900 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white sm:right-4 sm:h-14 sm:w-14"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}