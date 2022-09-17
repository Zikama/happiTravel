import Link from "next/link";
import React from "react";
import styles from "./../styles/WhyBookWithUs.module.css";
import Wave from "./Wave";
import Button from "./Button";

export default function WhyBookWithUs() {
  return (
    <section className={styles["art_sec"]}>
      <div className="container">
        <div className={styles["art_choose_us_co"]}>
          <div className={styles["art_title"]+" art_title"}>
            <h4>{`Why book with us?`}</h4>
          </div>
          <div className={styles["art_desc"]}>
            <p>{`Quality and service are inextricably linked. At every step of your journey, we go above and beyond to guarantee that these two standards are met. To fulfill these key objectives, we keep a constant eye on client satisfaction and are always looking for innovative methods to exceed their expectations. Thousands of people from all over the world have had memorable travel experiences thanks to us. That is due to the high caliber of our workforce. Our employees have vast industry experience and are enthusiastic about what they do.`}</p>
          </div>

          <div className={styles["art_action"]}>
            <Link href={`/`}>
            <a>
              <Button text={`Visa Assessment`} className={styles["art_btn"]} />
            </a>
          </Link>
          </div>
          
        </div>
      </div>
      {/* <Wave /> */}
    </section>
  );
}
