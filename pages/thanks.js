import React from 'react'
import Head from 'next/head'
import styles from '../styles/Thanks.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
function Thanks() {
  return (
    <div>
    <Head>
 <title>Rhoda Phillips-Osei | Web Dev </title>
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
          <div className={styles.thankswrapper}>
          <container className={styles.thankspage}>
            <div align="center" className={styles.header}>
            <h1>Message Sent!</h1>
          </div>
          <div
            className={styles.msgbox}
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1 }}
          >
           I appreciate your message and will get back to you as soon as possible. Have a great day :)

           <Link href="/">
                <a>
                  <button id="contact-btn" value="Send">
             BACK TO HOME
            </button></a></Link>
          </div>
       </container></div>
        </container>
      </motion.div>
      </div>
  )
}

export default Thanks