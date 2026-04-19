'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Rocket, Download, Palette, MousePointerClick, TextCursor, Layers, LucideIcon, Settings, HelpCircle } from 'lucide-react'

const navItems = [
  { label: 'Introduction', href: '/introduction', icon: Rocket },
  { label: 'Installation', href: '/installation', icon: Download },
  { label: 'Themes', href: '/themes', icon: Palette },
]

const componentItems = [
  { label: 'Button', href: '/button', icon: MousePointerClick },
  { label: 'Input', href: '/input', icon: TextCursor },
  { label: 'Card', href: '/card', icon: Layers },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <aside
      className="flex flex-col"
      style={{
        width: '256px',
        height: '2015px',
        background: '#0E0E0E',
        borderRight: '1px solid #48484833',
        padding: '16px',
      }}
    >
      <div
        className="mx-auto mb-2 flex flex-col items-center"
        style={{
          width: '223px',
          height: '71px',
          paddingLeft: '8px',
          paddingRight: '8px',
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: '207px',
            height: '24px',
            marginTop: '16px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: '#81ECFF',
          }}
        >
          Documentation
        </div>
        <div
          style={{
            width: '207px',
            fontFamily: 'Space Grotesk',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '10px',
            lineHeight: '15px',
            letterSpacing: '1px',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            color: '#ABABAB99',
          }}
        >
          v1.0.4-alpha
        </div>
      </div>

      <div className="mb-8">
        <ul className="space-y-2">
          {[...navItems, ...componentItems].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2 text-sm transition-colors relative ${
                  isActive(item.href)
                    ? 'text-[#81ECFF] font-medium bg-[#1A1A1A]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-[#1A1A1A]'
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive(item.href) ? 'text-[#81ECFF]' : ''}`} />
                <span className="font-display font-bold text-sm tracking-wide uppercase">{item.label}</span>
                <span
                  className={`absolute right-0 top-0 h-full w-[2px] bg-[#81ECFF] transition-transform duration-300 origin-top group-hover:scale-y-100 ${
                    isActive(item.href) ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="mx-auto flex flex-col"
        style={{
          width: '223px',
          height: '155px',
          paddingTop: '8px',
          marginTop: 'auto',
          marginBottom: '13px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '1px',
            background: '#48484833',
            marginBottom: '8px',
          }}
        />
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Settings className="w-4 h-4" />
          <span className="font-display font-bold text-sm tracking-wide uppercase">Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          <span className="font-display font-bold text-sm tracking-wide uppercase">Support</span>
        </a>
        <button
          className="mt-4 w-full py-2 px-4 rounded border border-[#81ECFF] text-[#81ECFF] font-display font-bold text-sm tracking-wide uppercase hover:bg-[#81ECFF] hover:text-[#0E0E0E] transition-colors"
        >
          Feedback
        </button>
      </div>
    </aside>
  )
}