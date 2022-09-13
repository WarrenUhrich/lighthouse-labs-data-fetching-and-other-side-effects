import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TitleChanger from './components/TitleChanger';
import IntervalCounter from './components/IntervalCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Data Fetching &amp; Other Side Effects</h1>
    <IntervalCounter />
    <TitleChanger />
  </React.StrictMode>
);
