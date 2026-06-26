import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Mountain, BarChart3, Hotel, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About TravelDataLab',
  description:
    'Learn about TravelDataLab, our mission to bring data-driven insights to travel planning, and how we review ski resorts, hotels, and gear.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About TravelDataLab',
    description:
      'Learn about our mission and methodology for data-driven travel guides.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
      >
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-sky-600 no-underline">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">About</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About TravelDataLab
        </h1>

        <div className="prose prose-gray prose-headings:text-gray-900 prose-a:text-sky-600 max-w-none">
          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TravelDataLab exists to take the guesswork out of travel planning.
              We believe that the best travel decisions are made with clear,
              reliable data -- not just marketing claims or sponsored posts. Our
              mission is to provide comprehensive, data-driven travel guides
              that help you choose the right destinations, find the best hotels,
              and pack the right gear.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are planning your first ski trip or your fiftieth, our
              goal is to give you the information you need to make a confident
              decision. We cover ski resorts across the United States and
              Canada, providing detailed terrain statistics, monthly weather
              data, hotel reviews, and side-by-side resort comparisons.
            </p>
          </section>

          {/* Methodology */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every recommendation on TravelDataLab is backed by research and
              data. Here is how we approach each area of our coverage:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-white border border-gray-100 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain className="w-5 h-5 text-sky-500" />
                  <h3 className="font-bold text-gray-900">Ski Resorts</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We compile official resort statistics including skiable
                  acreage, trail counts, vertical drop, lift capacity, and
                  terrain breakdown. Our weather data is sourced from historical
                  records to provide accurate monthly snowfall, temperature, and
                  sunshine averages. We visit resorts in person and continuously
                  update our data.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Hotel className="w-5 h-5 text-sky-500" />
                  <h3 className="font-bold text-gray-900">Hotels</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our hotel recommendations are based on location, amenities,
                  guest reviews, price-to-value ratio, and proximity to slopes.
                  We prioritize properties with verified guest feedback and
                  transparent pricing. We include options across all budget
                  ranges, from affordable lodges to luxury ski-in/ski-out
                  resorts.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-sky-500" />
                  <h3 className="font-bold text-gray-900">Gear</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All gear featured on TravelDataLab is tested in real-world
                  conditions. We evaluate performance, durability, comfort, and
                  value. Our reviews incorporate data from multiple testing
                  sessions across different conditions and resort types, and we
                  cross-reference our findings with aggregated customer reviews.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-sky-500" />
                  <h3 className="font-bold text-gray-900">Comparisons</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our resort comparisons evaluate destinations across multiple
                  categories including terrain size, snow quality, value,
                  accessibility, and overall experience. Each comparison
                  includes a clear verdict with category-by-category winners to
                  help you decide which resort fits your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Affiliate Disclosure
            </h2>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 not-prose">
              <p className="text-sm text-amber-900 leading-relaxed mb-3">
                TravelDataLab participates in affiliate programs, including the
                Hotels.com affiliate program and other travel and retail affiliate
                networks. This means we may earn a commission when you book a
                hotel, purchase gear, or complete another qualifying action
                through links on our site.
              </p>
              <p className="text-sm text-amber-900 leading-relaxed mb-3">
                These affiliate partnerships do not influence our editorial
                content or recommendations. Our reviews and rankings are based
                entirely on our research methodology and testing process. We
                only recommend products and services we genuinely believe
                provide value to our readers.
              </p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Affiliate commissions help support the ongoing operation of
                TravelDataLab, allowing us to continue researching, testing, and
                publishing free travel guides. We are grateful for your support
                when you use our links.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Have a question, suggestion, or correction? We would love to hear
              from you. Reach out to us at{' '}
              <a
                href="mailto:hello@traveldatalab.com"
                className="text-sky-600 no-underline hover:underline"
              >
                hello@traveldatalab.com
              </a>
              . We read every email and do our best to respond promptly.
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
