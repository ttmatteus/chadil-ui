'use client'

interface NextPageNavProps {
  label: string
  title: string
  href: string
}

export function NextPageNav({ label, title, href }: NextPageNavProps) {
  return (
    <div
      style={{
        width: '800px',
        height: '147px',
        marginTop: '64px',
        paddingTop: '48px',
        opacity: 1,
        position: 'relative',
      }}
    >
      <a
        href={href}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '276px',
          height: '98px',
          borderRadius: '8px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          textDecoration: 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '12px',
              lineHeight: '1',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: '#ABABAB',
              margin: 0,
            }}
          >
            {label}
          </p>
          <h3
            style={{
              fontFamily: 'Inter',
              fontWeight: 900,
              fontStyle: 'normal',
              fontSize: '24px',
              lineHeight: '1',
              letterSpacing: '-0.6px',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '1px',
            border: '1px solid #48484833',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1A1A1A'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81ECFF" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  )
}
