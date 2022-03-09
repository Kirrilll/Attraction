import React, { ReactElement, ReactNode } from 'react';
import * as THREE from 'three'
import { BakeShadows, Bounds, ContactShadows, Edges, Environment, Html, OrbitControls, Plane, softShadows, SpotLight } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';
import { Canvas } from '@react-three/fiber';
import Model from '../models/model';
import Stage from './stage/stage';
import SceneTitle from './scene-title/sceneTitle';

softShadows();

const AttractionScene: React.FC<{ path: string }> = (props) => {


    return (
        <>
            <Canvas style={{ height: window.innerHeight }} shadows={true} >
                <group>
                    <OrbitControls
                        maxDistance={10} //сделать это множителем на размер здания
                        minDistance={2}
                        enablePan={false}
                    ></OrbitControls>
                    <Stage></Stage>
                    <mesh scale={ATTRACTION_SIZE} position={[0, -1, 0]} castShadow receiveShadow>
                        <Model path={props.path}></Model>
                    </mesh>
                </group>
            </Canvas>
            <SceneTitle 
                back  = {() => console.log('back')}
                title = 'Нотр-Дам-де-ПарИ'
                subtitle = 'Собор Парижской Богоматери'
                location = 'Франция, Париж'
            />
        </>

    );
}

export default AttractionScene;