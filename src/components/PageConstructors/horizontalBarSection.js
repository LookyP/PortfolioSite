import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./horizontalBarSection.module.css"

const HorizontalBarSection = props => {
  var container
  var mainBox
  var title
  var text
  var button

  if (props.dark === false) {
    container = styles.containerLight
    mainBox = styles.mainBoxLight
    title = styles.titleLight
    text = styles.textLight
    if (props.useButton === false) {
      button = styles.noDisplay
    } else {
      button = styles.buttonLight
    }
  } else if (props.dark === true) {
    container = styles.container
    mainBox = styles.mainBox
    title = styles.title
    text = styles.text
    if (props.useButton === false) {
      button = styles.noDisplay
    } else {
      button = styles.button
    }
  }

  return (
    <>
      <div className={container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={300}>
          <div className={mainBox}>
            <div className={title}>{props.title}</div>
            <div className={text}>{props.text}</div>
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
