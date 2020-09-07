import React from "react"
import styles from "./header.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typewriter from "typewriter-effect"

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
            <AniLink fade to="/" className={styles.link}>
              Home
            </AniLink>
            <AniLink fade to="about" className={styles.link}>
              About
            </AniLink>
          </div>

          <div className={styles.mainTitle}>
            <Typewriter
              id="Hello"
              options={{
                strings: [
                  "LookyP",
                  "Junior Software Dev",
                  "Aspiring Full Stack Dev",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: styles.mainTitle,
              }}
              onInit={typewriter => {
                typewriter

                  .callFunction(() => {
                    console.log("String typed out!")
                  })
                  .pauseFor(1500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted")
                  })
                  .start()
              }}
            />
          </div>

          <div className={styles.rightLinksContainer}>
            <div className={styles.link}>GitHub</div>
            <div className={styles.link}>Blog</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
