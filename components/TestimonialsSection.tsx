import { siteData } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7f5f1]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Reviews
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What customers are saying
          </h2>

          <p className="mt-4 text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
            A few words from local shoppers who have visited the store and
            shared their experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <p className="text-lg font-bold text-neutral-900">
                {review.name}
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                “{review.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}