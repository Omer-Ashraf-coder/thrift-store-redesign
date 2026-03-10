"use client";

import { siteData } from "@/data/site";

export default function FloatingCallButton() {
  return (
    <a
      href={siteData.contact.phoneHref}
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        rounded-full bg-neutral-900
        px-5 py-3
        text-sm font-semibold text-white
        shadow-xl
        transition hover:bg-neutral-700
        md:hidden
      "
    >
      📞 Call
    </a>
  );
}