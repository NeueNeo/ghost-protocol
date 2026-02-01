import { motion, AnimatePresence } from 'framer-motion'
import { type Concept } from '../data/concepts'

interface InfoPanelProps {
  concept: Concept | null
  onClose: () => void
}

export function InfoPanel({ concept, onClose }: InfoPanelProps) {
  return (
    <AnimatePresence>
      {concept && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '80px',
            right: '20px',
            width: '400px',
            maxHeight: 'calc(100vh - 100px)',
            background: 'linear-gradient(135deg, rgba(17, 17, 24, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%)',
            border: `1px solid ${concept.color}33`,
            borderRadius: '12px',
            padding: '24px',
            overflow: 'auto',
            backdropFilter: 'blur(10px)',
            boxShadow: `0 0 40px ${concept.color}15`
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '6px',
              color: '#6b7280',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = concept.color
              e.currentTarget.style.color = concept.color
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#6b7280'
            }}
          >
            ×
          </button>

          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: concept.color,
              marginBottom: '6px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              {concept.title}
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {concept.subtitle}
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, ${concept.color}44, transparent)`,
            marginBottom: '20px'
          }} />

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {concept.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#d1d5db',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Connections */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{
              fontSize: '0.75rem',
              color: '#6b7280',
              marginBottom: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Connected to
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {concept.connections.map(conn => (
                <span
                  key={conn}
                  style={{
                    padding: '4px 10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: '#9ca3af',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}
                >
                  {conn}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
