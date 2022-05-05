import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  <Head>
    <title>Rhoda Phillips-Osei | Web Dev</title>
  </Head>;

  return (

  <div className="container">
<div className="row">
  <div className="col left-side-home">

  </div>
  <div className="col right-side-home">
  <img src="/rhopolaroid.png" alt="Rhoda Phillips-Osei" className={styles.homeimg}></img>
  </div>
</div>
  </div>
  ); 
};
