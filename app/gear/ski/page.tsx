import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Wrench, ArrowRight } from 'lucide-react'
import { getGuidesByCategory } from '@/lib/guides'
import { getCategoryImagePath } from '@/lib/images'
import GuideCard from '@/components/GuideCard'

export const metadata: Metadata = {
  title: 'Best Ski Gear 2026: Expert-Tested Picks',
  description:
    'Find the best ski gear for the 2025-2026 season. Expert-tested reviews of skis, boots, jackets, helmets, goggles, and accessories with detailed buying guides.',
  alternates: { canonical: '/gear/ski' },
  openGraph: {
    title: 'Best Ski Gear 2026: Expert-Tested Picks',
    description:
      'Expert-tested ski gear reviews covering skis, boots, jackets, helmets, and more.',
    url: '/gear/ski',
  },
}

export default function SkiGearPage() {
  const gearGuides = getGuidesByCategory('Gear')

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
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
          <li className="font-medium text-gray-900">Ski Gear</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Gear Reviews
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Best Ski Gear 2026: Expert-Tested Picks
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Our gear reviews are built on a data-driven methodology. We combine
          hands-on testing across multiple resorts and conditions with reader
          feedback, brand reliability data, and value analysis. Every product we
          recommend has been tested in real-world skiing conditions by
          experienced skiers.
        </p>

        {/* Methodology */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Our Review Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">
                Real-World Testing
              </span>
              Every piece of gear is tested across multiple days and conditions.
              We ski everything from groomers to powder to spring slush to give
              you the full picture.
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">
                Data-Backed Ratings
              </span>
              We compile performance metrics, user reviews from major retailers,
              and warranty/return data to identify products that truly deliver
              on their promises.
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">
                Value Analysis
              </span>
              We evaluate price-to-performance ratios across all budget ranges.
              The most expensive option is not always the best -- we help you
              find the sweet spot.
            </div>
          </div>
        </div>

        {/* Gear Guides Grid */}
        {gearGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearGuides.map((g) => (
              <GuideCard key={g.metadata.slug} guide={g} categoryImage={getCategoryImagePath(g.metadata.category)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Wrench className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 mb-4">
              Gear guides are coming soon. Check back for expert-tested reviews
              of skis, boots, jackets, and more.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700 no-underline"
            >
              Browse all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
