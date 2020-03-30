
import React from 'react';
import Reviews from '../about-jordan/reviews.js'

const If = props => {
  return props.condition ? props.children : null;
}
class Onesite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: []
    };
  }
  render() {
    return (
      <>
        {console.log('inside onesite', this.props)}
        <li key={this.props.key}>
          <div>{this.props.historical_name}</div>
          <div>{this.props.brief}</div>
          {/* <div>{this.props.img}</div> */}
          <img src={this.props.img} />
        </li>
        <If condition={this.props.loggedIn}>

          <Reviews
            siteId={this.props.key}
            historical_name={this.props.historical_name}
          />
        </If>


      </>
    )
  }
}
export default Onesite;


