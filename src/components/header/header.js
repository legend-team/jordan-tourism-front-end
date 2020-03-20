import React from 'react';
import {Link} from "react-router-dom";

const Header = props => {
    return (
        <>
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
    
</>
  );
}    

   
export default Header;


