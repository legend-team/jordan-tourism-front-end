import React from 'react';

// import { Switch, Route, Link } from "react-router-dom";
// import Reviews from '../about-jordan/reviews.js'
import Onesite from '../onesite/onesite.js'
// import { When } from '../if/if.js';
// import Modal from '../modal/modal.js';

const citiesAPI = 'http://tourism-api-back-end.herokuapp.com/cities';
const sitesAPI = 'http://tourism-api-back-end.herokuapp.com/sites';
const reviewsAPI = 'http://tourism-api-back-end.herokuapp.com/reviews'


const If = props => {
  return props.condition ? props.children : null;
}
class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesList: [],
      city: {},
      sitesList:[],
      site:{},
      reviewsList: [],
      review: {},
      showDetails: false,
      details: {},
      value: ''

    };
  }

  handleInputChange = e => {
    this.setState({ city: { ...this.state.city, [e.target.name]: e.target.value } });
    this.setState({ site: { ...this.state.site, [e.target.name]: e.target.value } });
  };
  
  handleInputChangeR = e => {
    // this.setState({value: e.target.value});
    this.setState({ review: { ...this.state.review, [e.target.name]: e.target.value } });
    console.log('oooooosssnnnnsssss', this.state.value);

    
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

  addSite = (e) => {

    e.preventDefault();
    e.target.reset();

    const _updateState = newSite =>
      this.setState({
        sitesList: [...this.state.sitesList, newSite]
        
     
      });

    this.callAPI(sitesAPI, 'POST', this.state.site, _updateState);

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
    const  _updateSiteState = data => this.setState({ sitesList: data });
    this.callAPI(sitesAPI, 'GET', undefined, _updateSiteState);
    console.log('fffffffffff', this.state.site)
  };

  componentDidMount = () => {
    this.getcitiescitys();
    this.getsitescitys();
  }
 
  addreview = (e) => {

    e.preventDefault();
    e.target.reset();

    const _updateState = newreview =>
      this.setState({
        reviewsList: [...this.state.reviewsList, newreview],
      });

    this.callAPI(reviewsAPI, 'POST', this.state.review, _updateState);

  };
  //href={`${citiesAPI}/${city.name}/${city._id}`}
  render() {
    return (
 
      <div className="citiesContainer">
              <div>
            {/* <h3>Add Item</h3> */}
            {/* <Gallery/> */}
            <form onSubmit={this.addreview}>
              <label>
                <span>Site Name</span>
                <select  name="siteName"
                  onChange={this.handleInputChangeR}>
                  
               {this.state.sitesList.map(site => (
               <option value={site.historical_name} >{site.historical_name}</option>
               ))}

              {/* {console.log('select  ffff')} */}
                </select>
              </label>
            
              <label>
                <span>Review</span>
                <input type="text" name="review" placeholder="review" onChange={this.handleInputChangeR} />
              </label>
              
              <button id="add">Add Item</button>
            </form>
          
          </div>
         
         {this.state.citiesList.map(city => (
          <ul>
            <li className="citiesContainer"
                id="model"
                // className={`complete-${city.complete.toString()}`}
                key={city._id} cityN={city.name}>
                  {/* <img className="citiesImg" src={city.image_url} /> */}
                  <div className="centered">JORDAN CITIES</div>
                  <div className='container' id={city.name}>
                    <div className="about">{city.name}</div>
                    <div className="hometext">{city.description}</div>
                    </div>
                </li>
          <ul>
          {city.achistoricalPlaces.map(site => (

          //  console.log('inside return', site.reviews)
          <If condition={site.cityName}>
          <Onesite
          keysite = {site._id}
          historical_name = {site.historical_name}
          brief = {site.brief_info}
          img = {site.image_link}
          loggedIn ={this.props.loggedIn}
          reviews = {site.reviews}


          />
    </If>
               
          ))}
          
           

          </ul>
        </ul>
    
    ))}

    </div>
    )
      
}}
export default City;


