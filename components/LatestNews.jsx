import React from 'react';
import styles from './../styles/LatestNews.module.css';
import NewsCard from './NewsCard';

export default function LatestNews() {
    const quickServices = [
        
        {
            name: "Au Pair",
            image: require("../public/assets/img/brazcom/brazcom-child-connected-with-nature-uganda-kenya-United-Kingdom.jpeg"),
            description: "Au Pair Au pairs are typically young international visitors who travel to foreign countries on a Visitor Exchange Visa.",
            link: "/visa/au-pair",
        },
        {
            name: "Study Abroad",
            image: require("../public/assets/img/brazcom/Study-Abroad-Uganda-Brazcom-Immigration-Kenya-1.jpg"),
            description: "We help you register with international institutions of learning and also process your invitations and travel visas to those countries",
            link: "medical/medical-insurance",
        },
        {
            name: "Visa Invitation Letter",
            image: require("../public/assets/img/brazcom/Visa-Interview-Questions.jpg"),
            description: "This is a hub of all travel invitations to all countries such as conferences, medical, student,s and businesses.",
            link: "/dv-program"
        },

    ];

  return (
    <div className={styles["art_quick_services"]}>
        <div className={styles["art_title"]+" art_title"}>
            <h4>{`Latest News`}</h4>
        </div>
        <div className={styles["art_services"]}>
            {
                quickServices.map((service, index) => {
                    return <NewsCard service={service} index={index}  key={index}/>
                })
            }
        </div>
      </div>
  )
}
