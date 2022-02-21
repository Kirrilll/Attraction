/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { PATH_TO_LOWPOLY_MODELS } from '../../constans'

type GLTFResult = GLTF & {
  nodes: {
    Mesh002: THREE.Mesh
    Mesh002_1: THREE.Mesh
    Mesh002_2: THREE.Mesh
    Mesh002_3: THREE.Mesh
    Mesh002_4: THREE.Mesh
  }
  materials: {
    ['Material #28.002']: THREE.MeshStandardMaterial
    ['Material #27.002']: THREE.MeshStandardMaterial
    ['Material #3.002']: THREE.MeshStandardMaterial
    ['Material #29.002']: THREE.MeshStandardMaterial
    ['Material #2.002']: THREE.MeshStandardMaterial
  }
}


const PATH: string = PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf';

export default function SydneyOperaHouse({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(PATH) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1}>
        <mesh geometry={nodes.Mesh002.geometry} material={materials['Material #28.002']} />
        <mesh geometry={nodes.Mesh002_1.geometry} material={materials['Material #27.002']} />
        <mesh geometry={nodes.Mesh002_2.geometry} material={materials['Material #3.002']} />
        <mesh geometry={nodes.Mesh002_3.geometry} material={materials['Material #29.002']} />
        <mesh geometry={nodes.Mesh002_4.geometry} material={materials['Material #2.002']} />
      </group>
    </group>
  )
}

useGLTF.preload(PATH)