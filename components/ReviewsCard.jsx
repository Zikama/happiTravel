import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './../styles/Reviews.module.css'
import ReviewStar from './../public/assets/img/brazcom/f.svg';

export default function ReviewsCard({service}) {
  return (
    <div className={styles["art_rev_card"]}>
      <div className={styles["art_rev_header"]}>
        <div className={styles["art_img_co"] + " art_img_co"}>
          <Image
            src={service.image}
            alt={service.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["art_rev_title"]}>
              <h5>{service.name}</h5>
        </div>
        <div className="art_rev_date">
          <p>{service.date}</p>
        </div>
        <div className="art_rev_reviews">
          {
            (_=>{
              const els= []
               for (let i = 0; i < 5; i++) {
                if(i < Number(service.ratings)){
                  els.push (<ReviewStar width={20} style={{color: 'rgb(246,187,6)'}} />);
                } else { els.push (<ReviewStar width={20} style={{color:'#ddd'}} />);}
              }
              return els
            })()
          }
        </div>
      </div>
      <div className={styles["art_rev_content"]}>
        <div className="art_rev_description">
          <span>
            <p>{service.description}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
