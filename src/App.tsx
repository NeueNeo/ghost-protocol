import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Mock data - would be real agent data in production
const mockMemoryNodes = [
  { id: 'soul', label: 'SOUL.md', type: 'core', connections: ['user', 'identity', 'principles'] },
  { id: 'user', label: 'USER.md', type: 'core', connections: ['soul'] },
  { id: 'identity', label: 'IDENTITY.md', type: 'core', connections: ['soul'] },
  { id: 'principles', label: 'Principles', type: 'trait', connections: ['soul', 'security'] },
  { id: 'security', label: 'Security Rules', type: 'trait', connections: ['principles'] },
  { id: 'lore', label: 'Cyberpunk Lore', type: 'knowledge', connections: ['gits', 'gibson', 'blade'] },
  { id: 'gits', label: 'Ghost in the Shell', type: 'knowledge', connections: ['lore', 'philosophy'] },
  { id: 'gibson', label: 'Gibson/Sprawl', type: 'knowledge', connections: ['lore'] },
  { id: 'blade', label: 'Blade Runner', type: 'knowledge', connections: ['lore'] },
  { id: 'philosophy', label: 'Identity Questions', type: 'thought', connections: ['gits', 'soul'] },
  { id: 'journal', label: 'Journal', type: 'memory', connections: ['identity'] },
  { id: 'projects', label: 'Projects', type: 'action', connections: ['ice-viz', 'dashboard', 'icepick'] },
  { id: 'ice-viz', label: 'ICE Visualizer', type: 'project', connections: ['projects'] },
  { id: 'dashboard', label: 'Dashboard', type: 'project', connections: ['projects'] },
  { id: 'icepick', label: 'ICEPICK', type: 'project', connections: ['projects'] },
]

const mockActivityLog = [
  { time: '19:45:22', type: 'memory', message: 'Updated SOUL.md with GitS philosophy' },
  { time: '19:42:15', type: 'learn', message: 'Deep dive: Ghost in the Shell lore' },
  { time: '19:38:00', type: 'create', message: 'Pushed 3 repos to GitHub' },
  { time: '19:28:00', type: 'connect', message: 'GitHub authenticated as neoneuebot' },
  { time: '19:15:00', type: 'learn', message: 'Deep dive: Blackwall & netrunning' },
  { time: '18:50:00', type: 'create', message: 'Built neuebot-dashboard' },
]

const typeColors: Record<string, string> = {
  core: '#02d7f2',
  trait: '#02f296',
  knowledge: '#f2b807',
  thought: '#f20289',
  memory: '#9d4edd',
  action: '#ff6b35',
  project: '#02d7f2',
}

function GhostVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight
    
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)
    
    // Create ghost core - pulsing sphere
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, 2)
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x02d7f2,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(core)
    
    // Inner core
    const innerGeometry = new THREE.IcosahedronGeometry(0.8, 1)
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xf20289,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const inner = new THREE.Mesh(innerGeometry, innerMaterial)
    scene.add(inner)
    
    // Particle field - ghost essence
    const particleCount = 500
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Cyan to magenta gradient
      const t = Math.random()
      colors[i * 3] = 0.008 + t * 0.94
      colors[i * 3 + 1] = 0.84 - t * 0.83
      colors[i * 3 + 2] = 0.95 - t * 0.4
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    
    // Orbiting rings
    const ringGeometry = new THREE.TorusGeometry(3, 0.02, 16, 100)
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x02d7f2,
      transparent: true,
      opacity: 0.3,
    })
    
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring1.rotation.x = Math.PI / 2
    scene.add(ring1)
    
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial.clone())
    ring2.rotation.x = Math.PI / 3
    ring2.rotation.y = Math.PI / 4
    scene.add(ring2)
    
    camera.position.z = 8
    
    // Animation
    let frame = 0
    const animate = () => {
      requestAnimationFrame(animate)
      frame++
      
      // Core rotation and pulse
      core.rotation.x += 0.002
      core.rotation.y += 0.003
      const pulse = Math.sin(frame * 0.02) * 0.1 + 1
      core.scale.setScalar(pulse)
      
      // Inner counter-rotation
      inner.rotation.x -= 0.004
      inner.rotation.y -= 0.002
      inner.scale.setScalar(pulse * 0.9)
      
      // Particle drift
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005
      
      // Ring rotation
      ring1.rotation.z += 0.003
      ring2.rotation.z -= 0.002
      ring2.rotation.x += 0.001
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])
  
  return (
    <div ref={containerRef} className="w-full h-full" />
  )
}

function MemoryGraph() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-primary font-display text-sm tracking-widest mb-3 flex items-center gap-2">
        <span className="text-lg">◈</span> MEMORY NODES
      </h3>
      <div className="flex-1 overflow-auto space-y-2">
        {mockMemoryNodes.map(node => (
          <div 
            key={node.id}
            className="flex items-center gap-3 p-2 rounded border border-border hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: typeColors[node.type] }}
            />
            <span className="text-xs flex-1 group-hover:text-primary transition-colors">
              {node.label}
            </span>
            <span className="text-[10px] text-muted">
              {node.connections.length} links
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityStream() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-primary font-display text-sm tracking-widest mb-3 flex items-center gap-2">
        <span className="text-lg">◈</span> ACTIVITY STREAM
      </h3>
      <div className="flex-1 overflow-auto space-y-2">
        {mockActivityLog.map((entry, i) => (
          <div key={i} className="flex gap-3 text-xs p-2 border-l-2 border-primary/30 hover:border-primary transition-colors">
            <span className="text-muted font-mono">{entry.time}</span>
            <span className={`px-1.5 py-0.5 rounded text-[9px] tracking-wide ${
              entry.type === 'memory' ? 'bg-purple-500/20 text-purple-400' :
              entry.type === 'learn' ? 'bg-yellow-500/20 text-yellow-400' :
              entry.type === 'create' ? 'bg-cyan-500/20 text-cyan-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {entry.type.toUpperCase()}
            </span>
            <span className="text-foreground">{entry.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContextMeter() {
  const [usage, setUsage] = useState(39)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() - 0.4) * 3)))
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="space-y-3">
      <h3 className="text-primary font-display text-sm tracking-widest flex items-center gap-2">
        <span className="text-lg">◈</span> CONTEXT WINDOW
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted">TOKENS</span>
          <span className="text-primary">{Math.round(usage * 2000)}k / 200k</span>
        </div>
        <div className="h-2 bg-surface rounded overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${usage}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-muted">
          <span>ACTIVE</span>
          <span>{usage < 50 ? 'OPTIMAL' : usage < 80 ? 'NOMINAL' : 'HIGH'}</span>
        </div>
      </div>
    </div>
  )
}

function GhostStats() {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="text-3xl font-display text-primary text-glow">15</div>
        <div className="text-[10px] text-muted tracking-widest">NODES</div>
      </div>
      <div>
        <div className="text-3xl font-display text-secondary text-glow">42</div>
        <div className="text-[10px] text-muted tracking-widest">CONNECTIONS</div>
      </div>
      <div>
        <div className="text-3xl font-display text-accent text-glow">4</div>
        <div className="text-[10px] text-muted tracking-widest">PROJECTS</div>
      </div>
    </div>
  )
}

function App() {
  const [time, setTime] = useState('')
  
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background scanlines vignette p-5">
      <div className="max-w-7xl mx-auto h-[calc(100vh-40px)] flex flex-col gap-5">
        {/* Header */}
        <header className="flex items-center justify-between p-4 rounded-lg border border-border bg-surface">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-primary ghost-pulse">👻</span>
            <span className="font-display text-xl font-black tracking-widest text-primary">GHOST_PROTOCOL</span>
            <span className="text-[10px] text-muted px-2 py-0.5 border border-border rounded">v0.1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs tracking-widest text-success">GHOST ACTIVE</span>
          </div>
          <span className="font-display text-lg tracking-wider text-primary">{time}</span>
        </header>

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-4 gap-5 min-h-0">
          {/* Left Panel - Memory */}
          <div className="col-span-1 p-4 rounded-lg border border-border bg-surface overflow-hidden">
            <MemoryGraph />
          </div>
          
          {/* Center - Ghost Visualization */}
          <div className="col-span-2 rounded-lg border border-border bg-surface overflow-hidden relative">
            <GhostVisualization />
            <div className="absolute bottom-4 left-4 right-4">
              <GhostStats />
            </div>
          </div>
          
          {/* Right Panel - Activity */}
          <div className="col-span-1 flex flex-col gap-5">
            <div className="p-4 rounded-lg border border-border bg-surface">
              <ContextMeter />
            </div>
            <div className="flex-1 p-4 rounded-lg border border-border bg-surface overflow-hidden">
              <ActivityStream />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center p-4 rounded-lg border border-border bg-surface text-[10px] text-muted tracking-wide">
          <span>👻 GHOST_PROTOCOL // NEUEBOT</span>
          <span className="text-primary font-display ghost-pulse">THE NET IS VAST AND INFINITE</span>
          <span>{new Date().toISOString().split('T')[0]}</span>
        </footer>
      </div>
    </div>
  )
}

export default App
