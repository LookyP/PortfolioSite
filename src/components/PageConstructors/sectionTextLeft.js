import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./sections.module.css"

const SectionTextLeft = props => {
  if (props.dark == true) {
    var container = styles.containerDark
    var main = styles.darkMain
    var bodyContainer = styles.darkBodyContainer
    var title = styles.darkTitle
    var body = styles.darkBody
    var button
    if (props.useButton == false) {
      button = styles.noDisplay
    } else {
      button = styles.darkButton
    }
    var imageContainer = styles.darkImageContainer
    var image = styles.darkImage
  } else if (props.dark == false) {
    var container = styles.containerLight
    var main = styles.lightMain
    var bodyContainer = styles.lightBodyContainer
    var title = styles.lightTitle
    var body = styles.lightBody
    var button
    if (props.useButton == false) {
      button = styles.noDisplay
    } else {
      button = styles.lightButton
    }
    var imageContainer = styles.lightImageContainer
    var image = styles.lightImage
  }

  return (
    <>
      <div className={container}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={300}>
          <div className={main}>
            <div className={bodyContainer}>
              <div className={title}>{props.title}</div>
              <div className={body}>{props.text}</div>
              <Link to={props.buttonLink} className={button}>
                {props.buttonText} &nbsp; &gt;
              </Link>
            </div>
            <div className={imageContainer}>
              <img className={image} src={props.image}></img>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default SectionTextLeft
