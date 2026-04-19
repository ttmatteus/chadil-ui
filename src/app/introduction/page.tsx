import { PageHeader } from './components/PageHeader'
import { InfoCard } from './components/InfoCard'
import { InstallationSection } from './components/InstallationSection'
import { NextPageNav } from './components/NextPageNav'
import { FooterVisual } from './components/FooterVisual'

const viteIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#81ECFF" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="3" />
    <line x1="12" y1="12" x2="12" y2="16" strokeLinecap="round" strokeWidth="2" />
  </svg>
)

export default function IntroductionPage() {
  return (
    <div className="bg-[#000000]" style={{ paddingLeft: '112px' }}>
      <PageHeader
        title="Introduction"
        subtitle="Beautifully designed components built with Radix UI and Tailwind CSS. Highly functional, technical primitives for the next generation of web applications."
      />

      <InfoCard
        icon={viteIcon}
        title="Vite & React Ready"
        description={
          <>
            Antigravity UI is optimized for modern build tools. We recommend using{' '}
            <code style={{ color: '#81ECFF', fontFamily: 'monospace' }}>Vite</code>
            <br />
            with{' '}
            <code style={{ color: '#81ECFF', fontFamily: 'monospace' }}>React 18+</code>{' '}
            for the best developer experience and performance.
          </>
        }
      />

      <InstallationSection />

      <NextPageNav
        label="NEXT: DOCUMENTATION"
        title="Button"
        href="/button"
      />

      <FooterVisual
        src="/Footer Visual Element.png"
        alt="Footer Visual Element"
      />
    </div>
  )
}
