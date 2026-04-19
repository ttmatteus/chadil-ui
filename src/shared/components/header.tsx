import Link from 'next/link'

export function Header() {
  return (
    <header
  className="h-[65px] bg-[#0E0E0ECC] w-full sticky top-0 z-10"
  style={{
    borderBottom: '1px solid #48484833',
    boxShadow: '0px 0px 15px 0px #81ECFF1A',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[154.63px] h-[28px] ml-[32px]">
            <Link
              href="/"
              className="font-['Inter'] font-black text-[20px] leading-[28px] tracking-[-1px] lowercase text-[#81ECFF]"
              style={{ fontStyle: 'normal', verticalAlign: 'middle' }}
            >
              chadil.ui
            </Link>
          </div>
          <div
            className="hidden md:flex items-center flex-1"
            style={{
              height: '28px',
            }}
          >
            <nav
              className="flex items-center gap-6"
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.35px',
                verticalAlign: 'middle',
              }}
            >
              <Link
                href="/"
                className="text-muted-foreground hover:text-[#81ECFF] transition-colors relative group"
              >
                Home
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#81ECFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link
                href="/introduction"
                className="text-[#81ECFF] relative transform -translate-y-[2px]"
              >
                Docs
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#81ECFF]" />
              </Link>
              <Link
                href="/components/button"
                className="text-muted-foreground hover:text-[#81ECFF] transition-colors relative group"
              >
                Components
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#81ECFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-6" style={{ marginRight: '32px' }}>
          <img src="/Icon.svg" alt="Icon" className="w-5 h-5" />
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{
              width: '99px',
              height: '36px',
              paddingTop: '6px',
              paddingRight: '16px',
              paddingBottom: '6px',
              paddingLeft: '16px',
              borderRadius: '4px',
              background: '#81ECFF',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.7px',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              textDecorationStyle: 'solid',
              textUnderlineOffset: '2px',
              textDecorationThickness: '0%',
              textDecorationSkipInk: 'auto',
              color: '#003840',
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
