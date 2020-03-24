import React from 'react';
import Header from './header/header.js';
import Main from '../components/main/main.js';
import Footer from './footer/footer.js';
import '../style/_reset.scss';
// import '../components/footer/footer.scss'
console.log('iiiiiiiii');

function App() {
    return (
      <React.Fragment>
      < Header />
      < Main />
      {/* < Footer /> */}
      </React.Fragment>
    )
  }


  
  export default App;