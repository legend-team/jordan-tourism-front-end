import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Switch, Route, Link } from "react-router-dom";
// import City from '../sities/sites.js'
import Onecity from '../Onecity/Onecity.js'
import { CityContext, LoginProvider } from '../context/context.js'

import { When } from '../if/if.js';
import Modal from '../modal/modal.js';
import './cities.scss'

// const citiesAPI = 'http://localhost:3000/cities';
const citiesAPI = 'https://jordan-explorers.herokuapp.com/cities';

class Cities extends React.Component {

  static contextType = CityContext;

  constructor(props) {
    super(props);
    this.state = {
      citiesList: [],
      city: {},
      // showDetails: false,
      // details: {},
    };
  }

  callAPI = (url, method = 'get', body, handler, errorHandler) => {

    return fetch(url, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(response => response.json())
      .then(data => typeof handler === 'function' ? handler(data) : null)
      .catch((e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e));
      
  };

  getcitiescitys = () => {
    const _updateState = data => this.setState({ citiesList: data });
    this.callAPI(citiesAPI, 'GET', undefined, _updateState);
  };

  componentDidMount = () => {
    this.getcitiescitys();
  }

  mylink = (link) => {
    console.log('link from cities => ', link);
    // this.props.jjj(link)
    this.context.cityLink(link)
  }

  // handleInputChange = e => {
  //   this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
  // };


  // addcity = (e) => {

  //   e.preventDefault();
  //   e.target.reset();

  //   const _updateState = newcity =>
  //     this.setState({
  //       citiesList: [...this.state.citiesList, newcity],
  //     });

  //   this.callAPI(citiesAPI, 'POST', this.state.city, _updateState);

  // };

  // deletecity = id => {

  //   const _updateState = (results) =>
  //     this.setState({
  //       citiesList: this.state.citiesList.filter(city => city._id !== id),
  //     });

  //   this.callAPI(`${citiesAPI}/${id}`, 'DELETE', undefined, _updateState);

  // };

  // savecity = updatedcity => {

  //   const _updateState = (newcity) =>
  //     this.setState({
  //       citiesList: this.state.citiesList.map(city =>
  //         city._id === newcity._id ? newcity : city,
  //       ),
  //     });

  //   this.callAPI(`${citiesAPI}/${updatedcity.id}`, 'PUT', updatedcity, _updateState);

  // };

  // toggleComplete = id => {
  //   let city = this.state.citiesList.filter(i => i._id === id)[0] || {};
  //   if (city._id) {
  //     city.complete = !city.complete;
  //     this.savecity(city);
  //   }
  // };

  // toggleDetails = id => {
  //   let showDetails = !this.state.showDetails;
  //   let details = this.state.citiesList.filter(city => city._id === id)[0] || {};
  //   this.setState({ details, showDetails });
  // }

  render() {
    return (
      <>
        <div className="main-wrapper">
            <section className="l-section l-section--list">
                <div className="c-full-slider cities js-full-slider">
                    <div className="swiper-wrapper">

                        <div className="container">
                            <div className="c-full-slider__content">
                                <div className="c-full-slider__main-row">
                                    <p className="c-full-slider__title">
                                      Jordan is a unique destination offering breathtaking sights, charming accommodations. Jordan is home to countless wonders that are sure to leave you in awe, Jordan has witnessed an emergence of luxury hotels in Amman, Petra, Aqaba and the Dead Sea.                                    
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="c-social c-social--ghost u-is-desktop">
                    <a className="c-social__item c-social__inline-icon" href="https://www.instagram.com/visitjordan/"
                        target="_blank">
                        <i className="fab fa-instagram-square"></i>
                    </a>
                    <a className="c-social__item " href="https://www.facebook.com/VisitJordan/" target="_blank">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a className="c-social__item " href="https://twitter.com/VisitJordan/" target="_blank">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a className="c-social__item " href="https://www.youtube.com/user/visitjordan/" target="_blank">
                        <i className="fab fa-youtube-square"></i>
                    </a>
                </div>
            </section>

            <section className="l-section l-section--list" >
                <div className="container">
                    <div className="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
                        <h1 className="u-h1">Discover All the Cities of Jordan</h1>
                        <p className="u-color-gray">
                            Jordan can be regarded as a typically Arab country for its people are very warm, friendly and hospitable. Jordanians are typically happy to forgive foreigners who break the rules of etiquette. However, visitors seen to be making an effort to observe local customs will undoubtedly win favour.<br />
                                    
                            Joining local people for a cup of tea or coffee can be a wonderful way to learn more about local culture. If you are invited yet are unable to attend, then it is perfectly acceptable to decline. Place your right hand over your heart and politely make your excuses.
                        </p>
                    </div>
                    <div className="c-carousel">
                        <div className="swiper-container js-carousel">
                            <div className="swiper-wrapper">
                              {this.state.citiesList.map((city, idx) => (
                                <Onecity 
                                  key = {idx}
                                  id = {city._id}
                                  cityName = {city.name}
                                  image_url = {city.image_url}
                                  city = {this.mylink}
                                />)
                              )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </>
    )
}
}

 export default Cities; 
