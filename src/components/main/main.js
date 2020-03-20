import React from 'react';
// import { Route } from 'react-router-dom';
import {Switch,Route} from "react-router-dom";

import Home from '../home/home.js';
import AboutJordan from '../about-jordan/about-jordan.js';
import Gallary from '../gallary/gallary.js';
import Cities from '../cities/cities.js';
import Sites from '../sities/sites.js';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us.js';

const Main = props => {
 

  return (
    <main>
     
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutjordan">
          <AboutJordan />
        </Route>
        <Route path="/gallary">
          <Gallary />
        </Route>
        <Route path="/cities">
          <Cities />
        </Route>
        <Route path="/sites">
          <Sites />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      </Switch>
      </main>
  )
}

export default Main;