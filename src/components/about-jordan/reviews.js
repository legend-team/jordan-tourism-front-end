import React from 'react';



import { When } from '../if/if.js';
import Modal from '../modal/modal.js';

const sitesAPI = 'http://localhost:3300/sites';

class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesList: [],
      site: {},
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
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

  addsite = (e) => {

    e.preventDefault();
    e.target.reset();

    const _updateState = newsite =>
      this.setState({
        sitesList: [...this.state.sitesList, newsite],
      });

    this.callAPI(sitesAPI, 'POST', this.state.site, _updateState);

  };

  deletesite = id => {

    const _updateState = (results) =>
      this.setState({
        sitesList: this.state.sitesList.filter(site => site._id !== id),
      });

    this.callAPI(`${sitesAPI}/${id}`, 'DELETE', undefined, _updateState);

  };

  savesite = updatedsite => {

    const _updateState = (newsite) =>
      this.setState({
        sitesList: this.state.sitesList.map(site =>
          site._id === newsite._id ? newsite : site,
        ),
      });

    this.callAPI(`${sitesAPI}/${updatedsite.id}`, 'PUT', updatedsite, _updateState);

  };

  toggleComplete = id => {
    let site = this.state.sitesList.filter(i => i._id === id)[0] || {};
    if (site._id) {
      site.complete = !site.complete;
      this.savesite(site);
    }
  };

  toggleDetails = id => {
    let showDetails = !this.state.showDetails;
    let details = this.state.sitesList.filter(site => site._id === id)[0] || {};
    this.setState({ details, showDetails });
  }

  getsitessites = () => {
    const _updateState = data => this.setState({ sitesList: data });
    this.callAPI(sitesAPI, 'GET', undefined, _updateState);
  };

  componentDidMount = () => {
    this.getsitessites();
  }
  //href={`${sitesAPI}/${site.name}/${site._id}`}
  render() {
    return (
      <>



        <div className="sitesContainer">
          <ul>
            {this.state.sitesList.map(site => (
              <li className="sitesContainer"
                id="model"
                // className={`complete-${site.complete.toString()}`}
                key={site._id}>
                  {/* {console.log('dddddddddd', site.achistoricalPlaces)} */}

                <img className="sitesImg" src={site.image_link} />
                <div className="centered">{site.historical_name}</div>
                <div className='container'>
                  <div className="about">{site.historical_name}</div>
                  <div className="hometext">{site.brief_info}  </div>
                </div>
                <ul>

                {site.reviews.map(review => (
                  <li key={review._id}>
                    <div>{review.review}</div>
                    <button onClick={() => this.deletesite(review._id)}>
                    Delete
                  </button>
         

                  </li>
                ))}

                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
            <h3>Add Review</h3>
            <form onSubmit={this.addsite}>
              <label>
                <input
                  name="text"
                  placeholder="Add a Review"
                  onChange={this.handleInputChange}
                />
              </label>
             
              <button id="add">Add Review</button>
            </form>
          </div>



      </>
    )
  }

}
export default Sites

