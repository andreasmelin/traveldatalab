'use client'

import dynamic from 'next/dynamic'
import type { Destination } from '@/lib/types'

const ResortMap = dynamic(() => import('@/components/ResortMap'), { ssr: false })

export default function ParkMapWrapper({
  destinations,
}: {
  destinations: Destination[]
}) {
  return <ResortMap destinations={destinations} />
}
