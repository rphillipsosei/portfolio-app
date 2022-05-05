import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";


export default function Home() {
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
 <button type="button" class="btn btn-outline-dark" id="about-btn">ABOUT</button>
 <button type="button" class="btn btn-outline-dark" id="projects-btn">PROJECTS</button>
 </div>
 </p> 

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
