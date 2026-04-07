import { siteData } from "@/data/site";

export default function ContactCTA() {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteData.contact.emailDisplay
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] bg-neutral-900 px-8 py-14 text-white md:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Contact
        </p>

        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Have questions about shopping, donations, or drop-offs?
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
          Reach out to our team for store details, donation information, hours,
          and location help.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={siteData.contact.phoneHref}
            aria-label={`Call ${siteData.contact.phoneDisplay}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
          >
            Call {siteData.contact.phoneDisplay}
          </a>

          <a
            href={gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${siteData.contact.emailDisplay}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}