import React from "react"
import styles from "./header.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <>
    <div id="header" className={styles.headerContainer}>
      <div className={styles.elementsContainer}>
        <div className={styles.mainTitle}>LookyP</div>
        <div className={styles.linksContainer}>
          <AniLink paintDrip color="black" to="about" className={styles.link}>
            About
          </AniLink>
          <div className={styles.link}>GitHub</div>
          <div className={styles.link}>Blog</div>
        </div>
      </div>
    </div>
  </>
)

export default Header
