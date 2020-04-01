import React, { Component } from 'react';
import { LoginContext } from './../context.js'

class SignUpForm extends Component {

  static contextType = LoginContext

  constructor() {
      super();
      this.state = {
          email: '',
          password: '',
          name: '',
         
          
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log("signed Up successfuly");
      this.context.signUp(this.state.name,this.state.password,this.state.email);

      // onClick={this.props.signedUp}
      this.props.signedUp();
  }
  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
}

  render() {
      return (
        <>

          <div className="c-auth__section js-auth-section">
            <div className="u-h2">Create an account</div>
            <div className="c-auth__form">
              <form className="c-form" id="register" onSubmit={this.handleSubmit} >
                <div className="c-form__group">*
                  <input className="c-form-control" name="name" type="text" placeholder="Full Name" required="required" value={this.state.name} onChange={this.handleChange}  />
                </div>
                <div className="c-form__group">*
                  <input className="c-form-control" name="password" type="password" placeholder="Password" minLength="6" required="required" value={this.state.password} onChange={this.handleChange}  />
                </div>
                <div className="c-form__group">
                  <input className="c-form-control" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="c-form__action-group">
                  <button className="c-button c-button--block c-button--info" type="submit">Sign Up</button>
                  <div className="c-form__action-label">
                    Already registered?<a className="js-auth-action u-primary-color login" onClick={this.props.close} data-type="login">Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </>
      );
  }
}

export default SignUpForm;
