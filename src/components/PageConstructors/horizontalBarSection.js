import React from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./horizontalBarSection.module.css"

const HorizontalBarSection = props => {
  if (props.dark === false) {
    var container = styles.containerLight
    var mainBox = styles.mainBoxLight
    var title = styles.titleLight
    var text = styles.textLight
    var button = styles.buttonLight
  } else if (props.dark === true) {
    var container = styles.container
    var mainBox = styles.mainBox
    var title = styles.title
    var text = styles.text
    var button = styles.button
  }

  return (
    <>
      <div className={container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={300}>
          <div className={mainBox}>
            <div className={title}>{props.title}</div>
            <div className={text}>{props.text}</div>
            <Link className={button}>{props.buttonText} &nbsp; &gt;</Link>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default HorizontalBarSection
