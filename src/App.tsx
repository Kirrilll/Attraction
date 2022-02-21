import './App.css';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import React from 'react';
import Earth from './components/earth/Earth';
import { IAttractionMarkerProps } from './types';
import EarthScene from './components/earth-scene/earthScene';
import BigBen from './components/models/BigBen';
import TowerOfPisa from './components/models/TowerOfPisa';
import { Object3D } from 'three';
import { group } from 'console';


function App() {

  // const data: Array<IAttractionMarkerProps> = [
  //   {coordinates: {latitude: 0, longitude: 0}, color: 'hotpink'},
  //   {coordinates: {latitude: 40.7143, longitude: -74.006}, color: 'skyblue'},
  //   {coordinates: {latitude: 48.8534100, longitude: 2.3488000}, color: 'red'},
  //   {coordinates: {latitude: 43.7229843, longitude: 10.3966227}, color: 'yellow'},
  // ];

  
  // const {renderer} = useThree() 
  

  return (
    <>
      <Canvas>
        {/* <mesh position = {[0, 3, 0]} onClick = {() =>)}>
          <boxBufferGeometry></boxBufferGeometry>
          <meshBasicMaterial color = 'hotpink'></meshBasicMaterial>
        </mesh> */}
        <spotLight intensity={1} position={[1, 0, 10]}></spotLight>
        <EarthScene></EarthScene>
      </Canvas>
    </>

  );
}

export default App;
