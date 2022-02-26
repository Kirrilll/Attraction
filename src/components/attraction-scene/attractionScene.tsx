import React, { ReactElement, ReactNode } from 'react';
import * as THREE from 'three'
import { BakeShadows, Edges, Html, OrbitControls, Plane, softShadows } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';
import { Canvas } from '@react-three/fiber';


const AttractionScene: React.FC<{ child: ReactNode }> = (props) => {


    return (
        <Canvas shadows>
            <group>

                <OrbitControls
                    maxDistance={10} //сделать это множителем на размер здания
                    minDistance={2}
                    enablePan={false}
                ></OrbitControls>
                <Html>
                    <div>Какой-то контент</div>
                </Html>

                {/* Fill */}
                <ambientLight intensity={0.5} castShadow/>
                {/* Main */}
                <directionalLight
                    position={[1, 10, -2]}
                    intensity={1}
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                    castShadow
                />
                {/* Strip */}
                {/* <directionalLight position={[-10, -10, 2]} intensity={3} /> */}
                <mesh scale={ATTRACTION_SIZE} position={[0, -1, 0]}>
                    {props.child}
                </mesh>

                {/* <group rotation = {[-Math.PI / 2, 0, 0]} position = {[0, -1 - ATTRACTION_SIZE, 0]}>
                    <Plane scale={1000}>
                        <meshStandardMaterial attach="material" color="white" />
                    </Plane>
                </group> */}

                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1 + ATTRACTION_SIZE, 0]} receiveShadow>
                    <planeBufferGeometry attach='geometry' args={[100, 100]}></planeBufferGeometry>
                    <meshBasicMaterial color='hotpink'></meshBasicMaterial>
                </mesh>
            </group>
        </Canvas>


    );
}

export default AttractionScene;