import React from "react";
import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles["art_welcome"]} >
      <div className={styles["art_title_co"]}>
        <div className={styles["art_title"]+" art_title"}>
          <h4>{`Happi Travel and Logistics company Is Delighted To Welcome You.`}</h4>
        </div>
        <span className={styles["art_subtitle"]}>{`Meet Unforgettable Memories`}</span>
      </div>

      <div className={styles["art_sec_description"]}>
        <p>{`Happi Travel is the brand name of a top-notch licensed Visa Process & Immigration Services Provider. We are a Ugandan based agency that operates globally with offices in Kenya, UK, Canada, Germany and expanding. You just say it, and we'll take care of the rest. Brazcom Immigration has a strong sense of adventure in all countries, which is complemented by professionalism and inventiveness. We assist with all services related to relocation, visa processeing, immigration, hotel bookings, flight tickets, travel information, travel medical insurance, and au pair, among others.`}</p>
      </div>
      
    </div>
  );
}
