// import React from 'react';
import React, { useState, useEffect } from 'react';
import { When } from '../if/if.js';
import Modal from '../modal/modal.js';
import { Link } from "react-router-dom";
import './header.scss'

const Header = props => {

  const [ show, setShow ] = useState(false);

  function headerToggelShow() {
    console.log("show => ",show);
    setShow(!show);
    console.log("show => ",show);
  }

  return (
    <>
      <header class="l-header">
        <div class="container">
            <div class="l-header__brand">
                &nbsp;JoRdAn<br />ExPloReRs
            </div>
            <div class="l-header__main">
                <div class="l-header__tools">
                    <div class="l-header__navigataion">
                        <nav class="c-nav">
                            <Link to="/" className="c-nav__item" >Home</Link>
                            <Link to="/cities" className="c-nav__item" >Jordan Cities</Link>
                            <Link to="/sites" className="c-nav__item" >Places To Visit</Link>
                        </nav>
                    </div>
                    <div class="l-header__actions">
                        <div class="c-icon-nav">
                            {/* <a class="c-icon-nav__item js-auth-button js-auth-lightbox" href="#auth"> */}
                                <span class="js-auth-label" onClick={() => headerToggelShow()}>Login</span>
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <When condition={show}>
        <Modal />
      </When>
    </>
  );
}

export default Header;
