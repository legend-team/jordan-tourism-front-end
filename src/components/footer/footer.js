import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = props => {
  return (

    <footer class="l-footer" role="contentinfo" >
        <div class="container">
            <div class="l-footer__inner">
                <div class="l-footer__main">
                    <div class="l-footer__brand ">
                        <br />
                        <div>ABOUT JORDAN</div>
                        <br />
                        <p>
                          The Hashemite Kingdom of Jordan, which once captivated ancient travelers, continues
                          to enthral a whole new generation as a modern, vibrant nation
                        </p>
                    </div>
                    <div class="l-footer__navigations">
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">Most visited places</div>
                                <nav class="l-footer__nav">
                                  <a class="c-desc-nav__item" href="/destinations/regions/mediterranean">Amman</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/eastern-anatolia">Al-Salt</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/aegean">Zarqa</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/marmara">Jarash</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/southeastern-anatolia">Aqaba</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/central-anatolia">Petra</a>
                                  <a class="c-desc-nav__item" href="/destinations/regions/black-sea">Dead Sea</a>
                                </nav>
                            </div>
                        </div>
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">DESTINATIONS</div>
                                <nav class="l-footer__nav">
                                  <a class="c-desc-nav__item" href="/attractions/cat/see-and-nature">Irbed</a>
                                  <a class="c-desc-nav__item" href="/attractions/cat/culture">Ramtha</a>
                                  <a class="c-desc-nav__item" href="/attractions/cat/gastronomy">Tafila</a>
                                  <a class="c-desc-nav__item" href="/attractions/cat/history">Ma'an</a>
                                  <a class="c-desc-nav__item" href="/attractions/cat/health-and-wellness">Mafraq</a>
                                  <a class="c-desc-nav__item" href="/attractions/cat/religious-tourism">Ajlun</a>
                                </nav>
                            </div>
                        </div>
                        <div class="l-footer__column js-mobile-nav">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">More</div>
                                <nav class="l-footer__nav">
                                  <Link to="/contactUs" className="c-desc-nav__item">Contact Us</Link>
                                  <Link to="/aboutUs" className="c-desc-nav__item">About Us</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-footer__bottom">
                  <div>Jordan Explorers</div>
                  <div class="u-font-size-xsmall">Copyright © 2020 Jordan All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </footer>

  );
}
export default Footer;

