import React from 'react'
import styles from './../styles/WhyChooseUs.module.css'
import Wave from './Wave'

export default function WhyChooseUs() {
    const whyChooseUsOptions = {
        title: 'Why Choose Us?',
        options: [
            {
                name: 'Reliability',
                description: `The services delivered to all our clients, either tourists, travelers or business partner needs to be reliable and consistent. Basic safety and security for both host and visitor should be ensured.`,

            },
            {
                name: 'Customer Satisfaction',
                description: `Our activities are based on the value that the services rendered are geared towards Customer’s satisfaction.`,

            },
            {
                name: 'Respect',
                description: `Both host and visitor should have respect for others, themselves, human rights, culture and environment.`,

            },
        ]
    }
  return (
    <section className={styles["art_sec"]+ " art_wave_el"}>
        <div className={styles["art_choose_us_co"]}>
            <div className={styles["art_title"]+" art_title"}>
                <h5>{whyChooseUsOptions.title}</h5>
            </div>
            <ul className={styles["art_choose_us_lists"]}>
                {
                    whyChooseUsOptions.options.map((option, index) => {
                        return (
                            <li className={styles["art_choose_us_list"]} key={index}>
                                <div className={styles["art_list_title"]+" art_title"}>
                                    <h6>{option.name}</h6>
                                </div>
                                <div className={styles["art_choose_us_desc"]}>
                                    <p>{option.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
