import { siteData } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          About
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {siteData.about.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          {siteData.about.description}
        </p>
      </div>
    </section>
  );
}