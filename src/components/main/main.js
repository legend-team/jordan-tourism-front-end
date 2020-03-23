import React from 'react';
// import { Route } from 'react-router-dom';
import {Switch,Route} from "react-router-dom";
import './main.scss'

import Home from '../home/home.js';
import AboutJordan from '../about-jordan/about-jordan.js';
import Gallary from '../gallary/gallary.js';
import Sites from '../sities/sites.js';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us.js';
import Cities from '../cities/cities.js';
import Cities2 from '../cities/cities3.js';




class Main extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  handleSubmit = results => {
    this.setState({ results });
  };

  render (){

  
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
          <div className="cities" >
        <Cities prompt="Click to discover Jordan Cities" handler={this.handleSubmit}  />
        <Cities2 results={this.state.results} />
          </div>
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
  )}
}

export default Main;