import React from "react"
import styles from "./header.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../images/logo.svg"
import { Link } from "gatsby"

const Header = () => {
  const handleMenuButtonClick = () => {
    document.getElementById("menu").style.visibility = "visible"
    document.getElementById("menu").style.opacity = "1"
  }

  const handleMenuModalClick = () => {
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("menu").style.opacity = "0"
  }

  return (
    <>
      <div id="menu" className={styles.menu} onClick={handleMenuModalClick}>
        <div className={styles.menuLinksContainer}>
          <AniLink fade to="/" className={styles.link}>
            Home
          </AniLink>
          <AniLink fade to="about" className={styles.link}>
            About
          </AniLink>
          <div className={styles.link}>GitHub</div>
          <div className={styles.link}>Blog</div>
        </div>
      </div>
      <div id="header" className={styles.headerContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.menuIcon} onClick={handleMenuButtonClick}>
            <div className={styles.menuIconLine}></div>
            <div className={styles.menuIconLine}></div>
            <div className={styles.menuIconLine}></div>
          </div>

          <div className={styles.leftLinksContainer}>
            <img className={styles.logo} src={Logo} />
            <span>
              <div className={styles.logoName}>lp</div>
            </span>
          </div>

          <div className={styles.rightLinksContainer}>
            <Link
              to="/"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              <AniLink fade to="/" className={styles.aniLink}>
                HOME
              </AniLink>
            </Link>

            <Link
              to="/about"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              <AniLink fade to="/about" className={styles.aniLink}>
                ABOUT
              </AniLink>
            </Link>
            <Link
              to="/github"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              <AniLink fade to="/github" className={styles.aniLink}>
                GITHUB
              </AniLink>
            </Link>
            <Link
              to="/blog"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              <AniLink fade to="/blog" className={styles.aniLink}>
                BLOG
              </AniLink>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
