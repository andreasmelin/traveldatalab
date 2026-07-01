'use client'

import dynamic from 'next/dynamic'
import type { NationalParkDestination } from '@/lib/types'

const ParkDetailMap = dynamic(() => import('@/components/ParkDetailMap'), { ssr: false })

export default function ParkDetailMapWrapper({ park }: { park: NationalParkDestination }) {
  return <ParkDetailMap park={park} />
}
