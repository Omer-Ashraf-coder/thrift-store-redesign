"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">
              {siteData.businessName}
            </p>
            <p className="text-sm text-neutral-500">{siteData.city}</p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-neutral-600">
              About
            </a>
            <a href="#donate" className="transition hover:text-neutral-600">
              Donate
            </a>
            <a href="#services" className="transition hover:text-neutral-600">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-neutral-600">
              Gallery
            </a>
            <a href="#locations" className="transition hover:text-neutral-600">
              Locations
            </a>
            <a href="#contact" className="transition hover:text-neutral-600">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                About
              </a>
              <a
                href="#donate"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                Donate
              </a>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                Gallery
              </a>
              <a
                href="#locations"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                Locations
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-neutral-100"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}