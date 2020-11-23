import React from "react"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft" //remove
import SectionOneImage from "../images/landing/firstSection.jpg"

const AboutPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>LP - About</title>
      </Helmet>
      <div className={styles.container}>
        <TitleArea
          body="About Me."
          typewriter={[
            "My knowledge",
            "My skills",
            "My personality",
            "My aspirations",
          ]}
        />
        <SectionTextRight
          title="Who Am I"
          text="An introduction to who I am"
          image={SectionOneImage}
          buttonText="PRETTY COOL RIGHT?"
          buttonLink="/about"
          dark={true}
        />
        <SectionTextLeft
          title="Who Am I"
          text="An introduction to who I am"
          image={SectionOneImage}
          buttonText="PRETTY COOL RIGHT?"
          buttonLink="/about"
          dark={false}
        />
      </div>
    </Layout>
  </>
)
export default AboutPage
