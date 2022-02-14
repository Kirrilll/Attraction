import React from 'react';
import { JsxChild } from 'typescript';
import { IAttractionProps } from '../../types';
import Attraction from '../attraction/Attraction';
import * as THREE from 'three';
import { PresentationControls, useTexture } from '@react-three/drei';
import EarthColorMap from '../../assets/textures/Earth/8k_earth_daymap.jpg';
import { EARTH_CENTER, EARTH_RADIUS } from '../../constans';

interface IEarthProps {
    attractions: Array<IAttractionProps>;
}

const Earth: React.FC<IEarthProps> = (data) => {

    const colorMap = useTexture(EarthColorMap);

    const attComponents: Array<JSX.Element> = data.attractions
        .map(attration => <Attraction coordinates={attration.coordinates} color={attration.color}></Attraction>)

    return (
        <>
            <PresentationControls snap={false} global={false}>
                <mesh position={EARTH_CENTER}>
                    <sphereGeometry args={[EARTH_RADIUS, 32, 32]}></sphereGeometry>
                    <meshStandardMaterial map={colorMap}></meshStandardMaterial>
                </mesh>
                {attComponents}
            </PresentationControls>

        </>

    )
}

export default Earth;