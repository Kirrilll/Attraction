import React from 'react';
import { JsxChild } from 'typescript';
import { IAttractionMarkerProps } from '../../types';
import Attraction from '../attraction-view/attractionView';
import * as THREE from 'three';
import { PresentationControls, useTexture } from '@react-three/drei';
import EarthColorMap from '../../assets/textures/Earth/8k_earth_daymap.jpg';
import { EARTH_CENTER, EARTH_RADIUS } from '../../constans';
import AttractionMarker from '../attracttion-marker/attractionMarker';
import SelfControls from '../self-controls/selfControls';

interface IEarthProps {
    attractions: Array<IAttractionMarkerProps>;
}

const Earth: React.FC<IEarthProps> = (data) => {

    const colorMap = useTexture(EarthColorMap);

    const attComponents: Array<JSX.Element> = data.attractions
        .map(attration => <AttractionMarker coordinates={attration.coordinates} color={attration.color}></AttractionMarker>)



    return (
        <>
            <group position={EARTH_CENTER}>
                {/* <PresentationControls snap={false} global={false}> */}
                {/* <mesh position = {[0, 2.5, 0]} re>
                        <boxGeometry args = {[1, 1, 1]}></boxGeometry>
                        <meshBasicMaterial color = 'hotpink'></meshBasicMaterial>
                    </mesh> */}
                <SelfControls global = {false}>
                    <mesh>
                        <sphereGeometry args={[EARTH_RADIUS, 32, 32]}></sphereGeometry>
                        <meshStandardMaterial map={colorMap}></meshStandardMaterial>
                    </mesh>
                    {attComponents}
                </SelfControls>

                {/* </PresentationControls> */}
            </group>
        </>

    )
}

export default Earth;