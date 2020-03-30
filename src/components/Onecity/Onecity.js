
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Onecity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // {console.log('fffffffffff', props)
  render() {
    return (
      <>



        <div className="citiesContainer">
          <ul>

            <li className="citiesContainer"
              id="model"
              // className={`complete-${city.complete.toString()}`}
              key={this.props.key}>

              {/* {console.log('fffffffffff', city)} */}
              <div className="citiesContainer">

                <span className="cityName">
                  {this.props.cityName}
                </span>
                <a > <Link to={`/sites/#${this.props.cityName}`}><img src={this.props.image_url} className="cityImage" />
                </Link> </a>

              </div>


            </li>

          </ul>
        </div>
      </>
    )
  }
}
export default Onecity;
