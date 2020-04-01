import React from 'react';
import './home.scss'

function Home() {
  return (
    
    <main className="main-wrapper">
        <section className="l-section l-section--list">
            <div className="c-full-slider js-full-slider">
                <div className="swiper-wrapper">

                    <div className="container">
                        <div className="c-full-slider__content">
                            <div className="c-full-slider__main-row">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="c-social c-social--ghost u-is-desktop">
                <a className="c-social__item c-social__inline-icon" href="https://www.instagram.com/visitjordan/"
                    target="_blank">
                    <i className="fab fa-instagram-square"></i>
                </a>
                <a className="c-social__item " href="https://www.facebook.com/VisitJordan/" target="_blank">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a className="c-social__item " href="https://twitter.com/VisitJordan/" target="_blank">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a className="c-social__item " href="https://www.youtube.com/user/visitjordan/" target="_blank">
                    <i className="fab fa-youtube-square"></i>
                </a>
            </div>

        </section>

        <section className="l-section l-section--list" >
            <div className="container">
                <div className="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
                    <h1 className="u-h1">Discover the very best of Jordan</h1>
                    <p className="u-color-gray">
                        Explore our ancient history and natural beauty. Immerse yourself into the rich culture whilst
                        experiencing the mouth-watering flavours of Jordan cuisine!
                    </p>
                </div>
                <div className="c-carousel">
                    <div className="swiper-container js-carousel">
                        <div className="swiper-wrapper">

                            <div className="c-card swiper-slide c-carousel__item">
                                <div className="c-card__box c-card__box--">
                                    <div className="c-card__backside">
                                      <img className="c-card__visual swiper-lazy"
                                            src="https://d3qvqlc701gzhm.cloudfront.net/thumbs/587be118e6f8894d9f7f130bfbee70b338eaacf6ba82e6ca82f0f0d9159f8952-750.jpg" />
                                    </div>
                                    <div className="c-card__frontside">
                                        <a className="c-card__inner" target="_blank"
                                            href="http://tourism-api-back-end.herokuapp.com/sites/petra/5e7c93cf721c1500174d7272">
                                            <div className="c-card__footer">
                                                <div className="c-card__article-title">
                                                    <div className="c-card__subtitle"></div>
                                                    <div className="c-card__title">Petra
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="c-card swiper-slide c-carousel__item">
                                <div className="c-card__box c-card__box--">
                                    <div className="c-card__backside">
                                      <img className="c-card__visual swiper-lazy"
                                            src="https://lh6.googleusercontent.com/proxy/i8hp3FnegvqqndvZO603phGYX9MdZsKn5Bw_og3WlVcdkkK__BgnalLFW1rH9A745ECAp8EbhnFKhkQInMXmCLLmG2WaXYKqBkL--Mbv_YY6gSri1QtSXbx0okfFhd2ToLts-TLQLUwhzQ" />
                                    </div>
                                    <div className="c-card__frontside">
                                        <a className="c-card__inner" target="_blank"
                                            href="http://tourism-api-back-end.herokuapp.com/sites/aqaba%20aquarium/5e7c93a7721c1500174d726f">
                                            <div className="c-card__footer">
                                                <div className="c-card__article-title">
                                                    <div className="c-card__subtitle"></div>
                                                    <div className="c-card__title">Aqaba
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="c-card swiper-slide c-carousel__item">
                                <div className="c-card__box c-card__box--">
                                    <div className="c-card__backside">
                                      <img className="c-card__visual swiper-lazy"
                                            src="https://i.guim.co.uk/img/media/80551c3ccb8b695036bbb6214eb50e4abd125c0c/0_80_4743_2846/master/4743.jpg?width=700&quality=85&auto=format&fit=max&s=67f566797ad19e9fa3c6079252b9b9be" />
                                      </div>
                                    <div className="c-card__frontside">
                                        <a className="c-card__inner" target="_blank"
                                            href="http://tourism-api-back-end.herokuapp.com/sites/Street%20of%20columns/5e7c92e6721c1500174d7263">
                                            <div className="c-card__footer">
                                                <div className="c-card__article-title">
                                                    <div className="c-card__subtitle"></div>
                                                    <div className="c-card__title">Jarash</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="l-section l-section--list" >
            <div className="c-player c-player--full">
                <div className="c-player__container">
                    <div className="c-player__multimedia">
                      <video className="js-playlist-scane lazyload" controls="ture" preload="none"
                          poster="https://gofargrowclose.com/wp-content/uploads/2019/05/Petra-by-night-1-min-16.jpg" src="https://www.youtube.com/watch?v=mUD8Ye_paME&t=1s">
                      </video>
                    </div>
                    <div className="c-player__playlist">
                        <div className="c-player__header">Videos from our gallery</div>
                        <div className="c-player__body">
                            <div className="c-platlist">

                                <div className="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/turkeys_black_sea_mountains-from-the-air.mp4"
                                    data-poster="uploads/video/turkeys_black_sea_mountains-from-the-air-cover-image-deneme.jpg">
                                    <div className="c-playlist__box">
                                        <div className="c-platlist__detail">
                                            <div className="c-playlist__title">Turkey's Black Sea Mountains - From the Air
                                            </div>
                                            <div className="c-playlist__info">
                                                <div>22 December 2015</div>
                                                <div>02:42</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/turkey-home-gastro-hunt-gaziantep.mp4"
                                    data-poster="uploads/video/turkey-home-gastro-hunt-gaziantep-cover-image-deneme.jpg">
                                    <div className="c-playlist__box">
                                        <div className="c-platlist__detail">
                                            <div className="c-playlist__title">Go Turkey - # Gastro Hunt Day 3: Gaziantep
                                            </div>
                                            <div className="c-playlist__info">
                                                <div>08 August 2014</div>
                                                <div>01:31</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/the-unesco-world-heritage-sites-in-turkey.mp4"
                                    data-poster="uploads/video/the-unesco-world-heritage-sites-in-turkey-cover-image-deneme.jpg">
                                    <div className="c-playlist__box">
                                        <div className="c-platlist__detail">
                                            <div className="c-playlist__title">The UNESCO World Heritage Sites in Turkey
                                            </div>
                                            <div className="c-playlist__info">
                                                <div>12 May 2017</div>
                                                <div>02:27</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="l-section l-section--list">
            <div className="container">
                <div className="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
                    <h1 className="u-h1">Some Highlights Of Jordan</h1>
                    <p className="u-color-gray">
                        Jordan has a lot of great destinations to offer. Exceptional landmarks, wonderful natural
                        sceneries, historical legacies and a rich culture. Jordan is renowned for its hospitality and is
                        always eager to please. The perfect Jordan experience is just around the corner.
                    </p>
                </div>
                <div className="l-columns u-scrolling-wrapper">

                    <div className="l-column is-8">
                        <div className="c-card ">
                            <div className="c-card__box c-card__box--md@md-up">
                                <div className="c-card__backside">
                                  <img className="c-card__visual lazyload"
                                        src="https://cache.marriott.com/marriottassets/marriott/AMMWI/ammwi-exterior-2067-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" />
                                </div>
                                <div className="c-card__frontside">
                                    <a className="c-card__inner" href="/destinations/istanbul">
                                        <div className="c-card__footer">
                                            <div className="c-card__article-title">
                                                <div className="c-card__subtitle">Destinations</div>
                                                <div className="c-card__title">AMMAN: The Capital</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="l-column is-4">
                        <div className="c-card ">
                            <div className="c-card__box c-card__box--md@md-up">
                                <div className="c-card__backside">
                                  <img className="c-card__visual lazyload"
                                        src="https://c8.alamy.com/comp/HMD801/street-scene-as-salt-jordan-HMD801.jpg" />
                                </div>
                                <div className="c-card__frontside">
                                    <a className="c-card__inner" href="/destinations/trabzon">
                                        <div className="c-card__footer">
                                            <div className="c-card__article-title">
                                                <div className="c-card__subtitle">Destinations</div>
                                                <div className="c-card__title">AL-SALT: An Inspiration for Travellers</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="l-column is-4">
                        <div className="c-card ">
                            <div className="c-card__box c-card__box--xlg@md-up">
                                <div className="c-card__backside">
                                  <img className="c-card__visual lazyload"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wadi_Rum_Desert%2C_Jordan.jpg/1200px-Wadi_Rum_Desert%2C_Jordan.jpg" />
                                </div>
                                <div className="c-card__frontside">
                                    <a className="c-card__inner" href="/attractions/unesco-world-heritage-sites-in-turkey">
                                        <div className="c-card__footer">
                                            <div className="c-card__article-title">
                                                <div className="c-card__subtitle">Destinations</div>
                                                <div className="c-card__title">Wadi_Rum: World Heritage Sites in Jordan</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="l-column is-4">
                        <div className="c-card ">
                            <div className="c-card__box c-card__box--xlg@md-up">
                                <div className="c-card__backside">
                                  <img className="c-card__visual lazyload"
                                        src="https://pbs.twimg.com/media/CAYTptBUQAAgNH5.jpg" />
                                </div>
                                <div className="c-card__frontside">
                                    <a className="c-card__inner" href="/attractions/cat/history">
                                        <div className="c-card__footer">
                                            <div className="c-card__article-title">
                                                <div className="c-card__subtitle">Destinations</div>
                                                <div className="c-card__title">Ramtha</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="l-column is-4">
                        <div className="l-columns">
                            <div className="l-column is-12">
                                <div className="c-card ">
                                    <div className="c-card__box c-card__box--xsm">
                                        <div className="c-card__backside">
                                          <img className="c-card__visual lazyload"
                                                src="https://johtt.com/media/djcatalog2/images/item/1/al-karak-castle_f.jpg" />
                                        </div>
                                        <div className="c-card__frontside">
                                            <a className="c-card__inner" href="/attractions/cat/gastronomy">
                                              <div className="c-card__footer">
                                                <div className="c-card__article-title">
                                                  <div className="c-card__subtitle">Destinations</div>
                                                  <div className="c-card__title">Karak</div>
                                                </div>
                                              </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-column is-12">
                                <div className="c-card ">
                                    <div className="c-card__box c-card__box--xsm">
                                        <div className="c-card__backside">
                                          <img className="c-card__visual lazyload"
                                                src="https://www.alaraby.co.uk/File/GetImageCustom/436f9512-5b52-4e4c-a8b0-5327b66805d8/640/350" />
                                        </div>
                                        <div className="c-card__frontside">
                                            <a className="c-card__inner" href="/attractions/turkish-coffee">
                                              <div className="c-card__footer">
                                                <div className="c-card__article-title">
                                                  <div className="c-card__subtitle">Destinations</div>
                                                  <div className="c-card__title">Tafila</div>
                                                </div>
                                              </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div className="c-auth u-hidden" id="auth">
         <div className="c-auth__wrapper">
             <div className="l-columns">
                 <div className="l-column is-7">
                    <div className="c-auth__main">
                         <div className="c-auth__section js-auth-section">
                             <div className="u-h2">Create Profile</div>
                            <div className="c-auth__form">
                                 <form className="c-form" id="register">
                                     <div className="c-form__group">
                                       <input className="c-form-control" name="FirstName" type="text" placeholder="First Name" required="required"  autoComplete="true"/>
                                     </div>
                                     <div className="c-form__group">
                                      <input className="c-form-control" name="LastName" type="text" placeholder="Last Name" required="required" autoComplete="true"/>
                                     </div>
                                     <div className="c-form__group">
                                      <input className="c-form-control" name="Email" type="email" placeholder="Email" minLength="8" required="required" autoComplete="true"/>
                                     </div>
                                     <div className="c-form__group">
                                      <input className="c-form-control" name="Location" type="text" placeholder="Location" required="required" autoComplete="true"/>
                                     </div>
                                     <div className="c-form__group">
                                       <input className="c-form-control" name="Password" type="password" placeholder="Password" minLength="8" required="required" autoComplete="true"/>
                                    </div>
                                    <div className="c-form__action-group">
                                       <button className="c-button c-button--block c-button--info" type="submit">Sign Up</button>
                                       <div className="c-form__action-label">
                                         ALREADY REGISTERED?<a className="js-auth-action u-primary-color" href="#" data-type="login">LOGIN</a>
                                       </div>
                                     </div>
                                 </form>
                             </div>
                        </div>
                         <div className="c-auth__section js-auth-section u-hidden">
                             <div className="u-h2">Login</div>
                             <div className="c-auth__form">
                                 <form className="c-form" id="login">
                                     <div className="c-form__group">
                                       <input className="c-form-control" name="Email" type="email" placeholder="Email" />
                                     </div>
                                     <div className="c-form__group">
                                       <input className="c-form-control" name="Password" type="password" placeholder="Password" />
                                     </div>
                                     <div className="c-form__action-group">
                                       <input className="c-form-control" name="Provider" type="hidden" value="pixel-auth" />
                                       <button className="c-button c-button--block c-button--info" type="submit">LOGIN</button>
                                       <div className="c-form__action-label">
                                         DON'T YOU HAVE ACCOUNT?<a className="js-auth-action" href="#" data-type="register">Sign Up</a>
                                       </div>
                                     </div>
                               </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>

    </main>
    
  );
}

export default Home;
