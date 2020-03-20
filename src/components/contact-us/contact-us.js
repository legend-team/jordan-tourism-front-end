import React from 'react';

import './contact-us.scss'
function ContactUs() {
    return (
     <>

    <h2>Contact Us</h2>
    <form >
    <label for="fname"> First Name </label>
      <input type="text"></input>
    <label for="lname"> Last Name </label>
      <input type="text"></input>
    <label for="email"> Your Email </label>
      <input type="text"></input>
    <label for="msg"> Your message </label>
      <textarea> </textarea>
      <input type="submit" ></input>
    </form> 
</>
    );
  }

export default ContactUs;