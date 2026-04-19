interface FooterVisualProps {
  src: string
  alt: string
}

export function FooterVisual({ src, alt }: FooterVisualProps) {
  return (
    <div
      style={{
        width: '800px',
        height: '320px',
        marginTop: '64px',
        borderRadius: '16px',
        opacity: 1,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, #0E0E0E 0%, rgba(14, 14, 14, 0) 50%, rgba(14, 14, 14, 0) 100%)',
        }}
      />
    </div>
  )
}
