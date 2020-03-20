import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
    
      } from "react-router-dom";


const Footer = props => {
    return (
   <>
          <nav>
            <ul>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              </ul>
          </nav>

    <p>Copyright © 2020 Jordan Explorers All Rights Reserved.</p>
          
   </>  
    
  );
}
export default Footer;

