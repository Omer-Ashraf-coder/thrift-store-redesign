import { siteData } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          About
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          About {siteData.businessName}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
          {siteData.businessName} serves the North Bergen community with
          affordable secondhand shopping, convenient donation drop-offs, and
          clean-out services. Our mission is to help good items find a second
          life while making quality clothing, furniture, and household goods
          more accessible to local families.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              We believe in repurposing and recycling usable items, operating as
              responsibly as possible, and serving the community with dignity,
              respect, honesty, and care.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">What We Value</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              We aim to provide great prices, unique finds, and helpful service
              while continuing to be a trusted part of the local community.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Founder Story
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Words from Richard
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-neutral-600">
            <p>
              Richard’s work in the thrift business has been shaped by faith,
              perseverance, and decades of hands-on experience serving the local
              community. From a young age, he learned the value of hard work,
              responsibility, and building something meaningful for others.
            </p>

            <p>
              Before opening Thrift Store Donation Center, Richard worked for
              more than 33 years in a large thrift retail operation in Union
              City, New Jersey. Over time, he developed the knowledge,
              discipline, and community relationships that would later help him
              build his own business.
            </p>

            <p>
              After a devastating fire destroyed the earlier thrift store,
              Richard chose to keep moving forward. With faith, determination,
              and a commitment to serving others, he built a new chapter through
              Thrift Store Donation Center in North Bergen.
            </p>

            <p>
              Today, Richard continues to focus on affordability, community
              service, environmental responsibility, and treating every customer
              with dignity and respect.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/locations"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            View Locations
          </a>

          <a
            href="/contact"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}