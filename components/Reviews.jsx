import React from 'react';
import styles from './../styles/Reviews.module.css';
import ReviewsCard from './ReviewsCard';
import Slider from 'react-slick';
import Next from "../public/assets/img/chevron-right.svg"
import Prev from "../public/assets/img/chevron-left.svg"

export default function Reviews() {
    const quickReviews = [
        
        {
            name: "ronald mugisha",
            image: require("../public/assets/img/brazcom/brazcom-child-connected-with-nature-uganda-kenya-United-Kingdom.jpeg"),
            description: "Excellent service. Very informative and professional. Knowledgeable about the subject matter",

            ratings: 5,
            date: "2022-03-14",
        },
        {
            name: "afensoco limited",
            image: require("../public/assets/img/brazcom/Study-Abroad-Uganda-Brazcom-Immigration-Kenya-1.jpg"),
            description: "Greate work please keep it up I recommend",

            ratings: 3,
            date: "2022-07-27",
        },
        {
            name: "enjoy africa",
            image: require("../public/assets/img/brazcom/Visa-Interview-Questions.jpg"),
            description: "They are professional, trust worthy and reliable, i can attest to that and thanks Viola for the service",

            ratings: 5,
            date: "2022-03-14",
        },
        {
            name: "afensoco limited",
            image: require("../public/assets/img/brazcom/Study-Abroad-Uganda-Brazcom-Immigration-Kenya-1.jpg"),
            description: "Greate work please keep it up I recommend",

            ratings: 4,
            date: "2022-07-27",
        },

    ];

    const settings = {
        dots: false,
        speed: 500,
        autoplay: true,
        // infinite: false,
        lazyLoad: "progressive",
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: "cubic-bezier(0.23, 0.62, 0.36, 1)",
        useTransform: true,
        className: styles["art_reviews"],
        nextArrow: '',
        prevArrow: '',
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
                slidesToShow: 2,
                // autoplay: !true,
            }
        }, {
            breakpoint: 1204,
            settings: {
                arrows: true,
                slidesToShow: 3,
                // autoplay: !true,

            }
        }],
        onInit: function(settings) {
        //   console.log(settings);
        },
        beforeChange: function(settings) {
          // console.log(settings);
        },
        nextArrow:  (<button>{<Next style={{color: "#fff"}} />}</button>),
        prevArrow: <button>{<Prev style={{color: "#fff"}} />}</button>,
      };
  return (
    <div className={styles["art_quick_reviews"]+ " art_quick_reviews"}>
        <div className={styles["art_title"]+" art_title"}>
            <h4>{`What our happy clients are saying!`}</h4>
        </div>
        
            <Slider {...settings}>
            {
                quickReviews.map((service, index) => {
                    return <ReviewsCard service={service} index={index}  key={index}/>
                })
            }
            </Slider>
        </div>

  )
}
