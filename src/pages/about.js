import React from "react"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft" //remove
import SectionOneImage from "../images/ofme/me.jpg"
import SectionTwoImage from "../images/landing/firstSection.jpg"

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
          title="Hi! I'm Lukman, a software developer from Greater Manchester"
          text="As an intelligent, highly productive and motivated person I believe in using problem-solving and teamwork in order to achieve goals in an organisation. 
          Having studied eleven GCSE subjects, achieving ABB for Mathematics, Physics and Chemistry respectively at Advanced Level and moving on to work at a professional
          organisation as a software developer, I think of problem-solving and forward-thinking as a habit."
          image={SectionOneImage}
          useButton={false}
          dark={true}
        />
        <SectionTextLeft
          title="Who Am I"
          text="An introduction to who I am"
          image={SectionTwoImage}
          buttonText="PRETTY COOL RIGHT?"
          buttonLink="/about"
          dark={false}
        />
      </div>
    </Layout>
  </>
)
export default AboutPage
