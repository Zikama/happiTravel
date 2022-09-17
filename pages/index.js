import Head from "next/head";
import CTA from "../components/CTA";
import Header from "../components/Header";
import Nav from "../components/Nav";
import OurNumbers from "../components/OurNumbers";
import Section from "../components/Section";
import Services from "../components/Services";
import Wave from "../components/Wave";
import Welcome from "../components/Welcome";
import WhyBookWithUs from "../components/WhyBookWithUs";
import WhyChooseUs from "../components/WhyChooseUs";
import styles from "../styles/Home.module.css";
import AllServices from "../components/AllServices";
import LatestNews from "../components/LatestNews";
import Reviews from "../components/Reviews";
import RightArrow from "../public/assets/img/chevron-right.svg";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Home - Welcome To Happitravel and logisticcs`}</title>
        <meta
          name="description"
          content={`Happi Travel and Logistics is a legal company aiming travel to Europea countries for education, stay and visits. Happi Travel and Logistics is a legal company here to help you with all of your logistics work like Air Frieghts and More.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className={styles.main}>
        <Header />
        <Section
          wave={<Wave down={true} color={"#fff"} />}
          className={styles["art_sec_welcome"]}
        >
          <Welcome />
        </Section>
        <Section>
          <Services />
        </Section>
        <WhyChooseUs />
        <CTA
          title={`Book with us today!`}
          link={`/bookings`}
          actionText={`Book now`}
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elit.`}
        />
        <WhyBookWithUs />
        <OurNumbers />
        <Section wave={<Wave top={true} color={"var(--bgColor)"} />}>
          <AllServices />
        </Section>
        <Section className={styles["art_sec_news"]}>
          <div className={styles["art_custom_container"]}>
            <LatestNews />
            <button className={styles["art_sec_news_btn"]}>
              <span className={styles["art_sec_news_btn_text"]}>
              {`View all`} 
              </span><RightArrow />
            </button>
          </div>
        </Section>
        <Section wave={<Wave top={true} color={"#fff"} />} className={styles["art_sec_reviews"]}>
          <Reviews />
        </Section>
        {/* <Section wave={<Wave color={"#000"} top={true} foot={true} />} className={styles["art_sec_foot"]}> */}
          <Footer />
        {/* </Section> */}
      </main>
    </div>
  );
}
