import { ImageResponse } from 'next/og'
import { getParkComparisonBySlug } from '@/lib/park-comparisons'
import { getParkBySlug } from '@/lib/national-parks'

export const alt = 'TravelDataLab Park Comparison'
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
  const comp = getParkComparisonBySlug(slug)

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

  const dest1 = getParkBySlug(comp.destination1)
  const dest2 = getParkBySlug(comp.destination2)

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
              marginBottom: '32px',
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
              Park Comparison
            </div>
          </div>
        </div>

        {/* Center: Park names with VS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flex: 1,
          }}
        >
          {/* Park 1 */}
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
              background: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#34d399',
              }}
            >
              VS
            </div>
          </div>

          {/* Park 2 */}
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
