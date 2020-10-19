import React from "react"
import { Link } from "gatsby"
import Typewriter from "typewriter-effect"
import styles from "./titleArea.module.css"

const TitleArea = props => (
  <div className={styles.containerOne}>
    <div className={styles.oneMain}>
      <div className={styles.oneTitle}>
        <span>{props.firstWord}</span>
        <Typewriter
          options={{
            strings: props.typewriter,
            autoStart: true,
            loop: true,
            wrapperClassName: styles.mainTitle,
          }}
        />
      </div>

      <div className={styles.oneBody}>{props.body}</div>
    </div>
  </div>
)

export default TitleArea
