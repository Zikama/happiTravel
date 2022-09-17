import Image from 'next/image'
import React from 'react'
import headerStyles from '../styles/Header.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Next from "../public/assets/img/chevron-right.svg"
import Prev from "../public/assets/img/chevron-left.svg"
import Wave from './Wave';

export default function Header() {

  const slides = [
    {
      image: require('/public/assets/img/brazcom/Travel-Ticketing-1.jpg'),
      title: 'Travel Ticketing',
      description: 'We recently adopted the Galileo ticketing system at HappiTravel to enable us complete a ticket reservation and booking',
      hasAction: true,
      actionLink:'/ticket',
      actionText: 'Learn more', 
    },
    {
      image: require('/public/assets/img/brazcom/Hotel-Booking.jpeg'),
      title: 'Reservations',
      description: 'We do reservations for hotel and air ticket, taking the load off you of booking',
      hasAction: true,
      actionLink:'/bookings',
      actionText: 'Learn more', 
    },
    {
      image: require('/public/assets/img/brazcom/Au-Pair-Services.jpg'),
      title: 'HappiTravel Au-Pair',
      description: 'The au pair program combines live-in childcare and cultural exchange.',
      hasAction: true,
      actionLink:'/au-pair',
      actionText: 'Learn more', 
    },
    {
      image: require('/public/assets/img/brazcom/Dhl-Express-Deliveries-with-Brazcom-Immigration.jpg'),
      title: 'Shipping and Home deliveries',
      description: 'Shop online and let our agents handle the rest of the husle for you, from packaging to delivery.',
      hasAction: true,
      actionLink:'/delivery',
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
      responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                // autoplay: !true,
            }
        }, {
            breakpoint: 1204,
            settings: {
                arrows: true,
                // autoplay: !true,
            }
        }],
      onInit: function(settings) {
        // console.log(settings);
      },
      beforeChange: function(settings) {
        // console.log(settings);
      },
      nextArrow:  (<button>{<Next style={{color: "#fff"}} />}</button>),
      prevArrow: <button>{<Prev style={{color: "#fff"}} />}</button>,
      arrows: true,
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
                              <a href={slide.actionLink} className={headerStyles["art_slide_btn"]+" art_btn"}>
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
