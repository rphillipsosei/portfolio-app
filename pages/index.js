import React from 'react'
import { Button } from "react-bootstrap";
import Head from "next/head";
import Modal from "../components/Modal.js"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";


export default function Home() {

  const [modalShow, setModalShow] = React.useState(false);

  <Head>
    <title>Rhoda Phillips-Osei | Web Dev</title>
  </Head>;

  return (

  <div className={styles.container}>

  <div  className={styles.rightsidehome}>
    <p>
<h1>RHODA PHILLIPS-OSEI</h1>
<h3>Full Stack Web Developer</h3>
 <div class={styles.homebtns}>
 <button id="home-btn">ABOUT</button>
 <button id="home-btn">PROJECTS</button>
 </div>
 </p> 

 <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

 </div>
  <div className={styles.leftsidehome}>
    <div className={styles.imgshadowteal}></div>
    <div className={styles.imgshadoworange}></div>
    <div className={styles.imgshadowpink}></div>
  <img src="/rhopolaroid.png" alt="Rhoda Phillips-Osei" className={styles.homeimg}></img>
 </div>
</div>

  ); 
};
