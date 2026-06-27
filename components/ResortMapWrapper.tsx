'use client'

import dynamic from 'next/dynamic'
import type { SkiDestination } from '@/lib/types'

const ResortMap = dynamic(() => import('@/components/ResortMap'), { ssr: false })

export default function ResortMapWrapper({
  destinations,
}: {
  destinations: SkiDestination[]
}) {
  return <ResortMap destinations={destinations} />
}
