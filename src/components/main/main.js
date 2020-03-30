import React,{useContext} from 'react';
// import { Route } from 'react-router-dom';
import { Switch, Route, Router } from "react-router-dom";
import './main.scss'

import Home from '../home/home.js';
import AboutJordan from '../about-jordan/reviews.js';
import Gallary from '../gallary/gallary.js';
import Sites from '../sities/sites.js';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us.js';
import Cities from '../cities/cities.js';
import Signin from "../sign-in/sign.js";
import {LoginContext} from './../sign-in/context.js' 

// const citiesAPI = 'http://localhost:3300/cities';

const If = props => {
  return props.condition ? props.children : null;
}
function Main(){
 
  const Usestate =  useContext(LoginContext)
  console.log('*********************8',Usestate.loggedIn)
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutjordan">
        <If condition={Usestate.loggedIn}>
          <AboutJordan  />
        </If>
        <If condition={!Usestate.loggedIn}>
          <Signin/>
        </If>
        </Route>
        <Route path="/gallary">
          <Gallary />
        </Route>
        <Route path="/cities">
          <Cities />
        </Route>
        <Route path='/sites'>
          <Sites loggedIn = {Usestate.loggedIn}/>
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        </Switch>
    </main>
  )
}
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     citiesList: [],
  //     city: {},
  //     showDetails: false,
  //     details: {},
  //   };
  // }

  // handleInputChange = e => {
  //   this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
  // };

  // callAPI = (url, method = 'get', body, handler, errorHandler) => {

  //   return fetch(url, {
  //     method: method,
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: body ? JSON.stringify(body) : undefined,
  //   })
  //     .then(response => response.json())
  //     .then(data => typeof handler === 'function' ? handler(data) : null)
  //     .catch((e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e));
  // };


//     return (
//       <main>

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/aboutjordan">
//             <AboutJordan />
//           </Route>
//           <Route path="/gallary">
//             <Gallary />
//           </Route>
//           <Route path="/cities">
//             <Cities />
//           </Route>
//           <Route path='/sites'>
//             <Sites />
//           </Route>
//           <Route path="/contactus">
//             <ContactUs />
//           </Route>
//           <Route path="/aboutus">
//             <AboutUs />
//           </Route>
//           <Route path="/signin">
//             <Signin/>
//           </Route>
//         </Switch>


//       </main>
//     )
// }

export default Main;