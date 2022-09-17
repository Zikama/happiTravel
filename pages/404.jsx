import Head from 'next/head'
import styles from "../styles/Home.module.css";
import React from 'react'
import Nav from '../components/Nav'
import A404 from './../public/assets/img/404.svg'
import Link from 'next/link';
import Footer from '../components/Footer';

export default function FourOhFour() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>{`Page not found - Happitravel and logisticcs`}</title>
        <meta
          name="description"
          content={`Happi Travel and Logistics is a legal company aiming travel to Europea countries for education, stay and visits. Happi Travel and Logistics is a legal company here to help you with all of your logistics work like Air Frieghts and More.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="art_development">
    <div className="container">
        <div className="art_title">
            <h1>
                {`Oh oh, you must be lost!`}
            </h1>
        </div>
        <div className="art_description" style={{marginBottom: 0}}>
            <p>
                {`Looks like the page you're looking for is still underdevelopment or broken or it does not exist. Mind going`} <button style={{border:0, background:"none",cursor:"pointer", padding:0,}} onClick={()=>window.history.back()}>{`back`}</button>?
            </p>
            <br />
            <Link href="/">
                <a type="button" className="art_btn" aria-label="button" style={{maxWidth: "60%", margin: "auto"}}>
                    {`Go Home`}
                </a>
            </Link>
        </div>
        <div className="art_dev-co" style={{margin: 0, width: "auto"}}>
            <A404 style={{color: "var(--primaryColor)"}}/>
        </div>
    </div>
</div>
<Footer />
    </div>
  )
}
