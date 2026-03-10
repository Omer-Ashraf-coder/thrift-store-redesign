import { siteData } from "@/data/site";

export default function InfoBar() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {siteData.infoBar.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium text-neutral-800">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}