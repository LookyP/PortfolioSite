import React from "react"
import styles from "./titleArea.module.css"
import Typewriter from "typewriter-effect"

const TitleArea = props => (
  <div className={styles.containerOne}>
    <div className={styles.oneMain}>
      <div className={styles.oneTitle}>
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
