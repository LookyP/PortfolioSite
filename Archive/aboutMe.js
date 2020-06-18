import React from "react"
import styles from "./aboutMe.module.css"
import Astro from "../images/gatsby-astronaut.png"

const AboutMe = () => (
  <div id="aboutMe" className={styles.container}>
    <h1 className={styles.title}>About Me</h1>
    <div className={styles.detailsContainer}>
      <div className={styles.imageContainer}>
        <img src={Astro} alt="SpacyBoi"></img>
      </div>

      <div className={styles.textContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  </div>
)

export default AboutMe
