import React , { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Switch, Route, Link } from "react-router-dom";
// import City from '../sities/sites.js'
import Onecity from '../Onecity/Onecity.js'

import { When } from '../if/if.js';
import Modal from '../modal/modal.js';
import './cities.scss'

// const citiesAPI = 'http://localhost:3000/cities';
const citiesAPI = 'http://tourism-api-back-end.herokuapp.com/cities';

function City (props) {

 const myAPI = `${citiesAPI}/${props.link}`

    console.log('props inside City => ',props);
    console.log('myAPI inside City => ',myAPI);


  // handleInputChange = e => {
  //   this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
  // };

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

  getcitiescitys = () => {
    const _updateState = data => this.setState({ citiesList: data });
    this.callAPI(citiesAPI, 'GET', undefined, _updateState);
  };

  componentDidMount = () => {
    this.getcitiescitys();
  }
  //href={`${citiesAPI}/${city.name}/${city._id}`}
  render() {
    return (
      <>
        <div className="main-wrapper">
            <section className="l-section l-section--list">
                <div className="c-full-slider js-full-slider">
                    <div className="swiper-wrapper">

                        <div className="container">
                            <div className="c-full-slider__content">
                                <div className="c-full-slider__main-row">
                                    <p className="c-full-slider__title">
                                      {this.state.citiesList.name}
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
                        <h1 className="u-h1">
                          Best Sites in 
                          {this.state.citiesList.name}
                        </h1>
                        <p className="u-color-gray">
                          {this.state.citiesList.description}
                        </p>
                    </div>
                    <div className="c-carousel">
                        <div className="swiper-container js-carousel">
                            <div className="swiper-wrapper">
                            {this.state.citiesList.achistoricalPlaces.map((site, idx) => (
                              <div className="l-column is-4" key={idx}>
                                  <div className="c-card ">
                                      <div className="c-card__box c-card__box--xsm">
                                          <div className="c-card__backside">
                                            <img className="c-card__visual lazyload" src={site.image_link} />
                                          </div>
                                          <div className="c-card__frontside">
                                              <a className="c-card__inner" href="/attractions/turkish-coffee">
                                                <div className="c-card__footer">
                                                  <div className="c-card__article-title">
                                                    <div className="c-card__subtitle">Destinations</div>
                                                    <div className="c-card__title">{site.historical_name}</div>
                                                  </div>
                                                </div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            ))}
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

 export default City; 
