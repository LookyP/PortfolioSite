import React from "react"
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
              <div className={styles.twoTitle}>Perfectionist by Nature</div>
              <div className={styles.twoBody}>
                Let's be honest, no one wants a 'nearly' done job. Why would
                you? When there's the perfectionist.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage
