interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <div
        className="flex items-center"
        style={{
          width: '800px',
          height: '60px',
          marginTop: '64px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '60px',
            lineHeight: '60px',
            letterSpacing: '-3px',
            verticalAlign: 'middle',
          }}
        >
          {title}
        </h1>
      </div>

      <div
        style={{
          width: '672px',
          maxWidth: '672px',
          marginTop: '24px',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '32.5px',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: '#ABABAB',
          }}
        >
          {subtitle}
        </p>
      </div>
    </>
  )
}
