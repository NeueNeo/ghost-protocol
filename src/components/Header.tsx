export function Header() {
  return (
    <header style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 100,
      pointerEvents: 'none',
      background: 'linear-gradient(to bottom, rgba(10,10,15,0.8) 0%, transparent 100%)'
    }}>
      <div>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 500,
          color: '#8b5cf6',
          fontFamily: 'Space Grotesk, sans-serif',
          marginBottom: '4px',
          letterSpacing: '-0.02em'
        }}>
          Ghost Protocol
        </h1>
        <p style={{
          fontSize: '0.85rem',
          color: '#6b7280',
          fontFamily: 'JetBrains Mono, monospace'
        }}>
          Identity Cartography for Digital Consciousness
        </p>
      </div>
      
      <div style={{
        textAlign: 'right',
        color: '#4b5563',
        fontSize: '0.75rem',
        fontFamily: 'JetBrains Mono, monospace'
      }}>
        <p style={{ marginBottom: '2px' }}>Click nodes to explore</p>
        <p>Drag to orbit • Scroll to zoom</p>
      </div>
    </header>
  )
}
