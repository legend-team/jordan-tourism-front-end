import React, { useState } from 'react';
import { If, Then } from '../if/if.js';
import SignUp from '../sign-in/pages/signUpForm.js';
import SignIn from '../sign-in/pages/signInForm.js';

const Modal = props => {

  const [ show, setShow ] = useState(true);

  function modelToggelShow(){
    setShow(!show);
  }

  return (

    <div id="glightbox-body" className="glightbox-container glightbox-auth">
      <div className="gloader visible" ></div>
      <div className="goverlay"></div>
      <div className="gcontainer">
        <div id="glightbox-slider" className="gslider">
          <div className="gslide loaded current">
            <div className="gslide-inner-content">
              <div className="ginner-container">
                <div className="gslide-media gslide-inline">
                  <div className="c-auth u-hidden ginlined-content" id="auth" >
                    <div className="c-auth__wrapper">
                      <div className="l-columns">
                        <div className="l-column is-7">
                          <div className="c-auth__main">
                            <If condition={show}>
                              <Then >
                                <SignUp close={modelToggelShow} signedUp={props.closeModel} />
                              </Then>
                            </If>
                            <If condition={!show}>
                              <Then >
                                <SignIn close={modelToggelShow} signedIn={props.closeModel}/>
                              </Then>
                            </If>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <button className="gclose gbtn" onClick={props.close}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>    

  );
};
export default Modal;
