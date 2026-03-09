import Link from "next/link";

const cards = [
  {
    href: "/locations",
    eyebrow: "Shop",
    title: "Unique Finds",
    description:
      "Browse clothing, furniture, home goods, and secondhand treasures at affordable prices.",
    cta: "Explore in store →",
  },
  {
    href: "/donate",
    eyebrow: "Donate",
    title: "Give Items a Second Life",
    description:
      "Support the community by donating gently used items and helping others find quality essentials.",
    cta: "Learn donation details →",
  },
  {
    href: "/services",
    eyebrow: "Service",
    title: "Clean-Out Help",
    description:
      "Get help with home, apartment, or estate clean-outs from a local team you can contact directly.",
    cta: "Ask about services →",
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
            Shopping, donations, and services built around the local community.
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