import React from "react"
import styles from "./aboutPage.module.css"
import Tilt from "react-parallax-tilt"

const AboutPage = () => (
  <>
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Tilt
          className={styles.tiltContainer}
          gyroscope="true"
          perspective={700}
          transitionSpeed={3000}
          trackOnWindow={true}
        >
          <div className={styles.titleContainer}>
            <div className={styles.title}>About Me</div>
          </div>
        </Tilt>
      </div>
      <div>Hello World</div>
    </div>
  </>
)

export default AboutPage
