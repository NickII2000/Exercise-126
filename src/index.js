import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import styled from 'styled-components';
import { Button } from './components/app/app';

import './index.scss';
const BigButton = styled(Button)`
  margin: 0 auto;
  width: 545px;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button>Дополнительная кнопка</Button>
    <BigButton>Большая кнопка</BigButton>
  </React.StrictMode>
);