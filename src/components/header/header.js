import React from 'react';
import {Link} from "react-router-dom";

const Header = props => {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <p>JORDAN EXPLORERS</p>
        <img src="/logo.png" alt="logo"></img>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutjordan">About Jordan</Link>
              </li>
              <li>
                <Link to="/gallary"> Gallary</Link>
              </li>
              <li>
                <Link to="/cities"> Jordan Cities </Link>
              </li>
              <li>
                <Link to="/sites"> Places To Visit </Link>
              </li>
            </ul>
        </nav>
     <a href="#" class="fa fa-twitter"></a>
     <a href="#" class="fa fa-google"></a>
     <a href="#" class="fa fa-instagram"></a>
     <a href="#" class="fa fa-youtube"></a>
    
</>
  );
}    

   
export default Header;


