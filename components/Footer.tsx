import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">{siteData.businessName}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Affordable thrift finds, community donations, and clean-out services
            in North Bergen.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Quick Links
          </h4>
          <div className="mt-4 space-y-3 text-sm text-neutral-700">
            <a href="#about" className="block hover:text-neutral-900">
              About
            </a>
            <a href="#donate" className="block hover:text-neutral-900">
              Donate
            </a>
            <a href="#services" className="block hover:text-neutral-900">
              Services
            </a>
            <a href="#locations" className="block hover:text-neutral-900">
              Locations
            </a>
            <a href="#contact" className="block hover:text-neutral-900">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Main Store
          </h4>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            {siteData.locations[0].addressLine1}
            <br />
            {siteData.locations[0].addressLine2}
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {siteData.locations[0].details}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Second Location
          </h4>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            {siteData.locations[1].addressLine1}
            <br />
            {siteData.locations[1].addressLine2}
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {siteData.locations[1].details}
          </p>
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