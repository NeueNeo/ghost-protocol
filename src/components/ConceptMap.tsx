import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Line } from '@react-three/drei'
import * as THREE from 'three'
import { type Concept } from '../data/concepts'

interface ConceptMapProps {
  concepts: Concept[]
  onSelect: (concept: Concept) => void
  selected: Concept | null
}

function ConceptNode({ 
  concept, 
  onSelect, 
  isSelected 
}: { 
  concept: Concept
  onSelect: (concept: Concept) => void
  isSelected: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = concept.position[1] + Math.sin(state.clock.elapsedTime + concept.position[0]) * 0.1
    }
    if (glowRef.current) {
      const scale = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      glowRef.current.scale.setScalar(isSelected ? scale * 1.3 : scale)
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group position={concept.position}>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial 
          color={concept.color} 
          transparent 
          opacity={isSelected ? 0.15 : 0.08}
        />
      </mesh>
      
      {/* Rotating ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.3, 0.02, 16, 64]} />
        <meshBasicMaterial color={concept.color} transparent opacity={0.4} />
      </mesh>
      
      {/* Core */}
      <mesh 
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(concept)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default'
        }}
      >
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial 
          color={concept.color}
          emissive={concept.color}
          emissiveIntensity={isSelected ? 0.8 : 0.3}
          wireframe
        />
      </mesh>
      
      {/* Label */}
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.4}
        color={concept.color}
        anchorX="center"
        anchorY="top"
        outlineWidth={0.02}
        outlineColor="#0a0a0f"
      >
        {concept.title}
      </Text>
    </group>
  )
}

function ConnectionLines({ concepts }: { concepts: Concept[] }) {
  const lines = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number]; color: string }[] = []
    const processed = new Set<string>()
    
    concepts.forEach(concept => {
      concept.connections.forEach(targetId => {
        const key = [concept.id, targetId].sort().join('-')
        if (processed.has(key)) return
        processed.add(key)
        
        const target = concepts.find(c => c.id === targetId)
        if (target) {
          result.push({
            start: concept.position,
            end: target.position,
            color: concept.color
          })
        }
      })
    })
    
    return result
  }, [concepts])

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={line.color}
          lineWidth={1}
          transparent
          opacity={0.2}
          dashed
          dashSize={0.3}
          dashScale={2}
        />
      ))}
    </>
  )
}

export function ConceptMap({ concepts, onSelect, selected }: ConceptMapProps) {
  return (
    <group>
      <ConnectionLines concepts={concepts} />
      {concepts.map(concept => (
        <ConceptNode
          key={concept.id}
          concept={concept}
          onSelect={onSelect}
          isSelected={selected?.id === concept.id}
        />
      ))}
    </group>
  )
}
