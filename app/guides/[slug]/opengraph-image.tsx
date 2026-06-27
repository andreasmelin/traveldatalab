import { ImageResponse } from 'next/og'
import { getGuideBySlug } from '@/lib/guides'

export const alt = 'TravelDataLab Guide'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
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
          {/* Category badge and read time */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#0284c7',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                background: 'rgba(14, 165, 233, 0.15)',
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(14, 165, 233, 0.3)',
              }}
            >
              {guide.metadata.category}
            </div>
            <div
              style={{
                fontSize: 16,
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {guide.metadata.readTime}
            </div>
          </div>

          {/* Guide title */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              maxWidth: '1000px',
            }}
          >
            {guide.metadata.title}
          </div>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
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
                fontSize: 22,
                fontWeight: 700,
                color: '#64748b',
              }}
            >
              TravelDataLab
            </div>
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#475569',
            }}
          >
            traveldatalab.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
