import React from "react"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft"
import HorizontalSection from "../components/PageConstructors/horizontalBarSection"
import SectionOneImage from "../images/ofme/me.jpg"
import SectionTwoImage from "../images/landing/firstSection.jpg"
import AboutSectionTwoImage from "../images/about/secondSection.jpg"

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
        <HorizontalSection
          title="Take a look at some of the stuff I've worked on"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          buttonText="TO PROJECTS"
          dark={false}
        />
        <SectionTextLeft
          title="I have a year of industry experience as a developer"
          text="Starting my journey at one of the Big 4 organisations, I acquired knowledge of industry standards through professionals in the Software Engineer, 
          QA and UX roles. With a solid foundation built in front-end development, I aspire to continue my career by further developing my skills with the valuable 
          resources around me."
          image={AboutSectionTwoImage}
          useButton={false}
          dark={true}
        />

        <SectionTextRight
          title="Hi! I'm Lukman, a software developer from Greater Manchester"
          text="As an intelligent, highly productive and motivated person I believe in using problem-solving and teamwork in order to achieve goals in an organisation. 
          Having studied eleven GCSE subjects, achieving ABB for Mathematics, Physics and Chemistry respectively at Advanced Level and moving on to work at a professional
          organisation as a software developer, I think of problem-solving and forward-thinking as a habit."
          image={SectionOneImage}
          useButton={false}
          dark={false}
        />
      </div>
    </Layout>
  </>
)
export default AboutPage
