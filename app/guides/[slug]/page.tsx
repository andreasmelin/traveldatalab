import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Clock, Calendar } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  getGuideBySlug,
  getAllGuideSlugs,
  getRelatedGuides,
} from '@/lib/guides'
import { Callout } from '@/components/mdx/Callout'
import { ProductLink } from '@/components/mdx/ProductLink'
import { KeyTakeaway } from '@/components/mdx/KeyTakeaway'
import GuideCard from '@/components/GuideCard'

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}

  return {
    title: guide.metadata.title,
    description: guide.metadata.description,
    alternates: { canonical: `/guides/${guide.metadata.slug}` },
    openGraph: {
      title: guide.metadata.title,
      description: guide.metadata.description,
      url: `/guides/${guide.metadata.slug}`,
      type: 'article',
      publishedTime: guide.metadata.date,
      modifiedTime: guide.metadata.lastModified || guide.metadata.date,
    },
  }
}

const mdxComponents = {
  Callout,
  ProductLink,
  KeyTakeaway,
}

interface ExtractedProduct {
  name: string
  brand: string
  price: number
  description: string
  url: string
}

function extractProducts(content: string): ExtractedProduct[] {
  const products: ExtractedProduct[] = []

  // Split content into product blocks by looking for ### N. ProductName — Category
  const productBlockRegex = /###\s+\d+\.\s+(.+?)\s*[—–-]\s*(.+?)\n([\s\S]*?)(?=###\s+\d+\.|---|\n##\s|$)/g
  let match

  while ((match = productBlockRegex.exec(content)) !== null) {
    const fullName = match[1].trim()
    const description = match[2].trim()
    const block = match[3]

    // Extract price: **Price:** $XXX
    const priceMatch = block.match(/\*\*Price:\*\*\s*\$(\d+[\d,]*)/)
    const price = priceMatch ? parseInt(priceMatch[1].replace(',', ''), 10) : 0

    // Extract the first Amazon affiliate link
    const urlMatch = block.match(/\[(?:Shop on Amazon|Men's|Women's|Shop on REI\.com)\]\((https?:\/\/[^)]+)\)/)
    const url = urlMatch ? urlMatch[1] : ''

    // Extract brand from product name (first word or known brand patterns)
    // Product names follow the pattern "Brand Model" e.g. "Smith I/O Mag", "Oakley Flight Deck L"
    const brand = fullName.split(/\s+/)[0]

    // Build a description from the "Best for:" line if available, otherwise use the category
    const bestForMatch = block.match(/\*\*Best for:\*\*\s*(.+)/)
    const productDescription = bestForMatch
      ? bestForMatch[1].trim()
      : description

    if (price > 0 && url) {
      products.push({
        name: fullName,
        brand,
        price,
        description: productDescription,
        url,
      })
    }
  }

  return products
}

const GEAR_CATEGORIES = ['Gear', 'Tips']

function extractFAQs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = []

  // Look for a "Frequently Asked Questions" section
  const faqSectionMatch = content.match(
    /##\s*Frequently Asked Questions\s*\n([\s\S]*?)(?=\n##\s|$)/i
  )
  if (!faqSectionMatch) return faqs

  const faqSection = faqSectionMatch[1]

  // Extract Q&A pairs: ### Question\n\nAnswer
  const questionBlocks = faqSection.split(/###\s+/).filter(Boolean)
  for (const block of questionBlocks) {
    const lines = block.trim().split('\n')
    const question = lines[0]?.trim()
    const answer = lines
      .slice(1)
      .join('\n')
      .trim()
      .replace(/\n+/g, ' ')
      .replace(/<[^>]+>/g, '')
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const relatedGuides = getRelatedGuides(guide)
  const faqs = extractFAQs(guide.content)
  const isGearGuide = GEAR_CATEGORIES.includes(guide.metadata.category)
  const products = isGearGuide ? extractProducts(guide.content) : []

  const formattedDate = new Date(guide.metadata.date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  )

  const formattedLastModified = guide.metadata.lastModified
    ? new Date(guide.metadata.lastModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.metadata.title,
    description: guide.metadata.description,
    datePublished: guide.metadata.date,
    dateModified: guide.metadata.lastModified || guide.metadata.date,
    publisher: { '@type': 'Organization', name: 'TravelDataLab' },
    mainEntityOfPage: `https://traveldatalab.com/guides/${guide.metadata.slug}`,
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
        name: 'Guides',
        item: 'https://traveldatalab.com/guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.metadata.title,
        item: `https://traveldatalab.com/guides/${guide.metadata.slug}`,
      },
    ],
  }

  const faqJsonLd =
    faqs.length > 0
      ? {
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
      : null

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {products.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              products.map((p) => ({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: p.name,
                brand: { '@type': 'Brand', name: p.brand },
                description: p.description,
                offers: {
                  '@type': 'Offer',
                  price: p.price,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: p.url,
                },
              }))
            ),
          }}
        />
      )}

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
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
            <Link href="/guides" className="hover:text-sky-600 no-underline">
              Guides
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900 truncate max-w-[200px] sm:max-w-none">
            {guide.metadata.title}
          </li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700">
              {guide.metadata.category}
            </span>
            {guide.metadata.region && (
              <span className="text-xs text-gray-500">
                {guide.metadata.region}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {guide.metadata.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {guide.metadata.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={guide.metadata.date}>{formattedDate}</time>
            </div>
            {formattedLastModified && (
              <div className="text-xs text-gray-400">
                Updated {formattedLastModified}
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {guide.metadata.readTime}
            </div>
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose prose-gray prose-headings:text-gray-900 prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg max-w-none">
          <MDXRemote
            source={guide.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((g) => (
                <GuideCard key={g.metadata.slug} guide={g} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
