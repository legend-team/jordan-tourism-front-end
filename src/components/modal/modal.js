
import React from 'react';
import { When } from '../if/if.js';


const Modal = props => {

  const [ show, setShow ] = useState(false);

  function modelToggelShow(){
    console.log("show => ",show);
    setShow(!show);
    console.log("show => ",show);
  }

  return (

    <div id="glightbox-body" class="glightbox-container glightbox-auth">
      <div class="gloader visible" style="display: none;"></div>
      <div class="goverlay"></div>
      <div class="gcontainer">
        <div id="glightbox-slider" class="gslider">
          <div class="gslide loaded current">
            <div class="gslide-inner-content">
              <div class="ginner-container">
                <div class="gslide-media gslide-inline">
                  <div class="c-auth u-hidden ginlined-content" id="auth" style="height: auto; max-width: 900px;">
                    <div class="c-auth__wrapper">
                      <div class="l-columns">
                        <div class="l-column is-7">
                          <div class="c-auth__main">
                            <div class="c-auth__section js-auth-section">
                              <div class="u-h2">Create Profile</div>
                              <div class="c-auth__form">
                                <form class="c-form" id="register">
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="FirstName" type="text" placeholder="First Name" required="required" />
                                  </div>
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="LastName" type="text" placeholder="Last Name" required="required" />
                                  </div>
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="Email" type="email" placeholder="Email" minlength="8" required="required" />
                                  </div>
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="Location" type="text" placeholder="Location" required="required" />
                                  </div>
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="Password" type="password" placeholder="Password" minlength="8" required="required" />
                                  </div>
                                  <div class="c-form__action-group">
                                    <button class="c-button c-button--block c-button--info" type="submit">REGISTER</button>
                                    <div class="c-form__action-label">
                                      {/* ALREADY REGISTERED?<a class="js-auth-action u-primary-color" href="#" data-type="login">LOGIN</a> */}
                                      ALREADY REGISTERED?<button class="js-auth-action u-primary-color" onClick={() => modelToggelShow()} data-type="login">LOGIN</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div class="c-auth__section js-auth-section u-hidden">
                              <div class="u-h2">Login</div>
                              <div class="c-auth__form">
                                <form class="c-form" id="login">
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="Email" type="email" placeholder="Email" />
                                  </div>
                                  <div class="c-form__group">
                                    <input class="c-form-control" name="Password" type="password" placeholder="Password" />
                                  </div>
                                  <div class="c-form__action-group">
                                    <input class="c-form-control" name="Provider" type="hidden" value="pixel-auth" />
                                    <button class="c-button c-button--block c-button--info" type="submit">LOGIN</button>
                                    <div class="c-form__action-label">
                                      DON'T YOU HAVE ACCOUNT?<a class="js-auth-action" href="#" data-type="register">REGISTER</a>
                                    </div>
                                  </div>
                                </form>
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
          </div>
        </div>
      </div>
    </div>    

    <When condition={show}>
      <Modal />
    </When>
  );
};
export default Modal;
