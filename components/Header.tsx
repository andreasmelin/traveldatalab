'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Mountain, ChevronDown, Search } from 'lucide-react'
import SearchDialog from './SearchDialog'

const skiRegions = [
  { name: 'Colorado', href: '/ski?region=Colorado' },
  { name: 'Utah', href: '/ski?region=Utah' },
  { name: 'California', href: '/ski?region=California' },
  { name: 'Montana / Wyoming', href: '/ski?region=Montana%2FWyoming' },
  { name: 'Northeast', href: '/ski?region=Northeast' },
  { name: 'Canada', href: '/ski?region=Canada' },
  { name: 'Pacific Northwest', href: '/ski?region=Pacific Northwest' },
  { name: 'Southwest', href: '/ski?region=Southwest' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [skiDropdown, setSkiDropdown] = useState(false)
  const [guidesDropdown, setGuidesDropdown] = useState(false)
  const [gearDropdown, setGearDropdown] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-slate-800 font-bold text-xl no-underline">
              <Mountain className="w-6 h-6 text-sky-600" />
              <span>TravelDataLab</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setSkiDropdown(true)}
              onMouseLeave={() => setSkiDropdown(false)}
            >
              <Link
                href="/ski"
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md no-underline transition-colors"
              >
                Destinations
                <ChevronDown className="w-4 h-4" />
              </Link>
              {skiDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50">
                  <Link href="/ski" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline font-medium">
                    Ski Resorts
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {skiRegions.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline"
                    >
                      {r.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/ski/compare" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline">
                    Compare Resorts
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/parks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline font-medium">
                    National Parks
                  </Link>
                  <Link href="/parks/compare" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline">
                    Compare Parks
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setGuidesDropdown(true)}
              onMouseLeave={() => setGuidesDropdown(false)}
            >
              <Link
                href="/guides"
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md no-underline transition-colors"
              >
                Guides
                <ChevronDown className="w-4 h-4" />
              </Link>
              {guidesDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50">
                  <Link href="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline font-medium">
                    All Guides
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/guides?category=Budget" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline">
                    Budget Guides
                  </Link>
                  <Link href="/guides?category=Travel" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline">
                    Travel Guides
                  </Link>
                  <Link href="/guides?category=Ski" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 no-underline">
                    Ski Guides
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setGearDropdown(true)}
              onMouseLeave={() => setGearDropdown(false)}
            >
              <Link
                href="/gear/ski"
                className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md no-underline transition-colors"
              >
                Gear
                <ChevronDown className="w-4 h-4" />
              </Link>
              {gearDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50">
                  <Link href="/gear/ski" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline font-medium">
                    Ski Gear
                  </Link>
                  <Link href="/gear/parks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline font-medium">
                    Hiking Gear
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-600 rounded-md no-underline transition-colors">
              About
            </Link>
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 hover:text-sky-600 rounded-lg border border-gray-200 hover:border-sky-300 transition-colors ml-2"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-xs text-gray-400">Search</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-gray-400 bg-gray-100 rounded border border-gray-200 font-mono">
                <span className="text-xs">&#8984;</span>K
              </kbd>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-700 hover:text-sky-600"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 hover:text-sky-600"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link href="/ski" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              Destinations
            </Link>
            {skiRegions.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-1.5 text-sm text-gray-500 no-underline"
              >
                {r.name}
              </Link>
            ))}
            <Link href="/parks" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              National Parks
            </Link>
            <Link href="/parks/compare" onClick={() => setMobileOpen(false)} className="block px-6 py-1.5 text-sm text-gray-500 no-underline">
              Compare Parks
            </Link>
            <Link href="/guides" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              Guides
            </Link>
            <Link href="/guides?category=Budget" onClick={() => setMobileOpen(false)} className="block px-6 py-1.5 text-sm text-gray-500 no-underline">
              Budget Guides
            </Link>
            <Link href="/guides?category=Travel" onClick={() => setMobileOpen(false)} className="block px-6 py-1.5 text-sm text-gray-500 no-underline">
              Travel Guides
            </Link>
            <Link href="/guides?category=Ski" onClick={() => setMobileOpen(false)} className="block px-6 py-1.5 text-sm text-gray-500 no-underline">
              Ski Guides
            </Link>
            <Link href="/gear/ski" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              Ski Gear
            </Link>
            <Link href="/gear/parks" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              Hiking Gear
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 no-underline">
              About
            </Link>
          </div>
        )}
      </nav>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
