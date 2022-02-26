import { Environment, Html, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import { IAttractionMarkerProps, INavPanelItem } from '../../types';
import Earth from './earth/Earth';
import NavPanel from './nav-panel/navPanel';
import { useSpring, a } from "@react-spring/three";
import { ArrowFunction, FunctionExpression } from 'typescript';
import { springConfig } from '../../constans';
import BigBen from '../models/BigBen';
import SpasskayTower from '../models/SpasskayTower';
import TowerOfPisa from '../models/TowerOfPisa';
import SydneyOperaHouse from '../models/SydneyOperaHouse';
import { Canvas } from '@react-three/fiber';

import BACKROUDN from '../../assets/sprites/background/background.jpeg'

interface IDataItem{
    title: String,

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

    //Вынести это куда-то
    //научиться рендерить по ссылке на модель
    const data: Array<IAttractionMarkerProps> = [
        {
            coordinates: { latitude: 0, longitude: 0 },
            lowPolyModel: <BigBen></BigBen>,
            highPolyModel: <BigBen></BigBen>,
            setChild: props.setChild,
            title: 'Биг-Бен'
        },
        {
            coordinates: { latitude: 40.7143, longitude: -74.006 },
            lowPolyModel: <SpasskayTower></SpasskayTower>,
            highPolyModel: <SpasskayTower></SpasskayTower>,
            setChild: props.setChild,
            title: 'Спасская башня'
        },
        {
            coordinates: { latitude: 48.8534100, longitude: 2.3488000 },
            lowPolyModel: <TowerOfPisa></TowerOfPisa>,
            highPolyModel: <TowerOfPisa></TowerOfPisa>,
            setChild: props.setChild,
            title: 'Пизанская башня'
        },
        {
            coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
            lowPolyModel: <SydneyOperaHouse></SydneyOperaHouse>,
            highPolyModel: <SydneyOperaHouse></SydneyOperaHouse>,
            setChild: props.setChild,
            title: 'Оперный театр'
        },
    ];

    const buttons: Array<INavPanelItem> = data.map(item => ({coordinates: item.coordinates, title: item.title}));

    return (
        <>
        <Canvas>
            <spotLight intensity={1} position={[1, 0, 10]}></spotLight>
            <Html position={[-4, 3, 0]}>
                <NavPanel navPanelItems={buttons} setRotation={setRotation}></NavPanel>
            </Html>
            <Earth attractions={data} spring={spring} setRotation={setRotation}></Earth>
        </Canvas>
            
        </>

    )
}

export default EarthScene;