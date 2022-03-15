/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
    part2: THREE.Mesh
    Mesh002: THREE.Mesh
    Mesh002_1: THREE.Mesh
    Mesh002_2: THREE.Mesh
  }
  materials: {
    ['Material #125']: THREE.MeshStandardMaterial
    ['Material #150']: THREE.MeshStandardMaterial
    ['Material #138']: THREE.MeshStandardMaterial
    ['Material #137']: THREE.MeshStandardMaterial
  }
}

const PATH = 'models/highpoly/tower-of-pisa/tower_of_pisa.gltf'

export default function TowerOfPisa({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(PATH) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.09, -2.49]} rotation={[0.07, 0, 0]}>
        <mesh geometry={nodes.Mesh.geometry} material={nodes.Mesh.material} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['Material #150']} />
      </group>
      <mesh
        geometry={nodes.part2.geometry}
        material={nodes.part2.material}
        position={[0, 0.09, -2.49]}
        rotation={[0.07, 0, 0]}
      />
      <group position={[0, 0.09, -2.49]} rotation={[0.07, 0, 0]} >
        <mesh geometry={nodes.Mesh002.geometry} material={nodes.Mesh002.material} />
        <mesh geometry={nodes.Mesh002_1.geometry} material={materials['Material #138']} />
        <mesh geometry={nodes.Mesh002_2.geometry} material={materials['Material #137']} />
      </group>
    </group>
  )
}

useGLTF.preload(PATH)