import React from "react"
import { Link } from "gatsby"
import styles from "./landingLayout.module.css"

const LandingLayout = () => (
  <>
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={styles.firstHeading}>
          Hey, my name is <span className={styles.name}>Lukman</span>!
        </h1>
        <h2 className={styles.secondHeading}>
          I'm a beginner software developer.
        </h2>
        <div className={styles.buttonContainer}>
          <a href="#aboutMe" className={styles.moreButton}>
            More About Me
          </a>
        </div>
      </div>
    </div>
  </>
)

export default LandingLayout
