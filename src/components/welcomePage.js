import React from "react"
import styles from "./welcomePage.module.css"
import Tilt from "react-parallax-tilt"
import { Link } from "gatsby"

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Tilt
          className={styles.tiltContainer}
          perspective={700}
          transitionSpeed={3000}
          trackOnWindow={true}
        >
          <div className={styles.introContainer}>
            <h1 className={styles.firstHeading}>
              Hey! I'm <span className={styles.name}>LookyP</span>!
            </h1>
            <h2 className={styles.secondHeading}>
              I'm a junior Software Developer
            </h2>
            <div className={styles.buttonContainer}>
              <Link to="/about" className={styles.moreButton}>
                About Me
              </Link>
              <a href="#masterpieces" className={styles.moreButton}>
                Projects
              </a>
              <a href="#socials" className={styles.moreButton}>
                Social Media
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export default WelcomePage
