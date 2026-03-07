import { siteData } from "@/data/site";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Locations
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Visit one of our North Bergen locations.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteData.locations.map((location) => (
            <div
              key={location.name}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold">{location.name}</h2>

              <p className="mt-4 leading-7 text-neutral-600">
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </p>

              <p className="mt-4 text-sm text-neutral-500">{location.details}</p>
              <p className="mt-2 text-sm font-medium text-neutral-700">
                {location.hours}
              </p>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}