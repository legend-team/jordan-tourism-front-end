import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app.js';


function All() {
  return (
    <>
       <Router>
        <App />
      </Router>
    </>
  )
}

const entryPoint = document.getElementById('root');
ReactDOM.render(<All />, entryPoint);