import React from "react"
import Header from "../components/header"
import styles from "./index.module.css"

const IndexPage = () => (
  <>
    <Header />
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <div className={styles.oneTitle}>Hi</div>
        <div className={styles.oneBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </>
)
export default IndexPage
