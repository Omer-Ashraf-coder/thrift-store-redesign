import { siteData } from "@/data/site";

export default function LocationsSection() {
  return (
    <section id="locations" className="bg-[#fcfbf8]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Locations
        </p>

        <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          Visit our store or stop by our donation center.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {siteData.locations.map((location) => (
            <div
              key={location.name}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-2xl font-bold">{location.name}</h3>

              <p className="mt-4 leading-8 text-neutral-600">
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </p>

              <p className="mt-4 text-sm text-neutral-500">{location.details}</p>

              <p className="mt-2 text-sm font-medium text-neutral-700">
                {location.hours}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
                >
                  Get Directions
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}