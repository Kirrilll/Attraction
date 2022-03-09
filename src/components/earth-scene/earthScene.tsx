import { Environment, Html, OrbitControls, Stars } from '@react-three/drei';
import React, { Suspense } from 'react';
import { IAttractionMarkerProps, ICoordinates, INavPanelItem } from '../../types';
import Earth from './earth/Earth';
import NavPanel from './nav-panel/navPanel';
import { useSpring, a } from "@react-spring/three";
import { PATH_TO_LOWPOLY_MODELS, springConfig } from '../../constans';
import { Canvas, useThree } from '@react-three/fiber';
import NavPanelTitle from './nav-panel/nav-panel-title/navPanelTitle';
import { useMemo } from 'react';
import './earthScene.css'

interface IAttractionsData {
    title: string;
    coordinates: ICoordinates;
    lowPolyModelPath: string;
    highPolyModelPath: string;
    flagDefaultPath: string;
    flagHoveredPath: string
}


const EarthScene: React.FC<{ setChild: (child: React.ReactNode) => void }> = (props) => {

    const [spring, api] = useSpring(() => ({
        ...springConfig
    }));


    const setRotation = function (x: number, y: number) {
        api.start({
            ...spring,
            rotation: [y, x, 0],
        });
    };


    //Путь относительно Model.tsx
    const data: Array<IAttractionsData> = [
        {
            coordinates: { latitude: 0, longitude: 0 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'big-ben/big-ben.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'big-ben/big-ben.gltf',
            title: 'Биг-Бен',
            flagDefaultPath: '/assets/sprites/flag/flags_default/UK.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/UK_HOVERED.png'
        },
        {
            coordinates: { latitude: 40.7143, longitude: -74.006 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
            title: 'Спасская башня',
            flagDefaultPath: '/assets/sprites/flag/flags_default/RU.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/RU_HOVERED.png'
        },
        {
            coordinates: { latitude: 48.8534100, longitude: 2.3488000 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
            title: 'Пизанская башня',
            flagDefaultPath: '/assets/sprites/flag/flags_default/IT.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/IT_HOVERED.png'
        },
        {
            coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            title: 'Оперный театр',
            flagDefaultPath: '/assets/sprites/flag/flags_default/AU.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/AU_HOVERED.png'
        },
        {
            coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            title: 'Оперный театр',
            flagDefaultPath: '/assets/sprites/flag/flags_default/AU.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/AU_HOVERED.png'
        },
        {
            coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            title: 'Оперный театр',
            flagDefaultPath: '/assets/sprites/flag/flags_default/AU.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/AU_HOVERED.png'
        },
        {
            coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
            lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
            title: 'Оперный театр',
            flagDefaultPath: '/assets/sprites/flag/flags_default/AU.png',
            flagHoveredPath: '/assets/sprites/flag/flags_hovered/AU_HOVERED.png'
        },
    ];

    const buttons: Array<INavPanelItem> = [];
    const attractions: Array<IAttractionMarkerProps> = [];

    data.forEach((value) => {
        buttons.push({
            title: value.title,
            coordinates: value.coordinates,
            flagDefaultPath: value.flagDefaultPath,
            flagHoveredPath: value.flagHoveredPath
        });
        attractions.push({
            title: value.title,
            coordinates: value.coordinates,
            lowPolyModelPath: value.lowPolyModelPath,
            highPolyModelPath: value.highPolyModelPath,
            setChild: props.setChild
        })
    });


    return (
        <>
            <Canvas style={{ height: window.innerHeight }}>
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
        </>
    )
}

export default EarthScene;