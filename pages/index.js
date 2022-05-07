import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import { Carousel } from "react-bootstrap";
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/Gr'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import BioData from '../components/BioData.js'

const carousel = {
  paddingTop: "2rem",
  // height: "80%",
  // width: "70%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const carouselitem = {
  height: "90%",
  width: "70%",
};

export default function Home() {
  <Head>
    <title>Rhoda Phillips-Osei | Web Dev</title>
  </Head>;

  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.leftsidehome}>
        <p>
          <h1>RHODA PHILLIPS-OSEI</h1>
          <h3>Full Stack Web Developer</h3>
          <div class={styles.homebtns}>
            <button id="home-btn" onClick={() => setAboutIsOpen(true)}>
              ABOUT{" "}
            </button>
            {setAboutIsOpen && (
              <div className={styles.modalpositioning}>
                <Modal
                  className={styles.modal}
                  isOpen={aboutIsOpen}
                  onRequestClose={() => setAboutIsOpen(false)}
                  style={{
                    overlay: {
                      backgroundColor: "rgba(60, 60, 60, 0.95)",
                    },
                    content: {
                      color: "orange",
                    },
                  }}
                >
                 <BioData/>
                </Modal>
              </div>
            )}

            <button id="home-btn" onClick={() => setProjectsIsOpen(true)}>
              PROJECTS
            </button>
            {setProjectsIsOpen && (
              <div className={styles.aboutwrapper}>
                <div className={styles.modalpositioning}>
                  <Modal
                    className={styles.modal}
                    isOpen={projectsIsOpen}
                    onRequestClose={() => setProjectsIsOpen(false)}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(60, 60, 60, 0.95)",
                      },
                      content: {
                        // color: "orange",
                      },
                    }}
                  >


                     <div className="wrapper">
        <container className="backgroundstyling" >
        <container className="">
          <ImageSlider slides={SliderData}/>
         
       </container>
       </container>
      </div>


                  </Modal>
                </div>
              </div>
            )}
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
