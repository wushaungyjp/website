import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/index.js';
import Home from './pages/home/index.js';
import Color from './pages/color/index.js';
import My from './pages/my/index.js';
import Error from './pages/404.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='home' element={<Home/>} />
          <Route path='my' element={<My/>} />
        </Route>
        <Route path = '*' element={<Error />} />
        <Route path='/mimi' >
          <Route path='mySeKa' element={<Color/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
