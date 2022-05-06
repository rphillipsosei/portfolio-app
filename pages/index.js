import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import { Carousel } from "react-bootstrap";

const carousel = {
  height: "80%",
  width: "100%",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const carouselitem = {
  height: "90%",
  width: "70%"
  
}

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
                        backgroundColor: "rgba(60, 60, 60, 0.55)",
                      },
                      content: {
                        // color: "orange",
                      },
                    }}
                  >
                    <Carousel interval={null} style={carousel}>
                      <Carousel.Item>
                        <div className={styles.tweetercontainer}>
                        <img
                          className="d-block w-100"
                          src="/tweeterdemo.gif"
                          alt="First slide"
                          height="400px"
                          width="50"
                        />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className={styles.moonbeamcontainer}>
                          <img
                            className="d-block w-100"
                            src="/moonbeamdemo6.gif"
                            alt="Second slide"
                            height="400px"
                            width="50px"
                            id="moonbeam"
                          />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="holder.js/800x400?text=Third slide&bg=20232a"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
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
