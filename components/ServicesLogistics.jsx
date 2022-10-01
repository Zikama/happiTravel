import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './../styles/Services.module.css'
import ServiceCard from './ServiceCard';

export default function ServicesLogistics() {
    const quickServices = [
        {
            name: "Visa Application",
            image: require("../public/assets/img/brazcom/visa-application.jpg"),
            description: "We offer Visa assistance application services unbeatable offers to various destinations",
            link: "/visa/assesment",
        },
        {
            name: "Medical Insurance",
            image: require("../public/assets/img/brazcom/travel-medical-e1590600714666.jpg"),
            description: "We are proud partners of International Medical Group for Travel Medical Insurance",
            link: "medical/medical-insurance",
        },
        {
            name: "DV Programs",
            image: require("../public/assets/img/brazcom/USCIS_Green-Card-Eligibility_241x161_V1@2x.jpg"),
            description: "The steps you must take to apply for a Green Card will vary depending on your needs",
            link: "/dv-program"
        },

    ];

  return (
    <div className={styles["art_quick_services"]}>
        <div className={styles["art_title"]+" art_title"}>
            <h4>{`Our Logistics Services`}</h4>
        </div>
        <div className={styles["art_services"]}>
            {
                quickServices.map((service, index) => {
                    return <ServiceCard service={service} key={index}/>
                })
            }
        </div>
      </div>
  )
}
