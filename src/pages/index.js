import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"

const IndexPage = () => (
  <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <div className={styles.oneTitle}>Hi!</div>
          <div className={styles.oneBody}>
            Welcome to my site! Please feel free to look around and learn more
            about myself!
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage
