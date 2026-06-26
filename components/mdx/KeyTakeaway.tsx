import { ReactNode } from 'react'

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 my-6">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">🎯</span>
        <div className="text-sm text-sky-900 leading-relaxed font-medium">{children}</div>
      </div>
    </div>
  )
}
