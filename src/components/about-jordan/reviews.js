import React from 'react';
import OneReview from './onereviewe.js'
import Onesite from '../onesite/onesite.js'
import Gallery from '../gallary/gallary.js'


// const reviewsAPI = 'http://localhost:3300/reviews';
const reviewsAPI = 'http://tourism-api-back-end.herokuapp.com/reviews';


const If = props => {
  return props.condition ? props.children : null;
}
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      review: {},
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
    this.setState({ review: { ...this.state.review, [e.target.name]: e.target.value } });
    console.log('oooooo', this.state.review);
    
  };

  callAPI = (url, method = 'get', body, handler, errorHandler) => {

    return fetch(url, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: {               
      'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(response => response.json())
      .then(data => typeof handler === 'function' ? handler(data) : null)
      .catch((e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e));
  };

  addreview = (e) => {

    e.preventDefault();
    e.target.reset();

    const _updateState = newreview =>
      this.setState({
        reviewsList: [...this.state.reviewsList, newreview],
      });

    this.callAPI(reviewsAPI, 'POST', this.state.review, _updateState);

  };

  deletereview = id => {

    const _updateState = (results) =>
      this.setState({
        reviewsList: this.state.reviewsList.filter(review => review._id !== id),
      });

    this.callAPI(`${reviewsAPI}/${id}`, 'DELETE', undefined, _updateState);

  };

  savereview = updatedreview => {

    const _updateState = (newreview) =>
      this.setState({
        reviewsList: this.state.reviewsList.map(review =>
          review._id === newreview._id ? newreview : review,
        ),
      });

    this.callAPI(`${reviewsAPI}/${updatedreview.id}`, 'PUT', updatedreview, _updateState);

  };

  toggleComplete = id => {
    let review = this.state.reviewsList.filter(i => i._id === id)[0] || {};
    if (review._id) {
      review.complete = !review.complete;
      this.savereview(review);
    }
  };

  toggleDetails = id => {
    let showDetails = !this.state.showDetails;
    let details = this.state.reviewsList.filter(review => review._id === id)[0] || {};
    this.setState({ details, showDetails });
  }

  getreviewsreviews = () => {
    const _updateState = data => this.setState({ reviewsList: data });
    this.callAPI(reviewsAPI, 'GET', undefined, _updateState);
  };

  componentDidMount = () => {
    this.getreviewsreviews();
  }
  compare = (review,b)=>{
if (review===b){return true} 
if (review!==b){return false}   }
  //href={`${reviewsAPI}/${review.name}/${review._id}`}
  render() {
    return (
      <>



        <div className="reviewsContainer">
          <ul hist={this.props.historical_name}>
          
            {console.log('props{site._id}', this.props.historical_name)}
            {this.state.reviewsList.map(review => (
              // console.log('{this.compare(review,this.props.historical_name)}',{this.compare(review,this.props.historical_name)})
                <If condition= {this.compare(review.siteName,this.props.historical_name)}>
              
              <OneReview 
              siteName = {review.siteName}
              review ={review.review}
              />
              </If> 
           ))}
          </ul>
        </div>
        <div>
            {/* <h3>Add Item</h3> */}
            {/* <Gallery/> */}
            <form onSubmit={this.addreview}>
              <label>
                
                <input
                type='hidden'
                  name="siteName"
                  onChange={this.handleInputChange}
                  // value={site.historical_name}
                />
              </label>
            
              <label>
                <span>Review</span>
                <input type="text" name="review" placeholder="review" onChange={this.handleInputChange} />
              </label>
          
              <button id="add">Add Review</button>
            </form>
          </div>

      



      </>
    )
  }

}
export default Reviews

