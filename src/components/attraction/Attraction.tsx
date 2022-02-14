import React from 'react';
import { useRef } from 'react';
import { EARTH_CENTER, EARTH_RADIUS } from '../../constans';
import { IAttractionProps } from '../../types';
import * as THREE from 'three'
import { useEffect } from 'react';
import { Group } from 'three';
import GeometryHelper from '../../helpers/geometryHelper';
import { Color } from '@react-three/fiber';



const Attraction: React.FC<IAttractionProps> = (data) => {
    const rotationRef = useRef<Group>();

    useEffect(() => {
        rotationRef.current?.setRotationFromQuaternion(GeometryHelper.rotateByCoordinates(data.coordinates));
    }, [])

    return (
        <group ref={rotationRef} position={EARTH_CENTER} >
            <group position={[0, EARTH_RADIUS, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, 0.2, 0.1]}></boxGeometry>
                    <meshStandardMaterial color={data.color}></meshStandardMaterial>
                </mesh>
            </group>
        </group>
    );
}

export default Attraction;