import { siteData } from "@/data/site";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Locations
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Visit one of our North Bergen locations.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {siteData.locations.map((location) => (
              <div
                key={location.name}
                className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm"
              >
                <h2 className="text-2xl font-bold md:text-3xl">
                  {location.name}
                </h2>

                <p className="mt-6 text-lg leading-9 text-neutral-700">
                  {location.addressLine1}
                  <br />
                  {location.addressLine2}
                </p>

                <p className="mt-6 text-base leading-8 text-neutral-500">
                  {location.details}
                </p>

                <p className="mt-1 text-base leading-8 text-neutral-700">
                  {location.hours}
                </p>

                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}