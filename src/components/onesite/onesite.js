
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

        <div className="l-column is-4" key={this.props.key}>
            <div className="c-card ">
                <div className="c-card__box c-card__box--xsm">
                    <div className="c-card__backside">
                      <img className="c-card__visual lazyload" src={this.props.img} />
                    </div>
                    <div className="c-card__frontside">
                        <a className="c-card__inner" href="/attractions/turkish-coffee">
                          <div className="c-card__footer">
                            <div className="c-card__article-title">
                              <div className="c-card__subtitle">Destinations</div>
                              <div className="c-card__title">{this.props.historical_name}</div>
                            </div>
                          </div>
                        </a>
                    </div>
                </div>
            </div>
          <div className="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
              <h1 className="u-h4">{this.props.historical_name}</h1>
              <p className="u-color-gray">{this.props.brief}</p>
          </div>
        </div>

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


