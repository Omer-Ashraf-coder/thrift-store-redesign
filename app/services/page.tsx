import { siteData } from "@/data/site";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Services
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Clean-out services for homes, apartments, and other spaces.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          We provide clean-out help for local customers who need assistance with
          removing items from homes, apartments, estates, and other spaces.
          Contact us directly to discuss your project and availability.
        </p>

        <div className="mt-12 space-y-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">What We Help With</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Home clean-outs, apartment clean-outs, estate clean-outs, and
              other general local clean-out needs.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">How to Get Started</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Call or email our team with details about the job, location, and
              timing. We can then discuss the next steps and whether the project
              is a good fit.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Need More Information?</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Reach out directly for scheduling questions, availability, and
              service details.
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
            href={siteData.contact.emailHref}
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}