import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Contact
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Get in touch with our team.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          Reach out for donation questions, store information, clean-out service
          inquiries, and general help.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Call or Email</h2>

            <div className="mt-4 space-y-4 leading-7 text-neutral-600">
              <p>
                Phone:{" "}
                <a
                  href={siteData.contact.phoneHref}
                  className="font-medium text-neutral-900 hover:text-emerald-700"
                >
                  {siteData.contact.phoneDisplay}
                </a>
              </p>

              <p>
                Store Email:{" "}
                <a
                  href={siteData.contact.emailHref}
                  className="font-medium text-neutral-900 hover:text-emerald-700"
                >
                  {siteData.contact.emailDisplay}
                </a>
              </p>

              <p>
                Alternate Email:{" "}
                <a
                  href={siteData.contact.secondaryEmailHref}
                  className="font-medium text-neutral-900 hover:text-emerald-700"
                >
                  {siteData.contact.secondaryEmailDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Online</h2>

            <div className="mt-4 space-y-4 leading-7 text-neutral-600">
              <p>
                Website:{" "}
                <a
                  href={siteData.website.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-neutral-900 hover:text-emerald-700"
                >
                  {siteData.website.display}
                </a>
              </p>

              <p>
                Instagram:{" "}
                <a
                  href={siteData.social.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-neutral-900 hover:text-emerald-700"
                >
                  {siteData.social.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}