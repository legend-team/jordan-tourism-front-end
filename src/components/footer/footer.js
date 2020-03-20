import React from 'react';
import {Link} from "react-router-dom";
// import './footer.scss'
const Footer = props => {
    return (
   <div class= "footer div">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <nav className = "footer nav">
            <ul className = "footer ul">
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              </ul>
          </nav>
          
     <a href="#" className="fa fa-facebook"></a>
     <a href="#" className="fa fa-twitter"></a>
     <a href="#" className="fa fa-google"></a>  
     <a href="#" className="fa fa-instagram"></a>
     <a href="#" className="fa fa-youtube"></a>




    <p className = "footer copyright">Copyright © 2020 Jordan Explorers All Rights Reserved.</p>
          
   </div>  
    
  );
}
export default Footer;

