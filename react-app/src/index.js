import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TitleComponent from './components/TitleComponent';
import IntervalCounter from './components/IntervalCounter';
import FoxPictures from './components/FoxPictures';
import Locations from './components/Locations';
import LocationsAxios from './components/LocationsAxios';
import FoxPicturesAxios from './components/FoxPicturesAxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <TitleComponent />
      <LocationsAxios />
      <Locations />
      <FoxPicturesAxios />
      <FoxPictures />
      <IntervalCounter />
      <IntervalCounter />
      <IntervalCounter />
      <IntervalCounter />
      <IntervalCounter />
    </>
);
