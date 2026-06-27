import type { MetadataRoute } from 'next'
import { organization } from '@/lib/organization'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${organization.url}/sitemap.xml`,
  }
}
