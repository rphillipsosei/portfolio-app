import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import { Carousel } from "react-bootstrap";
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/Gr'

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
                      backgroundColor: "rgba(60, 60, 60, 0.55)",
                    },
                    content: {
                      color: "orange",
                    },
                  }}
                >
                  <div className={styles.aboutmodule}>
                    <div className={styles.aboutwrapper}>
                      <div className={styles.blurb}>
                        <p>
                          <i>
                            <b>Hello!</b>
                          </i>
                          <br></br>
                          <br></br>My name is Rhoda, and I am a junior
                          full-stack developer from Toronto, Ontario, Canada.
                          <br></br>
                          <br></br>
                          Prior to the pandemic, I had my sights set on building
                          a career in Mental Health. While this field is still
                          of big interest to me, I felt a push for a new
                          challenge in a field that is growing, can keep me on
                          my toes, and allows me to preserve more emotional
                          energy for those close to me.
                          <br></br>
                          <br></br>In late 2021, I made the great decision to
                          enrol in a web development bootcamp at Lighthouse
                          Labs. It is here that I became familiarized with and
                          competent in a full stack breadth of technologies
                          through self-study, collaboration and the building of
                          projects.
                          <br></br>
                          <br></br>For the present and to the future, I look to
                          advance my competencies in the technologies listed
                          here, as well as to add new ones to the mix.
                          <br></br>{" "}
                        </p>
                      </div>

                      <div className={styles.skills}>
                        <p>
                          <h2 align="center">SKILLS</h2>
                          <br></br>
                          <b>Front End Technologies</b>
                          <br></br>
                          Javascript (jQuery, AJAX, React, Next.js), HTML, CSS,
                          SCSS/SASS, MaterialUI, Bootstrap
                          <br></br>
                          <br></br>
                          <b>Back End Technologies</b>
                          <br></br>
                          Javascript (Node.js, Express.js), Ruby, bCrpyt,
                          PostgreSQL<br></br>
                          <br></br>
                          <b>Auxiliary Technologies</b>
                          <br></br>
                          Git, Mocha, Chai, Jest, Vercel
                        </p>
                      </div>
                    </div>
                  </div>
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
                        backgroundColor: "rgba(60, 60, 60, 0.75)",
                      },
                      content: {
                        // color: "orange",
                      },
                    }}
                  >
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div classNames="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className={styles.moonbeam}
                            src="/moonbeamdemo6.gif"
                            alt="Moonbeam Trading Company"
                          ></img>
                        </div>

                        <div className="carousel-item">
                          <img
                            classNames="d-block w-100"
                            src="/tweeterdemo.gif"
                            alt="Tweeter"
                          ></img>
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src="..."
                            alt="Third slide"
                          ></img>
                        </div>
                      </div>
                      <a
                      id="modal-nav"
                        class="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          // className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                      id="modal-nav"
                        class="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          // class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
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

const carouselstyle = {
  height: "100%",
  width: "100%",
};
