import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import AjaxExample from './components/AjaxExample';
import StudentLocationList from './components/StudentLocationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Hello, World!</p>
    <Counter />
    <Timer />
    <AjaxExample />
    <StudentLocationList />
  </React.StrictMode>
);
