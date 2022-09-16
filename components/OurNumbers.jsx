import React from "react";
import styles from "./../styles/OurNumbers.module.css";

export default function OurNumbers() {
  const ourNums = [
    {
      name: "Office Locations",
      numbers: 5,
    },
    {
      name: "Employees",
      numbers: 15,
    },
    {
      name: "Service Guarantee",
      numbers: 99,
    },
    {
      name: "Worldwide Clients",
      numbers: 2453,
    },
  ];
  return (
    <section className={styles["art_sec"]}>
      <div className={styles["art_co"]+" container"}>
        <div className={styles["art_our_number_circle_main"]}>
          {ourNums.map((num, index) => {
            return (
              <div className={styles["art_our_number_circle"]} key={index}>
                <div className={styles["art_our_number_circle_conter"]}>
                  <div className={styles["art_circle_wrap"]}>
                    <div className={styles["art_counter_co"]}>
                      <span className={styles["art_count_title"]}>{num.numbers}</span>
                    </div>
                    <span className={styles["art_count_desc"]}>{num.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
