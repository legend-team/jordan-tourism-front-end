import React, { Component } from 'react';
import {LoginContext} from './../context.js'

class SignInForm extends Component {

  static contextType = LoginContext

  constructor() {
      super();
      this.state = {
          username: '',
          password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log('where is my man',this.state.username,this.state.password)
      this.context.login(this.state.username,this.state.password);        
      e.target.reset();

      // onClick={this.props.signedIn}
      this.props.signedIn();
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
            <div className="u-h2">Login</div>
            <div className="c-auth__form">
              <form className="c-form" id="login" onSubmit={this.handleSubmit}>
                <div className="c-form__group">*
                  <input className="c-form-control" name="username" type="text" placeholder="Full Name" required="required" value={this.state.username} onChange={this.handleChange}  />
                </div>
                <div className="c-form__group">*
                  <input className="c-form-control" name="password" type="password" placeholder="Password" required="required" value={this.state.password} onChange={this.handleChange}  />
                </div>
                <div className="c-form__action-group">
                  <button className="c-button c-button--block c-button--info" type="submit">Login</button>
                  <div className="c-form__action-label">
                    Don't you have Account?<a className="js-auth-action login" onClick={this.props.close} data-type="register">Sign Up</a>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </>

      );
  }
}

export default SignInForm;