import { siteData } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          About
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {siteData.about.title}
        </h2>

        <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
          {siteData.about.description}
        </p>
      </div>
    </section>
  );
}