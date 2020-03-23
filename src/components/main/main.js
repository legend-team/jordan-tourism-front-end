import React from 'react';
// import { Route } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import './main.scss'

import Home from '../home/home.js';
import AboutJordan from '../about-jordan/reviews.js';
import Gallary from '../gallary/gallary.js';
import Sites from '../sities/sites.js';
import ContactUs from '../contact-us/contact-us';
import AboutUs from '../about-us/about-us.js';
import Cities from '../cities/cities.js';



// const citiesAPI = 'http://localhost:3300/cities';

class Main extends React.Component {

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



  render() {
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
          <Route path='/sites'>
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
}

export default Main;