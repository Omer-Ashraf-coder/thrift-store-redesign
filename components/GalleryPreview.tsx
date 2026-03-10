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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Gallery
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A closer look inside the store and its community.
          </h2>

          <p className="mt-4 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
            These snapshots show everyday moments at the shop — from customers
            browsing clothing and household items to the friendly faces that
            make the store a local favorite.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group overflow-hidden rounded-[1.75rem] bg-neutral-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[260px] overflow-hidden sm:h-[280px]">
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