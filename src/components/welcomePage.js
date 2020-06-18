import React from "react"
import styles from "./welcomePage.module.css"
import Tilt from "react-parallax-tilt"
import Logo from "../images/logo.png"
import Background from "../images/background4.mp4"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <video
          muted={true}
          autoPlay={true}
          loop
          className={styles.backgroundVideo}
        >
          <source src={Background} type="video/mp4" />
        </video>
        <Tilt
          className={styles.tiltContainer}
          perspective={700}
          transitionSpeed={3000}
          trackOnWindow={true}
        >
          <div className={styles.introContainer}>
            <img className={styles.logo} src={Logo} />
            <div className={styles.buttonContainer}>
              <AniLink fade to="/about" className={styles.moreButton}>
                About Me
              </AniLink>
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
