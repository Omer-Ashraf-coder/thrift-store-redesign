import Link from "next/link";

export default function ServicePromo() {
  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
        <Link
          href="/donate"
          className="group block rounded-[36px] bg-black p-10 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Donations
          </p>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            Make donating simple and convenient.
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            Find clear information about what we accept, where to drop items
            off, and which items we cannot take.
          </p>

          <div className="mt-8 inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold transition group-hover:border-white">
            Clothes • Shoes • Household items
          </div>
        </Link>

        <Link
          href="/locations"
          className="group block rounded-[36px] bg-emerald-700 p-10 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Locations
          </p>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            Know exactly which location to visit.
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-emerald-100">
            619 Kennedy Blvd is the store-only location, and 905 Paterson Plank
            Rd is for donations, drop-offs, and shopping.
          </p>

          <div className="mt-8 inline-block rounded-full border border-emerald-300 px-6 py-3 text-sm font-semibold transition group-hover:border-white">
            Store • Donation • Drop-off • Shopping
          </div>
        </Link>
      </div>
    </section>
  );
}