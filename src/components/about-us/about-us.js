// import React from 'react';
// function AboutUs() {
//     return (
//       <div>
//         <h2>About Us</h2>

//         <h3>Muna AlShorman</h3>

//         <h3>Saja Sawalgah</h3>

//         <h3>Ahmad Sawalgah</h3>

//       </div>
//     );
//   }
// export default AboutUs;


import React from "react";

function City(props) {
  const API = `http://tourism-api-back-end.herokuapp.com/cities/amman/${props.city.id}`
  return (
    <li>
      <a href={API} > <img src={props.city.url}/> </a>
    </li>
  );
}
//      <a href={props.person.url}> {props.person.name}</a>

export default City;