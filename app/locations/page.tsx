import { siteData } from "@/data/site";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Locations
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Visit our store or stop by our donation center.
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteData.locations.map((location) => (
              <div
                key={location.name}
                className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {location.name}
                </h2>

                <p className="mt-4 text-lg leading-8 text-neutral-700 sm:mt-6 sm:leading-9">
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

                <div className="mt-6 overflow-hidden rounded-2xl border">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      location.addressLine1 + " " + location.addressLine2
                    )}&output=embed`}
                    className="h-[260px] w-full"
                    loading="lazy"
                  />
                </div>

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