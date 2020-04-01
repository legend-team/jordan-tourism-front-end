import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function Onecity (props) {
  
  let cityName = `${props.cityName}`.toLowerCase();
  const cityAPI = `http://tourism-api-back-end.herokuapp.com/cities/${cityName}/${props.id}`;
  

  return (
    <>
      <div className="c-card swiper-slide c-carousel__item" key={props.key}>
          <div className="c-card__box c-card__box--">
              <div className="c-card__backside">
                <img className="c-card__visual swiper-lazy" src={props.image_url} />
              </div>
              <div className="c-card__frontside">
                  <a className="c-card__inner" href={cityAPI} target='_blank'>
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
