import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Typewriter from "typewriter-effect"
import Placeholder from "../images/Profile2.jpg"

const IndexPage = () => (
  <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <div className={styles.oneMain}>
            <div className={styles.oneTitle}>
              <Typewriter
                id="Hello"
                options={{
                  strings: ["Lukman Patel", "Junior Software Developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: styles.mainTitle,
                }}
              />
            </div>
            <div className={styles.oneBody}>
              Curiosity. Passion. Determination.
            </div>
          </div>
        </div>
        <div className={styles.containerTwo}>
          <div className={styles.twoMain}>
            <div className={styles.twoImageContainer}>
              <img className={styles.twoImage} src={Placeholder}></img>
            </div>

            <div className={styles.twoBodyContainer}>
              <div className={styles.twoTitle}>
                Striving for continuous progress and improvement
              </div>
              <div className={styles.twoBody}>
                As an introverted human being with a growth-mindset and a
                passion for what I do, I welcome and invite you to my site; a
                place where you can learn more about me. Read more on the about
                page.
              </div>
              <Link to="/about" className={styles.twoButton}>
                READ MORE &nbsp; &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage
