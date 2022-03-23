import './App.css';
import { Canvas } from '@react-three/fiber';
import SceneManager from './components/scene-manager/sceneManager';
import { Route, Router } from 'react-router-dom';
import EarthScene from './components/earth-scene/earthScene';

function App() {

  return (
    <>
      {/* <Router>
        <Route>
          <EarthScene setChild  = {() => console.log('')}></EarthScene>
        </Route>
        <Route></Route>
      </Router> */}
        <SceneManager></SceneManager>
    </>

  );
}

export default App;
