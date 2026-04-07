import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">{siteData.businessName}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Affordable thrift finds, community donations, and local drop-offs in
            North Bergen.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Quick Links
          </h4>
          <div className="mt-4 space-y-3 text-sm text-neutral-700">
            <Link href="/" className="block hover:text-neutral-900">
              Home
            </Link>
            <Link href="/about" className="block hover:text-neutral-900">
              About
            </Link>
            <Link href="/donate" className="block hover:text-neutral-900">
              Donate
            </Link>
            <Link href="/locations" className="block hover:text-neutral-900">
              Locations
            </Link>
            <Link href="/contact" className="block hover:text-neutral-900">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Contact
          </h4>
          <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            <p>{siteData.contact.phoneDisplay}</p>
            <p>{siteData.contact.emailDisplay}</p>
            <p>{siteData.contact.secondaryEmailDisplay}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Follow Us
          </h4>

          <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
            <a
              href={siteData.website.href}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-neutral-900"
            >
              Website
            </a>

            <a
              href={siteData.social.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-neutral-900"
            >
              Instagram
            </a>

            <a
              href={siteData.social.facebookHref}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-neutral-900"
            >
              Facebook
            </a>

            <a
              href={siteData.social.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-neutral-900"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-neutral-500">
          © 2026 {siteData.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}