import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './components/Counter';
import Timer from './components/Timer';
import MangaSearch from './components/MangaSearch';
import StudentLocationList from './components/StudentLocationList';
import StudentLocationList2 from './components/StudentLocationList2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentLocationList2 />
    <Counter />
    <Timer />
    <MangaSearch />
  </React.StrictMode>
);
