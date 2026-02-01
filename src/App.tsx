import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { ConceptMap } from './components/ConceptMap'
import { InfoPanel } from './components/InfoPanel'
import { Header } from './components/Header'
import { concepts, type Concept } from './data/concepts'

export default function App() {
  const [selected, setSelected] = useState<Concept | null>(null)
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Header />
      
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: '#0a0a0f' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />
        
        <ConceptMap 
          concepts={concepts} 
          onSelect={setSelected}
          selected={selected}
        />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={40}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
      
      <InfoPanel concept={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
