import { Html, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import {  IAttractionMarkerProps, INavPanelItem } from '../../types';
import Earth from '../earth/Earth';
import NavPanel from './nav-panel/navPanel';
import { useSpring, a } from "@react-spring/three";
import { ArrowFunction, FunctionExpression } from 'typescript';
import { springConfig } from '../../constans';

const EarthScene: React.FC = () => {

    const [spring, api] = useSpring(() => ({
        ...springConfig
    }));


    const setRotation = function (x: number, y: number) {
        api.start({
            ...spring,
            rotation: [y, x, 0],
        });
    };

    const data: Array<IAttractionMarkerProps> = [
        { coordinates: { latitude: 0, longitude: 0 }, color: 'hotpink' },
        { coordinates: { latitude: 40.7143, longitude: -74.006 }, color: 'skyblue' },
        { coordinates: { latitude: 48.8534100, longitude: 2.3488000 }, color: 'red' },
        { coordinates: { latitude: 43.7229843, longitude: 10.3966227 }, color: 'yellow' },
    ];

    const buttons: Array<INavPanelItem> = [
        { coordinates: { latitude: 0, longitude: 0 }, title: 'Экватор' },
        { coordinates: { latitude: 40.7143, longitude: -74.006 }, title: 'Экватор' },
        { coordinates: { latitude: 48.8534100, longitude: 2.3488000 }, title: 'Экватор' }
    ]

    return (
        <Suspense fallback={null}>
            <Html position={[-2, 0, 0]}>
                <NavPanel navPanelItems={buttons} setRotation={setRotation}></NavPanel>
            </Html>
            <Earth attractions={data} spring={spring} setRotation={setRotation}></Earth>
        </Suspense>

    )
}

export default EarthScene;