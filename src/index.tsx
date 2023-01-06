import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test01 from './exercises/exercise1-6';
import Test02 from './exercises/exercies1-12';
import Test03 from './exercises/exercies2-1';
import Test04 from './exercises/exercies2-6';
import Test05 from './exercises/exercies2-11';
import Test06 from './exercises/exercies2-12';
// import './css/bootstrap.scss';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// ReactDOM.createRoot(document.getElementById('test01') as HTMLElement).render(
//   <React.StrictMode>
//     <Test01 />
//   </React.StrictMode>,
// );

// ReactDOM.createRoot(document.getElementById('test02') as HTMLElement).render(
//   <React.StrictMode>
//     <Test02 />
//   </React.StrictMode>,
// );

// ReactDOM.createRoot(document.getElementById('test03') as HTMLElement).render(
//   <React.StrictMode>
//     <Test03 />
//   </React.StrictMode>,
// );

// ReactDOM.createRoot(document.getElementById('test04') as HTMLElement).render(
//   <React.StrictMode>
//     <Test04 />
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById('test05') as HTMLElement).render(
  <React.StrictMode>
    <Test05 />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('test06') as HTMLElement).render(
  <React.StrictMode>
    <Test06 />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
