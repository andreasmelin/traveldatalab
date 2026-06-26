import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Guide } from '@/lib/types'

const categoryColors: Record<string, string> = {
  Ski: 'bg-sky-100 text-sky-700',
  Gear: 'bg-amber-100 text-amber-700',
  Travel: 'bg-emerald-100 text-emerald-700',
  Budget: 'bg-violet-100 text-violet-700',
  Tips: 'bg-rose-100 text-rose-700',
}

export default function GuideCard({ guide }: { guide: Guide }) {
  const colorClass = categoryColors[guide.metadata.category] || 'bg-gray-100 text-gray-700'

  return (
    <Link
      href={`/guides/${guide.metadata.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all no-underline overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${colorClass}`}>
            {guide.metadata.category}
          </span>
          {guide.metadata.region && (
            <span className="text-xs text-gray-400">{guide.metadata.region}</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-2 line-clamp-2">
          {guide.metadata.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {guide.metadata.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {guide.metadata.readTime}
          </div>
          <div className="flex items-center gap-1 text-sky-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read guide <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
