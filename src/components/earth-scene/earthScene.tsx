import { Environment, Html, OrbitControls, Stars } from '@react-three/drei';
import React, { Suspense } from 'react';
import { IAttractionMarkerProps, IAttractionNav, ICoordinates, INavPanelItem } from '../../types';
import Earth from './earth/Earth';
import NavPanel from './nav-panel/navPanel';
import { useSpring, a } from "@react-spring/three";
import { PATH_TO_HIGHPOLY_MODELS, PATH_TO_LOWPOLY_MODELS, springConfig } from '../../constans';
import { Canvas, useThree } from '@react-three/fiber';
import NavPanelTitle from './nav-panel/nav-panel-title/navPanelTitle';
import { useMemo } from 'react';
import './earthScene.css'
import LoadingIndicator from '../loading-indicator/loadingIndicator';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { dataNavs } from '../../data';


const EarthScene: React.FC = () => {

    const [spring, api] = useSpring(() => ({
        ...springConfig
    }));


    const [data, setData] = useState<IAttractionNav[]>();

    const navigate = useNavigate();

    const setRotation = function (x: number, y: number) {
        api.start({
            ...spring,
            rotation: [y, x, 0],
        });
    };

    useEffect(() => {
        setData(dataNavs);
    }, [])

    const buttons: Array<INavPanelItem> = [];
    const attractions: Array<IAttractionMarkerProps> = [];

    data?.forEach((value) => {
        buttons.push({
            title: value.title,
            coordinates: value.coordinates,
            flagDefaultPath: value.flagDefaultPath,
            flagHoveredPath: value.flagHoveredPath,
        });
        attractions.push({
            coordinates: value.coordinates,
            lowPolyModelPath: value.lowPolyModelPath,
            onNavigate: () => navigate(`attractions/${value.idHigh}` )
        })
    });


    return (
        <>

            <Suspense fallback={<LoadingIndicator></LoadingIndicator>}>
                <div className='canvas-container '>
                    <Canvas>
                        <spotLight intensity={0.5} position={[5, -5, 5]}></spotLight>
                        <spotLight intensity={0.6} position={[-5, 5, -5]}></spotLight>
                        <ambientLight intensity={0.2}></ambientLight>
                        <Earth attractions={attractions} spring={spring} setRotation={setRotation}></Earth>
                        <Stars></Stars>
                    </Canvas>
                    <div className='earth-container__title'>
                        <NavPanelTitle></NavPanelTitle>
                    </div>
                    <NavPanel navPanelItems={buttons} setRotation={setRotation}></NavPanel>
                </div>
            </Suspense>

        </>
    )
}

export default EarthScene;