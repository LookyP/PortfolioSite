import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./horizontalBarSection.module.css"
import Img from "gatsby-image"

const HorizontalBarSection = props => {
  var container
  var mainBox
  var title
  var text
  var button
  var externalButton

  if (props.dark === false) {
    container = styles.containerLight
    mainBox = styles.mainBoxLight
    title = styles.titleLight
    text = styles.textLight
    if (props.useButton === false) {
      button = styles.noDisplay
    } else if (props.useExternalLink === true) {
      externalButton = styles.buttonLight
      button = styles.noDisplay
    } else {
      button = styles.buttonLight
      externalButton = styles.noDisplay
    }
  } else if (props.dark === true) {
    container = styles.container
    mainBox = styles.mainBox
    title = styles.title
    text = styles.text
    if (props.useButton === false) {
      button = styles.noDisplay
    } else if (props.useExternalLink === true) {
      externalButton = styles.button
      button = styles.noDisplay
    } else {
      button = styles.button
      externalButton = styles.noDisplay
    }
  }

  return (
    <>
      <div className={container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={300}>
          <div className={mainBox}>
            <div className={title}>{props.title}</div>
            <div className={styles.imageContainer}>
              <Img className={styles.image} fluid={props.fluidImage}></Img>
            </div>
            <div className={text}>{props.text}</div>
            <a
              href={props.externalLink}
              target="_blank"
              className={externalButton}
            >
              {props.buttonText} &nbsp; &gt;
            </a>
            <Link to={props.buttonLink} className={button}>
              {props.buttonText} &nbsp; &gt;
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default HorizontalBarSection
