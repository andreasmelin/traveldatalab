import Link from 'next/link'
import { Mountain, MapPin, Snowflake, Sun, ArrowRight, BarChart3, Hotel } from 'lucide-react'
import { skiDestinations } from '@/lib/destinations'
import { getAllGuides } from '@/lib/guides'
import { getResortImagePath, getCategoryImagePath } from '@/lib/images'
import DestinationCard from '@/components/DestinationCard'
import GuideCard from '@/components/GuideCard'

export default function Home() {
  const featuredDestinations = skiDestinations.filter((d) =>
    ['vail', 'park-city', 'whistler-blackcomb', 'jackson-hole', 'aspen-snowmass', 'mammoth-mountain'].includes(d.slug)
  )
  const guides = getAllGuides().slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'TravelDataLab',
            url: 'https://traveldatalab.com',
            description: 'Data-driven travel guides for ski resorts, hotels, and gear.',
            publisher: {
              '@type': 'Organization',
              name: 'DataLabGroup',
              url: 'https://traveldatalab.com',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-sky-400" />
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">TravelDataLab</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Data-Driven Travel Guides
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Compare destinations, check weather, find the best hotels, and plan your trip with confidence.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/ski"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-sky-400 rounded-xl px-6 py-4 no-underline transition-colors"
              >
                <Snowflake className="w-7 h-7 text-sky-400" />
                <div className="text-left">
                  <div className="font-bold text-white">Winter</div>
                  <div className="text-xs text-slate-300">{skiDestinations.length} ski resorts</div>
                </div>
              </Link>
              <div
                className="flex items-center gap-3 bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 opacity-40 cursor-not-allowed"
              >
                <Sun className="w-7 h-7 text-amber-400" />
                <div className="text-left">
                  <div className="font-bold text-white">Summer</div>
                  <div className="text-xs text-slate-400">Coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Mountain className="w-5 h-5 text-sky-500" />
                <span className="text-2xl font-bold text-gray-900">{skiDestinations.length}</span>
              </div>
              <span className="text-sm text-gray-500">Destinations</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-sky-500" />
                <span className="text-2xl font-bold text-gray-900">5</span>
              </div>
              <span className="text-sm text-gray-500">Regions</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Hotel className="w-5 h-5 text-sky-500" />
                <span className="text-2xl font-bold text-gray-900">{skiDestinations.reduce((sum, d) => sum + d.hotels.length, 0)}+</span>
              </div>
              <span className="text-sm text-gray-500">Hotels Reviewed</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <BarChart3 className="w-5 h-5 text-sky-500" />
                <span className="text-2xl font-bold text-gray-900">360</span>
              </div>
              <span className="text-sm text-gray-500">Weather Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Ski Resorts</h2>
            <p className="text-gray-600">The most popular ski destinations in North America</p>
          </div>
          <Link href="/ski" className="hidden sm:flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700 no-underline">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((d) => (
            <DestinationCard key={d.slug} destination={d} resortImage={getResortImagePath(d.slug)} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/ski" className="text-sm font-medium text-sky-600 no-underline">
            View all {skiDestinations.length} resorts →
          </Link>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore by Region</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Colorado', count: skiDestinations.filter((d) => d.region === 'Colorado').length, emoji: '🏔️' },
              { name: 'Utah', count: skiDestinations.filter((d) => d.region === 'Utah').length, emoji: '⛷️' },
              { name: 'California', count: skiDestinations.filter((d) => d.region === 'California').length, emoji: '🌲' },
              { name: 'Northeast', count: skiDestinations.filter((d) => d.region === 'Northeast').length, emoji: '🌨️' },
              { name: 'Canada', count: skiDestinations.filter((d) => d.region === 'Canada').length, emoji: '🍁' },
            ].map((region) => (
              <Link
                key={region.name}
                href={`/ski?region=${region.name}`}
                className="flex flex-col items-center gap-2 p-6 bg-gray-50 hover:bg-sky-50 border border-gray-100 hover:border-sky-200 rounded-xl transition-all no-underline"
              >
                <span className="text-3xl">{region.emoji}</span>
                <span className="font-semibold text-gray-900">{region.name}</span>
                <span className="text-sm text-gray-500">{region.count} resorts</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Guides</h2>
              <p className="text-gray-600">Tips, gear reviews, and travel advice</p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-medium text-sky-600 hover:text-sky-700 no-underline">
              All guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <GuideCard key={g.metadata.slug} guide={g} categoryImage={getCategoryImagePath(g.metadata.category)} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Mountain className="w-10 h-10 text-sky-200 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Plan Your Ski Trip?</h2>
          <p className="text-sky-100 mb-8 max-w-xl mx-auto">
            Browse all {skiDestinations.length} ski resorts, compare side by side, and find the perfect hotel for your next mountain adventure.
          </p>
          <Link
            href="/ski"
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-8 py-3 rounded-lg hover:bg-sky-50 transition-colors no-underline"
          >
            Browse All Ski Resorts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
