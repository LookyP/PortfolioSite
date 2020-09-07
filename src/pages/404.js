import React from "react"
import styles from "./404.module.css"
import Layout from "../components/layout"
import SadFace from "../images/404Image.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Page404 = () => (
  <>
    <Layout>
      <div className={styles.container}>
        <img className={styles.sadImage} src={SadFace} />
        <div className={styles.message}>
          Oops, the page you were looking for doesn't exist!
        </div>
      </div>
    </Layout>
  </>
)

export default Page404
