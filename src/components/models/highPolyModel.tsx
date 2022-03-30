import { useFBX, useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const HighPolyModel: React.FC<{path: string}> = (props) => {

    const model = useFBX(props.path);

    return (
        <primitive object = {model}></primitive>
    );
}

export default HighPolyModel;