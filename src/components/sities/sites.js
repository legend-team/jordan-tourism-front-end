import React from 'react';

import { Switch, Route, Link } from "react-router-dom";


import { When } from '../if/if.js';
import Modal from '../modal/modal.js';

const citiesAPI = 'http://localhost:3300/cities';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesList: [],
      city: {},
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
    this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
  };

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

  addcity = (e) => {

    e.preventDefault();
    e.target.reset();

    const _updateState = newcity =>
      this.setState({
        citiesList: [...this.state.citiesList, newcity],
      });

    this.callAPI(citiesAPI, 'POST', this.state.city, _updateState);

  };

  deletecity = id => {

    const _updateState = (results) =>
      this.setState({
        citiesList: this.state.citiesList.filter(city => city._id !== id),
      });

    this.callAPI(`${citiesAPI}/${id}`, 'DELETE', undefined, _updateState);

  };

  savecity = updatedcity => {

    const _updateState = (newcity) =>
      this.setState({
        citiesList: this.state.citiesList.map(city =>
          city._id === newcity._id ? newcity : city,
        ),
      });

    this.callAPI(`${citiesAPI}/${updatedcity.id}`, 'PUT', updatedcity, _updateState);

  };

  toggleComplete = id => {
    let city = this.state.citiesList.filter(i => i._id === id)[0] || {};
    if (city._id) {
      city.complete = !city.complete;
      this.savecity(city);
    }
  };

  toggleDetails = id => {
    let showDetails = !this.state.showDetails;
    let details = this.state.citiesList.filter(city => city._id === id)[0] || {};
    this.setState({ details, showDetails });
  }

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



        <div className="citiesContainer">
          <ul>
            {this.state.citiesList.map(city => (
              <li className="citiesContainer"
                id="model"
                // className={`complete-${city.complete.toString()}`}
                key={city._id}>
                  {console.log('dddddddddd', city.achistoricalPlaces)}

                <img className="citiesImg" src={city.image_url} />
                <div className="centered">JORDAN CITIES</div>
                <div className='container' id={city.name}>
                  <div className="about">{city.name}</div>
                  <div className="hometext">{city.description}  </div>
                </div>
                <ul>

                {city.achistoricalPlaces.map(site => (
                  <li key={site._id}>
                    <div>{site.historical_name}</div>
                <div>{site.brief_info}</div>
                <Link to={`/${city.name}/${city._id}/${site.historical_name}/${site._id}`}><img src={site.image_link}/></Link>

                  </li>
                ))}

                </ul>
              </li>
            ))}
          </ul>
        </div>



      </>
    )
  }

}
export default City

