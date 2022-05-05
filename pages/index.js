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
<h1>Rhoda Phillips-Osei</h1>
<h3>Full Stack Web Developer</h3>
 </p> 
 <div class="homebtns">
 <button type="button" class="btn btn-outline-primary">About Me</button>
 <button type="button" class="btn btn-outline-primary">Projects</button>
 </div>
 </div>
  <div   className={styles.leftsidehome}>
   
  <img src="/rhopolaroid.png" alt="Rhoda Phillips-Osei" className={styles.homeimg}></img>
 </div>
</div>

  ); 
};
