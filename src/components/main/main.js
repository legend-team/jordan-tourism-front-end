import React,{useContext} from 'react';
import { Switch, Route } from "react-router-dom";
import './main.scss'

import Home from '../home/home.js';
import AboutJordan from '../about-jordan/reviews.js';
import Gallary from '../gallary/gallary.js';
import Sites from '../sities/sites.js';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us.js';
import Cities from '../cities/cities.js';
import City from '../city/city.js';
import Signin from "../sign-in/sign.js";
import {LoginContext} from './../sign-in/context.js' 


const If = props => {
  return props.condition ? props.children : null;
}

function Main(){
 
  const Usestate =  useContext(LoginContext)

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
        <Route path='/city'>
          <City />
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
  );

}

export default Main;
