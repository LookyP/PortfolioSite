import React from "react"
import styles from "./404.module.css"
import Layout from "../components/layout"
import SadFace from "../images/404/404Image.svg"

const Page404 = () => (
  <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>Error 404</div>
        <img className={styles.sadImage} src={SadFace} alt="404SadFace" />
        <div className={styles.message}>
          Oops, the page you were looking for doesn't exist!
        </div>
      </div>
    </Layout>
  </>
)

export default Page404
