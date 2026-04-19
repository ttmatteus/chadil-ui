import { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  description: ReactNode
}

export function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div
      className="flex items-start gap-4 relative overflow-hidden"
      style={{
        width: '800px',
        marginTop: '64px',
        padding: '32px',
        borderRadius: '8px',
        border: '1px solid #48484833',
        background: '#131313',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #81ECFF22 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: '#1F2A2B',
          border: '1px solid #48484844',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: '#ABABAB',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
