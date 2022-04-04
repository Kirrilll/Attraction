import React, { ReactElement, ReactNode, Suspense } from 'react';
import * as THREE from 'three'
import { BakeShadows, Billboard, Bounds, ContactShadows, Edges, Environment, GradientTexture, Html, meshBounds, OrbitControls, Plane, PointMaterial, softShadows, SpotLight, Text } from '@react-three/drei';
import { ATTRACTION_SIZE, PATH_TO_LOWPOLY_MODELS } from '../../constans';
import { Canvas } from '@react-three/fiber';
import LowPolyModel from '../models/lowPolyModel';
import Stage from './stage/stage';
import SceneTitle from './scene-title/sceneTitle';
import { useRef } from 'react';
import { Points, Vector3 } from 'three';
import { useEffect } from 'react';
import HighPolyModel from '../models/highPolyModel';
import Popup from './attracrion-popup/popup';
import { DataState, IAttractionHigh, PopupInfoType } from '../../types';
import LoadingIndicator from '../loading-indicator/loadingIndicator';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getAttractionById } from '../../data';
import PopupCloud from './popup-cloud/popupCloud';
import axios from 'axios';
import { useDisk } from '../../hooks/useDisk';


softShadows();

const AttractionScene: React.FC = () => {

    const params = useParams();
    const navigate = useNavigate();
    const attraction = getAttractionById(Number(params.attractionId));

    const {status, data} = useDisk(
        attraction.highPolyModelPath,
        [params]
    );

    const loadingCatCache = <LoadingIndicator/>

    return (
        <>
        {status == DataState.LOADED
        ?<Suspense fallback={loadingCatCache}>
            <Canvas dpr={1} shadows={true} >
                <group>
                    <OrbitControls
                        maxDistance={10} //сделать это множителем на размер здания
                        minDistance={2}
                        enablePan={false}
                    ></OrbitControls>
                    <PopupCloud popups={attraction.information} radius={5} center={new Vector3(0, -1, 0)} />
                    <Stage></Stage>
                    <mesh scale={1 / attraction.size} position={attraction.position} castShadow receiveShadow>
                        <LowPolyModel path={data!.href}></LowPolyModel>
                    </mesh>
                </group>
            </Canvas>
            <SceneTitle
                back={() => navigate('/')}
                title={attraction.title}
                subtitle={attraction?.subtitle}
                location={attraction.location} />
        </Suspense>
        :loadingCatCache}
        </>
    );
}

export default AttractionScene;