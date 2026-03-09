import { siteData } from "@/data/site";

export default function ServicesPage() {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteData.contact.emailDisplay
  )}`;

  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Clean-out services for homes, apartments, and other spaces.
          </h1>

          <p className="mt-8 max-w-5xl text-lg leading-10 text-neutral-700">
            We provide clean-out help for local customers who need assistance
            with removing items from homes, apartments, estates, and other
            spaces. Contact us directly to discuss your project, availability,
            and pricing for the service.
          </p>

          <div className="mt-12 space-y-6">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                What We Help With
              </h2>
              <p className="mt-6 text-base leading-9 text-neutral-700">
                Home clean-outs, apartment clean-outs, estate clean-outs, and
                other general local clean-out needs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                How to Get Started
              </h2>
              <p className="mt-6 text-base leading-9 text-neutral-700">
                Call or email our team with details about the job, location, and
                timing. We can then discuss the next steps, pricing, and whether
                the project is a good fit.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">
                Need More Information?
              </h2>
              <p className="mt-6 text-base leading-9 text-neutral-700">
                Reach out directly for scheduling questions, availability,
                service details, and clean-out pricing.
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
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}