import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = props => {
  return (

    <footer className="l-footer" role="contentinfo" >
        <div className="container">
            <div className="l-footer__inner">
                <div className="l-footer__main">
                    <div className="l-footer__brand ">
                        <br />
                        <div>ABOUT JORDAN</div>
                        <br />
                        <p>
                          The Hashemite Kingdom of Jordan, which once captivated ancient travelers, continues
                          to enthral a whole new generation as a modern, vibrant nation
                        </p>
                    </div>
                    <div className="l-footer__navigations">
                        <div className="l-footer__column">
                            <div className="c-desc-nav">
                                <div className="c-desc-nav__title js-mobile-nav">Most visited places</div>
                                <nav className="l-footer__nav">
                                  <a className="c-desc-nav__item" href="/destinations/regions/mediterranean">Amman</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/eastern-anatolia">Al-Salt</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/aegean">Zarqa</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/marmara">Jarash</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/southeastern-anatolia">Aqaba</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/central-anatolia">Petra</a>
                                  <a className="c-desc-nav__item" href="/destinations/regions/black-sea">Dead Sea</a>
                                </nav>
                            </div>
                        </div>
                        <div className="l-footer__column">
                            <div className="c-desc-nav">
                                <div className="c-desc-nav__title js-mobile-nav">DESTINATIONS</div>
                                <nav className="l-footer__nav">
                                  <a className="c-desc-nav__item" href="/attractions/cat/see-and-nature">Irbed</a>
                                  <a className="c-desc-nav__item" href="/attractions/cat/culture">Ramtha</a>
                                  <a className="c-desc-nav__item" href="/attractions/cat/gastronomy">Tafila</a>
                                  <a className="c-desc-nav__item" href="/attractions/cat/history">Ma'an</a>
                                  <a className="c-desc-nav__item" href="/attractions/cat/health-and-wellness">Mafraq</a>
                                  <a className="c-desc-nav__item" href="/attractions/cat/religious-tourism">Ajlun</a>
                                </nav>
                            </div>
                        </div>
                        <div className="l-footer__column js-mobile-nav">
                            <div className="c-desc-nav">
                                <div className="c-desc-nav__title js-mobile-nav">More</div>
                                <nav className="l-footer__nav">
                                  <Link to="/contactUs" className="c-desc-nav__item">Contact Us</Link>
                                  <Link to="/aboutUs" className="c-desc-nav__item">About Us</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  );
}
export default Footer;

