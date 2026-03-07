import { siteData } from "@/data/site";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Donate
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Donate gently used items in North Bergen.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          We welcome community donations and make it easy to drop off gently
          used items at our store. Donations help keep quality secondhand goods
          available at affordable prices.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold">Common Donations</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Clothing, shoes, household items, décor, and other gently used
              goods in clean and usable condition.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold">Drop-Off Hours</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Main Store: {siteData.locations[0].hours}
              <br />
              Second Location: {siteData.locations[1].hours}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold">Questions Before You Drop Off?</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Call the store before bringing larger items or special donations.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={siteData.contact.phoneHref}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            Call {siteData.contact.phoneDisplay}
          </a>

          <a
            href="/locations"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            View Locations
          </a>
        </div>
      </section>
    </main>
  );
}