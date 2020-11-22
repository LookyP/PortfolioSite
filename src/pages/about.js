import React from "react"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft" //remove
import SectionOneImage from "../images/landing/firstSection.jpg"

// Reminder: Just created a new component for sections. Make it customisable for light themes too. Make code to get rid of button too, just for the about page.
//           CSS is still in index.js, must sort out. Make two components, one left and one right aligned.

const AboutPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>LP - About</title>
      </Helmet>
      <div className={styles.container}>
        <TitleArea
          firstWord="My&nbsp;"
          body="About Me."
          typewriter={["knowledge", "skills", "personality", "aspirations"]}
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
