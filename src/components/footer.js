import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"
import Logo from "../images/logo/logo-light.svg"
import Facebook from "../images/socialmedia/Facebook.png"
import Twitter from "../images/socialmedia/Twitter.png"
import YouTube from "../images/socialmedia/YT.png"
import LinkedIn from "../images/socialmedia/LinkedIn.png"

const Footer = () => (
  <>
    <div className={styles.footerContainer}>
      <div className={styles.allElements}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt="Logo" />
          <span>
            <div className={styles.logoName}>LP</div>
          </span>
        </div>
        <div className={styles.mainLinksContainer}>
          <div className={styles.navLinksContainer}>
            <div className={styles.navLinksTitle}>BROWSE</div>
            <hr color="#26a8ed" className={styles.rule} />
            <div className={styles.navLinks}>
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
                PROJECTS
              </Link>
            </div>
          </div>
          <div className={styles.followLinksContainer}>
            <div className={styles.followLinksTitle}>FOLLOW</div>
            <hr color="#26a8ed" className={styles.rule} />
            <div className={styles.followLinks}>
              <img src={Facebook} className={styles.icon} alt="Facebook"></img>
              <img src={Twitter} className={styles.icon} alt="Twitter"></img>
              <img src={YouTube} className={styles.icon} alt="YouTube"></img>
              <img src={LinkedIn} className={styles.icon} alt="LinkedIn"></img>
            </div>
          </div>
        </div>
        <div className={styles.termsContainer}>
          <div className={styles.copyright}>
            © Lukman Patel 2020. All Rights Reserved.
          </div>
          <div className={styles.termsLinks}>
            <span className={styles.termsLink}>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
