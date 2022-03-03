import React from 'react';
import { IAttractionMarkerProps, ISpring } from '../../../types';
import * as THREE from 'three';
import { PresentationControls, useTexture } from '@react-three/drei';
import EarthColorMap from '../../../assets/textures/Earth/Earth_colorMap.png';
import EarthNormalMap from '../../../assets/textures/Earth/Earth_normalMap.jpg';
import { EARTH_CENTER, EARTH_RADIUS, VIEWPORT_WIDTH_1920 } from '../../../constans';
import AttractionMarker from './attracttion-marker/attractionMarker';
import SelfControls from '../../self-controls/selfControls';
import { Vector3 } from 'three';
import { useThree } from '@react-three/fiber';

interface IEarthProps {
    attractions: Array<IAttractionMarkerProps>,
    spring:ISpring,
    setRotation: (x:number, y:number) => void;
}

const Earth: React.FC<IEarthProps> = (data) => {

    const [colorMap, normalMap] = useTexture([EarthColorMap, EarthNormalMap]);
    
    const {viewport} = useThree();

    const attComponents: Array<JSX.Element> = data.attractions
        .map((attration, index) => <AttractionMarker key = {index} attractionMarkerProp = {attration}></AttractionMarker>)


    const ration: number = viewport.width / VIEWPORT_WIDTH_1920
    const EARTH_CENTER_MUTATE: Vector3 =  new Vector3(EARTH_CENTER.x * ration, EARTH_CENTER.y * ration, EARTH_CENTER.z * ration);


    return (
        <>
            <group position={EARTH_CENTER_MUTATE}>
                <SelfControls setRotation = {data.setRotation} spring = {data.spring}>
                    <mesh>
                        <sphereGeometry args={[EARTH_RADIUS, 32, 32]}></sphereGeometry>
                        <meshStandardMaterial map={colorMap} normalMap = {normalMap}></meshStandardMaterial>
                    </mesh>
                    {attComponents}
                </SelfControls>
            </group>
        </>
    )
}

export default Earth;