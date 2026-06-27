import { ImageResponse } from 'next/og'
import { getComparisonBySlug } from '@/lib/comparisons'
import { getDestinationBySlug } from '@/lib/destinations'

export const alt = 'TravelDataLab Resort Comparison'
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
  const comp = getComparisonBySlug(slug)

  if (!comp) {
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

  const dest1 = getDestinationBySlug(comp.destination1)
  const dest2 = getDestinationBySlug(comp.destination2)

  const name1 = dest1?.name ?? comp.destination1
  const name2 = dest2?.name ?? comp.destination2

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
              marginBottom: '32px',
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
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
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
              Resort Comparison
            </div>
          </div>
        </div>

        {/* Center: Resort names with VS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flex: 1,
          }}
        >
          {/* Resort 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              {name1}
            </div>
            {dest1 && (
              <div
                style={{
                  fontSize: 18,
                  color: '#94a3b8',
                  marginTop: '8px',
                }}
              >
                {dest1.state}
              </div>
            )}
          </div>

          {/* VS badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(14, 165, 233, 0.2)',
              border: '2px solid rgba(14, 165, 233, 0.4)',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#38bdf8',
              }}
            >
              VS
            </div>
          </div>

          {/* Resort 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              {name2}
            </div>
            {dest2 && (
              <div
                style={{
                  fontSize: 18,
                  color: '#94a3b8',
                  marginTop: '8px',
                }}
              >
                {dest2.state}
              </div>
            )}
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
