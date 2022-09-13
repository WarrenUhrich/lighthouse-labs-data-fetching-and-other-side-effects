import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TitleChanger from './components/TitleChanger';
import IntervalCounter from './components/IntervalCounter';
import GhibliFilms from './components/GhibliFilms';
import AxiosGhibliFilms from './components/AxiosGhibliFilms';
import AxiosGhibliData from './components/AxiosGhibliData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Data Fetching &amp; Other Side Effects</h1>
    <AxiosGhibliData />
    <AxiosGhibliFilms />
    <GhibliFilms />
    <IntervalCounter />
    <TitleChanger />
  </React.StrictMode>
);
