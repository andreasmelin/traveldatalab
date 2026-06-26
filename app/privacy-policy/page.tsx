import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'TravelDataLab privacy policy covering data collection, cookies, analytics, and affiliate disclosures.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
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
          <li className="font-medium text-gray-900">Privacy Policy</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-gray prose-headings:text-gray-900 max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              TravelDataLab (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              operates the website traveldatalab.com (the &quot;Site&quot;). This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our Site. Please read
              this policy carefully. By using the Site, you consent to the data
              practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-3">
              We do not require you to create an account or provide personal
              information to use our Site. However, we may automatically collect
              certain information when you visit, including:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on
                pages, referring URLs, browser type, device type, and operating
                system.
              </li>
              <li>
                <strong>IP Address:</strong> Your IP address may be collected
                for analytics and security purposes. We do not use IP addresses
                to personally identify you.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use
                cookies and similar tracking technologies to analyze trends,
                administer the Site, and gather demographic information. See
                Section 4 for details.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              3. Analytics
            </h2>
            <p className="leading-relaxed mb-3">
              We use <strong>Vercel Analytics</strong> to understand how
              visitors interact with our Site. Vercel Analytics collects
              anonymous usage data including page views, visitor counts, and
              performance metrics. This data is aggregated and does not include
              personally identifiable information.
            </p>
            <p className="leading-relaxed">
              Vercel Analytics is designed to be privacy-friendly and compliant
              with privacy regulations. For more information about how Vercel
              handles data, please visit{' '}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600"
              >
                Vercel&apos;s Analytics Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">4. Cookies</h2>
            <p className="leading-relaxed mb-3">
              Cookies are small text files stored on your device when you visit
              a website. We use the following types of cookies:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the Site to
                function properly. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our Site so we can improve content and user
                experience.
              </li>
              <li>
                <strong>Affiliate Cookies:</strong> Our affiliate partners
                (including Hotels.com) may set cookies when you click on affiliate
                links to track referrals and attribute commissions. These
                cookies are governed by the respective affiliate
                partner&apos;s privacy policy.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can control cookies through your browser settings. Note that
              disabling certain cookies may affect Site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              5. Affiliate Links and Third-Party Services
            </h2>
            <p className="leading-relaxed mb-3">
              TravelDataLab participates in affiliate programs, including the
              Hotels.com affiliate program. When you click on an affiliate link
              on our Site and make a purchase or booking, we may earn a
              commission.
            </p>
            <p className="leading-relaxed mb-3">
              Affiliate links redirect you to third-party websites that have
              their own privacy policies and data collection practices. We are
              not responsible for the privacy practices of these third-party
              sites. We encourage you to review the privacy policies of any
              third-party site you visit through our links.
            </p>
            <p className="leading-relaxed">
              Our affiliate partnerships do not influence our editorial content
              or recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">6. Data Security</h2>
            <p className="leading-relaxed">
              We use commercially reasonable measures to protect the information
              we collect. Our Site is served over HTTPS, and we follow industry
              best practices for web security. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              Our Site is not directed to individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you believe we have inadvertently collected such
              information, please contact us so we can promptly delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              8. Your Rights
            </h2>
            <p className="leading-relaxed">
              Depending on your jurisdiction, you may have certain rights
              regarding your personal data, including the right to access,
              correct, delete, or restrict processing of your information. To
              exercise these rights, please contact us at{' '}
              <a
                href="mailto:privacy@traveldatalab.com"
                className="text-sky-600"
              >
                privacy@traveldatalab.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              9. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date. Your continued use of the Site after changes
              are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or concerns about this Privacy Policy,
              please contact us at{' '}
              <a
                href="mailto:privacy@traveldatalab.com"
                className="text-sky-600"
              >
                privacy@traveldatalab.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
