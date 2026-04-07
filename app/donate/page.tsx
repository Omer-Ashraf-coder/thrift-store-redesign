import { siteData } from "@/data/site";

const nonAcceptableItems = [
  "Books",
  "Old electronics",
  "Printers",
  "Walkers",
  "Crutches",
  "Old TVs",
  "Wheelchairs",
  "Cribs, swings, baby carriages, or bassinets",
  "VCR tapes",
  "Furniture",
];

export default function DonatePage() {
  const storeLocation = siteData.locations[0];
  const donationLocation = siteData.locations[1];

  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Donate
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Donate gently used clothing, shoes, and small household items in
            North Bergen.
          </h1>

          <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
            We currently accept gently used clothing, shoes, small household
            items, and bric-a-brac only. Please bring drop-offs to our donation
            center at {donationLocation.addressLine1},{" "}
            {donationLocation.addressLine2}.
          </p>

          <div className="mt-8 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Important
            </p>

            <p className="mt-3 text-base leading-8 text-neutral-800 sm:text-lg sm:leading-9">
              {storeLocation.addressLine1} is the{" "}
              <span className="font-semibold">store-only</span> location.{" "}
              <span className="font-semibold">
                {donationLocation.addressLine1}
              </span>{" "}
              is available for donations, drop-offs, and shopping.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Donation Guidelines
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-100 p-6">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    What We Accept
                  </h3>

                  <ul className="mt-4 space-y-3 text-base leading-8 text-neutral-800">
                    <li>• Clothes</li>
                    <li>• Shoes</li>
                    <li>• Small household items</li>
                    <li>• Bric-a-brac</li>
                    <li>• Items should be gently used, clean, and ready to donate.</li>
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-6">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    What We Cannot Accept
                  </h3>

                  <ul className="mt-4 space-y-2 text-base leading-7 text-neutral-700">
                    {nonAcceptableItems.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Donation Center, Drop-Off & Shopping
                </h2>

                <p className="mt-4 text-base leading-8 text-neutral-700 sm:mt-6 sm:leading-9">
                  {donationLocation.addressLine1}
                  <br />
                  {donationLocation.addressLine2}
                </p>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {donationLocation.hours}
                </p>

                <a
                  href={donationLocation.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
                >
                  Get Directions
                </a>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Financial Contributions
                </h2>

                <p className="mt-4 text-base leading-8 text-neutral-700 sm:mt-6 sm:leading-9">
                  In addition to donating items, community members may also
                  choose to make a financial contribution to support the store,
                  future improvements, and continued service to the local
                  community.
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
                  Opens the official PayPal donation page in a new tab.
                </p>
              </div>
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