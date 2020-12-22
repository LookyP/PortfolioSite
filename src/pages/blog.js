import React from "react"
import { Helmet } from "react-helmet"
import styles from "./blog.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"

const Blog = () => (
  <>
    <Layout>
      <Helmet>
        <title>LP - Blog</title>
      </Helmet>
      <div className={styles.container}>
        <TitleArea
          body="Welcome to My Blog."
          typewriter={["Blog", "Read", "Sit Back", "Relax"]}
        />
      </div>
    </Layout>
  </>
)

export default Blog
