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
  getComparisonBySlug,
  getAllComparisonSlugs,
} from '@/lib/comparisons'
import { getDestinationBySlug } from '@/lib/destinations'
import { getWeatherBySlug } from '@/lib/weather'

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) return {}

  return {
    title: comp.title,
    description: comp.description,
    alternates: { canonical: `/ski/compare/${comp.slug}` },
    openGraph: {
      title: comp.title,
      description: comp.description,
      url: `/ski/compare/${comp.slug}`,
    },
  }
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) notFound()

  const dest1 = getDestinationBySlug(comp.destination1)
  const dest2 = getDestinationBySlug(comp.destination2)
  if (!dest1 || !dest2) notFound()

  const weather1 = getWeatherBySlug(comp.destination1)
  const weather2 = getWeatherBySlug(comp.destination2)

  const totalSnowfall1 = weather1
    ? weather1.monthly.reduce((s, m) => s + m.avgSnowfallInches, 0)
    : 0
  const totalSnowfall2 = weather2
    ? weather2.monthly.reduce((s, m) => s + m.avgSnowfallInches, 0)
    : 0

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

  const terrainWinner =
    dest1.skiableAcres > dest2.skiableAcres ? dest1 : dest2
  const terrainLoser =
    dest1.skiableAcres > dest2.skiableAcres ? dest2 : dest1
  const trailWinner =
    dest1.numberOfTrails > dest2.numberOfTrails ? dest1 : dest2
  const trailLoser =
    dest1.numberOfTrails > dest2.numberOfTrails ? dest2 : dest1

  const snowWinner =
    totalSnowfall1 > totalSnowfall2
      ? dest1
      : totalSnowfall2 > totalSnowfall1
        ? dest2
        : null

  const beginnerFriendly =
    dest1.terrain.beginner > dest2.terrain.beginner
      ? dest1
      : dest2.terrain.beginner > dest1.terrain.beginner
        ? dest2
        : null

  const faqs = [
    {
      question: `Which is better, ${dest1.name} or ${dest2.name}?`,
      answer: overallSummary,
    },
    {
      question: `Which resort has more terrain, ${dest1.name} or ${dest2.name}?`,
      answer:
        dest1.skiableAcres === dest2.skiableAcres
          ? `Both ${dest1.name} and ${dest2.name} offer ${dest1.skiableAcres.toLocaleString()} skiable acres. ${dest1.name} has ${dest1.numberOfTrails} trails and ${dest1.numberOfLifts} lifts, while ${dest2.name} has ${dest2.numberOfTrails} trails and ${dest2.numberOfLifts} lifts.`
          : `${terrainWinner.name} has more skiable terrain with ${terrainWinner.skiableAcres.toLocaleString()} acres compared to ${terrainLoser.name}'s ${terrainLoser.skiableAcres.toLocaleString()} acres. ${trailWinner.name} also leads in trail count with ${trailWinner.numberOfTrails} trails versus ${trailLoser.numberOfTrails} at ${trailLoser.name}.`,
    },
    {
      question: `Which resort gets more snow, ${dest1.name} or ${dest2.name}?`,
      answer: snowWinner
        ? `${snowWinner.name} receives more snowfall at ${snowWinner === dest1 ? dest1.snowfall : dest2.snowfall}, compared to ${snowWinner === dest1 ? dest2.snowfall : dest1.snowfall} at ${snowWinner === dest1 ? dest2.name : dest1.name}. ${dest1.name} has a vertical drop of ${dest1.verticalDrop.toLocaleString()} feet and ${dest2.name} has ${dest2.verticalDrop.toLocaleString()} feet.`
        : `Both resorts receive similar snowfall. ${dest1.name} averages ${dest1.snowfall} and ${dest2.name} averages ${dest2.snowfall}.`,
    },
    {
      question: `Is ${dest1.name} or ${dest2.name} better for beginners?`,
      answer: beginnerFriendly
        ? `${beginnerFriendly.name} is more beginner-friendly, with ${beginnerFriendly.terrain.beginner}% of its terrain rated for beginners compared to ${beginnerFriendly === dest1 ? dest2.terrain.beginner : dest1.terrain.beginner}% at ${beginnerFriendly === dest1 ? dest2.name : dest1.name}. For intermediate skiers, ${dest1.name} offers ${dest1.terrain.intermediate}% intermediate terrain versus ${dest2.terrain.intermediate}% at ${dest2.name}.`
        : `Both resorts offer the same proportion of beginner terrain at ${dest1.terrain.beginner}%. ${dest1.name} has ${dest1.terrain.intermediate}% intermediate and ${dest1.terrain.advanced}% advanced terrain, while ${dest2.name} has ${dest2.terrain.intermediate}% intermediate and ${dest2.terrain.advanced}% advanced.`,
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
        name: 'Ski Resorts',
        item: 'https://traveldatalab.com/ski',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Compare',
        item: 'https://traveldatalab.com/ski/compare',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: comp.title,
        item: `https://traveldatalab.com/ski/compare/${comp.slug}`,
      },
    ],
  }

  const statRows = [
    {
      label: 'Skiable Acres',
      val1: dest1.skiableAcres.toLocaleString(),
      val2: dest2.skiableAcres.toLocaleString(),
      winner:
        dest1.skiableAcres > dest2.skiableAcres
          ? 1
          : dest1.skiableAcres < dest2.skiableAcres
            ? 2
            : 0,
    },
    {
      label: 'Vertical Drop',
      val1: `${dest1.verticalDrop.toLocaleString()}'`,
      val2: `${dest2.verticalDrop.toLocaleString()}'`,
      winner:
        dest1.verticalDrop > dest2.verticalDrop
          ? 1
          : dest1.verticalDrop < dest2.verticalDrop
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
      label: 'Lifts',
      val1: dest1.numberOfLifts.toString(),
      val2: dest2.numberOfLifts.toString(),
      winner:
        dest1.numberOfLifts > dest2.numberOfLifts
          ? 1
          : dest1.numberOfLifts < dest2.numberOfLifts
            ? 2
            : 0,
    },
    {
      label: 'Snowfall',
      val1: dest1.snowfall,
      val2: dest2.snowfall,
      winner:
        totalSnowfall1 > totalSnowfall2
          ? 1
          : totalSnowfall1 < totalSnowfall2
            ? 2
            : 0,
    },
    {
      label: 'Beginner Terrain',
      val1: `${dest1.terrain.beginner}%`,
      val2: `${dest2.terrain.beginner}%`,
      winner:
        dest1.terrain.beginner > dest2.terrain.beginner
          ? 1
          : dest1.terrain.beginner < dest2.terrain.beginner
            ? 2
            : 0,
    },
    {
      label: 'Intermediate Terrain',
      val1: `${dest1.terrain.intermediate}%`,
      val2: `${dest2.terrain.intermediate}%`,
      winner:
        dest1.terrain.intermediate > dest2.terrain.intermediate
          ? 1
          : dest1.terrain.intermediate < dest2.terrain.intermediate
            ? 2
            : 0,
    },
    {
      label: 'Advanced Terrain',
      val1: `${dest1.terrain.advanced}%`,
      val2: `${dest2.terrain.advanced}%`,
      winner:
        dest1.terrain.advanced > dest2.terrain.advanced
          ? 1
          : dest1.terrain.advanced < dest2.terrain.advanced
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
          <li>
            <Link
              href="/ski/compare"
              className="hover:text-sky-600 no-underline"
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
          <ArrowLeftRight className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Resort Comparison
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
              <div className="text-2xl font-bold text-sky-600">{dest1Wins}</div>
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
                  <th className="text-right p-3 font-semibold text-sky-700">
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
                      className={`p-3 text-right ${row.winner === 1 ? 'font-bold text-sky-700' : 'text-gray-600'}`}
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
                          ? 'bg-sky-100 text-sky-700'
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
          <div className="bg-sky-50 border border-sky-100 rounded-lg p-6">
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
            href={`/ski/${dest1.slug}`}
            className="group flex items-center justify-between bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
          >
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Explore
              </div>
              <div className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                {dest1.name}
              </div>
              <div className="text-sm text-gray-500">
                {dest1.state}, {dest1.country}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
          </Link>
          <Link
            href={`/ski/${dest2.slug}`}
            className="group flex items-center justify-between bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
          >
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                Explore
              </div>
              <div className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                {dest2.name}
              </div>
              <div className="text-sm text-gray-500">
                {dest2.state}, {dest2.country}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
          </Link>
        </section>
      </div>
    </>
  )
}
