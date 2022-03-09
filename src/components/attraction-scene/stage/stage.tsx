import React from 'react';
import * as THREE from 'three'

const Stage: React.FC = () => {
    return (
        <>
            <pointLight intensity={0.25} position={[0, 10, 0]}></pointLight>
            <ambientLight intensity={0.15}></ambientLight>
            <spotLight castShadow position={[2, 5, 4]} penumbra={1} distance={100} angle={0.35} intensity={0.7}></spotLight>
            <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} >
                <planeGeometry args={[100, 100]} />
                <shadowMaterial attach="material" transparent opacity={0.4} />
            </mesh>
        </>
    )
}

export default Stage;