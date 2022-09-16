import React from 'react'
import styles from './../styles/CTA.module.css';
import Wave from './Wave';
import LogoSm from './../public/assets/img/HappiTravel-sm.svg';
import Button from './Button';
import Link from 'next/link';

export default function CTA({link, actionText, title, description}) {
  return (
    <div className={styles["art_cta"]+" art_wave_el"}>
    <Wave  color={"var(--ctaColor)"} top={true} />
        
        <div className={styles["art_call_to_action"]}>
            <div className="container">
                <div className={styles["art_cta_content"]}>
                    <div className={styles["art_cta_header"]}>
                        <LogoSm style={{color: "#fff"}} width={90} strokeWidth={1.5}/>
                        <div className={styles["art_cta_description"]}>
                            <div className={styles["art_cta_desc_title"]}>
                                <h6>{title}</h6>
                            </div>
                            <span className={styles["art_cta_desc_content"]}>
                                <p>{description}</p>
                            </span>
                        </div>
                    </div>
                    <div className={styles["art_cta_action"]}>
                        <Link href={link}>
                            <a>
                                <Button text={actionText} className={styles["art_cta_actionBtn"]} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    <Wave down={true} color={"var(--ctaColor)"} />
    </div>
  )
}
