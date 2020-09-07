import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"
import Typewriter from "typewriter-effect"

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
                  strings: [
                    "Lukman Patel",
                    "Junior Software Developer",
                    "Aspiring Full Stack Developer",
                  ],
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
      </div>
    </Layout>
  </>
)
export default IndexPage
