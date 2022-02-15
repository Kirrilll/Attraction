import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

interface ICanvasContainerProp{
    element: JSX.Element
}

const CanvasContainer: React.FC<ICanvasContainerProp> = (props) => {
    return (
        <Suspense fallback = {null}>
            <Canvas>
                {props.element}
            </Canvas>
        </Suspense>
    )
}