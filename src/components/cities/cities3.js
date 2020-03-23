import React from "react";
import City from './cities2.js';
import './cities.scss'

function Cities(props) {
  return (
    <ul>
      {props.results.map((city, index) => {
        return <City city={city} key={index} />;
      })}
    </ul>
  );
}

export default Cities;