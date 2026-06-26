import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'TravelDataLab terms of service governing use of our website, content, and affiliate links.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
}

export default function TermsOfServicePage() {
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
          <li className="font-medium text-gray-900">Terms of Service</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-gray prose-headings:text-gray-900 max-w-none text-gray-700">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the TravelDataLab website at
              traveldatalab.com (the &quot;Site&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to
              these Terms, please do not use the Site. We reserve the right to
              modify these Terms at any time, and your continued use of the
              Site constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              2. Description of Service
            </h2>
            <p className="leading-relaxed">
              TravelDataLab provides informational content including ski resort
              guides, hotel recommendations, gear reviews, destination
              comparisons, and travel advice. Our content is provided for
              informational purposes only and should not be considered
              professional travel advice. We strive for accuracy but do not
              guarantee that all information on the Site is complete, current,
              or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              3. Affiliate Links and Third-Party Content
            </h2>
            <p className="leading-relaxed mb-3">
              The Site contains affiliate links to third-party websites and
              services, including but not limited to hotel booking platforms
              (such as Hotels.com) and retail partners. When you click on an
              affiliate link and make a purchase or booking, TravelDataLab may
              earn a commission at no additional cost to you.
            </p>
            <p className="leading-relaxed mb-3">
              We are not responsible for the content, accuracy, privacy
              practices, or availability of third-party websites. Your
              interactions with third-party websites are governed by their
              respective terms and conditions. We encourage you to review the
              terms of any third-party site before making a purchase or
              providing personal information.
            </p>
            <p className="leading-relaxed">
              Prices, availability, and other details displayed on our Site for
              third-party products and services are provided for informational
              purposes and may not reflect the most current information. Always
              verify pricing and availability on the third-party website before
              making a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed mb-3">
              All content on the Site, including text, graphics, data,
              comparisons, guides, and design elements, is the property of
              TravelDataLab and is protected by copyright and other
              intellectual property laws. You may not reproduce, distribute,
              modify, or create derivative works from our content without prior
              written permission.
            </p>
            <p className="leading-relaxed">
              You may share links to our pages and quote brief excerpts for
              non-commercial purposes, provided you include proper attribution
              and a link back to the original content on traveldatalab.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">5. User Conduct</h2>
            <p className="leading-relaxed mb-3">
              When using the Site, you agree not to:
            </p>
            <ul className="space-y-2">
              <li>
                Use the Site for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site
                or its systems.
              </li>
              <li>
                Use automated tools, bots, or scrapers to access or collect
                data from the Site without our express written permission.
              </li>
              <li>
                Interfere with or disrupt the operation of the Site or servers.
              </li>
              <li>
                Reproduce, duplicate, or exploit any portion of the Site for
                commercial purposes without permission.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p className="leading-relaxed mb-3">
              The Site and all content are provided &quot;as is&quot; and
              &quot;as available&quot; without warranties of any kind, either
              express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="leading-relaxed">
              TravelDataLab does not warrant that the Site will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. We do not guarantee the accuracy, completeness, or
              timeliness of any information on the Site, including resort
              statistics, weather data, hotel pricing, or gear specifications.
              Conditions at ski resorts can change rapidly and without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, TravelDataLab and its
              owners, employees, and affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of or inability to use the Site, any
              content on the Site, or any actions taken based on information
              provided on the Site. This includes, without limitation, damages
              for lost profits, travel expenses, personal injury, or property
              damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">8. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless TravelDataLab, its
              owners, employees, and affiliates from any claims, damages,
              losses, or expenses (including reasonable legal fees) arising from
              your use of the Site, violation of these Terms, or infringement
              of any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">9. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to conflict of law
              principles. Any disputes arising from these Terms or your use of
              the Site shall be resolved in the courts of competent
              jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3">10. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">11. Contact</h2>
            <p className="leading-relaxed">
              If you have questions about these Terms of Service, please
              contact us at{' '}
              <a
                href="mailto:legal@traveldatalab.com"
                className="text-sky-600"
              >
                legal@traveldatalab.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
