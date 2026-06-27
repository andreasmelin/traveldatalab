import { ImageResponse } from 'next/og'
import { getDestinationBySlug } from '@/lib/destinations'

export const alt = 'TravelDataLab Ski Resort Guide'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)

  if (!dest) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 50%, #0f172a 100%)',
            color: 'white',
            fontSize: 48,
          }}
        >
          TravelDataLab
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 50%, #0f172a 100%)',
          padding: '60px',
        }}
      >
        {/* Top section */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Category label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              <path d="m4.14 15.08 2.86-2.86L9.86 15.08" />
            </svg>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#38bdf8',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Ski Resort Guide
            </div>
          </div>

          {/* Resort name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '12px',
              letterSpacing: '-1px',
            }}
          >
            {dest.name}
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 22,
              color: '#94a3b8',
              marginBottom: '8px',
            }}
          >
            {dest.state}, {dest.country === 'US' ? 'USA' : dest.country}
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px 28px',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>
                {dest.skiableAcres.toLocaleString()}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Skiable Acres
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px 28px',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>
                {dest.verticalDrop.toLocaleString()}&apos;
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Vertical Drop
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px 28px',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>
                {dest.numberOfTrails}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Trails
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px 28px',
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: 'white' }}>
                {dest.snowfall.replace(/ annually/i, '')}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Annual Snowfall
              </div>
            </div>
          </div>

          {/* Branding footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#64748b',
              }}
            >
              traveldatalab.com
            </div>
            <div
              style={{
                fontSize: 16,
                color: '#475569',
              }}
            >
              Data-Driven Ski Resort Guides
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
