export default function ThemesPage() {
  return (
    <div className="bg-[#000000]" style={{ paddingLeft: '112px' }}>
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
          Themes
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
          Customize the look and feel of your application with our theming system.
        </p>
      </div>
    </div>
  )
}
