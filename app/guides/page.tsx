import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen } from 'lucide-react'
import { getAllGuides, getGuidesByCategory } from '@/lib/guides'
import { getCategoryImagePath } from '@/lib/images'
import GuideCard from '@/components/GuideCard'

export const metadata: Metadata = {
  title: 'Travel Guides',
  description:
    'Expert travel guides covering ski resorts, gear reviews, budget tips, and travel advice. Data-driven recommendations to help you plan the perfect trip.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Travel Guides',
    description:
      'Expert travel guides covering ski resorts, gear reviews, budget tips, and travel advice.',
    url: '/guides',
  },
}

const categories = [
  { label: 'All', value: '' },
  { label: 'Ski', value: 'Ski' },
  { label: 'Gear', value: 'Gear' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Budget', value: 'Budget' },
  { label: 'Tips', value: 'Tips' },
]

export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  const guides = category
    ? getGuidesByCategory(category)
    : getAllGuides()

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
          <li className="font-medium text-gray-900">Guides</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Travel Guides
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Travel Guides
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Expert guides covering everything from ski resort selection to gear
          reviews and budget travel tips. All our recommendations are backed by
          data and real-world testing.
        </p>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
          {categories.map((cat) => {
            const isActive = (category || '') === cat.value
            return (
              <Link
                key={cat.value}
                href={
                  cat.value
                    ? `/guides?category=${cat.value}`
                    : '/guides'
                }
                className={`px-4 py-2 rounded-full text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </Link>
            )
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {guides.length} guide{guides.length !== 1 ? 's' : ''}
          {category ? ` in ${category}` : ''}
        </p>

        {/* Grid */}
        {guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <GuideCard key={g.metadata.slug} guide={g} categoryImage={getCategoryImagePath(g.metadata.category)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No guides found for this category.</p>
            <Link
              href="/guides"
              className="text-sky-600 hover:text-sky-700 no-underline mt-2 inline-block"
            >
              View all guides
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
