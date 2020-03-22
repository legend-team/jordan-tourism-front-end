import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss'
const Footer = props => {
  return (
    <div class="footer div">




      <nav className="footer nav">
        <ul className="footer ul">
          <li className="footer">
            <a className="footera"> <Link to="/contactUs">Contact Us</Link></a>
          </li>
          <li className="footer">
            <a className="footera"> <Link to="/aboutUs">About Us</Link></a>
          </li>
          <li className="footer" className="footercopyright"><a className="footera">Copyright © 2020 Jordan Explorers All Rights Reserved.</a></li>
        </ul>
      </nav>






    </div>

  );
}
export default Footer;

