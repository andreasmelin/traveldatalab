import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  ArrowLeftRight,
  Trophy,
  Minus,
  ArrowRight,
} from 'lucide-react'
import {
  getParkComparisonBySlug,
  getAllParkComparisonSlugs,
} from '@/lib/park-comparisons'
import { getParkBySlug } from '@/lib/national-parks'

export async function generateStaticParams() {
  return getAllParkComparisonSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const comp = getParkComparisonBySlug(slug)
  if (!comp) return {}

  return {
    title: comp.title,
    description: comp.description,
    alternates: { canonical: `/parks/compare/${comp.slug}` },
    openGraph: {
      title: comp.title,
      description: comp.description,
      url: `/parks/compare/${comp.slug}`,
    },
  }
}

export default async function ParkComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const comp = getParkComparisonBySlug(slug)
  if (!comp) notFound()

  const dest1 = getParkBySlug(comp.destination1)
  const dest2 = getParkBySlug(comp.destination2)
  if (!dest1 || !dest2) notFound()

  const dest1Wins = comp.categories.filter((c) => c.winner === 1).length
  const dest2Wins = comp.categories.filter((c) => c.winner === 2).length
  const ties = comp.categories.filter((c) => c.winner === 0).length

  // Generate FAQ data from comparison stats
  const overallWinner =
    dest1Wins > dest2Wins
      ? dest1.name
      : dest2Wins > dest1Wins
        ? dest2.name
        : null
  const overallSummary = overallWinner
    ? `${overallWinner} wins more categories overall (${Math.max(dest1Wins, dest2Wins)} to ${Math.min(dest1Wins, dest2Wins)}${ties > 0 ? ` with ${ties} tied` : ''}), but the best choice depends on your priorities. ${comp.verdict}`
    : `The comparison is evenly matched at ${dest1Wins} categories each${ties > 0 ? ` with ${ties} tied` : ''}. ${comp.verdict}`

  const trailWinner =
    dest1.numberOfTrails > dest2.numberOfTrails ? dest1 : dest2
  const trailLoser =
    dest1.numberOfTrails > dest2.numberOfTrails ? dest2 : dest1

  const lessCrowded =
    dest1.annualVisitors < dest2.annualVisitors ? dest1 : dest2
  const moreCrowded =
    dest1.annualVisitors < dest2.annualVisitors ? dest2 : dest1

  const faqs = [
    {
      question: `Which is better, ${dest1.name} or ${dest2.name}?`,
      answer: overallSummary,
    },
    {
      question: `Which park has more trails, ${dest1.name} or ${dest2.name}?`,
      answer:
        dest1.numberOfTrails === dest2.numberOfTrails
          ? `Both ${dest1.name} and ${dest2.name} offer ${dest1.numberOfTrails} trails. ${dest1.name} covers ${dest1.acreage.toLocaleString()} acres, while ${dest2.name} covers ${dest2.acreage.toLocaleString()} acres.`
          : `${trailWinner.name} has more trails with ${trailWinner.numberOfTrails} compared to ${trailLoser.name}'s ${trailLoser.numberOfTrails}. ${trailWinner.name} spans ${trailWinner.acreage.toLocaleString()} acres while ${trailLoser.name} covers ${trailLoser.acreage.toLocaleString()} acres.`,
    },
    {
      question: `Which park is less crowded, ${dest1.name} or ${dest2.name}?`,
      answer: `${lessCrowded.name} sees fewer visitors at ${lessCrowded.annualVisitors} annually compared to ${moreCrowded.name}'s ${moreCrowded.annualVisitors}. If you prefer a quieter experience, ${lessCrowded.name} is the better choice, especially outside of peak season.`,
    },
    {
      question: `Which park is better for families, ${dest1.name} or ${dest2.name}?`,
      answer: `Both parks are excellent for families. ${dest1.name} ${dest1.petFriendly ? 'is pet-friendly' : 'does not allow pets on trails'}, ${dest1.camping ? 'offers camping' : 'has limited camping'}, and charges ${dest1.entranceFee}. ${dest2.name} ${dest2.petFriendly ? 'is pet-friendly' : 'does not allow pets on trails'}, ${dest2.camping ? 'offers camping' : 'has limited camping'}, and charges ${dest2.entranceFee}.`,
    },
  ]

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
        name: 'National Parks',
        item: 'https://traveldatalab.com/parks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Compare',
        item: 'https://traveldatalab.com/parks/compare',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: comp.title,
        item: `https://traveldatalab.com/parks/compare/${comp.slug}`,
      },
    ],
  }

  // Parse entrance fee to a number for comparison
  function parseFee(fee: string): number {
    const match = fee.match(/\$(\d+)/)
    return match ? parseInt(match[1], 10) : 0
  }

  const fee1 = parseFee(dest1.entranceFee)
  const fee2 = parseFee(dest2.entranceFee)

  // Parse highestPoint to a number for comparison
  function parseElevation(point: string): number {
    const match = point.match(/([\d,]+)/)
    return match ? parseInt(match[1].replace(/,/g, ''), 10) : 0
  }

  const elev1 = parseElevation(dest1.highestPoint)
  const elev2 = parseElevation(dest2.highestPoint)

  const statRows = [
    {
      label: 'Acreage',
      val1: dest1.acreage.toLocaleString(),
      val2: dest2.acreage.toLocaleString(),
      winner:
        dest1.acreage > dest2.acreage
          ? 1
          : dest1.acreage < dest2.acreage
            ? 2
            : 0,
    },
    {
      label: 'Trails',
      val1: dest1.numberOfTrails.toString(),
      val2: dest2.numberOfTrails.toString(),
      winner:
        dest1.numberOfTrails > dest2.numberOfTrails
          ? 1
          : dest1.numberOfTrails < dest2.numberOfTrails
            ? 2
            : 0,
    },
    {
      label: 'Established',
      val1: dest1.established.toString(),
      val2: dest2.established.toString(),
      winner:
        dest1.established < dest2.established
          ? 1
          : dest1.established > dest2.established
            ? 2
            : 0,
    },
    {
      label: 'Annual Visitors',
      val1: dest1.annualVisitors,
      val2: dest2.annualVisitors,
      winner: 0,
    },
    {
      label: 'Entrance Fee',
      val1: dest1.entranceFee,
      val2: dest2.entranceFee,
      winner:
        fee1 < fee2
          ? 1
          : fee1 > fee2
            ? 2
            : 0,
    },
    {
      label: 'Highest Point',
      val1: dest1.highestPoint,
      val2: dest2.highestPoint,
      winner:
        elev1 > elev2
          ? 1
          : elev1 < elev2
            ? 2
            : 0,
    },
  ]

  return (
    <>
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
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-emerald-600 no-underline">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link href="/parks" className="hover:text-emerald-600 no-underline">
              National Parks
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/parks/compare"
              className="hover:text-emerald-600 no-underline"
            >
              Compare
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">{comp.title}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <ArrowLeftRight className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">
            Park Comparison
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {comp.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          {comp.description}
        </p>

        {/* Score summary */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600">{dest1Wins}</div>
              <div className="text-sm font-medium text-gray-700">
                {dest1.name}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-400">{ties}</div>
              <div className="text-sm font-medium text-gray-500">Tied</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">
                {dest2Wins}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {dest2.name}
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Stats Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Side-by-Side Stats
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Stat
                  </th>
                  <th className="text-right p-3 font-semibold text-emerald-700">
                    {dest1.name}
                  </th>
                  <th className="text-right p-3 font-semibold text-emerald-700">
                    {dest2.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {statRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium text-gray-900">
                      {row.label}
                    </td>
                    <td
                      className={`p-3 text-right ${row.winner === 1 ? 'font-bold text-emerald-700' : 'text-gray-600'}`}
                    >
                      {row.val1}
                      {row.winner === 1 && (
                        <Trophy className="w-3.5 h-3.5 inline ml-1 text-amber-500" />
                      )}
                    </td>
                    <td
                      className={`p-3 text-right ${row.winner === 2 ? 'font-bold text-emerald-700' : 'text-gray-600'}`}
                    >
                      {row.val2}
                      {row.winner === 2 && (
                        <Trophy className="w-3.5 h-3.5 inline ml-1 text-amber-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Category-by-Category Breakdown */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Category-by-Category Breakdown
          </h2>
          <div className="space-y-4">
            {comp.categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white border border-gray-100 rounded-lg p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                  {cat.winner === 0 ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      <Minus className="w-3.5 h-3.5" />
                      Tie
                    </span>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        cat.winner === 1
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      {cat.winner === 1 ? dest1.name : dest2.name}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{cat.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Overall Verdict */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Overall Verdict
          </h2>
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6">
            <p className="text-gray-800 leading-relaxed font-medium">
              {comp.verdict}
            </p>
          </div>
        </section>

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

        {/* Links to Destination Pages */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href={`/parks/${dest1.slug}`}
            className="group flex items-center justify-between bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
          >
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Explore
              </div>
              <div className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {dest1.name}
              </div>
              <div className="text-sm text-gray-500">
                {dest1.state}, {dest1.country}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
          </Link>
          <Link
            href={`/parks/${dest2.slug}`}
            className="group flex items-center justify-between bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
          >
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Explore
              </div>
              <div className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {dest2.name}
              </div>
              <div className="text-sm text-gray-500">
                {dest2.state}, {dest2.country}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
          </Link>
        </section>
      </div>
    </>
  )
}
