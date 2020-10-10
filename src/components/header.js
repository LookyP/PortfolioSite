import React from "react"
import styles from "./header.module.css"
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
          <Link to="/" className={styles.link}>
            HOME
          </Link>
          <Link to="/about" className={styles.link}>
            ABOUT
          </Link>
          <div className={styles.link}>BLOG</div>
          <div className={styles.link}>GITHUB</div>
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
              <div className={styles.logoName}>LP</div>
            </span>
          </div>

          <div className={styles.rightLinksContainer}>
            <Link
              to="/"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              HOME
            </Link>

            <Link
              to="/about"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              ABOUT
            </Link>

            <Link
              to="/blog"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              BLOG
            </Link>

            <Link
              to="/github"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              GITHUB
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
