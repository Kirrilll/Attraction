import React from 'react';
import * as THREE from 'three'

const Stage: React.FC = () => {
    return (
        <>
            <pointLight intensity={0.4} position={[2, 16, 0]}></pointLight>
            <ambientLight intensity={0.15}></ambientLight>
            <spotLight castShadow position={[0, 9, 4]} penumbra={1} distance={900} angle={0.6} intensity={0.4}></spotLight>
            <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} >
                <planeGeometry args={[100, 100]} />
                <shadowMaterial attach="material" transparent opacity={0.4} />
            </mesh>
        </>
    )
}

export default Stage;