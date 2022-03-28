import React, { ReactElement, ReactNode, Suspense } from 'react';
import * as THREE from 'three'
import { BakeShadows, Billboard, Bounds, ContactShadows, Edges, Environment, GradientTexture, Html, meshBounds, OrbitControls, Plane, PointMaterial, softShadows, SpotLight, Text } from '@react-three/drei';
import { ATTRACTION_SIZE, PATH_TO_LOWPOLY_MODELS } from '../../constans';
import { Canvas } from '@react-three/fiber';
import LowPolyModel from '../models/lowPolyModel';
import Stage from './stage/stage';
import SceneTitle from './scene-title/sceneTitle';
import { useRef } from 'react';
import { Points } from 'three';
import { useEffect } from 'react';
import HighPolyModel from '../models/highPolyModel';
import Popup from './attracrion-popup/popup';
import { IAttractionHigh, PopupInfoType } from '../../types';
import LoadingIndicator from '../loading-indicator/loadingIndicator';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getAttractionById } from '../../data';


softShadows();

const AttractionScene: React.FC = () => {

    const params = useParams();
    const navigate = useNavigate();

    const attraction = getAttractionById(Number(params.attractionId));


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
                        <LowPolyModel path={ attraction.highPolyModelPath }></LowPolyModel>
                    </mesh>
                </group>
            </Canvas>
            <SceneTitle
                back={() => navigate('/')}
                title={attraction.title}
                subtitle= {attraction?.subtitle}
                location= {attraction.location}
            />
        </Suspense>
    );
}

export default AttractionScene;