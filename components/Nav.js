import React from "react";
import { Nav } from "react-bootstrap/Nav";
import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/Ai";
import Link from "next/link";

export default Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <Link href="/" id="home-btn">
              <a> <AiFillHome />
             </a>
            </Link>
            <ul className="navbar-nav">
              <Link href="/projects" className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  id="nav-link"
                >
                  PROJECTS
                </a>
              </Link>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  /
                </a>
              </li>
              <Link href="contact" className="nav-item">
                <a className="nav-link" id="nav-link">
                  CONTACT
                </a>
              </Link>
            </ul>
            <div id="social-icons">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
