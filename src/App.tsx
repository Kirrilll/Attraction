import './App.css';
import { Canvas } from '@react-three/fiber';
import SceneManager from './components/scene-manager/sceneManager';


function App() {
  return (
    <>
      <Canvas>
        <spotLight intensity={1} position={[1, 0, 10]}></spotLight>
        <SceneManager></SceneManager>
      </Canvas>
    </>

  );
}

export default App;
