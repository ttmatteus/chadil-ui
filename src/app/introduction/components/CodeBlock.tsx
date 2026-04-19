'use client'

import { useState, ReactNode } from 'react'

interface CodeBlockProps {
  filename: string
  children: ReactNode
}

export function CodeBlock({ filename, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const code = extractText(children)
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        maxWidth: '800px',
        height: '338px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid rgba(72, 72, 72, 0.2)',
        opacity: 1,
      }}
    >
      <div
        style={{
          height: '33px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '25px',
          marginLeft: '25px',
          marginRight: '25px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(72, 72, 72, 0.1)',
          opacity: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            color: 'rgba(171, 171, 171, 0.4)',
            letterSpacing: '0.05em',
          }}
        >
          {filename}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: copied ? '#81ECFF' : '#ABABAB',
            padding: '2px',
          }}
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      <div style={{ padding: '20px 0px 20px 25px' }}>
        <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px', lineHeight: '22px' }}>
          {children}
        </pre>
      </div>
    </div>
  )
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText(node.props.children)
  }
  return ''
}
