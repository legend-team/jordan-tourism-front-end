import React from 'react';
import './home.scss'

function Home() {
  return (
    <div>
    <header class="l-header">
        <div class="container">
            <div class="l-header__brand">
                JoRdAn ExPloReRs
            </div>
            <div class="l-header__main">
                <div class="l-header__tools">
                    <div class="l-header__navigataion">
                        <nav class="c-nav">
                            <a class="c-nav__item" href="destinations">Home</a>
                            <a class="c-nav__item" href="attractions">Jordan Cities</a>
                            <a class="c-nav__item" href="travel-map">Places to visit</a>
                            <a class="c-nav__item" href="photo-gallery">About Jordan</a>
                        </nav>
                    </div>
                    <div class="l-header__actions">
                        <div class="c-icon-nav">
                            <a class="c-icon-nav__item js-auth-button js-auth-lightbox" href="#auth">
                                <span class="js-auth-label">Login</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="c-auth u-hidden" id="auth">
        <div class="c-auth__wrapper">
            <div class="l-columns">
                <div class="l-column is-7">
                    <div class="c-auth__main">
                        <div class="c-auth__section js-auth-section">
                            <div class="u-h2">Create Profile</div>
                            <div class="c-auth__form">
                                <form class="c-form" id="register">
                                    <div class="c-form__group"><input class="c-form-control" name="FirstName"
                                            type="text" placeholder="First Name" required="required" /></div>
                                    <div class="c-form__group"><input class="c-form-control" name="LastName" type="text"
                                            placeholder="Last Name" required="required" /></div>
                                    <div class="c-form__group"><input class="c-form-control" name="Email" type="email"
                                            placeholder="Email" minlength="8" required="required" /></div>
                                    <div class="c-form__group"><input class="c-form-control" name="Location" type="text"
                                            placeholder="Location" required="required" /></div>
                                    <div class="c-form__group"><input class="c-form-control" name="Password"
                                            type="password" placeholder="Password" minlength="8" required="required" />
                                    </div>
                                    <div class="c-form__action-group"><button
                                            class="c-button c-button--block c-button--info"
                                            type="submit">REGISTER</button>
                                        <div class="c-form__action-label">ALREADY REGISTERED?<a
                                                class="js-auth-action u-primary-color" href="#"
                                                data-type="login">LOGIN</a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="c-auth__section js-auth-section u-hidden">
                            <div class="u-h2">Login</div>
                            <div class="c-auth__form">
                                <form class="c-form" id="login">
                                    <div class="c-form__group"><input class="c-form-control" name="Email" type="email"
                                            placeholder="Email" /></div>
                                    <div class="c-form__group"><input class="c-form-control" name="Password"
                                            type="password" placeholder="Password" /></div>
                                    <div class="c-form__action-group"><input class="c-form-control" name="Provider"
                                            type="hidden" value="pixel-auth" /><button
                                            class="c-button c-button--block c-button--info" type="submit">LOGIN</button>
                                        <div class="c-form__action-label">DON'T YOU HAVE ACCOUNT?<a
                                                class="js-auth-action" href="#" data-type="register">REGISTER</a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="main-wrapper">
        <section class="l-section l-section--list">
            <div class="c-full-slider js-full-slider">
                <div class="swiper-wrapper">

                    <div class="container">
                        <div class="c-full-slider__content">
                            <div class="c-full-slider__main-row">
                                <p class="c-full-slider__title">
                                    The Hashemite Kingdom of Jordan, which once captivated ancient travelers, continues
                                    to enthral a whole new generation as a modern, vibrant nation
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="c-social c-social--ghost u-is-desktop">
                <a class="c-social__item c-social__inline-icon" href="https://www.instagram.com/visitjordan/"
                    target="_blank">
                    <i class="fab fa-instagram-square"></i>
                </a>
                <a class="c-social__item " href="https://www.facebook.com/VisitJordan/" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a class="c-social__item " href="https://twitter.com/VisitJordan/" target="_blank">
                    <i class="fab fa-twitter-square"></i>
                </a>
                <a class="c-social__item " href="https://www.youtube.com/user/visitjordan/" target="_blank">
                    <i class="fab fa-youtube-square"></i>
                </a>
            </div>

        </section>

        <section class="l-section l-section--list" >
            <div class="container">
                <div class="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
                    <h1 class="u-h1">Discover the very best of Jordan</h1>
                    <p class="u-color-gray">
                        Explore our ancient history and natural beauty. Immerse yourself into the rich culture whilst
                        experiencing the mouth-watering flavours of Jordan cuisine!
                    </p>
                </div>
                <div class="c-carousel">
                    <div class="swiper-container js-carousel">
                        <div class="swiper-wrapper">

                            <div class="c-card swiper-slide c-carousel__item">
                                <div class="c-card__box c-card__box--">
                                    <div class="c-card__backside">
                                      <img class="c-card__visual swiper-lazy"
                                            src="https://d3qvqlc701gzhm.cloudfront.net/thumbs/587be118e6f8894d9f7f130bfbee70b338eaacf6ba82e6ca82f0f0d9159f8952-750.jpg" />
                                    </div>
                                    <div class="c-card__frontside">
                                        <a class="c-card__inner"
                                            href="/attractions/the-real-story-of-sweets-beyond-baklava">
                                            <div class="c-card__footer">
                                                <div class="c-card__article-title">
                                                    <div class="c-card__subtitle"></div>
                                                    <div class="c-card__title">Petra
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="c-card swiper-slide c-carousel__item">
                                <div class="c-card__box c-card__box--">
                                    <div class="c-card__backside">
                                      <img class="c-card__visual swiper-lazy"
                                            src="https://lh6.googleusercontent.com/proxy/i8hp3FnegvqqndvZO603phGYX9MdZsKn5Bw_og3WlVcdkkK__BgnalLFW1rH9A745ECAp8EbhnFKhkQInMXmCLLmG2WaXYKqBkL--Mbv_YY6gSri1QtSXbx0okfFhd2ToLts-TLQLUwhzQ" />
                                    </div>
                                    <div class="c-card__frontside">
                                        <a class="c-card__inner" href="/attractions/cat/gastronomy">
                                            <div class="c-card__footer">
                                                <div class="c-card__article-title">
                                                    <div class="c-card__subtitle"></div>
                                                    <div class="c-card__title">Aqaba
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="c-card swiper-slide c-carousel__item">
                                <div class="c-card__box c-card__box--">
                                    <div class="c-card__backside">
                                      <img class="c-card__visual swiper-lazy"
                                            src="https://i.guim.co.uk/img/media/80551c3ccb8b695036bbb6214eb50e4abd125c0c/0_80_4743_2846/master/4743.jpg?width=700&quality=85&auto=format&fit=max&s=67f566797ad19e9fa3c6079252b9b9be" />
                                      </div>
                                    <div class="c-card__frontside">
                                        <a class="c-card__inner" href="/destinations">
                                            <div class="c-card__footer">
                                                <div class="c-card__article-title">
                                                    <div class="c-card__subtitle"></div>
                                                    <div class="c-card__title">Jasash</div>
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

        {/* <section class="l-section l-section--list" >
            <div class="c-player c-player--full">
                <div class="c-player__container">
                    <div class="c-player__multimedia">
                      <video class="js-playlist-scane lazyload" controls="ture" preload="none"
                          poster="https://gofargrowclose.com/wp-content/uploads/2019/05/Petra-by-night-1-min-16.jpg" src="https://www.youtube.com/watch?v=mUD8Ye_paME&t=1s">
                      </video>
                    </div>
                    <div class="c-player__playlist">
                        <div class="c-player__header">Videos from our gallery</div>
                        <div class="c-player__body">
                            <div class="c-platlist">

                                <div class="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/turkeys_black_sea_mountains-from-the-air.mp4"
                                    data-poster="uploads/video/turkeys_black_sea_mountains-from-the-air-cover-image-deneme.jpg">
                                    <div class="c-playlist__box">
                                        <div class="c-platlist__detail">
                                            <div class="c-playlist__title">Turkey's Black Sea Mountains - From the Air
                                            </div>
                                            <div class="c-playlist__info">
                                                <div>22 December 2015</div>
                                                <div>02:42</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/turkey-home-gastro-hunt-gaziantep.mp4"
                                    data-poster="uploads/video/turkey-home-gastro-hunt-gaziantep-cover-image-deneme.jpg">
                                    <div class="c-playlist__box">
                                        <div class="c-platlist__detail">
                                            <div class="c-playlist__title">Go Turkey - # Gastro Hunt Day 3: Gaziantep
                                            </div>
                                            <div class="c-playlist__info">
                                                <div>08 August 2014</div>
                                                <div>01:31</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c-playlist__item js-playlist-item"
                                    data-video="uploads/video/the-unesco-world-heritage-sites-in-turkey.mp4"
                                    data-poster="uploads/video/the-unesco-world-heritage-sites-in-turkey-cover-image-deneme.jpg">
                                    <div class="c-playlist__box">
                                        <div class="c-platlist__detail">
                                            <div class="c-playlist__title">The UNESCO World Heritage Sites in Turkey
                                            </div>
                                            <div class="c-playlist__info">
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

        <section class="l-section l-section--list">
            <div class="container">
                <div class="u-min-width-content@md-up u-text-center u-gap-bottom-large u-gap-center">
                    <h1 class="u-h1">Some Highlights Of Jordan</h1>
                    <p class="u-color-gray">
                        Jordan has a lot of great destinations to offer. Exceptional landmarks, wonderful natural
                        sceneries, historical legacies and a rich culture. Jordan is renowned for its hospitality and is
                        always eager to please. The perfect Jordan experience is just around the corner.
                    </p>
                </div>
                <div class="l-columns u-scrolling-wrapper">

                    <div class="l-column is-8">
                        <div class="c-card ">
                            <div class="c-card__box c-card__box--md@md-up">
                                <div class="c-card__backside">
                                  <img class="c-card__visual lazyload"
                                        src="https://cache.marriott.com/marriottassets/marriott/AMMWI/ammwi-exterior-2067-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" />
                                </div>
                                <div class="c-card__frontside">
                                    <a class="c-card__inner" href="/destinations/istanbul">
                                        <div class="c-card__footer">
                                            <div class="c-card__article-title">
                                                <div class="c-card__subtitle">Destinations</div>
                                                <div class="c-card__title">AMMAN: The Capital</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="l-column is-4">
                        <div class="c-card ">
                            <div class="c-card__box c-card__box--md@md-up">
                                <div class="c-card__backside">
                                  <img class="c-card__visual lazyload"
                                        src="https://c8.alamy.com/comp/HMD801/street-scene-as-salt-jordan-HMD801.jpg" />
                                </div>
                                <div class="c-card__frontside">
                                    <a class="c-card__inner" href="/destinations/trabzon">
                                        <div class="c-card__footer">
                                            <div class="c-card__article-title">
                                                <div class="c-card__subtitle">Destinations</div>
                                                <div class="c-card__title">AL-SALT: An Inspiration for Travellers</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="l-column is-4">
                        <div class="c-card ">
                            <div class="c-card__box c-card__box--xlg@md-up">
                                <div class="c-card__backside">
                                  <img class="c-card__visual lazyload"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wadi_Rum_Desert%2C_Jordan.jpg/1200px-Wadi_Rum_Desert%2C_Jordan.jpg" />
                                </div>
                                <div class="c-card__frontside">
                                    <a class="c-card__inner" href="/attractions/unesco-world-heritage-sites-in-turkey">
                                        <div class="c-card__footer">
                                            <div class="c-card__article-title">
                                                <div class="c-card__subtitle">Destinations</div>
                                                <div class="c-card__title">Wadi_Rum: World Heritage Sites in Jordan</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="l-column is-4">
                        <div class="c-card ">
                            <div class="c-card__box c-card__box--xlg@md-up">
                                <div class="c-card__backside">
                                  <img class="c-card__visual lazyload"
                                        src="https://pbs.twimg.com/media/CAYTptBUQAAgNH5.jpg" />
                                </div>
                                <div class="c-card__frontside">
                                    <a class="c-card__inner" href="/attractions/cat/history">
                                        <div class="c-card__footer">
                                            <div class="c-card__article-title">
                                                <div class="c-card__subtitle">Destinations</div>
                                                <div class="c-card__title">Ramtha</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="l-column is-4">
                        <div class="l-columns">
                            <div class="l-column is-12">
                                <div class="c-card ">
                                    <div class="c-card__box c-card__box--xsm">
                                        <div class="c-card__backside">
                                          <img class="c-card__visual lazyload"
                                                src="https://johtt.com/media/djcatalog2/images/item/1/al-karak-castle_f.jpg" />
                                        </div>
                                        <div class="c-card__frontside">
                                            <a class="c-card__inner" href="/attractions/cat/gastronomy">
                                              <div class="c-card__footer">
                                                <div class="c-card__article-title">
                                                  <div class="c-card__subtitle">Destinations</div>
                                                  <div class="c-card__title">Karak</div>
                                                </div>
                                              </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="l-column is-12">
                                <div class="c-card ">
                                    <div class="c-card__box c-card__box--xsm">
                                        <div class="c-card__backside">
                                          <img class="c-card__visual lazyload"
                                                src="https://www.alaraby.co.uk/File/GetImageCustom/436f9512-5b52-4e4c-a8b0-5327b66805d8/640/350" />
                                        </div>
                                        <div class="c-card__frontside">
                                            <a class="c-card__inner" href="/attractions/turkish-coffee">
                                              <div class="c-card__footer">
                                                <div class="c-card__article-title">
                                                  <div class="c-card__subtitle">Destinations</div>
                                                  <div class="c-card__title">Tafila</div>
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
    </main>

    <footer class="l-footer" role="contentinfo" >
        <div class="container">
            <div class="l-footer__inner">
                <div class="l-footer__main">
                    <div class="l-footer__brand">
                        <div>ABOUT JORDAN</div>
                        <p>
                          Jordan is a unique destination offering breathtaking sights, charming accommodations. Jordan is home to countless wonders that are sure to leave you in awe, Jordan has witnessed an emergence of luxury hotels in Amman, Petra, Aqaba and the Dead Sea.
                        </p>
                    </div>
                    <div class="l-footer__navigations">
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">DESTINATIONS</div>
                                <nav class="l-footer__nav"><a class="c-desc-nav__item"
                                        href="/destinations/regions/mediterranean">Mediterranean</a><a
                                        class="c-desc-nav__item" href="/destinations/regions/eastern-anatolia">Eastern
                                        Anatolia</a><a class="c-desc-nav__item"
                                        href="/destinations/regions/aegean">Aegean</a>
                                    <a class="c-desc-nav__item" href="/destinations/regions/marmara">Marmara</a><a
                                        class="c-desc-nav__item"
                                        href="/destinations/regions/southeastern-anatolia">Southeastern Anatolia</a><a
                                        class="c-desc-nav__item" href="/destinations/regions/central-anatolia">Central
                                        Anatolia</a>
                                    <a class="c-desc-nav__item" href="/destinations/regions/black-sea">Black Sea</a>
                                </nav>
                            </div>
                        </div>
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">ATTRACTIONS</div>
                                <nav class="l-footer__nav"><a class="c-desc-nav__item"
                                        href="/attractions/cat/see-and-nature">Sea &amp;
                                        Nature</a><a class="c-desc-nav__item"
                                        href="/attractions/cat/culture">Culture</a><a class="c-desc-nav__item"
                                        href="/attractions/cat/gastronomy">Gastronomy</a><a class="c-desc-nav__item"
                                        href="/attractions/cat/history">History</a>
                                    <a class="c-desc-nav__item" href="/attractions/cat/health-and-wellness">Wellness
                                        &amp; Health</a><a class="c-desc-nav__item"
                                        href="/attractions/cat/religious-tourism">Religious Tourism</a></nav>
                            </div>
                        </div>
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">EVENTS</div>
                                <nav class="l-footer__nav"><a class="c-desc-nav__item" href="/events">What’s on Now</a>
                                </nav>
                            </div>
                        </div>
                        <div class="l-footer__column">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">BLOG</div>
                                <nav class="l-footer__nav"><a class="c-desc-nav__item" href="/blog">Blog</a></nav>
                            </div>
                        </div>
                        <div class="l-footer__column js-mobile-nav">
                            <div class="c-desc-nav">
                                <div class="c-desc-nav__title js-mobile-nav">GALLERY</div>
                                <nav class="l-footer__nav"><a class="c-desc-nav__item" href="photo-gallery">Photo
                                        Gallery</a><a class="c-desc-nav__item" href="video-gallery">Video Gallery</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-footer__bottom">
                    <div class="u-font-size-xsmall">Copyright © 2020 <a href="/">Turkey</a> All Rights Reserved.</div>
                    <div class="u-font-size-xsmall">
                        This site uses cookie. By continuing to browse this site, you are agreeing to our use of
                        cookies. Find out more <a href="/pages/privacy-policy">here</a></div>
                </div>
            </div>
        </div>
    </footer>
</div>







    
  );
}

export default Home;
