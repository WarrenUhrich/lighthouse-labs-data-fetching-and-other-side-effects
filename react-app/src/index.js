import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TitleComponent from './components/TitleComponent';
import IntervalCounter from './components/IntervalCounter';
import BigCatPictures from './components/BigCatPictures';
import StudentInfo from './components/StudentInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleComponent />
    <IntervalCounter />
    <StudentInfo />
    <BigCatPictures />
  </React.StrictMode>
);
