import React, { useState } from 'react';
import { If, Then, When } from '../if/if.js';
import Modal from '../modal/modal.js';
import { Link } from "react-router-dom";
import './header.scss'

const Header = props => {

  const [ show, setShow ] = useState(false);
  const [ logedIn, setlogedIn ] = useState(true);

  function headerToggelShow() {
    setShow(!show);
  }
  
  function spanToggelShow() {
    headerToggelShow();
    setlogedIn(!logedIn);
  }

  function logOut() {
    setlogedIn(!logedIn);
  }

  return (
    <>
      <header className="l-header">
        <div className="container">
            <div className="l-header__brand">
                &nbsp;JoRdAn<br />ExPloReRs
            </div>
            <div className="l-header__main">
                <div className="l-header__tools">
                    <div className="l-header__navigataion">
                        <nav className="c-nav">
                            <Link to="/" className="c-nav__item" >Home</Link>
                            <Link to="/cities" className="c-nav__item" >Jordan Cities</Link>
                            <Link to="/sites" className="c-nav__item" >Places To Visit</Link>
                            {/* <Link to="/signin" onClick={() => headerToggelShow()} className="c-nav__item" >Login</Link> */}
                            <If condition={logedIn}>
                              <Then>
                                <span className="c-nav__item" onClick={() => headerToggelShow()}>Login</span>
                              </Then>
                            </If>
                            <If condition={!logedIn}>
                              <Then>
                                <span className="c-nav__item" onClick={() => logOut()}>LogOut</span>
                              </Then>
                            </If>
                        </nav>
                    </div>                    
                </div>
            </div>
        </div>
      </header>

      <When condition={show}>
        <Modal close={headerToggelShow} closeModel={spanToggelShow} />
      </When>
    </>
  );
}

export default Header;
