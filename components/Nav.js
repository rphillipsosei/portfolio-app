import React from "react";
import { Nav } from "react-bootstrap/Nav";
import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/Ai";
import { MdEmail } from "react-icons/Md";
import Link from "next/link";
import { motion } from "framer-motion";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <Link href="/">
           <motion.a
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 1.1 }}
              id="homelink"
            >
              <AiFillHome />
            </motion.a>
          </Link>
        
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div id="social-icons">
              <Link href="https://linkedin.com/in/rphillipsosei">
                 <Tippy content='LinkedIn'><motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.1 }}
                  id="navlink"
                >
                  <AiFillLinkedin />
                </motion.a></Tippy>
              </Link>
              <Link href="https://github.com/rphillipsosei">
              <Tippy content='Github'><motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.1 }}
                  id="navlink"
                >
                  <AiFillGithub />
                </motion.a></Tippy>
              </Link>
              <Link href="/contact">
              <Tippy content='Get In Touch'><motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 1.1 }}
                  id="navlink"
                >
                  <MdEmail />
                </motion.a></Tippy>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
