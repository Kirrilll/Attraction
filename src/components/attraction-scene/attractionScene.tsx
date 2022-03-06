import React, { ReactElement, ReactNode } from 'react';
import * as THREE from 'three'
import { BakeShadows, ContactShadows, Edges, Environment, Html, OrbitControls, Plane, softShadows, SpotLight } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';
import { Canvas } from '@react-three/fiber';
import Model from '../models/model';

softShadows();

const AttractionScene: React.FC<{ path: string }> = (props) => {


    return (
        <div >
            <Canvas style={{ height: window.innerHeight }} shadows={true} >
                <group>
                    <OrbitControls
                        maxDistance={10} //сделать это множителем на размер здания
                        minDistance={2}
                        enablePan={false}
                    ></OrbitControls>
                    <Html>
                        <div>Какой-то контент</div>
                    </Html>
                    <pointLight intensity = {0.25} position = {[0, 10, 0]}></pointLight>
                    {/* <ambientLight intensity = {0.05}></ambientLight> */}
                    <spotLight castShadow position={[2, 5, 4]} penumbra={1} distance={100} angle={0.35} intensity={0.2}></spotLight>
                    <mesh scale={ATTRACTION_SIZE} position={[0, -1, 0]} castShadow receiveShadow>
                        <Model path={props.path}></Model>
                    </mesh>

                    <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} >
                        <planeGeometry args={[100, 100]}/>
                        <shadowMaterial attach="material" transparent opacity={0.4} />
                    </mesh>

                </group>
            </Canvas>
        </div>



    );
}

export default AttractionScene;