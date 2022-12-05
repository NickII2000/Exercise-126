// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/app/app';

// // import styled from 'styled-components';
// // import { Button } from './components/app/app';

// // import BootstrapTest from './BootstrapTest';

// import './index.scss';

// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const BigButton = styled(Button)`
// //   margin: 0 auto;
// //   width: 545px;
// //   text-align: center;
// // `;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Button>Дополнительная кнопка</Button>
//     <BigButton>Большая кнопка</BigButton>
//     <BigButton as="a">Ссылка тег a</BigButton>
//     <BootstrapTest /> */}
//   </React.StrictMode >
// );


import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import { Button } from './components/app/app';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
  <StrictMode>
    <App />
    <BigButton as="a">Отправить отчет</BigButton>
  </StrictMode>,
  document.getElementById('root')
);