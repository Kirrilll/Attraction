import { Environment, Html, OrbitControls, Stars } from '@react-three/drei';
import React, { Suspense } from 'react';
import { IAttractionMarkerProps, ICoordinates, INavPanelItem } from '../../types';
import Earth from './earth/Earth';
import NavPanel from './nav-panel/navPanel';
import { useSpring, a } from "@react-spring/three";
import { PATH_TO_LOWPOLY_MODELS, springConfig } from '../../constans';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import NavPanelTitle from './nav-panel/nav-panel-title/navPanelTitle';
import { useMemo } from 'react';

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

    const isBig:boolean = useMemo(() => window.innerWidth > 914, []);

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
            <Canvas style = {{height: window.innerHeight}}>
                <spotLight intensity={1} position={[1, 0, 10]}></spotLight>
                <Earth attractions={attractions} spring={spring} setRotation={setRotation}></Earth>
                <Stars></Stars>
            </Canvas>
            <div style={{ position: 'absolute', left: 0, top: 0, display: 'inline-block' }}>
                {isBig? null : <NavPanelTitle></NavPanelTitle>}
                <NavPanel navPanelItems={buttons} setRotation={setRotation}></NavPanel>
            </div>
        </>

    )
}

export default EarthScene;