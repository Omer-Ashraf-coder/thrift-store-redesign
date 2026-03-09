import Link from "next/link";

export default function ServicePromo() {
  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-2">

        {/* DONATIONS CARD */}
        <Link
          href="/donate"
          className="group block rounded-[36px] bg-black text-white p-10 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-400">
            Donations
          </p>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            Make donating simple and convenient.
          </h3>

          <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
            Share clear information about accepted items, drop-off details,
            and how local donations support the store and community.
          </p>

          <div className="mt-8 inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold group-hover:border-white transition">
            Easy drop-offs • Clear guidelines
          </div>
        </Link>

        {/* CLEAN OUT SERVICES */}
        <Link
          href="/services"
          className="group block rounded-[36px] bg-emerald-700 text-white p-10 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-200">
            Clean-Outs
          </p>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            Reliable help for local clean-out projects.
          </h3>

          <p className="mt-6 text-emerald-100 text-lg leading-relaxed">
            Highlight service areas, request details, and explain the process
            so visitors understand how clean-out services work.
          </p>

          <div className="mt-8 inline-block rounded-full border border-emerald-300 px-6 py-3 text-sm font-semibold group-hover:border-white transition">
            Local service • Direct contact
          </div>
        </Link>

      </div>
    </section>
  );
}