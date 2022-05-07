import React from "react";
import styles from "../styles/BioData.module.css";
function BioData() {
  return (
    <div>
      <div className={styles.aboutmodule}>
        <div className={styles.aboutwrapper}>
          <div className={styles.blurb}>
            <p>
              <i>
                <b>Hello!</b>
              </i>
              <br></br>
              <br></br>My name is Rhoda, and I am a Junior Full Stack Developer
              from Toronto, Ontario, Canada.
              <br></br>
              <br></br>My background includes work in Social Services,
              Education, and Customer Service. After some time working in these
              fields, I felt a push for a new challenge, and thankfully found it
              in a field that is growing, can keep me on my toes through
              constant development, and provokes curiosity and creativity.
              <br></br>
              <br></br>Coming from a background that is largely people-based, I
              am always thinking about how my work can improve other's
              experiences. As a Junior Dev, I look to questions of how I can
              make my coding practice more efficient in its readability,
              particularly for peers to build upon and manipulate. I also think
              about the user, and how this quest for coding efficiency bears
              fruit in apps that are scalable, and respond quickly over servers.
              <br></br>
              <br></br>
              To end things off on a less formal note, in my spare time I enjoy sewing, a good deadlift, and cat videos 😊
            </p>
          </div>

          <div className={styles.skills}>
            <p>
              <h2 align="center">SKILLS</h2>
              <br></br>
              <b>Front End Technologies</b>
              <br></br>
              Javascript (jQuery, AJAX, React, Next.js), HTML, CSS, SCSS/SASS,
              MaterialUI, Bootstrap
              <br></br>
              <br></br>
              <b>Back End Technologies</b>
              <br></br>
              Javascript (Node.js, Express.js), Ruby, bCrpyt, PostgreSQL
              <br></br>
              <br></br>
              <b>Auxiliary Technologies</b>
              <br></br>
              Git, Mocha, Chai, Jest, Vercel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioData;
