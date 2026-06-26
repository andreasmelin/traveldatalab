import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Mountain,
  MapPin,
  Snowflake,
  Calendar,
  Plane,
  ThermometerSun,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react'
import { getDestinationBySlug, getAllDestinationSlugs } from '@/lib/destinations'
import { getWeatherBySlug } from '@/lib/weather'
import { getComparisonsForDestination } from '@/lib/comparisons'
import { getGuidesByDestination } from '@/lib/guides'
import HotelCard from '@/components/HotelCard'
import GuideCard from '@/components/GuideCard'

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ destination: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>
}): Promise<Metadata> {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) return {}

  return {
    title: `${dest.name}: Where to Stay, Weather & Ski Guide`,
    description: `Plan your trip to ${dest.name} in ${dest.state}. ${dest.skiableAcres.toLocaleString()} skiable acres, ${dest.snowfall} annual snowfall. Find hotels, weather forecasts, and trail maps.`,
    alternates: { canonical: `/ski/${dest.slug}` },
    openGraph: {
      title: `${dest.name}: Where to Stay, Weather & Ski Guide`,
      description: dest.tagline,
      url: `/ski/${dest.slug}`,
    },
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const weather = getWeatherBySlug(slug)
  const comparisons = getComparisonsForDestination(slug)
  const guides = getGuidesByDestination(slug)
  const topHotels = dest.hotels.slice(0, 3)

  const bestMonthsWeather = weather
    ? weather.monthly.filter((m) => dest.bestMonths.includes(m.month))
    : []

  const faqs = [
    {
      question: `What is the best time to ski at ${dest.name}?`,
      answer: `The best months to ski at ${dest.name} are ${dest.bestMonths.join(', ')}. During these months, the resort receives consistent snowfall and optimal skiing conditions. The season runs ${dest.season}.`,
    },
    {
      question: `How many trails does ${dest.name} have?`,
      answer: `${dest.name} has ${dest.numberOfTrails} trails across ${dest.skiableAcres.toLocaleString()} skiable acres, with ${dest.numberOfLifts} lifts and ${dest.verticalDrop.toLocaleString()} feet of vertical drop. The terrain breakdown is ${dest.terrain.beginner}% beginner, ${dest.terrain.intermediate}% intermediate, and ${dest.terrain.advanced}% advanced.`,
    },
    {
      question: `Where should I stay when skiing at ${dest.name}?`,
      answer: `There are ${dest.hotels.length} recommended hotels near ${dest.name}, ranging from budget-friendly to luxury options. ${dest.hotels.some((h) => h.skiInSkiOut) ? 'Several properties offer ski-in/ski-out access.' : 'Most properties are a short shuttle ride from the slopes.'} The nearest airport is ${dest.nearestAirport} (${dest.airportCode}), ${dest.driveFromAirport} away.`,
    },
  ]

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${dest.name}: Where to Stay, Weather & Ski Guide`,
    description: dest.description,
    publisher: { '@type': 'Organization', name: 'TravelDataLab' },
    mainEntityOfPage: `https://traveldatalab.com/ski/${dest.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://traveldatalab.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ski Resorts',
        item: 'https://traveldatalab.com/ski',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: dest.name,
        item: `https://traveldatalab.com/ski/${dest.slug}`,
      },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
          <li className="font-medium text-gray-900">{dest.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-sky-900 text-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-3">
            <Mountain className="w-6 h-6 text-sky-400" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-wider">
              Ski Resort Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{dest.name}</h1>
          <div className="flex items-center gap-1.5 text-slate-300 mb-6">
            <MapPin className="w-4 h-4" />
            <span>
              {dest.state}, {dest.country}
            </span>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            {dest.tagline}
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {dest.skiableAcres.toLocaleString()}
              </div>
              <div className="text-sm text-slate-300">Skiable Acres</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {dest.numberOfTrails}
              </div>
              <div className="text-sm text-slate-300">Trails</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {dest.numberOfLifts}
              </div>
              <div className="text-sm text-slate-300">Lifts</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {dest.verticalDrop.toLocaleString()}&apos;
              </div>
              <div className="text-sm text-slate-300">Vertical Drop</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Terrain Difficulty Bar */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Terrain Breakdown
          </h2>
          <div className="flex rounded-full overflow-hidden h-6 mb-3">
            <div
              className="bg-green-400 flex items-center justify-center text-xs font-bold text-white"
              style={{ width: `${dest.terrain.beginner}%` }}
            >
              {dest.terrain.beginner}%
            </div>
            <div
              className="bg-blue-500 flex items-center justify-center text-xs font-bold text-white"
              style={{ width: `${dest.terrain.intermediate}%` }}
            >
              {dest.terrain.intermediate}%
            </div>
            <div
              className="bg-gray-900 flex items-center justify-center text-xs font-bold text-white"
              style={{ width: `${dest.terrain.advanced}%` }}
            >
              {dest.terrain.advanced}%
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-400" />
              Beginner
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Intermediate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-900" />
              Advanced
            </span>
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">Season</div>
                <div className="text-sm text-gray-600">{dest.season}</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <Snowflake className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Annual Snowfall
                </div>
                <div className="text-sm text-gray-600">{dest.snowfall}</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <Plane className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Nearest Airport
                </div>
                <div className="text-sm text-gray-600">
                  {dest.nearestAirport} ({dest.airportCode}),{' '}
                  {dest.driveFromAirport}
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <ThermometerSun className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Best Months
                </div>
                <div className="text-sm text-gray-600">
                  {dest.bestMonths.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
          <ul className="space-y-2">
            {dest.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {dest.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">{dest.description}</p>
        </section>

        {/* Top Hotels */}
        {topHotels.length > 0 && (
          <section className="mb-10">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Top Hotels Near {dest.name}
              </h2>
              <Link
                href={`/ski/${dest.slug}/hotels`}
                className="text-sm font-medium text-sky-600 hover:text-sky-700 no-underline flex items-center gap-1"
              >
                View all {dest.hotels.length} hotels
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {topHotels.map((hotel) => (
                <HotelCard
                  key={hotel.slug}
                  hotel={hotel}
                  destinationName={dest.name}
                />
              ))}
            </div>
          </section>
        )}

        {/* Weather Summary */}
        {bestMonthsWeather.length > 0 && (
          <section className="mb-10">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Weather During Best Months
              </h2>
              <Link
                href={`/ski/${dest.slug}/weather`}
                className="text-sm font-medium text-sky-600 hover:text-sky-700 no-underline flex items-center gap-1"
              >
                Full weather report
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestMonthsWeather.map((m) => (
                <div
                  key={m.month}
                  className="bg-white border border-gray-100 rounded-lg p-4"
                >
                  <div className="font-bold text-gray-900 mb-2">{m.month}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">High:</span>{' '}
                      <span className="font-medium">{m.avgHighF}&deg;F</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Low:</span>{' '}
                      <span className="font-medium">{m.avgLowF}&deg;F</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Snowfall:</span>{' '}
                      <span className="font-medium">
                        {m.avgSnowfallInches}&quot;
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Snow days:</span>{' '}
                      <span className="font-medium">{m.snowDays}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Comparisons */}
        {comparisons.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Resort Comparisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/ski/compare/${comp.slug}`}
                  className="group block bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Comparison
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-1">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {comp.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {guides.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((g) => (
                <GuideCard key={g.metadata.slug} guide={g} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-gray-100 rounded-lg p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
