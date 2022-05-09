import React, {useRef} from 'react'
import Head from "next/head"
import styles from "../styles/Contact.module.css"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


// toast.configure()
export default function Contact() {
 
  const form = useRef();

const success = () => {
  toast('Message failed to send. Please contact me on LinkedIn, or try again later!', {
    style: {
      border: '2px solid #2093A5',
      marginTop: '7rem',
      borderRadius: 0,
      backgroundColor: 'rgba(242, 242, 242, 0.65)',
      textAlign: 'center'
    },
  });
}

const failure = () => {
  toast('Message failed to send. Please try contacting me on LinkedIn, or trying again later.', {
    style: {
      border: '2px solid #2093A5',
      marginTop: '7rem',
      borderRadius: 0,
      backgroundColor: 'rgba(242, 242, 242, 0.65)'
    },
  });
}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ayt7rnv', 'template_znkglms', form.current, 'jPUiz2BDB4KS4iN9p')
      .then((result) => {
          console.log(result.text);
          success()
      }, (error) => {
          console.log(error.text);
          failure()
      });
  };
  
  return (
    <div>
      <div><Toaster/></div>
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
            <form ref={form} onSubmit={sendEmail} method="POST"className={styles.form}>
            <div class="form-group" id="form-control">
    <label for="exampleFormControlInput1">Name</label><br></br>
    <input name="name" class="form-control" id="exampleFormControlInput1" ></input>
  </div>
  <div class="form-group" id="form-control">
    <label for="exampleFormControlInput1">Email address</label><br></br>
    <input name="email" type="email" class="form-control" id="exampleFormControlInput1" ></input>
  </div>
  <div class="form-group" id="form-control">
    <label for="exampleFormControlTextarea1">Message</label><br></br>
    <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
              <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
              <input type="hidden" name="_subject" value="New message from rhoda.tech"></input>
              <br></br>
            
                  <button id="contact-btn" value="Send">
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

