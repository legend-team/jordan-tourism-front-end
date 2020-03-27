import React, { Component ,useContext} from 'react';
import { Link } from 'react-router-dom';
import {LoginContext} from './../context.js'
import { JsonWebTokenError } from 'jsonwebtoken';

const If = props => {
  return props.condition ? props.children : null;
}
// const Usestate =  useContext(LoginContext)

class SignInForm extends Component {
  static contextType = LoginContext
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('mmmm',this.context)
        this.context.login(this.state.username,this.state.password);        // e.target.reset();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
          >
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out!</button>
        </If>

        <If condition={!this.context.loggedIn}>
            <form onSubmit={(e)=>this.handleSubmit(e)} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="username">Username</label>
                {/* <input name="username" onChange={this.handleChange} /> */}
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
            </If>
          </div>
        );
    }
}

export default SignInForm;