import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./sections.module.css"
import Img from "gatsby-image"

const SectionTextLeft = props => {
  var container
  var main
  var bodyContainer
  var title
  var body
  var button
  var imageContainer
  var image

  if (props.dark === true) {
    container = styles.containerDark
    main = styles.darkMain
    bodyContainer = styles.darkBodyContainer
    title = styles.darkTitle
    body = styles.darkBody

    if (props.useButton === false) {
      button = styles.noDisplay
    } else {
      button = styles.darkButton
    }
    imageContainer = styles.darkImageContainerLeft
    image = styles.darkImageRight
  } else if (props.dark === false) {
    container = styles.containerLight
    main = styles.lightMain
    bodyContainer = styles.lightBodyContainer
    title = styles.lightTitle
    body = styles.lightBody
    if (props.useButton === false) {
      button = styles.noDisplay
    } else {
      button = styles.lightButton
    }
    imageContainer = styles.lightImageContainerLeft
    image = styles.lightImageRight
  }

  return (
    <>
      <div className={container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={300}>
          <div className={main}>
            <div className={bodyContainer}>
              <div className={title}>{props.title}</div>
              <div className={body}>{props.text}</div>
              <Link to={props.buttonLink} className={button}>
                {props.buttonText} &nbsp; &gt;
              </Link>
            </div>
            <div className={imageContainer}>
              <Img className={image} fluid={props.fluidImage}></Img>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default SectionTextLeft
