import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './components/Counter';
import Timer from './components/Timer';
import MangaSearch from './components/MangaSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <Timer />
    <MangaSearch />
  </React.StrictMode>
);
