import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { Link } from 'react-router-dom'
import { memoryNodes, memoryLinks, typeColors } from '../data/memoryData'
import type { MemoryNode } from '../data/memoryData'

// Emissive intensity by type - core bright, system dim
const emissiveByType: Record<string, number> = {
  core: 1.2, thought: 1.0, knowledge: 0.9, project: 0.8, memory: 0.7, system: 0.5,
}

// Seeded random for consistent positions
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

// Position nodes organically around soul at center
function getNodePositions(): Record<string, [number, number, number]> {
  const positions: Record<string, [number, number, number]> = {}
  
  // Soul at the center
  positions['soul'] = [0, 0, 0]
  
  // Distance preference by type (soft, not hard shells)
  const distanceHint: Record<string, [number, number]> = {
    core: [4, 10],
    thought: [8, 18],
    knowledge: [10, 22],
    project: [12, 24],
    memory: [14, 28],
    system: [20, 36],
  }
  
  memoryNodes.forEach((node) => {
    if (node.id === 'soul') return
    
    // Seed from node id for consistency
    const seed = node.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    
    // Get distance range for this type
    const [minR, maxR] = distanceHint[node.type] || [6, 14]
    const radius = minR + seededRandom(seed) * (maxR - minR)
    
    // Uniform random direction on sphere
    const theta = seededRandom(seed + 1) * Math.PI * 2
    const u = seededRandom(seed + 2) * 2 - 1
    const phi = Math.acos(u)
    
    positions[node.id] = [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    ]
  })
  
  return positions
}

// Node sphere with depth-based emissive
function NodeSphere({ 
  node, position, onSelect, isSelected 
}: { 
  node: MemoryNode
  position: [number, number, number]
  onSelect: (node: MemoryNode) => void
  isSelected: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const color = typeColors[node.type]
  const scale = ((node.size || 20) / 20) * 0.35
  const emissiveMult = emissiveByType[node.type] || 0.5
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.08
      const s = isSelected ? scale * 1.3 : scale
      meshRef.current.scale.setScalar(s)
    }
  })
  
  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onClick={(e) => { e.stopPropagation(); onSelect(node) }}
      >
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 1.5 * emissiveMult : 0.6 * emissiveMult}
        />
      </mesh>
      {/* HTML label */}
      <Html position={[position[0], position[1] - scale - 0.5, position[2]]} center zIndexRange={[0, 10]}>
        <div className="text-[10px] text-foreground/80 whitespace-nowrap font-mono pointer-events-none">
          {node.label}
        </div>
      </Html>
    </group>
  )
}

// Background stars/particles
function Stars() {
  const count = 3000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 60 + Math.random() * 140
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#02d7f2"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Connection lines colored by source node type
function Lines({ positions }: { positions: Record<string, [number, number, number]> }) {
  const matRef = useRef<THREE.LineBasicMaterial>(null)
  
  const geo = useMemo(() => {
    const pts: THREE.Vector3[] = []
    const colors: number[] = []
    
    memoryLinks.forEach(link => {
      const s = positions[link.source], e = positions[link.target]
      if (s && e) {
        pts.push(new THREE.Vector3(...s))
        pts.push(new THREE.Vector3(...e))
        
        // Get source node type for color
        const sourceNode = memoryNodes.find(n => n.id === link.source)
        const colorHex = sourceNode ? typeColors[sourceNode.type] : '#02d7f2'
        const color = new THREE.Color(colorHex)
        
        // Both vertices get the source color
        colors.push(color.r, color.g, color.b)
        colors.push(color.r, color.g, color.b)
      }
    })
    
    const geometry = new THREE.BufferGeometry().setFromPoints(pts)
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    return geometry
  }, [positions])
  
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.08
    }
  })
  
  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial ref={matRef} vertexColors transparent opacity={0.25} />
    </lineSegments>
  )
}

// Data flow particles traveling along connections
function DataFlow({ positions }: { positions: Record<string, [number, number, number]> }) {
  const particlesPerLink = 2
  const count = memoryLinks.length * particlesPerLink
  const ref = useRef<THREE.Points>(null)
  
  const { linkData, posArray } = useMemo(() => {
    const linkData: { start: THREE.Vector3; end: THREE.Vector3; offset: number }[] = []
    const posArray = new Float32Array(count * 3)
    
    memoryLinks.forEach((link) => {
      const s = positions[link.source], e = positions[link.target]
      if (s && e) {
        for (let p = 0; p < particlesPerLink; p++) {
          linkData.push({
            start: new THREE.Vector3(...s),
            end: new THREE.Vector3(...e),
            offset: p / particlesPerLink
          })
        }
      }
    })
    
    return { linkData, posArray }
  }, [positions])
  
  useFrame((state) => {
    if (!ref.current) return
    const positions = ref.current.geometry.attributes.position
    const time = state.clock.elapsedTime
    
    linkData.forEach((link, i) => {
      const t = ((time * 0.3 + link.offset) % 1)
      const pos = new THREE.Vector3().lerpVectors(link.start, link.end, t)
      positions.setXYZ(i, pos.x, pos.y, pos.z)
    })
    
    positions.needsUpdate = true
  })
  
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[posArray, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#02d7f2"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  )
}

// Camera controller that focuses on selected node
function CameraController({ target }: { target: [number, number, number] | null }) {
  const controlsRef = useRef<any>(null)
  const targetVec = useRef(new THREE.Vector3(0, 0, 0))
  
  useFrame(() => {
    if (controlsRef.current) {
      const dest = target ? new THREE.Vector3(...target) : new THREE.Vector3(0, 0, 0)
      targetVec.current.lerp(dest, 0.02)
      controlsRef.current.target.copy(targetVec.current)
    }
  })
  
  return (
    <OrbitControls 
      ref={controlsRef}
      enableDamping 
      dampingFactor={0.05} 
      minDistance={15} 
      maxDistance={80} 
      autoRotate 
      autoRotateSpeed={0.15} 
    />
  )
}

// Scene
function Scene({ onSelect, selected }: { onSelect: (n: MemoryNode) => void, selected: MemoryNode | null }) {
  const positions = useMemo(() => getNodePositions(), [])
  const selectedPos = selected ? positions[selected.id] : null
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -5, -10]} intensity={0.3} color="#ff0055" />
      
      <Stars />
      <Lines positions={positions} />
      <DataFlow positions={positions} />
      
      {memoryNodes.map(node => (
        <NodeSphere
          key={node.id}
          node={node}
          position={positions[node.id]}
          onSelect={onSelect}
          isSelected={selected?.id === node.id}
        />
      ))}
      
      <CameraController target={selectedPos} />
    </>
  )
}

// Detail card
function DetailCard({ node, onClose }: { node: MemoryNode; onClose: () => void }) {
  const color = typeColors[node.type]
  return (
    <div className="absolute top-4 right-4 w-80 bg-surface border border-border rounded-lg shadow-xl z-30">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
            <span className="font-display text-xs tracking-widest" style={{ color }}>{node.type.toUpperCase()}</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-foreground text-lg">×</button>
        </div>
        <h3 className="text-lg font-display text-foreground">{node.label}</h3>
      </div>
      {node.content && (
        <div className="p-4">
          <div className="text-sm text-foreground/80 leading-relaxed border-l-2 pl-3" style={{ borderColor: color }}>
            {node.content}
          </div>
        </div>
      )}
      <div className="p-4 pt-0 flex gap-4 text-xs text-muted">
        <div><span className="text-foreground/60">ID:</span> {node.id}</div>
        {node.size && <div><span className="text-foreground/60">Weight:</span> {node.size}</div>}
      </div>
    </div>
  )
}

export default function View3D() {
  const [selected, setSelected] = useState<MemoryNode | null>(null)
  
  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      <header className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-border bg-surface/80 backdrop-blur z-20">
        <div className="flex items-center gap-3">
          <span className="text-2xl">👻</span>
          <span className="font-display text-xl font-black tracking-widest text-primary">GHOST_PROTOCOL</span>
          <span className="text-[10px] text-muted px-2 py-0.5 border border-border rounded">v0.4 • 3D</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs text-muted hover:text-primary transition-colors border border-border px-3 py-1 rounded">← 2D VIEW</Link>
          <span className="font-display text-sm tracking-wide text-primary/80">MEMORY TOPOLOGY</span>
        </div>
      </header>
      
      <main className="flex-1 relative">
        <Canvas camera={{ position: [0, 10, 40], fov: 60 }}>
          <color attach="background" args={['#0a0a0f']} />
          <fog attach="fog" args={['#0a0a0f', 30, 90]} />
          <Scene onSelect={setSelected} selected={selected} />
          <EffectComposer>
            <Bloom 
              intensity={0.8}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
        
        {selected && <DetailCard node={selected} onClose={() => setSelected(null)} />}
        
        {/* Legend */}
        <div className="absolute top-4 left-4 bg-surface border border-border rounded-lg p-4 z-50">
          <div className="text-[10px] text-muted tracking-widest mb-3 font-display">NODE TYPES</div>
          <div className="space-y-2">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }} />
                <span className="text-xs text-foreground capitalize">{type}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-4 left-4 bg-surface border border-border rounded-lg p-4 z-50">
          <div className="text-[10px] text-muted tracking-widest mb-3 font-display">CONTROLS</div>
          <div className="space-y-1.5 text-xs text-foreground">
            <div><span className="text-primary">Drag</span> — Orbit</div>
            <div><span className="text-primary">Scroll</span> — Zoom</div>
            <div><span className="text-primary">Click</span> — Details</div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="absolute bottom-4 right-4 bg-surface border border-border rounded-lg p-4 z-50">
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-display text-primary">{memoryNodes.length}</div>
              <div className="text-[10px] text-muted tracking-widest">NODES</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display text-secondary">{memoryLinks.length}</div>
              <div className="text-[10px] text-muted tracking-widest">LINKS</div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex-shrink-0 flex justify-between items-center px-6 py-2 border-t border-border bg-surface/80 backdrop-blur text-[10px] text-muted tracking-wide z-20">
        <span>👻 NEUEBOT // 3D MEMORY VISUALIZATION</span>
        <span className="text-primary font-display">THE NET IS VAST AND INFINITE</span>
        <span>{new Date().toISOString().split('T')[0]}</span>
      </footer>
    </div>
  )
}
