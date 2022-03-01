import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EarthScene from '../earth-scene/earthScene';


const SceneManager: React.FC = () => {


    const [child, setChild] = useState<React.ReactNode>();

    useEffect(() => {
        setChild(<EarthScene setChild={setChild}></EarthScene>)
    }, [])

    return (
        <Suspense fallback={null}>
            {child}
        </Suspense>
    )


}

export default SceneManager;