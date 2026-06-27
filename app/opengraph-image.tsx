import { ImageResponse } from 'next/og'

export const alt = 'TravelDataLab - Data-Driven Ski Resort Guides'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 50%, #0f172a 100%)',
          padding: '60px',
        }}
      >
        {/* Mountain icon accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <svg
            width="64"
            height="64"
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
        </div>

        {/* Logo text */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: '12px',
          }}
        >
          TravelDataLab
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            marginBottom: '40px',
          }}
        >
          Data-Driven Ski Resort Guides
        </div>

        {/* Divider */}
        <div
          style={{
            width: '120px',
            height: '4px',
            background: '#0ea5e9',
            borderRadius: '2px',
            marginBottom: '40px',
          }}
        />

        {/* Stats line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: '#38bdf8' }}>30</div>
            <div style={{ fontSize: 22, color: '#cbd5e1' }}>Resorts</div>
          </div>
          <div style={{ fontSize: 28, color: '#475569' }}>&#x2022;</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: '#38bdf8' }}>97</div>
            <div style={{ fontSize: 22, color: '#cbd5e1' }}>Hotels</div>
          </div>
          <div style={{ fontSize: 28, color: '#475569' }}>&#x2022;</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: '#38bdf8' }}>5</div>
            <div style={{ fontSize: 22, color: '#cbd5e1' }}>Regions</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
