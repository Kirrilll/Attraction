import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Model: React.FC<{ path: string }> = (props) => {

    const { nodes } = useGLTF(props.path);


    const meshes: Array<JSX.Element> = Object.values(nodes)
        .filter(node => node.type === 'Mesh')
        .map(node => (node as Mesh))
        .map(mesh => <mesh key={mesh.uuid} geometry={mesh.geometry} material={mesh.material} castShadow></mesh>);

    return (
        <group>
            {meshes}
        </group>

    )
}

export default Model