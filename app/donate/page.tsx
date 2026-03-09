import { siteData } from "@/data/site";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Donate
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Donate gently used items in North Bergen.
          </h1>

          <p className="mt-8 max-w-5xl text-lg leading-10 text-neutral-700">
            We welcome community item donations and make it easy to drop off
            gently used goods at our store. We also appreciate financial
            contributions that help support our establishment, our mission, and
            future growth in the community.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                Common Donations
              </h2>
              <p className="mt-6 text-base leading-9 text-neutral-700">
                Clothing, shoes, household items, décor, furniture, and other
                gently used goods in clean and usable condition.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                Drop-Off Hours
              </h2>
              <p className="mt-6 text-base leading-9 text-neutral-700">
              Main Store:
              <span className="block">
                  {siteData.locations[0].hours}
              </span>

              Second Location:
              <span className="block">
                  {siteData.locations[1].hours}
              </span>
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                Financial Contributions
              </h2>

              <p className="mt-6 text-base leading-9 text-neutral-700">
                In addition to donating items, community members may also choose
                to make a financial contribution to support the store, future
                improvements, and continued service to the local community.
              </p>

              <a
                href="https://www.paypal.com/donate/?hosted_button_id=KS32BTGG4R6X8#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Donate via PayPal
              </a>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteData.contact.phoneHref}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Call {siteData.contact.phoneDisplay}
            </a>

            <a
              href="/locations"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              View Locations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}