import Image from 'next/image'
import React from 'react'
import headerStyles from '../styles/Header.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Wave from './Wave';

export default function Header() {

  const slides = [
    {
      image: require('/public/assets/img/brazcom/Travel-Ticketing-1.jpg'),
      title: 'Travel Ticketing',
      description: 'We recently adopted the Galileo ticketing system at HappiTravel to enable us complete a ticket reservation and booking',
      hasAction: true,
      actionText: 'Learn more', 
    },
    {
      image: require('/public/assets/img/brazcom/Hotel-Booking.jpeg'),
      title: 'Reservations',
      description: 'We do reservations for hotel and air ticket, taking the load off you of booking',
      hasAction: true,
      actionText: 'Learn more', 
    },
  ]


    const settings = {
      dots: false,
      speed: 500,
      autoplay:true,
      lazyLoad: "progressive",
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      cssEase: "cubic-bezier(0.23, 0.62, 0.36, 1)",
      useTransform: true,
      onInit: function(settings) {
        // console.log(settings);
      },
      beforeChange: function(settings) {
        // console.log(settings);
      },
    };
  return (
    <header className={headerStyles.header+' art_wave_el'}>
        <div className={headerStyles.art_slides_co}>
            <Slider {...settings}>
                {
                  slides.map((slide, index) => {
                    return <div className={headerStyles.art_img_co+" art_img_co"} key={index}>
                      <div className={headerStyles["container"]+" container"}>
                          <div className={headerStyles["art_slide_content"]}>
                              <div className={headerStyles["art_slide_title"]+" art_title"}>
                                  <h1>
                                      <span>{slide.title}</span>
                                  </h1>
                              </div>
                              <div className={headerStyles["art_slide_content_subtitle"]}>
                                  <p>
                                    {slide.description}
                                  </p>
                              </div>
                              <a href="/about-us" className={headerStyles["art_slide_btn"]+" art_btn"}>
                                {slide.actionText}
                              </a>

                          </div>

                      </div>
                        <Image src={slide.image} layout="fill" alt="" objectFit='cover' className={"art_img"}
                        />
                    </div>
                 })
                }
            </Slider>
        </div>
        <Wave color='#fff'/>
    </header>
  )
}
