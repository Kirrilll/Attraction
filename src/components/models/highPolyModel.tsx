import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const HighPolyModel: React.FC<{path: string}> = (props) => {

    const model = useGLTF(props.path);

    return (
        <primitive object = {model.nodes}></primitive>
    );
}

export default HighPolyModel;