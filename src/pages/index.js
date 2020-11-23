import React from "react"
import { Helmet } from "react-helmet"
import styles from "./index.module.css"
import Layout from "../components/layout"
import SectionOneImage from "../images/landing/firstSection.jpg"
import Blog from "../images/landing/secondSection.jpg"
import TitleArea from "../components/PageConstructors/titleArea"
import SectionTextRight from "../components/PageConstructors/sectionTextRight"
import SectionTextLeft from "../components/PageConstructors/sectionTextLeft"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet>
        <title>LP - Home</title>
      </Helmet>
      <div className={styles.container}>
        {/* 
        For email forms visit convertkit
        <Helmet>
          <script
            async
            data-uid="968998b2b8"
            src="https://tremendous-crafter-4152.ck.page/968998b2b8/index.js"
          ></script>
        </Helmet> */}

        <TitleArea
          body="Curiosity. Passion. Determination."
          typewriter={["Lukman Patel", "Junior Software Developer"]}
        />
        <SectionTextRight
          title="Junior Developer With A Thirst For Improvement"
          text="As an introverted human being with a growth-mindset and a
          passion for what I do, I welcome and invite you to my site; a
          place where you can learn more about me."
          image={SectionOneImage}
          buttonText="READ MORE"
          buttonLink="/about"
          dark={true}
        />
        <SectionTextLeft
          title="Relax 'n' Read"
          text="Take a dive into my blog posts for some relaxing reads on the
                  topic of technology and other non-technology related subjects."
          image={Blog}
          buttonText="TAKE ME THERE"
          buttonLink="/about"
          dark={false}
        />
      </div>
    </Layout>
  </>
)
export default IndexPage
