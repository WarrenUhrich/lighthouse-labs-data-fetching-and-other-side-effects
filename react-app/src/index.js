import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TitleComponent from './components/TitleComponent';
import IntervalCounter from './components/IntervalCounter';
import FoxPicturesAxios from './components/FoxPicturesAxios';
import Locations from './components/Locations';
// import FoxPictures from './components/FoxPictures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleComponent />
    <IntervalCounter />
    <Locations />
    {/* <FoxPictures /> */}
    <FoxPicturesAxios />
  </React.StrictMode>
);
