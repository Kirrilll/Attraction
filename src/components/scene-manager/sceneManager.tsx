import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PATH_TO_LOWPOLY_MODELS } from '../../constans';
import AttractionScene from '../attraction-scene/attractionScene';
import EarthScene from '../earth-scene/earthScene';
import './sceneManager.css'

// const SceneManager: React.FC = () => {


//     const [child, setChild] = useState<React.ReactNode>();

//     useEffect(() => {
//         setChild(<EarthScene setChild={setChild}></EarthScene>)
//     }, [])

//     return (
//         <Suspense fallback={null}>
//             <div className = 'canvas-container'>
//                {child} 
//             </div>
//         </Suspense>
//     )


// }

// export default SceneManager;