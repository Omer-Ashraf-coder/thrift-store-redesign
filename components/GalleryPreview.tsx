import Image from "next/image";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Gallery
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A closer look at the store and what shoppers can discover.
          </h2>

          <p className="mt-4 leading-7 text-neutral-600">
            Browse a few highlights from the store, including clothing, home
            goods, furniture, and everyday secondhand finds.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}