import { ReactNode } from 'react'
import { Info, AlertTriangle, CheckCircle, Lightbulb, AlertOctagon } from 'lucide-react'

type CalloutType = 'info' | 'warning' | 'success' | 'tip' | 'danger'

const config: Record<CalloutType, { icon: typeof Info; bg: string; border: string; text: string }> = {
  info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
  warning: { icon: AlertTriangle, bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  success: { icon: CheckCircle, bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
  tip: { icon: Lightbulb, bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800' },
  danger: { icon: AlertOctagon, bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
}

export function Callout({ type = 'info', children }: { type?: CalloutType; children: ReactNode }) {
  const { icon: Icon, bg, border, text } = config[type]
  return (
    <div className={`${bg} ${border} ${text} border rounded-lg p-4 my-6 flex gap-3`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}
