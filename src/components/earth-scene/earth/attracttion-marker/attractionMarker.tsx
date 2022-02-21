import React from 'react';
import { useRef } from 'react';
import { ATTRACTION_RATIO, EARTH_CENTER, EARTH_RADIUS } from '../../../../constans';
import { IAttractionMarkerProps } from '../../../../types';
import * as THREE from 'three'
import { useEffect } from 'react';
import { Group } from 'three';
import GeometryHelper from '../../../../helpers/geometryHelper';
import { useGesture } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import AttractionScene from '../../../attraction-scene/attractionScene';


const AttractionMarker: React.FC<{attractionMarkerProp: IAttractionMarkerProps}> = (props) => {
    const rotationRef = useRef<Group>();

    useEffect(() => {
        rotationRef.current?.setRotationFromQuaternion(GeometryHelper.rotateByCoordinates(props.attractionMarkerProp.coordinates));
    }, [])

    const setAttraction = () => {
        return () => props.attractionMarkerProp.setChild(<AttractionScene child = {props.attractionMarkerProp.highPolyModel}></AttractionScene>)
    }


    return (
        <group ref={rotationRef}  onClick = {setAttraction()}>
            <group position={[0, EARTH_RADIUS, 0]}>
                <mesh scale = {ATTRACTION_RATIO * EARTH_RADIUS}>
                    {props.attractionMarkerProp.lowPolyModel}
                </mesh>
            </group>
        </group>
    );
}

export default AttractionMarker;