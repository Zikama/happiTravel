import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './../styles/Services.module.css'

export default function ServiceCard({service}) {
  return (
    <div className={styles["art_service_card"]}>
      <div className={styles["art_img_co"] + " art_img_co"}>
        <Image
          src={service.image}
          alt={service.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles["art_service_content"]}>
        <div className={styles["art_service_title"]}>
          <Link href={service.link} className="art_service_content_link">
            <a>
              <h5>{service.name}</h5>
            </a>
          </Link>
        </div>
        <div className="art_service_description">
          <span>
            <p>{service.description}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
