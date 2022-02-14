import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import React from 'react';
import Earth from './components/earth/Earth';
import { IAttractionProps } from './types';


function App() {

  const data: Array<IAttractionProps> = [
    {coordinates: {latitude: 0, longitude: 0}, color: 'hotpink'},
    {coordinates: {latitude: 40.7143, longitude: -74.006}, color: 'skyblue'},
    {coordinates: {latitude: 48.8534100, longitude: 2.3488000}, color: 'red'},
    {coordinates: {latitude: 43.7229843, longitude: 10.3966227}, color: 'yellow'},
  ];

  return (
    <>
      <Canvas>
        <spotLight intensity={1} position={[2, 0, 5]}></spotLight>
        <Suspense fallback = {null}>
          <Earth attractions = {data}></Earth>
        </Suspense>
      </Canvas>
    </>

  );
}

export default App;
