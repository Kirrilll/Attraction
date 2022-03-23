import React, { ReactElement, ReactNode, Suspense } from 'react';
import * as THREE from 'three'
import { BakeShadows, Billboard, Bounds, ContactShadows, Edges, Environment, GradientTexture, Html, meshBounds, OrbitControls, Plane, PointMaterial, softShadows, SpotLight, Text } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';
import { Canvas } from '@react-three/fiber';
import LowPolyModel from '../models/lowPolyModel';
import Stage from './stage/stage';
import SceneTitle from './scene-title/sceneTitle';
import { useRef } from 'react';
import { Points } from 'three';
import { useEffect } from 'react';
import HighPolyModel from '../models/highPolyModel';
import Popup from './attracrion-popup/popup';
import { PopupInfoType } from '../../types';
import LoadingIndicator from '../loading-indicator/loadingIndicator';

softShadows();

const AttractionScene: React.FC<{ path: string }> = (props) => {



    return (
        <Suspense fallback = {<LoadingIndicator/>}>
            <Canvas dpr={1} shadows={true} >
                <group>
                    <OrbitControls
                        maxDistance={10} //сделать это множителем на размер здания
                        minDistance={2}
                        enablePan={false}
                    ></OrbitControls>
                    <Billboard follow={false} scale={0.4} position={[3, 2, 0]}>
                        <Popup
                            title='Строительство'
                            type={PopupInfoType.BUILDING}
                            content='фафаффффффффффффффффффффффффффффффффффрыгфганыгнафгнырапфнгапыфгнапнгфа'
                        ></Popup>
                    </Billboard>
                    <Stage></Stage>
                    <mesh scale={ATTRACTION_SIZE} position={[0, -1, 0]} castShadow receiveShadow>
                        {/* <HighPolyModel path = {props.path}></HighPolyModel> */}
                        <LowPolyModel path={props.path}></LowPolyModel>
                    </mesh>
                </group>
            </Canvas>
            <SceneTitle
                back={() => console.log('back')}
                title='Нотр-Дам-де-ПарИ'
                subtitle='Собор Парижской Богоматери'
                location='Франция, Париж'
            />
        </Suspense>
    );
}

export default AttractionScene;