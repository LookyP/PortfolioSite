import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "./about.module.css"
import Background from "../components/background"
import TitleArea from "../components/titleArea"

const AboutPage = () => (
  <>
    <Layout>
      <Background />
      <Helmet>
        <title>LP - About</title>
      </Helmet>
      <div className={styles.container}>
        <TitleArea
          firstWord="My&nbsp;"
          body="About Me."
          typewriter={["knowledge", "skills", "personality", "aspirations"]}
        />
      </div>
    </Layout>
  </>
)
export default AboutPage
