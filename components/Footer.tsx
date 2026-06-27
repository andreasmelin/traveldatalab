import Link from 'next/link'
import { Mountain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg no-underline mb-3">
              <Mountain className="w-5 h-5 text-sky-400" />
              TravelDataLab
            </Link>
            <p className="text-sm text-gray-400">
              Data-driven travel guides to help you find the best destinations, hotels, and gear for your next adventure.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Ski Resorts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ski?region=Colorado" className="text-gray-400 hover:text-white no-underline transition-colors">Colorado</Link></li>
              <li><Link href="/ski?region=Utah" className="text-gray-400 hover:text-white no-underline transition-colors">Utah</Link></li>
              <li><Link href="/ski?region=California" className="text-gray-400 hover:text-white no-underline transition-colors">California</Link></li>
              <li><Link href="/ski?region=Northeast" className="text-gray-400 hover:text-white no-underline transition-colors">Northeast</Link></li>
              <li><Link href="/ski?region=Canada" className="text-gray-400 hover:text-white no-underline transition-colors">Canada</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-gray-400 hover:text-white no-underline transition-colors">Travel Guides</Link></li>
              <li><Link href="/gear/ski" className="text-gray-400 hover:text-white no-underline transition-colors">Ski Gear</Link></li>
              <li><Link href="/guides/best-ski-goggles-2026" className="text-gray-400 hover:text-white no-underline transition-colors">Gear Guides</Link></li>
              <li><Link href="/ski/compare" className="text-gray-400 hover:text-white no-underline transition-colors">Compare Resorts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white no-underline transition-colors">About</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white no-underline transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white no-underline transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} DataLabGroup. All rights reserved.</p>
            <p className="text-xs text-gray-600">
              Affiliate disclosure: We may earn commissions from qualifying purchases through our links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
