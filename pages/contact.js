import React from 'react'
import Head from "next/head"
import styles from "../styles/Contact.module.css"
import { motion } from "framer-motion"

export default function Contact() {
 
  
  return (
    <div>
    <Head>
 <title>Rhoda Phillips-Osei | Contact Me </title>
</Head>
      <motion.div 
      initial="hidden" animate="visible" variants={{ 
        hidden: {
            opacity: 0
        },
    visible: {
        opacity: 1,
        transition: {
            delay: .7
        }
    },
    }}
    className="wrapper">
        <container className="backgroundstyling" id="contactform">
          <div className={styles.contactwrapper}>
          <container className={styles.contactpage}>
            <div align="center" className={styles.header}>
            <h1>Contact me</h1>
          </div>
          <div
            className={styles.formbox}
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <form action="https://formsubmit.co/rhodaphillipsosei@gmail.com" method="POST"className={styles.form}>
            <div class="form-group" id="form-control">
    <label for="exampleFormControlInput1">Name</label><br></br>
    <input  class="form-control" id="exampleFormControlInput1" ></input>
  </div>
  <div class="form-group" id="form-control">
    <label for="exampleFormControlInput1">Email address</label><br></br>
    <input type="email" class="form-control" id="exampleFormControlInput1" ></input>
  </div>
  <div class="form-group" id="form-control">
    <label for="exampleFormControlTextarea1">Message</label><br></br>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
              <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
              <input type="hidden" name="_subject" value="New message from rhoda.tech"></input>
              <br></br>
              <button id="contact-btn" >
              SEND
            </button>
           
            </form>
          </div>
       </container></div>
        </container>
      </motion.div>
      </div>
  )
}

