export default function OfferCards() {
  return (
    <section id="donate" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Shopping, donations, and services built around the local community.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="group rounded-[2rem] border border-neutral-200 bg-[#faf8f4] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Shop
            </p>
            <h3 className="mt-4 text-2xl font-bold">Unique Finds</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Browse clothing, furniture, home goods, and secondhand treasures
              at affordable prices.
            </p>
            <div className="mt-6 text-sm font-semibold text-neutral-900 transition group-hover:text-emerald-700">
              Explore in store →
            </div>
          </div>

          <div className="group rounded-[2rem] border border-neutral-200 bg-[#faf8f4] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Donate
            </p>
            <h3 className="mt-4 text-2xl font-bold">Give Items a Second Life</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Support the community by donating gently used items and helping
              others find quality essentials.
            </p>
            <div className="mt-6 text-sm font-semibold text-neutral-900 transition group-hover:text-emerald-700">
              Learn donation details →
            </div>
          </div>

          <div className="group rounded-[2rem] border border-neutral-200 bg-[#faf8f4] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Service
            </p>
            <h3 className="mt-4 text-2xl font-bold">Clean-Out Help</h3>
            <p className="mt-4 leading-7 text-neutral-600">
              Get help with home, apartment, or estate clean-outs from a local
              team you can contact directly.
            </p>
            <div className="mt-6 text-sm font-semibold text-neutral-900 transition group-hover:text-emerald-700">
              Ask about services →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}