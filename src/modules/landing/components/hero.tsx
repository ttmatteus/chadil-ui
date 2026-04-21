import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-65px)] overflow-hidden px-4 text-center">

      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(129,236,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Badge */}
      <div
        className="mb-8 flex items-center gap-2 animate-fade-in"
        style={{ animationDelay: '0ms' }}
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(14,14,14,0.8)',
            borderColor: '#81ECFF44',
            color: '#81ECFF',
            fontFamily: 'Space Grotesk',
            letterSpacing: '0.1em',
            boxShadow: '0 0 12px 0 rgba(129,236,255,0.12)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#81ECFF', boxShadow: '0 0 6px 2px rgba(129,236,255,0.5)' }}
          />
          Cyber Glow • React is now available
        </span>
      </div>

      {/* Heading */}
      <h1
        className="animate-slide-up"
        style={{
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          animationDelay: '80ms',
        }}
      >
        <span className="block text-white">Build your</span>
        <span
          className="block"
          style={{
            color: '#81ECFF',
            textShadow:
              '0 0 40px rgba(129,236,255,0.55), 0 0 80px rgba(129,236,255,0.25)',
          }}
        >
          Own history
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="mt-6 max-w-[520px] text-base leading-relaxed animate-slide-up"
        style={{
          color: '#a3a3a3',
          fontFamily: 'Inter',
          animationDelay: '160ms',
        }}
      >
        Beautifully designed, sharply coded React components built with precision
        engineering.{' '}
        <strong style={{ color: '#e5e5e5', fontWeight: 600 }}>
          Deep dark mode with an interactive cyber twist
        </strong>{' '}
        for modern technical interfaces.
      </p>

      {/* CTAs */}
      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up"
        style={{ animationDelay: '240ms' }}
      >
        {/* Primary button */}
        <Link
          href="/introduction"
          className="inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all hover:brightness-110 active:scale-[0.97]"
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '14px',
            letterSpacing: '0.1em',
            background: '#81ECFF',
            color: '#003840',
            padding: '12px 28px',
            borderRadius: '4px',
            boxShadow: '0 0 24px 0 rgba(129,236,255,0.25)',
            textDecoration: 'none',
          }}
        >
          Get Started
        </Link>

        {/* Secondary button */}
        <Link
          href="/button"
          className="inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all hover:border-[#81ECFF] hover:text-[#81ECFF] active:scale-[0.97]"
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '14px',
            letterSpacing: '0.1em',
            background: 'transparent',
            color: '#a3a3a3',
            padding: '12px 28px',
            borderRadius: '4px',
            border: '1px solid #484848',
            textDecoration: 'none',
          }}
        >
          Browse Components
        </Link>
      </div>
    </section>
  )
}
