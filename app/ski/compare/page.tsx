import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowLeftRight, ArrowRight } from 'lucide-react'
import { comparisons } from '@/lib/comparisons'
import { getDestinationBySlug } from '@/lib/destinations'

export const metadata: Metadata = {
  title: 'Compare Ski Resorts Side by Side',
  description:
    'Compare top ski resorts in the US and Canada head to head. See side-by-side stats on terrain, snowfall, vertical drop, and more.',
  alternates: { canonical: '/ski/compare' },
  openGraph: {
    title: 'Compare Ski Resorts Side by Side',
    description:
      'Compare top ski resorts head to head on terrain, snowfall, and more.',
    url: '/ski/compare',
  },
}

export default function CompareIndexPage() {
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
          <li>
            <Link href="/ski" className="hover:text-sky-600 no-underline">
              Ski Resorts
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">Compare</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <ArrowLeftRight className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Resort Comparisons
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare Ski Resorts Side by Side
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Not sure which resort to choose? Our detailed comparisons break down
          terrain size, snow quality, value, and atmosphere to help you decide.
          Each comparison includes a category-by-category analysis with a final
          verdict.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comp) => {
            const dest1 = getDestinationBySlug(comp.destination1)
            const dest2 = getDestinationBySlug(comp.destination2)

            // Find the most differentiating category (one with a clear winner)
            const keyDiff =
              comp.categories.find((c) => c.winner !== 0) || comp.categories[0]

            return (
              <Link
                key={comp.slug}
                href={`/ski/compare/${comp.slug}`}
                className="group block bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all no-underline overflow-hidden"
              >
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4">
                  <div className="flex items-center justify-center gap-3 text-white">
                    <span className="font-bold text-sm truncate">
                      {dest1?.name || comp.destination1}
                    </span>
                    <ArrowLeftRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="font-bold text-sm truncate">
                      {dest2?.name || comp.destination2}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-2 text-sm leading-snug">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    {comp.description}
                  </p>
                  <div className="bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-600 mb-3">
                    <span className="font-medium text-gray-700">
                      Key Differentiator:
                    </span>{' '}
                    {keyDiff.name} --{' '}
                    {keyDiff.winner === 1
                      ? dest1?.name || comp.destination1
                      : keyDiff.winner === 2
                        ? dest2?.name || comp.destination2
                        : 'Tie'}
                  </div>
                  <div className="flex items-center gap-1 text-sky-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read comparison <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
