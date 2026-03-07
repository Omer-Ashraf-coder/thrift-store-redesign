import Image from "next/image";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {siteData.hero.eyebrow}
          </p>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
            {siteData.hero.title}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
            {siteData.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#locations"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Visit Our Store
            </a>

            <a
              href="#services"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#d9d2c3] p-3 shadow-sm">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-[#f3efe8]">
            <Image
              src="/images/hero-store.jpg"
              alt="Thrift store interior or storefront"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}