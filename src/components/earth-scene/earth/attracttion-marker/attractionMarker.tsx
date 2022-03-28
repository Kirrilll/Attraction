import React from 'react';
import { useRef } from 'react';
import { ATTRACTION_RATIO, EARTH_CENTER, EARTH_RADIUS } from '../../../../constans';
import { IAttractionMarkerProps } from '../../../../types';
import * as THREE from 'three'
import { useEffect } from 'react';
import { Group } from 'three';
import GeometryHelper from '../../../../helpers/geometryHelper';
import { useHover } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import AttractionScene from '../../../attraction-scene/attractionScene';
import LowPolyModel from '../../../models/lowPolyModel';
import { Link, useNavigate } from 'react-router-dom';

//Сделать, чтобы при hover был нужный курсор
const AttractionMarker: React.FC<{attractionMarkerProp: IAttractionMarkerProps}> = (props) => {
    const rotationRef = useRef<Group>();

    useEffect(() => {
        rotationRef.current?.setRotationFromQuaternion(GeometryHelper.rotateByCoordinates(props.attractionMarkerProp.coordinates));
    }, [])


    return (
        <group ref={rotationRef}  onClick = {props.attractionMarkerProp.onNavigate}>
            <group position={[0, EARTH_RADIUS, 0]}>
                <group scale = {ATTRACTION_RATIO * EARTH_RADIUS}>
                    <LowPolyModel path = {props.attractionMarkerProp.lowPolyModelPath}> </LowPolyModel>
                </group>
            </group>
        </group>
    );
}

export default AttractionMarker;