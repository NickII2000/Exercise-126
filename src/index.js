// import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/app/app';
// import styled from 'styled-components';

// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);