import React from "react"
import { Helmet } from "react-helmet"
import styles from "./about.module.css"
import Layout from "../components/layout"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft"
import HorizontalSection from "../components/PageConstructors/horizontalBarSection"
import SectionOneImage from "../images/ofme/me.jpg"
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
          title="Hi, I'm Lukman, a Software Developer from Greater Manchester"
          text="As an intelligent, highly productive and motivated person I believe in using problem-solving and teamwork in order to achieve goals in an organisation. 
          Having studied eleven GCSE subjects, achieving ABB for Mathematics, Physics and Chemistry respectively at Advanced Level and moving on to work at a professional
          organisation as a software developer, I think of problem-solving and forward-thinking as a habit."
          image={SectionOneImage}
          useButton={false}
          dark={true}
        />
        <HorizontalSection
          title="Take a Look At Some of The Stuff I've Worked On"
          text="Since the beginning of my interest Software Development, I have worked on numerous projects ranging from a Twitch chatbot to this very site. 
          The technologies in my project range from Python scripting and programming to website development using JavaScript. 
          To find out more about my projects and how I approached the design and implementation, click the button below. "
          buttonText="TO PROJECTS"
          dark={false}
        />
        <SectionTextLeft
          title="I Have a Year of Industry Experience As a Developer"
          text="Starting my journey at one of the Big 4 accounting firms, I acquired knowledge of industry standards through professionals in the Software Engineer, 
          QA and UX roles. With a solid foundation built in front-end development, I aspire to continue my career by further developing my skills with the valuable 
          resources around me."
          image={AboutSectionTwoImage}
          useButton={false}
          dark={true}
        />
        <HorizontalSection
          title="I Made This Site from Scratch..."
          text="That's right, no fancy drag-and-drop development platform, no templates, all authentic knowledge binded with inspiration from the best sources. 
          Everything you see before your eyes has been made with love and affection using GatsbyJS, a framework built upon the ever-popular ReactJS library. 
          To view the source code of this website, visit the GitHub repository."
          buttonText="TO REPOSITORY"
          dark={false}
        />
      </div>
    </Layout>
  </>
)
export default AboutPage
