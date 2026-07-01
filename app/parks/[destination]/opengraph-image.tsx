import { ImageResponse } from 'next/og'
import { getParkBySlug } from '@/lib/national-parks'

export const alt = 'TravelDataLab National Park Guide'
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
  const park = getParkBySlug(slug)

  if (!park) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #0f172a 100%)',
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
          background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #0f172a 100%)',
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
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 14h2l-4-7-3 5-3-5-4 7h2l-2 6h14z" />
              <path d="M12 22v-8" />
            </svg>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              National Park Guide
            </div>
          </div>

          {/* Park name */}
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
            {park.name}
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 22,
              color: '#94a3b8',
              marginBottom: '8px',
            }}
          >
            {park.state}, {park.country === 'US' ? 'USA' : park.country}
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
                {park.acreage.toLocaleString()}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Acreage
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
                {park.numberOfTrails}
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
                {park.established}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Established
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
                {park.annualVisitors}
              </div>
              <div style={{ fontSize: 14, color: '#94a3b8', marginTop: '4px' }}>
                Annual Visitors
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
              Data-Driven National Park Guides
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
