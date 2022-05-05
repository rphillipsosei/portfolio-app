import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";

export default function Home() {
  <Head>
    <title>Rhoda Phillips-Osei | Web Dev</title>
  </Head>;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.leftsidehome}>
        <p>
          <h1>RHODA PHILLIPS-OSEI</h1>
          <h3>Full Stack Web Developer</h3>
          <div class={styles.homebtns}>
            <button id="home-btn" onClick={() => setModalIsOpen(true)}>
              <Modal
              className={styles.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    backgroundColor: "rgba(60, 60, 60, 0.55)",
                  },
                  content: {
                    color: "orange",
                  },
                }}
                // shouldCloseOnOverlayClick={false}
              >
                <h2>Modal title</h2>
                <div>Modal Body</div>
                <div>
                  <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
              </Modal>
              ABOUT
            </button>
            <button id="home-btn">PROJECTS</button>
          </div>
        </p>
      </div>
      <div className={styles.rightsidehome}>
        <div className={styles.imgshadowteal}></div>
        <div className={styles.imgshadoworange}></div>
        <div className={styles.imgshadowpink}></div>
        <img
          src="/rhopolaroid.png"
          alt="Rhoda Phillips-Osei"
          className={styles.homeimg}
        ></img>
      </div>
    </div>
  );
}
