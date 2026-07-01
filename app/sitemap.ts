import type { MetadataRoute } from 'next'
import { getAllDestinationSlugs } from '@/lib/destinations'
import { getAllParkSlugs } from '@/lib/national-parks'
import { getAllGuideSlugs } from '@/lib/guides'
import { getAllComparisonSlugs } from '@/lib/comparisons'
import { getAllParkComparisonSlugs } from '@/lib/park-comparisons'
import { organization } from '@/lib/organization'

const BASE_URL = organization.url

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationSlugs = getAllDestinationSlugs()
  const parkSlugs = getAllParkSlugs()
  const guideSlugs = getAllGuideSlugs()
  const comparisonSlugs = getAllComparisonSlugs()
  const parkComparisonSlugs = getAllParkComparisonSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ski`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ski/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/gear/ski`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/gear/parks`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/parks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/parks/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const destinationPages: MetadataRoute.Sitemap = destinationSlugs.flatMap(
    (slug) => [
      {
        url: `${BASE_URL}/ski/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/ski/${slug}/hotels`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      },
      {
        url: `${BASE_URL}/ski/${slug}/weather`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/ski/${slug}/best-time-to-visit`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    ]
  )

  const comparisonPages: MetadataRoute.Sitemap = comparisonSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/ski/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  )

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const parkPages: MetadataRoute.Sitemap = parkSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/parks/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/parks/${slug}/hotels`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/parks/${slug}/weather`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/parks/${slug}/best-time-to-visit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
  ])

  const parkComparisonPages: MetadataRoute.Sitemap = parkComparisonSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/parks/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  )

  return [
    ...staticPages,
    ...destinationPages,
    ...comparisonPages,
    ...guidePages,
    ...parkPages,
    ...parkComparisonPages,
  ]
}
