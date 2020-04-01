import React from 'react';
import Header from './header/header.js';
import Main from '../components/main/main.js';
import Footer from './footer/footer.js';
import '../style/_reset.scss';
import LoginContext from './sign-in/context.js'
// import '../components/footer/footer.scss'
console.log('iiiiiiiii');

function App() {
    return (
      <LoginContext>
      {/* < Header /> */}
      < Main />
      {/* < Footer /> */}
      </LoginContext>
    )
  }


  
  export default App;