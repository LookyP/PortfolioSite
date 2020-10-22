import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./darkSection.module.css"

const DarkSection = props => {
  return (
    <>
      <div className={styles.containerOne}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={300}>
          <div className={styles.oneMain}>
            <div className={styles.oneImageContainer}>
              <img className={styles.oneImage} src={props.image}></img>
            </div>

            <div className={styles.oneBodyContainer}>
              <div className={styles.oneTitle}>{props.title}</div>
              <div className={styles.oneBody}>{props.text}</div>
              <Link to={props.buttonLink} className={styles.oneButton}>
                {props.buttonText} &nbsp; &gt;
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default DarkSection
