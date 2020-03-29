import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Switch, Route, Link } from "react-router-dom";
// import City from '../sities/sites.js'


import { When } from '../if/if.js';
import Modal from '../modal/modal.js';
import './cities.scss'




const citiesAPI = 'http://tourism-api-back-end.herokuapp.com/cities';

class Cities extends React.Component {
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
        <img className="citiesImg" src='https://d3qvqlc701gzhm.cloudfront.net/full/a1609720c3bbae592b1303dcdde74d94fd4bcd4bae1e3372428d11bc110b8a87.jpg' />
        <div className="centered">JORDAN CITIES</div>
        <div className='container'>

          <div className="about">PEOPLE OF JORDAN</div>
          <div className="hometext">
            Jordan can be regarded as a typically Arab country for its people are very warm, friendly and hospitable. Jordanians are typically happy to forgive foreigners who break the rules of etiquette. However, visitors seen to be making an effort to observe local customs will undoubtedly win favour.

            Joining local people for a cup of tea or coffee can be a wonderful way to learn more about local culture. If you are invited yet are unable to attend, then it is perfectly acceptable to decline. Place your right hand over your heart and politely make your excuses.
    </div>
        </div>


        <div className="citiesContainer">
          <ul>
            {this.state.citiesList.map(city => (
              <li className="citiesContainer"
                id="model"
                // className={`complete-${city.complete.toString()}`}
                key={city._id}>

                {/* {console.log('fffffffffff', city)} */}
                <div className="citiesContainer">

                  <span className="cityName">
                    {city.name}
                  </span>
                  <a > <Link to={`/sites/${city.name}/${city.histori}`}><img src={city.image_url} className="cityImage" />
                  </Link> </a>

                </div>
                {/* <Route exact path={`/${city.name}/${city._id}`}>
                  <City />
                </Route> */}


              </li>
            ))}
          </ul>
        </div>

   



      </>
    )
  }

}



export default Cities;