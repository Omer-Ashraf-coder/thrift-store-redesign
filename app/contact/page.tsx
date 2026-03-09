import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Contact
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Get in touch with our team.
          </h1>

          <p className="mt-8 max-w-5xl text-lg leading-10 text-neutral-700">
            Reach out for donation questions, store information, clean-out
            service inquiries, and general help.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">Call or Email</h2>

              <div className="mt-6 space-y-5 text-base leading-9 text-neutral-700">
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

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-bold md:text-3xl">Online</h2>

              <div className="mt-6 space-y-5 text-base leading-9 text-neutral-700">
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
        </div>
      </section>
    </main>
  );
}