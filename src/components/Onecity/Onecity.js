import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// const cityAPI = `http://tourism-api-back-end.herokuapp.com/cities/${props.cityName.toLowerCase()}/${props.id}`;

function Onecity (props) {
  
  async function bringData(){

    // const cityAPI = `http://tourism-api-back-end.herokuapp.com/cities/${props.cityName.toLowerCase()}/${props.id}`;

    // let response = fetch(cityAPI, {
    //   method: 'get',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // let data = response.json();
    let link = `${props.cityName.toLowerCase()}/${props.id}`
    console.log('link => ',link);
    props.city(link);    
  
};
  

  return (
    <>
      <div className="c-card swiper-slide c-carousel__item" key={props.key}>
          <div className="c-card__box c-card__box--">
              <div className="c-card__backside">
                <img className="c-card__visual swiper-lazy" src={props.image_url} />
              </div>
              <div className="c-card__frontside" onClick={() => bringData()}>
                  {/* <a className="c-card__inner" onClick={() => bringData()} href={`/cities/${props.cityName.toLowerCase()}/${props.id}`} > */}
                  <a className="c-card__inner"  >
                      <div className="c-card__footer">
                          <div className="c-card__article-title">
                              <div className="c-card__subtitle"></div>
                              <div className="c-card__title">{props.cityName}</div>
                          </div>
                      </div>
                  </a>
              </div>
          </div>
      </div>
    </>
  )

}

export default Onecity;
