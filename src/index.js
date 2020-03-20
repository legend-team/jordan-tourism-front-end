import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import App from './components/app.js';


function Main() {
  return (
    <>
       <Router>
        <App />
      </Router>
    </>
  )
}

const entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);