import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import Logo from "../images/logo/logo.svg"

const Header = () => {
  const handleMenuButtonClick = () => {
    document.getElementById("menu").style.height = "100%"
    document.getElementById("menu").style.opacity = "1"
    document.getElementById("menu").style.visibility = "visible"
    document.body.style.overflowY = "hidden"
  }

  const handleMenuModalClick = () => {
    document.getElementById("menu").style.height = "0%"
    document.getElementById("menu").style.opacity = "0"
    document.getElementById("menu").style.visibility = "hidden"
    document.body.style.overflowY = "scroll"
  }

  return (
    <>
      <div id="menu" className={styles.menu} onClick={handleMenuModalClick}>
        <div className={styles.menuLinksContainer}>
          <Link to="/" className={styles.menuLink}>
            HOME
          </Link>
          <Link to="/about" className={styles.menuLink}>
            ABOUT
          </Link>
          <Link to="/blog" className={styles.menuLink}>
            BLOG
          </Link>
          <Link to="/about" className={styles.menuLink}>
            PROJECTS
          </Link>
        </div>
      </div>
      <div id="header" className={styles.headerContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.leftLinksContainer}>
            <img className={styles.logo} src={Logo} alt="Logo" />
            <span>
              <div className={styles.logoName}>LP</div>
            </span>
          </div>

          <div id="links" className={styles.rightLinksContainer}>
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
              partiallyActive={true}
            >
              BLOG
            </Link>

            <Link
              to="/github"
              activeClassName={styles.activeLink}
              className={styles.link}
            >
              PROJECTS
            </Link>
          </div>
          <div className={styles.menuIconContainer}>
            <div className={styles.menuIcon} onClick={handleMenuButtonClick}>
              <div className={styles.menuIconLine}></div>
              <div className={styles.menuIconLine}></div>
              <div className={styles.menuIconLine}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
