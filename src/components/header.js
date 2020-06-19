import React from "react"
import styles from "./header.module.css"

const Header = () => (
  <>
    <div className={styles.headerContainer}>
      <div className={styles.elementsContainer}>
        <div className={styles.mainTitle}>LookyP</div>
        <div className={styles.linksContainer}>
          <div className={styles.link}>About</div>
          <div className={styles.link}>GitHub</div>
          <div className={styles.link}>Blog</div>
        </div>
      </div>
    </div>
  </>
)

export default Header
