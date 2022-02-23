import React, { ReactElement, ReactNode } from 'react';
import * as THREE from 'three'
import { BakeShadows, Edges, Html, OrbitControls, softShadows } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';


const AttractionScene: React.FC<{ child: ReactNode }> = (props) => {


    return (
        <group>
            
            <OrbitControls
                maxDistance = {10} //сделать это множителем на размер здания
                minDistance = {2} 
                enablePan = {false}
            ></OrbitControls>
            <Html>
                <div>Какой-то контент</div>
            </Html>

            {/* Fill */}
            <ambientLight intensity={0.5} />
            {/* Main */}
            <directionalLight
                position={[1, 10, -2]}
                intensity={1}
            />
            {/* Strip */}
            <directionalLight position={[-10, -10, 2]} intensity={3} />
            <mesh scale={ATTRACTION_SIZE} position={[0, -1, 0]}>
                {props.child}
            </mesh>
            <mesh rotation = {[-Math.PI / 2, 0, 0]} position = {[0, -1 + ATTRACTION_SIZE, 0]} receiveShadow>
                <planeBufferGeometry attach = 'geometry' args = {[100, 100]}></planeBufferGeometry>
                <meshBasicMaterial color = 'hotpink'></meshBasicMaterial> 
            </mesh>
        </group>

    );
}

export default AttractionScene;