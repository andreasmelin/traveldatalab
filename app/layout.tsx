import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { organization } from "@/lib/organization"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://traveldatalab.com"),
  title: {
    default: "TravelDataLab — Data-Driven Travel Guides & Hotel Reviews",
    template: "%s | TravelDataLab",
  },
  description: "Find the best ski resorts, hotels, and travel gear with data-driven guides. Compare destinations, check weather, and book your next adventure.",
  keywords: ["ski resorts", "travel guides", "where to stay", "hotel reviews", "ski gear", "travel tips"],
  authors: [{ name: organization.name, url: `${organization.url}/about` }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traveldatalab.com",
    siteName: "TravelDataLab",
    title: "TravelDataLab — Data-Driven Travel Guides",
    description: "Find the best ski resorts, hotels, and travel gear with data-driven guides.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelDataLab",
    description: "Data-driven travel guides for ski resorts, hotels, and gear.",
  },
  alternates: {
    canonical: "https://traveldatalab.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: organization.name,
  url: organization.url,
  description: organization.description,
  foundingDate: String(organization.foundedYear),
  logo: `${organization.url}${organization.logo}`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: organization.email,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
