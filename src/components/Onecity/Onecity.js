import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CityContext } from '../context/context.js'

// const cityAPI = `http://tourism-api-back-end.herokuapp.com/cities/${props.cityName.toLowerCase()}/${props.id}`;

function Onecity (props) {
  const My_context = useContext(CityContext)
  async function bringData(){


    // const cityAPI = `http://tourism-api-back-end.herokuapp.com/cities/${props.cityName.toLowerCase()}/${props.id}`;

    // let response = fetch(cityAPI, {
    //   method: 'get',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // let data = response.json();
    // console.log('props inside onecity => ',props);
    let link = `${props.cityName.toLowerCase()}/${props.id}`
    // console.log('link => ',link);
    // props.city(link); 
    console.log('link => ,',link);
    My_context.cityLink(link);
    // My_context.link = 'jlhsdllkdflkakjj';
    // console.log( My_context)
  
  };
  

  return (
    <>
      <div className="c-card swiper-slide c-carousel__item" key={props.key}>
          <div className="c-card__box c-card__box--">
              <div className="c-card__backside">
                <img className="c-card__visual swiper-lazy" src={props.image_url} />
              </div>
              <div className="c-card__frontside" >
                  <a className="c-card__inner" onClick={() => bringData()}  href="/city">
                  {/* <a className="c-card__inner" onClick={() => bringData()}> */}
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
