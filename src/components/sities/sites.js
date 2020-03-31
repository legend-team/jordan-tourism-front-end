import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';



// import { Switch, Route, Link } from "react-router-dom";
// import Reviews from '../about-jordan/reviews.js'
import Onesite from '../onesite/onesite.js'
// import { When } from '../if/if.js';
// import Modal from '../modal/modal.js';

// const citiesAPI = 'http://localhost:3000/cities';
const citiesAPI = 'http://tourism-api-back-end.herokuapp.com/cities';
const sitesAPI = 'http://tourism-api-back-end.herokuapp.com/sites';

const If = props => {
  return props.condition ? props.children : null;
}
class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesList: [],
      city: {},
      site: [],
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
    this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
    this.setState({ site: { ...this.state.site, [e.target.name]: e.target.value } });
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
        citiesList: [...this.state.citiesList, newcity]


      });

    this.callAPI(citiesAPI, 'POST', this.state.city, _updateState);

  };

  deletecity = id => {

    const _updateState = (results) =>
      this.setState({
        citiesList: this.state.citiesList.filter(city => city._id !== id)

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
  getsitescitys = () => {
    const _updateSiteState = data => this.setState({ site: data });
    this.callAPI(sitesAPI, 'GET', undefined, _updateSiteState);
    console.log('fffffffffff', this.state.site)
  };

  componentDidMount = () => {
    this.getcitiescitys();
    this.getsitescitys();
  }


  //href={`${citiesAPI}/${city.name}/${city._id}`}
  render() {
    return (
      <div className="citiesContainer">
        {this.state.citiesList.map(city => (
          <ul>
            <li className="citiesContainer"
              id="model"
              // className={`complete-${city.complete.toString()}`}
              key={city._id} cityN={city.name}>
              {/* <img className="citiesImg" src={city.image_url} /> */}
              <div className='container' id={city.name}>
                <div className="about">{city.name}</div>
                <div className="hometext">{city.description}</div>
              </div>
            </li>
            <ul>
              {city.achistoricalPlaces.map(site => (

                //  console.log('inside return', site.reviews)
                  <div>

                  <If condition={!this.props.loggedIn}><Link to='/signin'><button>Log In To Add Review</button> </Link></If>
                <If condition={site.cityName}>
                  <Onesite
                    keysite={site._id}
                    historical_name={site.historical_name}
                    brief={site.brief_info}
                    // img={site.image_link}
                    loggedIn={this.props.loggedIn}
                    reviews={site.reviews}
                    />
                </If>
                    </div>

              ))}



            </ul>
          </ul>

        ))}

      </div>
    )

  }
}
export default City;





// import React from 'react';
// function Sites() {
//     return (
//       <div>
//         <h2>Sites</h2>
//       </div>
//     );
//     }
// export default Sites;

