import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

reportWebVitals();
