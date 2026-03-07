export default function ServiceHighlights() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-neutral-900 p-10 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Donations
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Make donating simple and convenient.
          </h3>

          <p className="mt-5 max-w-xl leading-7 text-neutral-300">
            Share clear information about accepted items, drop-off details, and
            how local donations support the store and community.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200">
            Easy drop-offs • Clear guidelines
          </div>
        </div>

        <div className="rounded-[2rem] bg-emerald-700 p-10 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Clean-Outs
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            Reliable help for local clean-out projects.
          </h3>

          <p className="mt-5 max-w-xl leading-7 text-emerald-50">
            Highlight service areas, request details, and before-and-after
            results so visitors understand how the process works.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-emerald-50">
            Local service • Direct contact
          </div>
        </div>
      </div>
    </section>
  );
}