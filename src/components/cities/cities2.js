import React from "react";
import './cities.scss'


function City(props) {
    const API = `http://localhost:3300/cities/amman/${props.city.id}`
    return (
        // <li className="citieslist">
        <>
        <div className="citiesContainer">

            <div className="cityName">{props.city.name}</div>
            <img className="cityImage" src={props.city.url} />
        </div>
            {/* <a href={API} > <img className="cityImage" src={props.city.url} /> </a>
            <a className="cityName">{props.city.name}</a> */}
        </>

    );
}
//      <a href={props.person.url}> {props.person.name}</a>

export default City;