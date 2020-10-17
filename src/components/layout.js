import React from "react"
import styles from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <div className={styles.container}>
        <Header />
          {children}
        <Footer />
    </div>
  </>
)
