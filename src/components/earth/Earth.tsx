import React from 'react';
import { IAttractionMarkerProps, ISpring } from '../../types';
import Attraction from '../attraction-view/attractionView';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import EarthColorMap from '../../assets/textures/Earth/8k_earth_daymap.jpg';
import { EARTH_CENTER, EARTH_RADIUS } from '../../constans';
import AttractionMarker from '../attracttion-marker/attractionMarker';
import SelfControls from '../self-controls/selfControls';
import { useRef } from 'react';

interface IEarthProps {
    attractions: Array<IAttractionMarkerProps>,
    spring:ISpring,
    setRotation: (x:number, y:number) => void;
}

const Earth: React.FC<IEarthProps> = (data) => {

    const colorMap = useTexture(EarthColorMap);

    const attComponents: Array<JSX.Element> = data.attractions
        .map(attration => <AttractionMarker coordinates={attration.coordinates} color={attration.color}></AttractionMarker>)

    return (
        <>
            <group position={EARTH_CENTER}>
                <SelfControls setRotation = {data.setRotation} spring = {data.spring}>
                    <mesh>
                        <sphereGeometry args={[EARTH_RADIUS, 32, 32]}></sphereGeometry>
                        <meshStandardMaterial map={colorMap}></meshStandardMaterial>
                    </mesh>
                    {attComponents}
                </SelfControls>
            </group>
        </>
    )
}

export default Earth;