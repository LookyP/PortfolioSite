import React from "react"
import styles from "./layout.module.css"
import Header from "./header"
import Background from "./background"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <div className={styles.container}>
      <Header />
      <Background />
      {children}
      <Footer />
    </div>
  </>
)
