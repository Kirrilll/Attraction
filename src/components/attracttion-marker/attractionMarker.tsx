import React from 'react';
import { useRef } from 'react';
import { ATTRACTION_RATIO, EARTH_CENTER, EARTH_RADIUS } from '../../constans';
import { IAttractionMarkerProps } from '../../types';
import * as THREE from 'three'
import { useEffect } from 'react';
import { Group } from 'three';
import GeometryHelper from '../../helpers/geometryHelper';
import { useGesture } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';

const AttractionMarker: React.FC<IAttractionMarkerProps> = (data) => {
    const rotationRef = useRef<Group>();

    useEffect(() => {
        rotationRef.current?.setRotationFromQuaternion(GeometryHelper.rotateByCoordinates(data.coordinates));
    }, [])


    return (
        <group ref={rotationRef}  onClick = {() => console.log('НЖАЛ')}>
            <group position={[0, EARTH_RADIUS, 0]}>
                <mesh scale = {ATTRACTION_RATIO}>
                    {data.child}
                </mesh>
            </group>
        </group>
    );
}

export default AttractionMarker;