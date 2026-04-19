import { CodeBlock } from './CodeBlock'

export function InstallationSection() {
  return (
    <div
      style={{
        maxWidth: '800px',
        height: '506px',
        marginTop: '64px',
        paddingBottom: '32px',
        borderRadius: '8px',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <div
        style={{
          padding: '24px 0px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div style={{ width: '32px', height: '2px', background: '#81ECFF' }} />
        <h2
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}
        >
          Installation
        </h2>
      </div>

      <div style={{ paddingRight: '32px' }}>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#ABABAB',
          }}
        >
          Add the components to your project by importing the specific primitive you need. Our system is tree-shakeable by default.
        </p>
      </div>

      <CodeBlock filename="APP.TSX">
        <span style={{ color: '#AC89FF' }}>import</span>
        <span style={{ color: '#FFFFFF' }}> {'{ '}</span>
        <span style={{ color: '#81ECFF' }}>Button</span>
        <span style={{ color: '#FFFFFF' }}>, </span>
        <span style={{ color: '#81ECFF' }}>Container</span>
        <span style={{ color: '#FFFFFF' }}>{' }'} </span>
        <span style={{ color: '#AC89FF' }}>from</span>
        <span style={{ color: '#FFFFFF' }}> &quot;@antigravity/ui&quot;;</span>
        {'\n'}
        <span style={{ color: '#484848' }}>{'// Example usage'}</span>
        {'\n'}
        <span style={{ color: '#AC89FF' }}>export</span>
        <span style={{ color: '#FFFFFF' }}> </span>
        <span style={{ color: '#AC89FF' }}>default</span>
        <span style={{ color: '#FFFFFF' }}> </span>
        <span style={{ color: '#AC89FF' }}>function</span>
        <span style={{ color: '#FFFFFF' }}> </span>
        <span style={{ color: '#81ECFF' }}>App</span>
        <span style={{ color: '#FFFFFF' }}>{'() {'}</span>
        {'\n'}
        {'  '}
        <span style={{ color: '#AC89FF' }}>return</span>
        <span style={{ color: '#FFFFFF' }}> {'('}</span>
        {'\n'}
        {'    '}
        <span style={{ color: '#FFFFFF' }}>{'<'}</span>
        <span style={{ color: '#81ECFF' }}>Container</span>
        <span style={{ color: '#FFFFFF' }}>{'>'}</span>
        {'\n'}
        {'      '}
        <span style={{ color: '#FFFFFF' }}>{'<'}</span>
        <span style={{ color: '#81ECFF' }}>Button</span>
        <span style={{ color: '#FFFFFF' }}> variant=&quot;neon&quot;&gt;Deploy</span>
        <span style={{ color: '#FFFFFF' }}>{'</'}</span>
        <span style={{ color: '#81ECFF' }}>Button</span>
        <span style={{ color: '#FFFFFF' }}>{'>'}</span>
        {'\n'}
        {'    '}
        <span style={{ color: '#FFFFFF' }}>{'</'}</span>
        <span style={{ color: '#81ECFF' }}>Container</span>
        <span style={{ color: '#FFFFFF' }}>{'>'}</span>
        {'\n'}
        {'  '}
        <span style={{ color: '#FFFFFF' }}>{')'}</span>
        {'\n'}
        <span style={{ color: '#FFFFFF' }}>{'}'}</span>
      </CodeBlock>
    </div>
  )
}
