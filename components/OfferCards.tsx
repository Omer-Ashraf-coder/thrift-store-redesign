import Link from "next/link";

const cards = [
  {
    href: "/locations",
    eyebrow: "Shop",
    title: "619 Kennedy Blvd Store",
    description:
      "Browse clothing, shoes, home goods, and secondhand treasures at our store-only location.",
    cta: "Plan your visit →",
  },
  {
    href: "/donate",
    eyebrow: "Donate",
    title: "905 Paterson Plank Rd Drop-Off",
    description:
      "Donate gently used clothing and shoes at our donation center and drop-off location.",
    cta: "See donation details →",
  },
  {
    href: "/about",
    eyebrow: "About",
    title: "Community-Focused Service",
    description:
      "Learn more about Richard, the mission behind the store, and the work being done for local families.",
    cta: "Read our story →",
  },
];

export default function OfferCards() {
  return (
    <section id="donate" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Shopping and donations built around the local community.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block rounded-[2rem] border border-neutral-200 bg-[#faf8f4] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {card.eyebrow}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {card.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-neutral-900 transition group-hover:text-emerald-700">
                {card.cta}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}