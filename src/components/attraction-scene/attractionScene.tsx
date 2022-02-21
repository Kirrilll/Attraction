import React, { ReactElement, ReactNode } from 'react';
import * as THREE from 'three'
import { Edges, Html, OrbitControls } from '@react-three/drei';
import { ATTRACTION_SIZE } from '../../constans';


const AttractionScene: React.FC<{ child: ReactNode }> = (props) => {


    return (
        <group>
            <OrbitControls></OrbitControls>
            <Html>
                <div>Какой-то контент</div>
            </Html>
            <mesh scale = {ATTRACTION_SIZE}>
                {props.child}
            </mesh>
        </group>

    );
}

export default AttractionScene;