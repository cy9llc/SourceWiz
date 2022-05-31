import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Headbar from "./navbar"
import reportWebVitals from './reportWebVitals';
import Linki from './linki';
import Error from './404';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Headbar />
    
    <Router>
      <Routes>
        <Route  path='/' element={<Navigate to="/recruit"/>}/>
        <Route  path='/recruit' element={<Linki/>}> </Route>
        <Route exact path='*' element={<Error/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();