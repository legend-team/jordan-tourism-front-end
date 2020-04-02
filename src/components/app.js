import React from 'react';
import Header from './header/header.js';
import Main from '../components/main/main.js';
import Footer from './footer/footer.js';
import '../style/_reset.scss';
import LoginContext from './sign-in/context.js'
import CityContext from './context/context.js'


function App() {
    return (
      <CityContext>
      <LoginContext>
      < Header />
      < Main />
      < Footer />
      </LoginContext>
      </CityContext>
    )
  }


  
  export default App;