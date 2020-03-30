
import React from 'react';
import Reviews from '../about-jordan/reviews.js'
import { Switch, Route, Link } from "react-router-dom";

const If = props => {
    return props.condition ? props.children : null;
  }
class OneReview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          site:[]
        };
      }
      
  handleInputChange = e => {
    this.setState({ review: { ...this.state.review, [e.target.name]: e.target.value } });
    console.log('oooooo', this.state.review);
    
  };
      render() {
          return (
              <>
             { console.log('inside rev', this.props)}
             <div className='container'>
                  {/* <div className="about">{this.props.siteName}</div> */}
                  <div className="about">{this.props.review}</div>
                  </div>    
                
          
           
          
          </>
        )
}
}
export default OneReview;