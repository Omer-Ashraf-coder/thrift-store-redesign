import { siteData } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            About
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            About {siteData.businessName}
          </h1>

          <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-9">
            {siteData.businessName} is a community thrift store built on faith,
            service, and a commitment to helping local families access quality
            secondhand goods at affordable prices. We believe in serving our
            neighbors with honesty, dignity, respect, and gratitude for the
            blessings God provides each day.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Mission</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700 sm:mt-6 sm:leading-9">
                We strive to repurpose and recycle quality used items, operate
                as responsibly and environmentally friendly as possible, and
                serve our community with faith, integrity, dignity, and respect.
              </p>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">What We Value</h2>
              <p className="mt-4 text-base leading-8 text-neutral-700 sm:mt-6 sm:leading-9">
                We value honesty, trust, affordability, strong community ties,
                and letting our faith in God guide how we serve our customers,
                neighbors, and local families every day.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Founder Story
            </p>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Words from Richard (Richie)
            </h2>

            <div className="mt-6 whitespace-pre-line text-[15px] leading-8 text-neutral-700 sm:mt-8 sm:leading-9">
{`Always be thankful and praise the Lord, for He knows every hair on our heads and knew us before we began our journey in our mother’s womb. God blesses me, my family, my customers, and my community every day. For that I am truly thankful and sing with joy. So if you ever hear me humming a song, I am simply praising our Lord God.

My past has greatly influenced my mindset and my desire to build a better life for my family and myself. When I was a young man, I learned what it meant to work hard and to pursue meaningful goals that truly mattered.

My Goals
• Repurpose and recycle quality used items whenever possible.
• Operate in the most environmentally responsible way we can.
• Continue to be a pillar in the community and serve our neighbors.
• Build trust and confidence in everything we do while letting my faith in God shine as a guiding light.
• Treat every person with dignity and respect.
• Provide great prices, unique items, and affordability for local families.
• Offer outreach and contribute whenever possible to local community programs.

A Little About Me

Despite working with physical disabilities, Richard managed a large-scale thrift business with over 10,000 square feet of retail space. This thrift store was located on John F. Kennedy Blvd in Union City, New Jersey, where he worked for more than 33 years.

That establishment operated successfully until one day a devastating fire destroyed the building. Thankfully, we praise God that no lives were lost in that fire.

Richard began working hard at a young age and grew tremendously through experience. Over the years he learned the knowledge needed to succeed while working closely with corporate administrators from a large nonprofit organization. Many times these administrators could not see their mistakes, but Richard carefully observed every decision so he could learn from them and avoid repeating those same errors in the future.

Richard understood how to connect with the community and its customers. Through hard work and dedication he built a strong customer base and always stood up against the wrongdoing he witnessed. Courageously, he worked to create positive change in his community.

Through determination and faith, Richard built a successful business in a very challenging environment. Every day he lived and worked with Jesus Christ in his heart, using the Lord’s guidance and teachings to do the most good possible. With gratitude for God's blessings, he brought responsible and sustainable management into daily operations.

Over time Richard became a trusted and valued member of the community, building a business rooted in honesty, integrity, and service. He became known for living a life of generosity and community involvement.

Then came a heartbreaking moment. A devastating fire destroyed the thrift store and forced Richard to consider his next path. Like a phoenix rising from the ashes, a new and even better thrift store was built — this time fully owned and operated by Richard himself.

Today Richard is the proud owner and proprietor of the Thrift Store Donation Center located at:

905 Paterson Plank Rd
North Bergen, NJ 07047`}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/locations"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              View Locations
            </a>

            <a
              href="/contact"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}