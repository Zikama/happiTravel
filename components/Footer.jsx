import Link from "next/link";
import React from "react";
import styles from "./../styles/Footer.module.css";
import Wave from "./Wave";
import Logo from "./Logo";
import Support from "./../public/assets/img/support.svg";
import Mail from "./../public/assets/img/mail.svg";
import Address from "./../public/assets/img/map-pin.svg";
import Button from "./Button";

export default function Footer() {
  const footerOptions = [
    {
      title: "",
    },
  ];
  const contactsDetails = {
    numbers: {
      icon: Support,
      data: ["+256 785988864", "+256 758914876"],
      prefix: "tel",
    },
    emails: {
      icon: Mail,
      data: [
        "info@happitravelandlogistics.com",
        "manisa@happitravelandlogistics.com",
      ],
      prefix: "mailto",
    },
    addresses: {
        icon: Address,
        data: [`Ham Towers, Level 3, Opp Makerere Main Gate, Kampala.`],
        
    }
  };

  const importantLinks = {
    title: "Links",
    links: [
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Insurance",
        link: "/insurance",
      },
      {
        name: "Flight Itinerary and Hotel Booking",
        link: "/flight-itinerary-and-hotel-booking",
      },
      {
        name: "Visa Application Assistance Center",
        link: "/visa-application-assistance",
      },
      {
        name: "Au-Pair German",
        link: "/au-pair-german",
      },
      {
        name: "Shipping",
        link: "/shipping",
      },
      {
        name: "Terms and Conditions",
        link: "/terms-and-conditions",
      },
    ],
  };

  return (
    <footer className={styles["art_sec_foot"] + " art_wave_el"}>
      <Wave color={"#000"} top={true} foot={true} />
      <div className="container">
        <div className={styles["art_foot_sec_co"]}>
          <div className={styles["art_foot_sec"]}>
            <div className={styles["art_logo"]}>
              <Link href={"/"}>
                <a>
                  <Logo
                    width="100%"
                    height="100%"
                    primaryColor="#fff"
                    secondaryColor="#fff"
                  />
                </a>
              </Link>
            </div>
            <div className="art_foot_desc">
              <p>{`Happi Travel and Logistics is a legal company aiming travel to Europea countries for education, stay and visits.`}</p>
              <div className="art_contacts">
                <div className={styles["art_title"]+" art_title"}>
                  <h6>{`Reach out`}</h6>
                </div>

                {Object.keys(contactsDetails).map((c, i) => {
                  const _contact = contactsDetails[c];
                  const Icon = _contact.icon;
                  return (
                    <div className={styles["art_contact_co"]} key={i}>
                      <div className="art_ico_co">
                        <Icon />
                      </div>
                      <div className={styles["art_con_details"]}>
                        {_contact["data"].map((contact, index) => {
                            if(c === "addresses") {
                                return <span key={index}>{contact}</span>
                            }
                          return (
                            <Link
                              href={_contact.prefix + ":" + contact}
                              key={index}
                            >
                              <a>{contact}</a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={
              styles["art_foot_sec"] + " " + styles["art_foot_sec_links"]
            }
          >
            <div className={styles["art_title"] + " art_title"}>
              <h5>{`Links`}</h5>
            </div>
            <div className={styles["art_contact_co"]}>
              <div className={styles["art_con_details"]}>
                {importantLinks["links"].map((link, index) => {
                  return (
                    <Link href={link.link} key={index}>
                      <a>{link.name}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className={
              styles["art_foot_sec"] + " " + styles["art_foot_sec_letters"]
            }
          >
            <div className={styles["art_title"] + " art_title"}>
              <h5>{`Newsletter`}</h5>
            </div>
            <form className="art_form_co" onSubmit={_=>_.preventDefault()}>
                <span className="art_desc"><p>{`Subscribe to our newsletter to stay up to date with our services and news regarding travel and visa processing.`}</p></span>
                <div className="art_input_co">
                    <input type="email" className="art_input" placeholder={`Enter your email address`} name={"email"} />
                </div>
                <Button text={`Subscribe`} className={styles["art_db_btn"]}/>
            </form>
          </div>
        </div>
      </div>
        <div className={styles["art_copy"]}>
            <div className="container">
                <div className="art_copyright">
                    <span>Copyright &copy; {new Date().getFullYear()} Happi Travel and Logistics Company - All Rights Reserved</span>
                </div>
            </div>
        </div>

    </footer>
  );
}
