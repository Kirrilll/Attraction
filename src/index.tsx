import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EarthScene from './components/earth-scene/earthScene';
import AttractionScene from './components/attraction-scene/attractionScene';
import { HashRouter } from 'react-router-dom';




ReactDOM.render(
  <HashRouter>
    {/* <App /> */}
    <Routes>
        <Route path='/' element={<EarthScene></EarthScene>}></Route>
        <Route path='attractions' element={<AttractionScene></AttractionScene>}>
          <Route path = ':attractionId'></Route>
        </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
